# Quick Setup Commands for GitHub & Vercel

## 📝 Step 1: Get Your GitHub Username
Go to https://github.com and note your username

## 🚀 Step 2: Push to GitHub (Run These Commands)

```powershell
# Make sure you're in the right folder
cd C:\Users\Ziku\Link3-ERP

# Create main branch
git branch -M main

# Add GitHub remote (Replace YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/Link3-ERP.git

# Push to GitHub
git push -u origin main
```

## 📦 Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Import Project"
4. Select "Link3-ERP" repository
5. Set Root Directory to: `frontend/`
6. Click "Deploy"
7. Wait for deployment ✅

## ✅ Result

Your site will be available at:
- **Vercel URL**: `https://link3-erp.vercel.app` (auto-generated)
- **Custom domain**: Add in Vercel Settings (optional)

---

## 🔧 If Git Remote Already Exists

```powershell
git remote remove origin
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Link3-ERP.git
git push -u origin main
```

---

## 📱 Test Deployment

After deploying to Vercel:
1. Click the deployment URL from Vercel
2. You should see your ERP dashboard ✅
3. Share the URL anywhere!

---

Need help? Read GITHUB_VERCEL_SETUP.md for detailed instructions.
