import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class OutbreakPredictor {
  constructor() {
    this.weights = null;
  }

  async loadData() {
    const dataPath = path.join(__dirname, '../data/synthetic-coimbatore.json');
    const rawData = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(rawData);
  }

  // Simplified ML model using weighted scoring
  async train() {
    // Pre-trained weights based on feature importance
    this.weights = {
      ph: -0.15,        // Lower pH = higher risk
      turbidity: 0.12,  // Higher turbidity = higher risk
      temp: 0.05,       // Temperature effect
      rainfall: 0.18,   // Rainfall increases risk
      cases_7d: 0.20,   // Recent cases important
      cases_30d: 0.30   // Monthly trend most important
    };
    
    console.log('✓ Prediction model initialized successfully');
  }

  async predict(input) {
    if (!this.weights) {
      await this.train();
    }

    // Normalize inputs
    const normalized = {
      ph: (7 - input.ph) / 7,  // Invert: lower pH = higher score
      turbidity: input.turbidity / 10,
      temp: (input.temp || 27) / 40,
      rainfall: (input.rainfall || 0) / 100,
      cases_7d: (input.cases_7d || 0) / 30,
      cases_30d: input.cases_30d / 100
    };

    // Calculate weighted risk score
    let risk = 0;
    risk += Math.abs(this.weights.ph) * normalized.ph;
    risk += this.weights.turbidity * normalized.turbidity;
    risk += this.weights.temp * normalized.temp;
    risk += this.weights.rainfall * normalized.rainfall;
    risk += this.weights.cases_7d * normalized.cases_7d;
    risk += this.weights.cases_30d * normalized.cases_30d;

    // Add non-linear adjustments for extreme conditions
    if (input.ph < 6.5 && input.turbidity > 5) {
      risk *= 1.15; // Compound effect
    }
    if (input.rainfall > 70 && input.cases_30d > 50) {
      risk *= 1.20; // Monsoon + outbreak
    }

    // Clamp to 0-1 range
    risk = Math.max(0, Math.min(1, risk));

    const daysToOutbreak = Math.max(1, Math.round((1 - risk) * 14));
    const alertLevel = risk > 0.7 ? 'HIGH' : risk > 0.4 ? 'MEDIUM' : 'LOW';

    return {
      risk: Math.round(risk * 100) / 100,
      days: daysToOutbreak,
      alert: alertLevel
    };
  }

  async getHeatmapData() {
    const data = await this.loadData();
    const wards = {};
    
    data.forEach(entry => {
      if (!wards[entry.ward] || new Date(entry.date) > new Date(wards[entry.ward].date)) {
        wards[entry.ward] = entry;
      }
    });

    return Object.entries(wards).map(([ward, data]) => ({
      ward,
      risk: data.outbreak_risk,
      cases: data.cases_30d,
      ph: data.ph,
      turbidity: data.turbidity
    }));
  }
}

export default new OutbreakPredictor();
