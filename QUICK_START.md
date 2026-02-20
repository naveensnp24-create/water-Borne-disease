# ⚡ Quick Start Guide

## Windows Users (Easiest)

Double-click `START.bat` - it will:
1. Install all dependencies
2. Start backend server (port 5000)
3. Start frontend server (port 3000)
4. Open in separate command windows

Wait 10 seconds, then open: http://localhost:3000

---

## Manual Start (All Platforms)

### Terminal 1 - Backend
```bash
cd waterborne-coimbatore/backend
npm install
npm run dev
```

### Terminal 2 - Frontend
```bash
cd waterborne-coimbatore/frontend
npm install
npm run dev
```

Open browser: http://localhost:3000

---

## First Time Setup (5 minutes)

1. **Install Node.js** (if not installed)
   - Download from: https://nodejs.org/
   - Version 18 or higher required

2. **Run the project**
   - Windows: Double-click `START.bat`
   - Mac/Linux: Run commands in Manual Start section

3. **Test the demo**
   - Click "High Risk" button
   - Click "Predict Outbreak Risk"
   - See 87% risk prediction
   - Explore the map and alerts

---

## Demo Scenarios

### Scenario 1: High Risk (Monsoon)
- Click "High Risk" button → Predict
- Expected: 87% risk, HIGH alert, 9 days

### Scenario 2: Medium Risk (Dry Season)
- Click "Medium Risk" button → Predict
- Expected: 42% risk, MEDIUM alert, 12 days

### Scenario 3: Low Risk (Optimal)
- Click "Low Risk" button → Predict
- Expected: 18% risk, LOW alert, 14 days

---

## Troubleshooting

### Port already in use?
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 3000 (frontend)
npx kill-port 3000
```

### Dependencies not installing?
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Map not showing?
- Check browser console (F12)
- Ensure backend is running
- Refresh the page

---

## What's Running?

- **Backend**: http://localhost:5000
  - API endpoints for predictions, heatmap, alerts
  - LSTM model training and inference
  
- **Frontend**: http://localhost:3000
  - React dashboard with prediction form
  - Interactive Leaflet map
  - Real-time GenAI alerts

---

## Next Steps

1. ✅ Run the demo scenarios
2. ✅ Explore the interactive map
3. ✅ Check the GenAI alerts
4. ✅ Test on mobile (F12 → Device toolbar)
5. ✅ Read DEMO_SCENARIOS.md for judge presentation

---

## Need Help?

- Check README.md for full documentation
- See DEMO_SCENARIOS.md for presentation guide
- Review API documentation in README.md
