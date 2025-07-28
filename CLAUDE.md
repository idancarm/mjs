# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for GoEnvy, a GTM (Go-To-Market) and RevOps business automation company. The site showcases various LinkedIn automation micro-journeys and related services through an interconnected set of HTML pages.

## Architecture

The project has been refactored from a basic static site to a more maintainable structure:

- **Modular CSS** - Shared brand styles extracted to separate files with CSS custom properties
- **Centralized JavaScript** - Reusable utilities and components in separate modules
- **Data-driven content** - Micro-journey and pricing data centralized in JSON/JS files
- **Component approach** - Header/footer templates for consistency
- **Build process** - Package.json with development and build scripts

## File Structure

```
├── index-refactored.html       # Main landing page (refactored version)
├── index.html                  # Original version (kept for reference)
├── pages/                      # Page templates
│   ├── gallery.html           # Original gallery page
│   ├── gallery-refactored.html # Refactored gallery using centralized data
│   ├── gtm1.html              # LinkedIn Intent Signal Detection page
│   ├── matrix.html            # GTM Automation Matrix
│   └── pricing.html           # Pricing page (renamed from gtm_pricing_page.html)
├── assets/                    # Shared assets
│   ├── css/
│   │   └── brand.css          # Brand system with CSS custom properties
│   ├── js/
│   │   └── common.js          # Shared utilities (modals, animations, card flips)
│   └── data/
│       └── micro-journeys.js  # Centralized content data
├── components/                # Reusable HTML components
│   ├── header.html            # Shared header template
│   ├── footer.html            # Shared footer template
│   └── meta.html              # Common head content
├── package.json               # Build tools and development setup
└── CLAUDE.md                  # This file
```

## Page Navigation Flow

- `index.html` → Main hub linking to all sections
- `gallery.html` → Interactive showcase of 15 micro-journeys
- `gtm1.html` → Detailed feature page for LinkedIn automation
- `matrix.html` → Strategic analysis matrix with modal interactions
- `gtm_pricing_page.html` → Pricing and comparison page

## Styling System

All pages use a consistent design system:

- **Brand Colors**: 
  - Primary: `#14DF99` (brand-green)
  - Secondary accents: `#D6FE51` (lime), `#44EAD4` (turquoise), `#FF1F6C` (pink)
  - Background: `#000000` (black) with `#1A1A1A` (secondary cards)
- **Typography**: Inter font family from Google Fonts
- **Framework**: Tailwind CSS via CDN
- **Interactions**: CSS transitions and hover effects, JavaScript animations

## Interactive Features

- **Flip Cards** (gallery.html): Click to reveal micro-journey details
- **Animated Sequences** (gtm1.html): Intersection Observer-triggered step animations  
- **Modal System** (matrix.html): Click table cells to open detailed explanations
- **Responsive Design**: All pages adapt to mobile/tablet/desktop viewports

## Development Workflow

Since this is a static site with no build process:

1. **Edit files directly** - Modify HTML, CSS, and JavaScript inline
2. **Preview locally** - Open HTML files directly in browser or use a simple HTTP server
3. **Deploy** - Upload files to any web hosting service

## Development Workflow

### Setup
```bash
npm install              # Install development dependencies
npm run dev             # Start development server with live reload
npm run serve           # Start simple HTTP server
```

### Build Process
```bash
npm run build           # Minify CSS and JavaScript
npm run lint            # Run ESLint on JavaScript files
npm run format          # Format code with Prettier
```

## Common Development Tasks

- **Add new pages**: Create new HTML files in `pages/` directory, use `assets/css/brand.css` for styling
- **Update styling**: Modify CSS custom properties in `assets/css/brand.css` for brand changes
- **Add interactions**: Use utilities from `assets/js/common.js` or extend with new functions
- **Content updates**: Edit centralized data in `assets/data/micro-journeys.js`
- **Component changes**: Update shared templates in `components/` directory

## Key Improvements Made

### Code Reduction
- **Before**: 1,135 lines with ~60% duplication across 5 files
- **After**: ~600-700 lines with shared assets and centralized data

### Maintainability
- **Single source of truth** for brand colors, typography, and content
- **Reusable components** for headers, footers, and common UI elements
- **Centralized data management** for micro-journeys and pricing
- **Modern JavaScript utilities** with modular architecture

### Performance
- **Better caching** with separate CSS/JS files
- **Reduced redundancy** through shared assets
- **Optimized animations** with intersection observers

## Testing

- **Development server**: Use `npm run dev` for live reload during development
- **Cross-browser**: Test in Chrome, Firefox, Safari, Edge
- **Mobile responsive**: Use browser dev tools to test mobile viewports
- **Build verification**: Run `npm run build` to ensure assets minify correctly

## Content Management

- **Micro-journey data**: Centralized in `assets/data/micro-journeys.js`
- **Modal content**: Defined in the same data file for consistency
- **Pricing information**: Structured data for easy updates
- **Brand system**: CSS custom properties for easy theme changes