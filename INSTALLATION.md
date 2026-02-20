# 🚀 Installation & Setup Guide

## Prerequisites

Before you begin, ensure you have:
- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Edge, Safari)

---

## Quick Installation (Windows)

### Method 1: Automated Setup (Recommended)
1. Navigate to `waterborne-coimbatore/` folder
2. Double-click `START.bat`
3. Wait for installation and server startup
4. Browser will open automatically at http://localhost:3000

### Method 2: Manual Setup
Open two command prompts:

**Command Prompt 1 (Backend)**:
```cmd
cd waterborne-coimbatore\backend
npm install
npm run dev
```

**Command Prompt 2 (Frontend)**:
```cmd
cd waterborne-coimbatore\frontend
npm install
npm run dev
```

---

## Quick Installation (Mac/Linux)

### Terminal 1 (Backend):
```bash
cd waterborne-coimbatore/backend
npm install
npm run dev
```

### Terminal 2 (Frontend):
```bash
cd waterborne-coimbatore/frontend
npm install
npm run dev
```

---

## Verification Steps

### 1. Check Backend (30 seconds)
Open http://localhost:5000/health

Expected response:
```json
{
  "status": "ok",
  "message": "Waterborne Disease Prediction API"
}
```

### 2. Check Frontend (30 seconds)
Open http://localhost:3000

You should see:
- Purple gradient background
- "Waterborne Disease Prediction" header
- Prediction dashboard with input fields
- GenAI Alerts panel
- Interactive map

### 3. Test Prediction (1 minute)
1. Click "High Risk" button
2. Click "🚀 Predict Outbreak Risk"
3. See results:
   - Risk Score: ~87%
   - Days to Outbreak: 9
   - Alert Level: HIGH (red)

---

## Installation Time

- **First time**: 3-5 minutes (includes npm install)
- **Subsequent runs**: 10-15 seconds (just server startup)

---

## What Gets Installed?

### Backend Dependencies (~50MB)
- express: Web server framework
- cors: Cross-origin resource sharing
- dotenv: Environment configuration
- @tensorflow/tfjs-node: Machine learning library
- nodemon: Auto-restart on file changes

### Frontend Dependencies (~200MB)
- react: UI library
- react-dom: React DOM renderer
- vite: Build tool and dev server
- tailwindcss: CSS framework
- leaflet: Interactive maps
- react-leaflet: React wrapper for Leaflet
- axios: HTTP client

**Total disk space**: ~250MB

---

## Port Configuration

### Default Ports
- **Backend**: 5000
- **Frontend**: 3000

### Change Ports (if needed)

**Backend** (`backend/.env`):
```env
PORT=5001
```

**Frontend** (`frontend/vite.config.js`):
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  }
});
```

Don't forget to update `frontend/.env`:
```env
VITE_API_URL=http://localhost:5001/api
```

---

## Troubleshooting

### Error: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Error: "Port 5000 already in use"
**Solution**:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### Error: "Cannot find module"
**Solution**:
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Error: "EACCES: permission denied"
**Solution** (Mac/Linux):
```bash
sudo chown -R $USER ~/.npm
```

### Map not loading
**Solution**:
1. Check browser console (F12)
2. Ensure backend is running
3. Clear browser cache
4. Verify Leaflet CSS is loaded

### Blank white screen
**Solution**:
1. Check browser console for errors
2. Verify both servers are running
3. Check VITE_API_URL in frontend/.env
4. Try hard refresh (Ctrl+Shift+R)

---

## Development Mode Features

### Backend (nodemon)
- Auto-restarts on file changes
- Logs all API requests
- Hot reload for model updates

### Frontend (Vite)
- Hot Module Replacement (HMR)
- Instant updates on save
- Fast refresh for React components

---

## Production Build

### Frontend
```bash
cd frontend
npm run build
# Output: dist/ folder
```

### Backend
```bash
cd backend
npm start
# Uses node instead of nodemon
```

---

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/waterborne-coimbatore
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

**Note**: Restart servers after changing .env files

---

## Uninstallation

To completely remove the project:

1. Stop all running servers (Ctrl+C)
2. Delete the `waterborne-coimbatore/` folder
3. (Optional) Clear npm cache:
   ```bash
   npm cache clean --force
   ```

---

## Next Steps

After successful installation:

1. ✅ Read QUICK_START.md for usage guide
2. ✅ Review DEMO_SCENARIOS.md for presentation
3. ✅ Explore README.md for API documentation
4. ✅ Test all 3 demo scenarios
5. ✅ Check mobile responsiveness (F12 → Device toolbar)

---

## Support

If you encounter issues:

1. Check this troubleshooting section
2. Review error messages in terminal
3. Check browser console (F12)
4. Verify Node.js version: `node --version` (should be 18+)
5. Ensure npm is working: `npm --version`

---

## System Requirements

### Minimum
- **OS**: Windows 10, macOS 10.15, Ubuntu 20.04
- **RAM**: 4GB
- **Disk**: 500MB free space
- **CPU**: Dual-core processor
- **Browser**: Chrome 90+, Firefox 88+, Edge 90+, Safari 14+

### Recommended
- **RAM**: 8GB+
- **Disk**: 1GB free space
- **CPU**: Quad-core processor
- **Internet**: For initial npm install

---

## Installation Complete! 🎉

You're ready to run the Waterborne Disease Prediction System.

**Quick Start**:
```bash
# Windows
START.bat

# Mac/Linux
cd backend && npm run dev &
cd frontend && npm run dev
```

Open http://localhost:3000 and start predicting! 🚀
