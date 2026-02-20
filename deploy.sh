#!/bin/bash

echo "🚀 Deploying Waterborne Disease Prediction System"

# Frontend deployment (Vercel)
echo "📦 Building frontend..."
cd frontend
npm run build

echo "🌐 Deploying to Vercel..."
vercel --prod

# Backend deployment (Railway)
echo "🔧 Deploying backend to Railway..."
cd ../backend
railway up

echo "✅ Deployment complete!"
echo "Frontend: Check Vercel dashboard"
echo "Backend: Check Railway dashboard"
