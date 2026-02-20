# 📊 Understanding "Cases" in the System

## What are "Cases"?

**Cases** = Number of people who got sick with waterborne diseases in a specific time period.

### Simple Definition
- **1 case** = 1 person infected with a waterborne disease
- **78 cases** = 78 people got sick
- **Cases (30 days)** = Total patients in the last month

---

## Types of Cases Tracked

### 1. Cases (7 days) - Recent Trend
**What it means**: Number of infected patients in the last week

**Example**:
- Saravanampatti: 23 cases (7 days)
- Meaning: 23 people got sick in the last week
- Use: Shows if outbreak is starting NOW

**Why it matters**:
- Early warning signal
- Rapid increase = outbreak beginning
- Helps predict near-term risk

### 2. Cases (30 days) - Monthly Total
**What it means**: Total number of infected patients in the last month

**Example**:
- Saravanampatti: 78 cases (30 days)
- Meaning: 78 people got sick in the last month
- Use: Shows overall disease burden

**Why it matters**:
- Most important for prediction
- Shows sustained outbreak
- Indicates severity

---

## Real-World Examples

### Low Risk Ward (Sulur)
```
Cases (7 days): 5 patients
Cases (30 days): 22 patients
Risk: 32%

Interpretation:
- Only 22 people got sick in a month
- Low disease activity
- Water quality likely good
- No immediate action needed
```

### Medium Risk Ward (Gandhipuram)
```
Cases (7 days): 19 patients
Cases (30 days): 68 patients
Risk: 84%

Interpretation:
- 68 people sick in a month
- Moderate disease activity
- Water quality deteriorating
- Monitor closely
```

### High Risk Ward (Singanallur)
```
Cases (7 days): 25 patients
Cases (30 days): 82 patients
Risk: 93%

Interpretation:
- 82 people sick in a month
- High disease activity
- Water quality very poor
- URGENT ACTION NEEDED
```

---

## How Cases Affect Risk Prediction

### The AI Model Uses Cases To:

1. **Detect Outbreaks Early**
   - Rising cases = outbreak starting
   - Stable cases = endemic level
   - Falling cases = outbreak ending

2. **Predict Future Risk**
   - High cases + poor water = very high risk
   - Low cases + poor water = medium risk
   - High cases + good water = investigate other factors

3. **Calculate Days to Outbreak**
   - More cases = fewer days until major outbreak
   - Fewer cases = more time to prevent

---

## Case Count Thresholds

### Low Activity (<30 cases/month)
- **Status**: Normal/Endemic
- **Action**: Routine monitoring
- **Risk**: Low to Medium

### Moderate Activity (30-60 cases/month)
- **Status**: Elevated
- **Action**: Increased surveillance
- **Risk**: Medium to High

### High Activity (>60 cases/month)
- **Status**: Outbreak
- **Action**: Emergency response
- **Risk**: High to Critical

---

## Where Cases Come From

### Data Sources (Real-World)
1. **Hospitals**: Patients diagnosed with waterborne diseases
2. **Clinics**: Outpatient cases
3. **Labs**: Confirmed test results
4. **Surveillance**: Public health monitoring

### Diseases Counted
- Typhoid fever
- Cholera
- Dysentery
- Gastroenteritis
- Hepatitis A
- Other waterborne infections

---

## Case Trends Over Time

### Seasonal Patterns

**Monsoon Season (Oct-Mar)**:
```
Month     | Cases | Why
----------|-------|------------------
October   | 45    | Rains start
November  | 68    | Flooding
December  | 82    | Peak contamination
January   | 71    | Still high
February  | 52    | Declining
March     | 38    | Monsoon ends
```

**Summer Season (Apr-Sep)**:
```
Month     | Cases | Why
----------|-------|------------------
April     | 28    | Dry, stable
May       | 22    | Low risk
June      | 25    | Pre-monsoon
July      | 32    | Early rains
August    | 35    | Moderate
September | 40    | Building up
```

---

## Case Surge = Outbreak Warning

### Normal Situation
```
Week 1: 5 cases
Week 2: 6 cases
Week 3: 5 cases
Week 4: 7 cases
Total: 23 cases/month
Status: ✅ Normal
```

### Outbreak Starting
```
Week 1: 5 cases
Week 2: 12 cases  ⚠️ Doubling
Week 3: 23 cases  🚨 Doubling again
Week 4: 38 cases  🚨 Still rising
Total: 78 cases/month
Status: 🚨 OUTBREAK
```

---

## How to Read the Dashboard

### Input Fields

**"Cases (7 days)"**:
- Enter: Number of patients in last week
- Example: 23
- Meaning: 23 people got sick recently

**"Cases (30 days)"**:
- Enter: Total patients in last month
- Example: 78
- Meaning: 78 people got sick this month

### Ward Cards

**"78 patients"**:
- Shows: Total cases in last 30 days
- Color: Matches risk level
- Click: Zoom to ward on map

### Map Popup

**"Infected Patients (30 days): 78"**:
- Full label for clarity
- Shows monthly total
- Helps compare wards

---

## Why Cases Matter for Public Health

### 1. Early Detection
- Spot outbreaks before they spread
- 7-day cases show immediate trends
- 30-day cases show sustained problems

### 2. Resource Allocation
- High cases = send more doctors
- Low cases = routine monitoring
- Prioritize wards with most patients

### 3. Intervention Effectiveness
- Cases falling = intervention working
- Cases rising = need different approach
- Track progress over time

### 4. Cost Calculation
- Each case costs ₹25,000 (treatment)
- 78 cases = ₹19.5 lakh
- Prevention cheaper than treatment

---

## Common Questions

### Q: What if cases are high but risk is low?
**A**: Outbreak is happening NOW, but water quality is improving. Risk of FUTURE outbreak is low.

### Q: What if cases are low but risk is high?
**A**: Water quality is poor, but people haven't gotten sick YET. High risk of FUTURE outbreak.

### Q: Why track both 7-day and 30-day cases?
**A**: 
- 7-day = Recent trend (is it getting worse?)
- 30-day = Overall burden (how bad is it?)

### Q: Are cases cumulative?
**A**: No, they're rolling windows:
- 7-day cases = Last 7 days only
- 30-day cases = Last 30 days only

---

## Technical Details

### Data Structure
```json
{
  "ward": "Saravanampatti",
  "cases_7d": 23,      // Recent cases
  "cases_30d": 78,     // Monthly total
  "outbreak_risk": 0.91 // Predicted risk
}
```

### Calculation
```javascript
// Cases contribute 50% to risk score
risk = 0.30 * (cases_30d / 100) +  // 30% weight
       0.20 * (cases_7d / 30) +    // 20% weight
       0.50 * (water_quality)      // 50% weight
```

---

## Summary

**Cases** = Sick people count

- **Low cases (<30)**: Few people sick, low concern
- **Medium cases (30-60)**: Moderate illness, watch closely
- **High cases (>60)**: Many people sick, urgent action

**The more cases, the higher the risk of a major outbreak!**

---

**Understanding cases helps you interpret the predictions and take appropriate action.** 📊
