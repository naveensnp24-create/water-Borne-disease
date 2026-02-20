import express from 'express';
import outbreakPredictor from '../models/outbreak.js';

const router = express.Router();

const wardCoordinates = {
  'Saravanampatti': [11.0783, 77.0009],
  'RS Puram': [11.0015, 76.9636],
  'Gandhipuram': [11.0168, 76.9558],
  'Peelamedu': [11.0271, 77.0089],
  'Singanallur': [10.9925, 77.0514],
  'Vadavalli': [11.0241, 76.9048],
  'Kuniyamuthur': [10.9644, 76.9514],
  'Ukkadam': [10.9965, 76.9636],
  'Thudiyalur': [11.0456, 76.9789],
  'Kavundampalayam': [11.0389, 76.9856],
  'Ganapathy': [11.0325, 76.9712],
  'Podanur': [10.9856, 76.9789],
  'Sulur': [11.0289, 77.1256],
  'Karamadai': [11.2456, 76.9612],
  'Pollachi': [10.6589, 77.0089],
  'Mettupalayam': [11.2989, 76.9389],
  'Coimbatore North': [11.0356, 76.9689],
  'Coimbatore South': [10.9789, 76.9612],
  'Ramanathapuram': [11.0089, 76.9789],
  'Townhall': [11.0045, 76.9612],
  'Rathinapuri': [11.0123, 76.9745]
};

router.post('/predict', async (req, res) => {
  try {
    const { ph, turbidity, temp, rainfall, cases_7d, cases_30d } = req.body;
    
    if (!ph || !turbidity || !cases_30d) {
      return res.status(400).json({ error: 'Missing required fields: ph, turbidity, cases_30d' });
    }

    const prediction = await outbreakPredictor.predict({
      ph: parseFloat(ph),
      turbidity: parseFloat(turbidity),
      temp: parseFloat(temp) || 27,
      rainfall: parseFloat(rainfall) || 0,
      cases_7d: parseInt(cases_7d) || 0,
      cases_30d: parseInt(cases_30d)
    });

    res.json(prediction);
  } catch (error) {
    console.error('Prediction error:', error);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

router.get('/heatmap', async (req, res) => {
  try {
    const heatmapData = await outbreakPredictor.getHeatmapData();
    
    const enrichedData = heatmapData.map(item => ({
      ...item,
      coordinates: wardCoordinates[item.ward] || [11.0168, 76.9558]
    }));

    res.json(enrichedData);
  } catch (error) {
    console.error('Heatmap error:', error);
    res.status(500).json({ error: 'Failed to generate heatmap' });
  }
});

router.get('/alerts', async (req, res) => {
  try {
    const heatmapData = await outbreakPredictor.getHeatmapData();
    
    const alerts = heatmapData
      .filter(item => item.risk > 0.7)
      .map(item => {
        const reasons = [];
        let disease = 'Waterborne disease';
        
        // Determine disease type based on conditions
        if (item.ph < 6.5 && item.turbidity > 5) {
          disease = 'Typhoid';
          reasons.push('acidic water');
          reasons.push('high turbidity');
        } else if (item.turbidity > 7) {
          disease = 'Cholera';
          reasons.push('severe water contamination');
        } else if (item.ph < 6.0) {
          disease = 'Dysentery';
          reasons.push('highly acidic water');
        } else if (item.turbidity > 5) {
          disease = 'Gastroenteritis';
          reasons.push('high turbidity');
        } else if (item.ph < 6.5) {
          disease = 'Typhoid';
          reasons.push('acidic water');
        }
        
        if (item.cases > 50) reasons.push('case surge');
        if (item.cases > 30 && item.cases <= 50) reasons.push('rising cases');
        
        return {
          ward: item.ward,
          risk: Math.round(item.risk * 100),
          disease: disease,
          message: `${disease} risk ${Math.round(item.risk * 100)}% in ${item.ward} due to ${reasons.join(' + ')}`,
          severity: item.risk > 0.85 ? 'CRITICAL' : 'HIGH',
          timestamp: new Date().toISOString()
        };
      });

    res.json(alerts);
  } catch (error) {
    console.error('Alerts error:', error);
    res.status(500).json({ error: 'Failed to generate alerts' });
  }
});

export default router;
