# ✅ Complete Deployment Guide: GitHub + Vercel

Your project is **ready to deploy**! Follow these steps to get your site live.

---

## 📋 What You'll Get

✅ **Live website** on Vercel (free hosting)  
✅ **Custom Vercel domain** (e.g., `link3erp.vercel.app`)  
✅ **Code on GitHub** (for backup and version control)  
✅ **Auto-deploy** on every push to GitHub  

---

## 🎯 Two-Step Process

### STEP 1️⃣: Push Code to GitHub (5 minutes)

#### 1a. Create GitHub Repository

1. Go to https://github.com/new
2. **Create new repository** with these settings:
   - Name: `Link3-ERP`
   - Description: Link3 Sambhuganj ERP System
   - Visibility: **Public**
   - Click **Create repository**

3. Copy the green setup commands shown (you'll see a code block)

#### 1b. Push Code from Your Computer

Open PowerShell and run these commands:

```powershell
# Go to your project folder
cd C:\Users\Ziku\Link3-ERP

# Set main branch
git branch -M main

# Add your GitHub repository (replace YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/Link3-ERP.git

# Push all files to GitHub
git push -u origin main
```

**⚠️ Replace `YOUR_USERNAME` with your actual GitHub username!**

---

### STEP 2️⃣: Deploy to Vercel (5 minutes)

#### 2a. Connect to Vercel

1. Go to https://vercel.com
2. Click **Sign Up** or **Log In**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. Click **"Import Project"**

#### 2b. Select Your Repository

1. Search for **"Link3-ERP"**
2. Click **Import**

#### 2c. Configure Your Project

When Vercel asks for configuration:

| Setting | Value |
|---------|-------|
| **Framework** | Next.js ✅ (auto-detected) |
| **Root Directory** | `frontend/` (IMPORTANT!) |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` |

#### 2d. Add Environment Variables

Before deploying, add this:

```
NEXT_PUBLIC_API_URL = http://localhost:5000
```

(For now it's localhost. After backend deployment, update this)

Click **Deploy** button!

#### 2e. Wait for Deployment

Vercel will:
- Pull code from GitHub
- Install dependencies
- Build Next.js
- Deploy automatically

**You'll see a "Congratulations!" message when done** ✅

---

## 🌐 Your Live Website

After deployment, Vercel gives you:

**Public URL**: `https://link3-erp.vercel.app`

(Your exact URL will be shown in Vercel dashboard)

---

## 🔄 How It Works Now

```
You → GitHub → Vercel → Live Website
     (push)    (auto-deploy)

Every time you:
1. Make changes locally
2. Commit: git commit -m "message"
3. Push: git push

Vercel automatically rebuilds and deploys!
```

---

## 🎨 Add Custom Domain (Optional)

Want your own domain like `link3erp.com`?

1. Go to Vercel Dashboard → Your Project
2. Go to **Settings → Domains**
3. Enter your domain (e.g., `link3erp.com`)
4. Vercel shows DNS records
5. Update DNS in your domain registrar:
   - GoDaddy
   - Namecheap
   - Google Domains
   - Any registrar you use
6. Wait 24-48 hours for DNS to update
7. Your site is now at `https://link3erp.com` ✅

---

## 🚀 Deploy Backend (For Full Stack - Optional)

If you want to use the full database functionality:

### Deploy to Railway.app (Free)

1. Go to https://railway.app
2. Click **New Project**
3. Select **"Deploy from GitHub repo"**
4. Connect GitHub & select Link3-ERP
5. Railway auto-detects Node.js backend
6. In **Variables** tab, add:
   ```
   MONGODB_URI=mongodb+srv://user:pass@cluster.net/link3-erp
   NODE_ENV=production
   CORS_ORIGIN=https://YOUR-VERCEL-DOMAIN
   ```
7. Deploy - Get public URL

8. **Update Vercel** with backend URL:
   - Vercel Dashboard → Settings → Environment Variables
   - Change `NEXT_PUBLIC_API_URL` to your Railway URL
   - Vercel auto-redeploys ✅

---

## 📊 MongoDB Setup (Free Database)

For backend database:

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up (free)
3. Create cluster
4. Add user with password
5. Get connection string
6. Use it in backend `.env`:
   ```
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/link3-erp
   ```

---

## ✅ Verify Everything Works

### Check Frontend
- Visit your Vercel URL
- Should see dashboard ✅

### Check Backend (if deployed)
- Visit `https://your-backend-url/api/health`
- Should see: `{"status":"Backend is running ✅"}`

---

## 🐛 Troubleshooting

### "ENOENT: Cannot find package.json"
- Make sure root directory in Vercel is `frontend/`
- Check that package.json exists in frontend/ folder

### "Git push fails"
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/Link3-ERP.git
git push -u origin main
```

### "Vercel deployment fails"
- Check build logs in Vercel Dashboard
- Verify `frontend/package.json` exists
- Make sure root directory is `frontend/`

### "Cannot connect to API"
- Backend must be deployed first
- Update `NEXT_PUBLIC_API_URL` in Vercel
- Restart Vercel deployment

---

## 📱 Share Your Website

Once live on Vercel, you can:

✅ Send the URL to anyone  
✅ Post on social media  
✅ Add to your portfolio  
✅ Give to clients  

Example:
> Check out my new ERP system: https://link3-erp.vercel.app

---

## 📚 Next Steps

1. **Push to GitHub** (Step 1)
2. **Deploy to Vercel** (Step 2)
3. **Test your site** ✅
4. **Share the link**
5. (Optional) Deploy backend on Railway
6. (Optional) Add custom domain

---

## 📞 Support

If you get stuck:
1. Check Vercel build logs
2. Check GitHub Actions (if set up)
3. Read error messages carefully
4. Try redeploying

**Your site will be live in 10 minutes!** 🚀

Good luck! Let me know when you get your Vercel link!
