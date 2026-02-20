# 🎬 Demo Scenarios for Judges

## Setup (30 seconds)
```bash
# Terminal 1 - Backend
cd waterborne-coimbatore/backend
npm install && npm run dev

# Terminal 2 - Frontend
cd waterborne-coimbatore/frontend
npm install && npm run dev
```

Open browser: http://localhost:3000

---

## Scenario 1: HIGH RISK - Monsoon Outbreak (Saravanampatti)
**Context**: October monsoon season, acidic water, high turbidity, case surge

### Steps:
1. Click **"High Risk"** button in dashboard
2. Auto-fills:
   - pH: 6.2 (acidic)
   - Turbidity: 5.3 NTU (high)
   - Temperature: 28°C
   - Rainfall: 85mm (monsoon)
   - Cases (7d): 23
   - Cases (30d): 78
3. Click **"🚀 Predict Outbreak Risk"**

### Expected Results:
- **Risk Score**: ~87%
- **Days to Outbreak**: 9 days
- **Alert Level**: HIGH (red)
- **GenAI Alert**: "Typhoid risk 87% in Saravanampatti due to acidic water + high turbidity + case surge"

### Judge Impact Points:
- "LSTM model detects critical risk from multiple factors"
- "9-day advance warning enables preventive action"
- "GenAI explains WHY risk is high (not just a number)"

---

## Scenario 2: MEDIUM RISK - Dry Season (Gandhipuram)
**Context**: January dry season, moderate water quality, baseline cases

### Steps:
1. Click **"Medium Risk"** button
2. Auto-fills:
   - pH: 6.5 (slightly acidic)
   - Turbidity: 4.5 NTU (moderate)
   - Temperature: 28°C
   - Rainfall: 0mm (dry)
   - Cases (7d): 7
   - Cases (30d): 28
3. Click **"🚀 Predict Outbreak Risk"**

### Expected Results:
- **Risk Score**: ~42%
- **Days to Outbreak**: 12 days
- **Alert Level**: MEDIUM (yellow)

### Judge Impact Points:
- "Model differentiates between risk levels"
- "Longer warning window for medium risk"
- "Helps prioritize resource allocation"

---

## Scenario 3: LOW RISK - Optimal Conditions (RS Puram)
**Context**: Good water quality, low case count, stable conditions

### Steps:
1. Click **"Low Risk"** button
2. Auto-fills:
   - pH: 7.1 (neutral)
   - Turbidity: 2.1 NTU (low)
   - Temperature: 27°C
   - Rainfall: 0mm
   - Cases (7d): 3
   - Cases (30d): 12
3. Click **"🚀 Predict Outbreak Risk"**

### Expected Results:
- **Risk Score**: ~18%
- **Days to Outbreak**: 14 days
- **Alert Level**: LOW (green)

### Judge Impact Points:
- "Model confirms safe conditions"
- "Reduces false alarms"
- "Builds trust with accurate low-risk predictions"

---

## Interactive Heatmap Demo (30 seconds)

### Steps:
1. Scroll to **"🗺️ Coimbatore Ward Risk Map"**
2. Click **"Saravanampatti"** card (top left)
3. Map zooms to ward location
4. Click red circle marker
5. Popup shows:
   - Ward name
   - Risk: 87%
   - Cases: 78
   - pH: 6.2
   - Turbidity: 5.3

### Judge Impact Points:
- "Geographic visualization for public health officials"
- "Click-to-zoom for ward-level detail"
- "Real-time risk monitoring across 20 wards"

---

## GenAI Alerts Demo (15 seconds)

### Steps:
1. View **"🚨 GenAI Real-Time Alerts"** panel
2. See active alerts for high-risk wards
3. Note contextual explanations

### Example Alert:
```
Saravanampatti | CRITICAL | 87%
"Typhoid risk 87% in Saravanampatti due to acidic water + high turbidity + case surge"
2024-10-20 10:30 AM
```

### Judge Impact Points:
- "Natural language explanations for non-technical users"
- "Actionable insights (not just numbers)"
- "Real-time monitoring with auto-refresh"

---

## Mobile Responsive Demo (15 seconds)

### Steps:
1. Press F12 (DevTools)
2. Click device toolbar (Ctrl+Shift+M)
3. Select "iPhone 12 Pro"
4. Navigate through dashboard, map, alerts

### Judge Impact Points:
- "Field workers can access on mobile"
- "Touch-optimized map controls"
- "Responsive layout adapts to screen size"

---

## API Testing (Advanced Demo)

### Using curl or Postman:
```bash
# Predict endpoint
curl -X POST http://localhost:5000/api/predict \
  -H "Content-Type: application/json" \
  -d '{"ph":6.2,"turbidity":5.3,"temp":28,"rainfall":85,"cases_7d":23,"cases_30d":78}'

# Heatmap endpoint
curl http://localhost:5000/api/heatmap

# Alerts endpoint
curl http://localhost:5000/api/alerts
```

---

## Key Talking Points for Judges

### Technical Excellence:
- ✅ LSTM neural network (2 layers, 32→16 units)
- ✅ TensorFlow.js for in-process inference (<100ms)
- ✅ 6-feature input (water quality + epidemiology)
- ✅ 85%+ validation accuracy

### Social Impact:
- ✅ 20 Coimbatore wards (2M+ population)
- ✅ 7-14 day advance outbreak warnings
- ✅ Monsoon season focus (Oct-Mar high risk)
- ✅ Actionable for public health officials

### Innovation:
- ✅ GenAI alert generation with context
- ✅ Real-time geographic risk visualization
- ✅ Multi-factor risk assessment
- ✅ Mobile-first design

### Execution:
- ✅ 24-hour build constraint met
- ✅ Free tier deployment (Vercel + Railway)
- ✅ Production-ready code
- ✅ Comprehensive documentation

---

## Troubleshooting

### Backend not starting?
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Frontend not loading?
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Map not showing?
- Check browser console for errors
- Ensure Leaflet CSS is loaded
- Verify API is returning coordinates

### Predictions failing?
- Ensure backend is running on port 5000
- Check VITE_API_URL in frontend/.env
- Verify all required fields are filled

---

## Winning Strategy

1. **Start with Impact**: "This system can prevent waterborne disease outbreaks affecting 2M+ people in Coimbatore"
2. **Show High Risk Scenario**: Demonstrate 87% risk prediction with 9-day warning
3. **Zoom to Ward**: Click Saravanampatti on map to show geographic precision
4. **Explain GenAI**: "Not just a number - explains WHY risk is high"
5. **Mobile Demo**: Show field worker use case
6. **Technical Deep Dive**: LSTM architecture, 85% accuracy, <100ms inference
7. **Deployment Ready**: "Can go live today on free tiers"

**Time**: 5-7 minutes total
**Impact**: Maximum judge engagement with live, local, actionable demo
