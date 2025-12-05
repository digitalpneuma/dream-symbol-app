# Dream Symbols Lookup App

A modern, mobile-responsive web application for looking up dream symbol meanings. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Real-time Search**: Search across 611 dream symbols, meanings, and keywords
- **Category Filtering**: Filter symbols by 156+ categories
- **Expandable Cards**: Click any symbol card to see full details and keywords
- **Purple Theme**: Beautiful deep purple color scheme with gradient backgrounds
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Polished transitions and hover effects

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository or download the project files

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
dream-symbols-app/
├── app/
│   ├── page.tsx          # Main application page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles and animations
├── components/
│   ├── SymbolCard.tsx    # Individual symbol card component
│   └── CategoryFilter.tsx # Category filter buttons
├── types/
│   └── index.ts          # TypeScript type definitions
├── public/
│   └── dream-symbols.json # Dream symbols data (611 entries)
└── package.json
```

## How It Works

### Data Structure

The dream symbols data is stored in `/public/dream-symbols.json` with the following structure:

```json
{
  "symbol": "string",      // Symbol name (e.g., "WATER", "LION")
  "meaning": "string",     // Detailed interpretation
  "category": "string",    // Category (e.g., "Animals / State")
  "keywords": ["string"]   // Array of searchable keywords
}
```

### Main Components

1. **`app/page.tsx`** - Main application component
   - Loads dream symbols data on mount
   - Handles search and category filtering logic
   - Manages application state
   - Renders responsive grid layout

2. **`components/SymbolCard.tsx`** - Symbol card component
   - Displays symbol name, category, and meaning preview
   - Expands on click to show full details and keywords
   - Smooth animations for expand/collapse

3. **`components/CategoryFilter.tsx`** - Category filter
   - Dynamically generates filter buttons from data
   - Highlights active category
   - Responsive scrollable layout

## Customization Guide

### Changing Colors

The app uses Tailwind CSS classes with a purple theme. To change colors, search and replace in all component files:

- `purple-900` → your dark color
- `purple-800` → your medium color
- `purple-600` → your accent color
- `purple-200` → your light text color

### Modifying the Data

Edit `/public/dream-symbols.json` to add, remove, or modify symbols. The app will automatically:
- Update the category list
- Adjust search results
- Maintain alphabetical sorting

### Adjusting Layout

In `app/page.tsx`, find the grid layout section:
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
```

Change the column counts:
- `grid-cols-1` - mobile (1 column)
- `sm:grid-cols-2` - tablet (2 columns)
- `lg:grid-cols-3` - desktop (3 columns)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Visit [vercel.com](https://vercel.com)

3. Click "Import Project" and select your repository

4. Vercel will auto-detect Next.js and deploy with optimal settings

5. Your app will be live in minutes!

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management

## License

This project is open source and available for personal and commercial use.
