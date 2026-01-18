# 🚀 GitHub & Vercel Deployment Guide

Your project is ready to deploy! Follow these steps:

---

## STEP 1: Create GitHub Repository

### Option A: Via GitHub Web (Easiest)

1. Go to https://github.com/new
2. Create a new repository:
   - **Repository name**: `Link3-ERP`
   - **Description**: Link3 Sambhuganj ERP System
   - **Visibility**: Public (for Vercel)
   - **Don't** add .gitignore or license (we have them)
   - Click **Create repository**

3. After creating, you'll see:
   ```bash
   …or push an existing repository from the command line
   ```

4. Copy the commands and run in your terminal:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Link3-ERP.git
   git push -u origin main
   ```

---

## STEP 2: Push to GitHub (Copy & Paste These Commands)

Run in PowerShell (already in C:\Users\Ziku\Link3-ERP):

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Link3-ERP.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## STEP 3: Deploy to Vercel

### 3.1 Connect Vercel to GitHub

1. Go to https://vercel.com
2. Click **"Sign Up"** (or **Log In** if you have account)
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. Click **"Import Project"**
6. Search for **"Link3-ERP"** repository
7. Click **Import**

### 3.2 Configure Vercel

In the Vercel import dialog:

- **Framework Preset**: Next.js ✅
- **Root Directory**: `frontend/` (important!)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

Click **Next**

### 3.3 Add Environment Variables

Add these environment variables:

```
NEXT_PUBLIC_API_URL = https://link3-erp-api.railway.app
```

(Replace with your backend URL after deploying backend)

Click **Deploy**

### 3.4 Wait for Deployment

Vercel will:
- Pull from GitHub
- Install dependencies
- Build Next.js
- Deploy automatically

✅ **Your site is live!** You'll get a URL like: `link3-erp.vercel.app`

---

## STEP 4: Deploy Backend (Optional - For Full Stack)

### Option A: Railway.app (Recommended - Easiest)

1. Go to https://railway.app
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Connect GitHub account
5. Select **Link3-ERP** repo
6. Railway auto-detects Node.js backend ✅
7. In **Settings**, add variables:
   ```
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/link3-erp
   NODE_ENV=production
   PORT=5000
   CORS_ORIGIN=https://your-vercel-domain.vercel.app
   ```
8. Deploy - Railway gives you a public URL

---

## STEP 5: Update API URL

After backend is deployed:

1. Go to Vercel Dashboard → Your Project Settings
2. Edit **NEXT_PUBLIC_API_URL** environment variable
3. Set it to your Railway/Render URL
4. Click **Save**
5. Vercel auto-redeploys ✅

---

## Get Your Own Domain (Optional)

### Vercel Domain:

1. Vercel Dashboard → Your Project → **Settings → Domains**
2. Add custom domain (e.g., `link3erp.com`)
3. Vercel shows DNS records to update
4. Update in your domain registrar (GoDaddy, Namecheap, etc.)
5. Wait 24-48 hours for DNS to propagate

---

## Summary

| Step | Service | Action |
|------|---------|--------|
| 1 | GitHub | Create repo & push code |
| 2 | Vercel | Import from GitHub & deploy frontend |
| 3 | Railway | Deploy backend API |
| 4 | MongoDB | Connect to backend |
| 5 | Domain | Add custom domain (optional) |

---

## Verify Deployment

✅ **Frontend**: Visit your Vercel URL  
✅ **Backend**: Visit `https://your-backend-url/api/health`  
✅ **Should see**: `{"status":"Backend is running ✅"}`

---

## Troubleshooting

### Can't push to GitHub?
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/Link3-ERP.git
git push -u origin main
```

### Vercel deployment fails?
- Check that root is `frontend/`
- Verify `package.json` exists in frontend/
- Check build logs in Vercel Dashboard

### API not connecting?
- Verify backend is deployed and running
- Update `NEXT_PUBLIC_API_URL` in Vercel
- Check CORS_ORIGIN in backend `.env`

---

**Questions? Check the DEPLOYMENT.md file for detailed guides!**
