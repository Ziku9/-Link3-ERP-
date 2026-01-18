# Deployment Guide

## Deploy to GitHub

### 1. Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit - Link3 ERP System"
git remote add origin https://github.com/YOUR_USERNAME/Link3-ERP.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Deploy Frontend to Vercel

### 1. Connect to Vercel
- Go to https://vercel.com
- Click "Import Project"
- Select your GitHub repository
- Choose "Next.js" as the framework

### 2. Set Environment Variables
In Vercel Dashboard:
- Add `NEXT_PUBLIC_API_URL` = `https://your-backend-url.com`

### 3. Deploy
Click "Deploy" - Vercel will automatically build and deploy on every push!

---

## Deploy Backend

### Option A: Railway (Recommended - Simple)
1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Connect your GitHub account
5. Select Link3-ERP repository
6. In Variables tab, add:
   - `MONGODB_URI` = your MongoDB connection string
   - `NODE_ENV` = production
   - `PORT` = 5000
7. Deploy - Railway will give you a public URL

### Option B: Render
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub
4. Select your repo
5. Set Build Command: `npm install`
6. Set Start Command: `npm start`
7. Add environment variables
8. Deploy

### Option C: Heroku
1. Install Heroku CLI
2. Run:
   ```bash
   cd backend
   heroku login
   heroku create link3-erp-backend
   heroku config:set MONGODB_URI="your_mongodb_uri"
   git push heroku main
   ```

---

## MongoDB Setup (Free)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up / Login
3. Create a new cluster (Free tier)
4. Go to "Database Access" → Add user with password
5. Go to "Network Access" → Add IP 0.0.0.0/0
6. Click "Connect" on cluster
7. Choose "Connect your application"
8. Copy connection string
9. Replace `<username>` and `<password>` with your credentials
10. Add to backend `.env`:
    ```
    MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/link3-erp?retryWrites=true&w=majority
    ```

---

## Update Frontend API URL

After deploying backend, update:

**Frontend `.env.local`:**
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

Then redeploy frontend on Vercel.

---

## Custom Domain (Optional)

### Vercel Frontend
- In Vercel Dashboard → Settings → Domains
- Add your custom domain (e.g., link3erp.com)
- Update DNS records as instructed

### Backend
- Railway/Render provide custom domains in settings
- Or use subdomain (e.g., api.link3erp.com)

---

## Troubleshooting

### CORS Error
Update backend `CORS_ORIGIN`:
```bash
CORS_ORIGIN=https://your-frontend-domain.com
```

### Cannot Connect to MongoDB
- Check IP whitelist in MongoDB Atlas (0.0.0.0/0)
- Verify connection string is correct
- Ensure firewall allows port 27017

### 404 on API Endpoints
- Verify backend is running
- Check `NEXT_PUBLIC_API_URL` points to correct backend
- Backend must be on a public URL (not localhost)

---

## Environment Variables Summary

**Backend (.env)**
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/link3-erp
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
```

**Frontend (.env.local)**
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

---

## Testing Deployment

1. Frontend: Visit your Vercel URL
2. Backend: Visit `https://your-backend-url/api/health`
3. Should see: `{"status":"Backend is running ✅"}`

**Congratulations! Your ERP is live! 🎉**
