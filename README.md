# 💧 Waterborne Disease Prediction System - Coimbatore

AI-powered outbreak forecasting using LSTM neural networks for real-time waterborne disease risk prediction across 20 Coimbatore wards.

## 🎯 Core Features

1. **LSTM Prediction Model**: Deep learning model predicting outbreak risk from water quality + epidemiological data
2. **Interactive Ward Heatmap**: Real-time risk visualization with Leaflet.js for 20 Coimbatore wards
3. **GenAI Alerts**: Intelligent alert generation with contextual risk explanations
4. **Glassmorphism UI**: Modern, mobile-responsive interface with Tailwind CSS
5. **REST API**: Express backend with prediction, heatmap, and alerts endpoints

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Run

```bash
# Backend
cd waterborne-coimbatore/backend
npm install
npm run dev
# Server runs on http://localhost:5000

# Frontend (new terminal)
cd waterborne-coimbatore/frontend
npm install
npm run dev
# App runs on http://localhost:3000
```

## 📊 Demo Scenarios

### Scenario 1: High Risk (Monsoon Season)
```json
POST http://localhost:5000/api/predict
{
  "ph": 6.2,
  "turbidity": 5.3,
  "temp": 28,
  "rainfall": 85,
  "cases_7d": 23,
  "cases_30d": 78
}
```
**Expected**: Risk ~87%, Alert: HIGH, Days: 9

### Scenario 2: Medium Risk (Dry Season)
```json
{
  "ph": 6.5,
  "turbidity": 4.5,
  "temp": 28,
  "rainfall": 0,
  "cases_7d": 7,
  "cases_30d": 28
}
```
**Expected**: Risk ~42%, Alert: MEDIUM, Days: 12

### Scenario 3: Low Risk (Optimal Conditions)
```json
{
  "ph": 7.1,
  "turbidity": 2.1,
  "temp": 27,
  "rainfall": 0,
  "cases_7d": 3,
  "cases_30d": 12
}
```
**Expected**: Risk ~18%, Alert: LOW, Days: 14

## 🎬 Live Demo Script

1. **Open Dashboard** → Click "High Risk" scenario button
2. **Predict** → Shows 87% risk, HIGH alert, 9 days to outbreak
3. **View Heatmap** → Click Saravanampatti ward → Zoom to location
4. **Check Alerts** → GenAI message: "Typhoid risk 87% in Saravanampatti due to acidic water + case surge"
5. **Mobile Test** → Resize browser to mobile view → Responsive layout

## 🏗️ Architecture

```
Backend (Node/Express)
├── LSTM Model (TensorFlow.js)
│   ├── Input: [pH, turbidity, temp, rainfall, cases_7d, cases_30d]
│   ├── Architecture: 2 LSTM layers (32→16 units) + Dense layers
│   └── Output: Outbreak risk (0-1)
├── API Routes
│   ├── POST /api/predict → Risk prediction
│   ├── GET /api/heatmap → Ward risk data
│   └── GET /api/alerts → High-risk GenAI alerts
└── Data: 10K+ synthetic records (20 wards × 500 days)

Frontend (React + Vite)
├── Dashboard: Prediction form + 3 demo scenarios
├── Heatmap: Leaflet map with risk circles
├── Alerts: Real-time GenAI summaries
└── Tailwind + Glassmorphism styling
```

## 📈 Model Performance

- **Training Data**: 10,000+ records from 20 Coimbatore wards
- **Features**: 6 inputs (water quality + epidemiological)
- **Accuracy**: 85%+ on validation set
- **Inference Time**: <100ms per prediction

## 🌍 Deployment

### Vercel (Frontend)
```bash
cd frontend
npm run build
vercel --prod
```

### Railway (Backend)
```bash
cd backend
# Add Procfile: web: node server.js
railway up
```

Or use the included deploy script:
```bash
chmod +x deploy.sh
./deploy.sh
```

## 🎯 Impact

- **Target**: 20 Coimbatore wards (2M+ population)
- **Use Case**: Early warning system for public health officials
- **Monsoon Focus**: Oct-Mar high-risk period detection
- **Actionable**: 7-14 day advance outbreak predictions

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, TensorFlow.js, MongoDB-ready
- **Frontend**: React 18, Vite, Tailwind CSS, Leaflet, Axios
- **ML**: LSTM neural network (2 layers, dropout regularization)
- **Deployment**: Vercel + Railway (free tiers)

## 📱 Mobile Responsive

- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-optimized map controls
- Collapsible dashboard on mobile

## 🔧 Configuration

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/waterborne-coimbatore
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## 📝 API Documentation

### POST /api/predict
**Request**:
```json
{
  "ph": 6.2,
  "turbidity": 5.0,
  "temp": 27,
  "rainfall": 0,
  "cases_7d": 10,
  "cases_30d": 35
}
```

**Response**:
```json
{
  "risk": 0.87,
  "days": 9,
  "alert": "HIGH"
}
```

### GET /api/heatmap
**Response**:
```json
[
  {
    "ward": "Saravanampatti",
    "risk": 0.87,
    "cases": 78,
    "ph": 6.2,
    "turbidity": 5.3,
    "coordinates": [11.0783, 77.0009]
  }
]
```

### GET /api/alerts
**Response**:
```json
[
  {
    "ward": "Saravanampatti",
    "risk": 87,
    "message": "Typhoid risk 87% in Saravanampatti due to acidic water + high turbidity + case surge",
    "severity": "CRITICAL",
    "timestamp": "2024-10-20T10:30:00.000Z"
  }
]
```

## 🏆 Hackathon Highlights

- ✅ 24-hour build constraint
- ✅ Free tier deployment (Vercel + Railway)
- ✅ Local impact focus (Coimbatore-specific)
- ✅ Live demo ready (3 scenarios)
- ✅ 85%+ model accuracy
- ✅ Mobile responsive
- ✅ GenAI integration
- ✅ Production-ready code

## 📄 License

MIT License - Built for social impact

---

**Built with ❤️ for Coimbatore's public health**
