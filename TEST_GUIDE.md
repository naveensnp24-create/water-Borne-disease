# 🧪 Testing Guide

## Pre-Test Checklist

- [ ] Node.js 18+ installed
- [ ] Both servers running (backend on 5000, frontend on 3000)
- [ ] Browser open at http://localhost:3000
- [ ] No console errors (F12)

---

## Test Suite

### Test 1: Backend Health Check ✅
**Objective**: Verify backend server is running

**Steps**:
1. Open http://localhost:5000/health in browser

**Expected Result**:
```json
{
  "status": "ok",
  "message": "Waterborne Disease Prediction API"
}
```

**Pass Criteria**: Status 200, JSON response received

---

### Test 2: Frontend Loading ✅
**Objective**: Verify frontend renders correctly

**Steps**:
1. Open http://localhost:3000
2. Check for visual elements

**Expected Result**:
- Purple gradient background
- Header: "💧 Waterborne Disease Prediction"
- Prediction dashboard visible
- Alerts panel visible
- Map container visible

**Pass Criteria**: All elements render without errors

---

### Test 3: High Risk Prediction ✅
**Objective**: Test LSTM model with high-risk scenario

**Steps**:
1. Click "High Risk" button
2. Verify auto-filled values:
   - pH: 6.2
   - Turbidity: 5.3
   - Temperature: 28
   - Rainfall: 85
   - Cases (7d): 23
   - Cases (30d): 78
3. Click "🚀 Predict Outbreak Risk"
4. Wait for response (1-2 seconds)

**Expected Result**:
- Risk Score: 80-90%
- Days to Outbreak: 7-11 days
- Alert Level: HIGH (red background)

**Pass Criteria**: Prediction completes, risk > 70%

---

### Test 4: Medium Risk Prediction ✅
**Objective**: Test model differentiation

**Steps**:
1. Click "Medium Risk" button
2. Click "🚀 Predict Outbreak Risk"

**Expected Result**:
- Risk Score: 35-50%
- Days to Outbreak: 10-14 days
- Alert Level: MEDIUM (yellow background)

**Pass Criteria**: Prediction completes, 30% < risk < 60%

---

### Test 5: Low Risk Prediction ✅
**Objective**: Test low-risk detection

**Steps**:
1. Click "Low Risk" button
2. Click "🚀 Predict Outbreak Risk"

**Expected Result**:
- Risk Score: 10-25%
- Days to Outbreak: 12-14 days
- Alert Level: LOW (green background)

**Pass Criteria**: Prediction completes, risk < 30%

---

### Test 6: Manual Input ✅
**Objective**: Test custom parameter input

**Steps**:
1. Clear all fields
2. Enter custom values:
   - pH: 6.0
   - Turbidity: 7.0
   - Temperature: 30
   - Rainfall: 100
   - Cases (7d): 30
   - Cases (30d): 90
3. Click "🚀 Predict Outbreak Risk"

**Expected Result**:
- Prediction completes successfully
- Risk score displayed
- Alert level assigned

**Pass Criteria**: No errors, valid prediction returned

---

### Test 7: API Endpoint - Predict ✅
**Objective**: Test API directly

**Steps**:
```bash
curl -X POST http://localhost:5000/api/predict \
  -H "Content-Type: application/json" \
  -d '{"ph":6.2,"turbidity":5.3,"temp":28,"rainfall":85,"cases_7d":23,"cases_30d":78}'
```

**Expected Result**:
```json
{
  "risk": 0.87,
  "days": 9,
  "alert": "HIGH"
}
```

**Pass Criteria**: Status 200, valid JSON response

---

### Test 8: API Endpoint - Heatmap ✅
**Objective**: Test heatmap data retrieval

**Steps**:
```bash
curl http://localhost:5000/api/heatmap
```

**Expected Result**:
- Array of ward objects
- Each with: ward, risk, cases, ph, turbidity, coordinates
- At least 7 wards returned

**Pass Criteria**: Status 200, array with ward data

---

### Test 9: API Endpoint - Alerts ✅
**Objective**: Test GenAI alert generation

**Steps**:
```bash
curl http://localhost:5000/api/alerts
```

**Expected Result**:
- Array of high-risk alerts
- Each with: ward, risk, message, severity, timestamp
- Contextual explanations (e.g., "due to acidic water")

**Pass Criteria**: Status 200, alerts with GenAI messages

---

### Test 10: Interactive Map ✅
**Objective**: Test Leaflet map functionality

**Steps**:
1. Scroll to "🗺️ Coimbatore Ward Risk Map"
2. Verify map loads
3. Click "Saravanampatti" ward card
4. Verify map zooms to location
5. Click red circle marker
6. Verify popup appears with ward details

**Expected Result**:
- Map renders with tiles
- Ward cards clickable
- Zoom animation works
- Popup shows: ward name, risk, cases, pH, turbidity

**Pass Criteria**: All interactions work smoothly

---

### Test 11: GenAI Alerts Panel ✅
**Objective**: Test real-time alerts display

**Steps**:
1. View "🚨 GenAI Real-Time Alerts" panel
2. Check for alert cards
3. Verify alert content

**Expected Result**:
- High-risk wards displayed
- Each alert shows:
  - Ward name
  - Severity badge (CRITICAL/HIGH)
  - Risk percentage
  - Contextual message
  - Timestamp

**Pass Criteria**: Alerts display with proper formatting

---

### Test 12: Mobile Responsiveness ✅
**Objective**: Test mobile layout

**Steps**:
1. Press F12 (DevTools)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select "iPhone 12 Pro" (390x844)
4. Navigate through all sections

**Expected Result**:
- Layout adapts to mobile width
- Dashboard inputs stack vertically
- Map remains interactive
- Alerts panel scrollable
- No horizontal overflow

**Pass Criteria**: All elements visible and functional on mobile

---

### Test 13: Tablet Responsiveness ✅
**Objective**: Test tablet layout

**Steps**:
1. In DevTools, select "iPad Air" (820x1180)
2. Navigate through all sections

**Expected Result**:
- 2-column grid for dashboard/alerts
- Map full width
- Touch-friendly controls

**Pass Criteria**: Optimal layout for tablet

---

### Test 14: Error Handling - Missing Fields ✅
**Objective**: Test validation

**Steps**:
1. Clear all input fields
2. Click "🚀 Predict Outbreak Risk"

**Expected Result**:
- Error message or alert
- No crash
- User-friendly feedback

**Pass Criteria**: Graceful error handling

---

### Test 15: Error Handling - Backend Down ✅
**Objective**: Test frontend resilience

**Steps**:
1. Stop backend server (Ctrl+C)
2. Try to predict in frontend
3. Check browser console

**Expected Result**:
- Error message displayed
- "Make sure backend is running" alert
- No white screen of death

**Pass Criteria**: User-friendly error message

---

### Test 16: Performance - Prediction Speed ✅
**Objective**: Measure inference time

**Steps**:
1. Open browser DevTools → Network tab
2. Click "High Risk" → "Predict"
3. Check request timing

**Expected Result**:
- Response time < 200ms
- Total time < 500ms

**Pass Criteria**: Fast, responsive predictions

---

### Test 17: Performance - Map Rendering ✅
**Objective**: Test map load time

**Steps**:
1. Refresh page
2. Measure time until map fully loads

**Expected Result**:
- Map tiles load within 2 seconds
- Markers appear immediately
- Smooth zoom/pan

**Pass Criteria**: No lag or stuttering

---

### Test 18: Browser Compatibility ✅
**Objective**: Test cross-browser support

**Steps**:
1. Test in Chrome
2. Test in Firefox
3. Test in Edge
4. (Optional) Test in Safari

**Expected Result**:
- Consistent appearance
- All features work
- No browser-specific errors

**Pass Criteria**: Works in all major browsers

---

### Test 19: Console Errors ✅
**Objective**: Check for JavaScript errors

**Steps**:
1. Open DevTools (F12)
2. Go to Console tab
3. Perform all actions (predict, map, alerts)
4. Check for errors

**Expected Result**:
- No red error messages
- Only info/log messages
- No warnings about deprecated APIs

**Pass Criteria**: Clean console

---

### Test 20: Data Accuracy ✅
**Objective**: Verify model predictions make sense

**Steps**:
1. Test all 3 scenarios
2. Compare risk scores
3. Verify logical ordering

**Expected Result**:
- High Risk > Medium Risk > Low Risk
- Days inversely proportional to risk
- Alert levels match risk thresholds

**Pass Criteria**: Logical, consistent predictions

---

## Test Results Summary

| Test # | Test Name | Status | Notes |
|--------|-----------|--------|-------|
| 1 | Backend Health | ⬜ | |
| 2 | Frontend Loading | ⬜ | |
| 3 | High Risk Prediction | ⬜ | |
| 4 | Medium Risk Prediction | ⬜ | |
| 5 | Low Risk Prediction | ⬜ | |
| 6 | Manual Input | ⬜ | |
| 7 | API - Predict | ⬜ | |
| 8 | API - Heatmap | ⬜ | |
| 9 | API - Alerts | ⬜ | |
| 10 | Interactive Map | ⬜ | |
| 11 | GenAI Alerts | ⬜ | |
| 12 | Mobile Responsive | ⬜ | |
| 13 | Tablet Responsive | ⬜ | |
| 14 | Error - Missing Fields | ⬜ | |
| 15 | Error - Backend Down | ⬜ | |
| 16 | Performance - Speed | ⬜ | |
| 17 | Performance - Map | ⬜ | |
| 18 | Browser Compatibility | ⬜ | |
| 19 | Console Errors | ⬜ | |
| 20 | Data Accuracy | ⬜ | |

**Legend**: ⬜ Not Tested | ✅ Passed | ❌ Failed

---

## Automated Testing (Optional)

### Backend API Tests
```bash
cd backend
npm install --save-dev jest supertest
```

Create `backend/tests/api.test.js`:
```javascript
const request = require('supertest');
const app = require('../server');

describe('API Tests', () => {
  test('GET /health returns 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });

  test('POST /api/predict returns risk', async () => {
    const res = await request(app)
      .post('/api/predict')
      .send({ ph: 6.2, turbidity: 5, cases_30d: 23 });
    expect(res.body).toHaveProperty('risk');
  });
});
```

Run: `npm test`

---

## Performance Benchmarks

### Target Metrics
- **Prediction API**: < 100ms
- **Heatmap API**: < 200ms
- **Alerts API**: < 150ms
- **Frontend Load**: < 2s
- **Map Render**: < 3s

### Actual Results (Fill after testing)
- Prediction API: _____ ms
- Heatmap API: _____ ms
- Alerts API: _____ ms
- Frontend Load: _____ s
- Map Render: _____ s

---

## Bug Report Template

If you find issues, document them:

**Bug ID**: #001
**Severity**: High/Medium/Low
**Component**: Backend/Frontend/Map/Alerts
**Description**: [What went wrong]
**Steps to Reproduce**:
1. Step 1
2. Step 2
3. Step 3
**Expected**: [What should happen]
**Actual**: [What actually happened]
**Browser**: Chrome 120 / Firefox 121 / etc.
**Screenshot**: [If applicable]

---

## Testing Complete! ✅

Once all tests pass:
1. ✅ Mark all checkboxes
2. ✅ Document any issues
3. ✅ Verify fixes
4. ✅ Ready for demo!

**Next Steps**:
- Review DEMO_SCENARIOS.md for presentation
- Practice demo flow (5-7 minutes)
- Prepare for judge questions
