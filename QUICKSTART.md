# Quick Start Guide

Get your Dream Symbols app running in 3 simple steps!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages (Next.js, React, TypeScript, Tailwind CSS).

## Step 2: Start Development Server

```bash
npm run dev
```

The app will start at [http://localhost:3000](http://localhost:3000)

## Step 3: Explore the App!

- Try searching for "water", "lion", or "flying"
- Click any symbol card to see full details
- Filter by categories like "Animals", "Numbers", or "Colors"
- Test on mobile by resizing your browser window

## Ready to Deploy?

### Option 1: Deploy to Vercel (Easiest)

1. Push this code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"
5. Done! Your app is live 🎉

### Option 2: Build Locally

```bash
npm run build
npm start
```

## File Structure Overview

```
📁 app/
  └─ page.tsx         ← Main app logic here
  └─ globals.css      ← Customize colors here

📁 components/
  └─ SymbolCard.tsx   ← Edit card appearance
  └─ CategoryFilter.tsx ← Modify filter buttons

📁 public/
  └─ dream-symbols.json ← Add/edit symbols here

📁 types/
  └─ index.ts         ← TypeScript types
```

## Common Customizations

### Change the Purple Theme

Open any component file and find/replace:
- `purple-900` with your dark color
- `purple-600` with your accent color
- `purple-200` with your light color

### Add More Symbols

Edit `public/dream-symbols.json`:

```json
{
  "symbol": "YOUR SYMBOL",
  "meaning": "What it represents...",
  "category": "Category Name",
  "keywords": ["keyword1", "keyword2"]
}
```

### Modify Grid Layout

In `app/page.tsx`, line ~215:
```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
           ↑ mobile      ↑ tablet      ↑ desktop
```

Change these numbers to adjust columns per screen size.

## Need Help?

Check the full README.md for detailed documentation!
