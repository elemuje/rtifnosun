# RTIFN Osun — Vite React Website

> **Relax, Tinubu Is Fixing Nigeria** — Official Osun State Chapter Website

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser at http://localhost:5173
```

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## ☁️ Deploy to Vercel (3 steps)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "RTIFN Osun website"
   git remote add origin https://github.com/YOURUSERNAME/rtifn-osun.git
   git push -u origin main
   ```

2. **Import on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project" → select your repo
   - Framework: **Vite** (auto-detected)
   - Click **Deploy**

3. **Done!** Your site is live at `https://rtifn-osun.vercel.app`

## 📁 Project Structure

```
rtifn-osun/
├── index.html              ← Entry HTML
├── vite.config.js          ← Vite config
├── vercel.json             ← Vercel SPA routing fix
├── package.json
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← Router + layout
    ├── index.css           ← Global styles
    ├── data/
    │   └── content.js      ← ALL site content (edit here!)
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx        ← Homepage
        ├── StaticPages.jsx ← About, Executives, Achievements, Events, Gallery
        ├── Blog.jsx        ← Blog list + post detail
        └── Forms.jsx       ← Join + Contact forms
```

## ✏️ How to Edit Content

All website content lives in **`src/data/content.js`**. Edit that file to:

- Change contact details (`SITE_CONFIG`)
- Add/edit blog posts (`BLOG_POSTS`)
- Update achievements (`ACHIEVEMENTS`)
- Edit executive profiles (`EXECUTIVES`)
- Add/remove events (`EVENTS`)
- Update gallery items (`GALLERY_ITEMS`)

## 🎨 Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about` | About RTIFN |
| `/executives` | Meet Our Executives |
| `/blog` | Blog listing (with category filter) |
| `/blog/:id` | Blog post detail |
| `/achievements` | Tinubu Achievements Tracker |
| `/events` | Events calendar |
| `/gallery` | Media gallery |
| `/join` | Membership registration form |
| `/contact` | Contact page |

---
*"Relax, Tinubu Is Fixing Nigeria"* 🇳🇬
