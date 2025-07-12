# LegalAI Brand Site - Comprehensive Design System Documentation

This document contains all the essential design specifications, patterns, and implementation details needed to recreate the exact look and feel of the LegalAI brand site in another application.

## Important: Theme-Elegant Implementation

**This site uses the `theme-elegant` design system, NOT the default theme.** Key differences include:

1. **Font**: Uses **Poppins** (not DM Sans)
2. **Colors**: Dark mode uses `#171717` (not `#010101`)
3. **Spacing**: Section padding is `160px` (not `120px`)
4. **Components**: Custom border styles and hover effects
5. **Background**: Uses `/assets/images/demo-elegant/scales_of_justice_hero.jpg`

Always apply the `theme-elegant` class to the root element and use theme-specific overrides documented in Section 4.

## Table of Contents
1. [Technology Stack](#technology-stack)
2. [Logo Design](#logo-design)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Spacing System](#spacing-system)
6. [Layout System](#layout-system)
7. [Component Styles](#component-styles)
8. [Animation System](#animation-system)
9. [Dark Mode Support](#dark-mode-support)
10. [Responsive Design](#responsive-design)
11. [CSS Architecture](#css-architecture)

---

## 1. Technology Stack

### Core Dependencies
```json
{
  "@popperjs/core": "2.11.8",
  "bootstrap": "^5.1.3",
  "imagesloaded": "^5.0.0",
  "isotope-layout": "^3.0.6",
  "jarallax": "^2.2.1",
  "next": "15.1.6",
  "photoswipe": "^5.4.4",
  "prop-types": "^15.8.1",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "react-photoswipe-gallery": "^3.0.1",
  "react-type-animation": "^3.2.0",
  "rellax": "^1.12.1",
  "swiper": "^11.2.2",
  "tippy.js": "^6.3.7",
  "wowjs": "^1.1.3"
}
```

### CSS Framework
- **Bootstrap 5.1.3** as the base CSS framework
- Custom CSS layered on top for specific styling
- No CSS-in-JS libraries (traditional CSS files only)
- No Tailwind CSS or PostCSS

### Required CSS Files
```
/assets/css/
├── styles.css           # Main import file
├── style.css            # Core styles
├── style-responsive.css # Responsive utilities
├── custom.css           # Custom overrides
├── bootstrap.min.css    # Bootstrap framework
├── vertical-rhythm.min.css
├── magnific-popup.css
├── owl.carousel.css
├── splitting.css        # Text animation
├── YTPlayer.css
├── icons.css
├── icomoon.css
└── font-awesome-brands.css
```

### Third-Party CSS (via npm imports)
```javascript
import "swiper/css"
import "swiper/css/effect-fade"
import "jarallax/dist/jarallax.min.css"
import "photoswipe/dist/photoswipe.css"
import "tippy.js/dist/tippy.css"
```

---

## 2. Logo Design

### Logo Specifications

The LegalAI logo consists of two main elements: the logomark (icon) and the wordmark (text). The logo is designed to be modern, professional, and scalable across all sizes.

#### Logo Files
```
/public/
├── ligitai_logo.png              # Main logo with text (400x100px)
├── ligitai_logo_dark.png         # Dark mode variant
├── ligitai_icon.png              # Icon only (100x100px)
└── scales_of_justice_logo.svg    # Original SVG source
```

#### Logo Construction

**1. Logomark (Icon)**
- **Base Shape**: Modern interpretation of scales of justice
- **Dimensions**: 100x100px (1:1 aspect ratio)
- **Elements**:
  - Central vertical beam: 4px width, extends full height
  - Balance arms: 60px width, 3px height, positioned at 30% from top
  - Balance pans: Circular elements, 24px diameter
  - Gradient overlay: Uses primary gradient (--gradient-primary-1)

**2. Wordmark (Text)**
- **Font**: "DM Sans", sans-serif
- **Weight**: 600 (Semi-Bold)
- **Size**: 36px
- **Letter Spacing**: -0.02em
- **Text**: "LegalAI" or "Ligit.AI" depending on brand usage

#### Logo Color Schemes

**Light Mode Logo**
```css
.logo-light {
  /* Logomark */
  --logo-primary: #4567ed;
  --logo-secondary: #7752e7;
  --logo-accent: #b947d9;
  
  /* Wordmark */
  --logo-text: #010101;
  
  /* Gradient fill for icon */
  background: linear-gradient(90deg, #e748b1 0%, #b947d9 33%, #7752e7 67%, #4567ed 100%);
}
```

**Dark Mode Logo**
```css
.logo-dark {
  /* Logomark */
  --logo-primary: #ffffff;
  --logo-secondary: #f1f1f1;
  
  /* Wordmark */
  --logo-text: #ffffff;
  
  /* Simplified for dark backgrounds */
  background: #ffffff;
}
```

#### Logo Implementation

**HTML Structure**
```html
<!-- Full Logo -->
<a href="/" className="logo">
  <img 
    src="/ligitai_logo.png" 
    alt="LegalAI"
    width="160"
    height="40"
    className="light-mode-logo"
  />
  <img 
    src="/ligitai_logo_dark.png" 
    alt="LegalAI"
    width="160"
    height="40"
    className="dark-mode-logo"
  />
</a>

<!-- Icon Only -->
<div className="logo-icon">
  <img 
    src="/ligitai_icon.png" 
    alt="LegalAI Icon"
    width="40"
    height="40"
  />
</div>
```

**CSS Styling**
```css
.logo {
  display: inline-block;
  height: 40px;
  transition: opacity 0.27s ease;
}

.logo:hover {
  opacity: 0.8;
}

.logo img {
  height: 100%;
  width: auto;
  display: block;
}

/* Responsive sizing */
@media (max-width: 768px) {
  .logo {
    height: 32px;
  }
}

/* Dark mode toggle */
.dark-mode-logo {
  display: none;
}

.dark .dark-mode-logo {
  display: block;
}

.light-mode-logo {
  display: block;
}

.dark .light-mode-logo {
  display: none;
}
```

#### Logo Usage Guidelines

1. **Minimum Size**: Never display smaller than 120px width for full logo, 24px for icon only
2. **Clear Space**: Maintain clear space equal to 50% of logo height on all sides
3. **Backgrounds**: 
   - Use light logo on dark backgrounds (#333 or darker)
   - Use dark logo on light backgrounds (#ccc or lighter)
4. **Modifications**: Do not stretch, rotate, or apply effects to the logo
5. **Alignment**: Always center-align vertically in navigation bars

#### Creating the Logo from Scratch

**SVG Template for Scales Icon**
```svg
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Central beam -->
  <rect x="48" y="10" width="4" height="80" fill="url(#gradient1)"/>
  
  <!-- Balance beam -->
  <rect x="20" y="28" width="60" height="3" fill="url(#gradient1)"/>
  
  <!-- Left pan -->
  <circle cx="20" cy="30" r="12" fill="none" stroke="url(#gradient1)" stroke-width="3"/>
  <path d="M8,30 Q20,40 32,30" fill="none" stroke="url(#gradient1)" stroke-width="2"/>
  
  <!-- Right pan -->
  <circle cx="80" cy="30" r="12" fill="none" stroke="url(#gradient1)" stroke-width="3"/>
  <path d="M68,30 Q80,40 92,30" fill="none" stroke="url(#gradient1)" stroke-width="2"/>
  
  <!-- Base -->
  <path d="M35,85 L50,90 L65,85" fill="url(#gradient1)"/>
  
  <!-- Gradient definition -->
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#e748b1"/>
      <stop offset="33%" style="stop-color:#b947d9"/>
      <stop offset="67%" style="stop-color:#7752e7"/>
      <stop offset="100%" style="stop-color:#4567ed"/>
    </linearGradient>
  </defs>
</svg>
```

**Font-based Wordmark CSS**
```css
.logo-text {
  font-family: "DM Sans", sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-dark-1);
  
  /* Optional: Gradient text effect */
  background: var(--gradient-primary-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

#### Logo Animation (Optional)

```css
/* Subtle hover animation */
@keyframes logoFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

.logo:hover .logo-icon {
  animation: logoFloat 1s ease-in-out infinite;
}

/* Loading state animation */
@keyframes logoPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.logo.loading {
  animation: logoPulse 1.5s ease-in-out infinite;
}
```

---

## 3. Color Palette

### CSS Variables (Root)
```css
:root {
  /* Dark Colors */
  --color-dark-1: #010101;
  --color-dark-2: #171717;
  --color-dark-3: #272727;
  --color-dark-3a: #333;
  --color-dark-4: #555;
  
  /* Gray Colors */
  --color-gray-1: #757575;
  --color-gray-2: #888;
  --color-gray-3: #999;
  --color-gray-light-1: #f1f1f1;
  --color-gray-light-2: #f7f7f7;
  --color-gray-light-3: #e5e5e5;
  --color-gray-light-4: #d5d5d5;
  --color-gray-light-5: #ccc;
  --color-gray-light-6: #bbb;
  
  /* Dark Mode Grays */
  --color-dark-mode-gray-1: rgba(255, 255, 255, 0.7);
  --color-dark-mode-gray-2: rgba(255, 255, 255, 0.1275);
  
  /* Primary Colors */
  --color-primary-1: #4567ed;
  --color-primary-1-a: #375ae3;
  --color-primary-light-1: #e3effe;
  --color-primary-light-1-a: #bcd1f1;
  --color-primary-2: #7752e7;
  --color-primary-light-2: #e7defe;
  --color-primary-3: #b947d9;
  --color-primary-light-3: #f7defe;
  --color-primary-4: #e748b1;
  --color-primary-light-4: #ffe1f5;
  
  /* Secondary Colors */
  --color-secondary-1: #fbe3a1;
}
```

### Gradients
```css
:root {
  /* Primary Gradient - Used for buttons, accents */
  --gradient-primary-1: linear-gradient(
    90deg,
    var(--color-primary-4) 0%,
    var(--color-primary-3) 33%,
    var(--color-primary-2) 67%,
    var(--color-primary-1) 100%
  );
  
  /* Gray Gradients */
  --gradient-gray-light-1: linear-gradient(0deg, #f5f5f5 0%, #fff 100%);
  --gradient-gray-light-2: linear-gradient(0deg, #fff 0%, #f5f5f5 100%);
  
  /* Alpha Gradients */
  --gradient-dark-alpha-1: linear-gradient(
    90deg,
    var(--color-dark-1) 40%,
    transparent 87%
  );
  --gradient-primary-alpha-1: linear-gradient(
    90deg,
    var(--color-primary-1) 40%,
    transparent 87%
  );
}
```

---

## 3. Typography

### Font Stack
```css
:root {
  --font-global: "Poppins", sans-serif;  /* Primary font for theme-elegant */
  --font-alt: "Poppins", sans-serif;
  --font-serif: Georgia, "Times New Roman", Times, serif;
}
```

### Font Import
```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Base Typography
```css
/* Theme-elegant specific typography */
.theme-elegant body {
  color: var(--color-dark-1);
  font-family: var(--font-global);
  font-size: 17px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 2;  /* Higher line-height for elegant theme */
}
```

### Heading Styles
```css
/* Theme-elegant heading styles */
.theme-elegant h1, .theme-elegant .h1 {
  margin-bottom: 0.69em;
  font-size: 42px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.theme-elegant h2, .theme-elegant .h2 {
  margin-bottom: 0.72em;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.theme-elegant h3, .theme-elegant .h3 {
  margin-bottom: 0.89em;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.theme-elegant h4, .theme-elegant .h4 {
  margin-bottom: 1.08em;
  font-size: 23px;
  font-weight: 400;
  line-height: 1.3;
}

.theme-elegant h5, .theme-elegant .h5 {
  margin-bottom: 1.28em;
  font-size: 19.5px;
  font-weight: 400;
  line-height: 1.4;
}

.theme-elegant h6, .theme-elegant .h6 {
  margin-bottom: 1.28em;
  font-size: 16.5px;
  font-weight: 600;
  line-height: 1.4;
}

/* Section title specific */
.theme-elegant .section-title {
  font-size: 34px;
  font-weight: 300;
  line-height: 1.41;
  letter-spacing: -0.02em;
}
```

### Text Utilities
```css
/* Font sizes */
.size-13 { font-size: 13.5px !important; }
.size-14 { font-size: 14px !important; }
.size-15 { font-size: 15px !important; }
.size-16 { font-size: 16px !important; }
.size-17 { font-size: 17px !important; }
.size-18 { font-size: 18.5px !important; }
.size-20 { font-size: 20px !important; }
.size-22 { font-size: 22px !important; }
.size-24 { font-size: 24px !important; }
```

### Theme-Specific Typography (Bold Theme)
```css
.theme-bold {
  --font-global: "Roboto", sans-serif;
  --font-alt: "Clash Display", sans-serif;
}

/* Custom font face for Bold theme */
@font-face {
  font-family: "Clash Display";
  src: url("/assets/webfonts/clash-display/ClashDisplay-Regular.woff2") format("woff2"),
       url("/assets/webfonts/clash-display/ClashDisplay-Regular.woff") format("woff");
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}
```

---

## 4. Theme-Elegant Overrides

### CSS Variable Overrides
```css
/* Theme-elegant specific variables */
.theme-elegant {
  /* Colors */
  --color-dark-1: #111;  /* Darker than base */
  
  /* Spacing */
  --section-padding-y: 160px;  /* Larger than base 120px */
  
  /* Typography */
  --font-global: "Poppins", sans-serif;
  --font-alt: "Poppins", sans-serif;
  
  /* Transitions */
  --transition-default: all 0.27s cubic-bezier(0, 0, 0.58, 1);
}

/* Dark mode specific */
.theme-elegant .dark-mode {
  --color-dark-1: #171717;
  --color-dark-2: #222;
  --color-dark-3: #333;
  --color-gray-light-1: rgba(255, 255, 255, 0.1);
  --color-gray-light-2: rgba(255, 255, 255, 0.05);
}
```

### Component-Specific Overrides
```css
/* Buttons */
.theme-elegant .btn-mod {
  border-width: 2px;
  font-weight: 600;
  padding: 15px 40px;
  font-size: 13px;
  letter-spacing: 0.06em;
}

.theme-elegant .btn-mod.btn-large {
  padding: 19px 48px;
  font-size: 14px;
}

/* Service items */
.theme-elegant .services-3-item {
  padding: 60px 40px;
  background: transparent;
  border: 1px solid var(--color-gray-light-3);
  transition: all 0.27s ease;
}

.theme-elegant .services-3-item:hover {
  border-color: var(--color-primary-1);
  transform: translateY(-5px);
}

.theme-elegant .services-3-item .services-3-icon {
  font-size: 48px;
  line-height: 1;
  margin-bottom: 30px;
  background: var(--gradient-primary-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Team items */
.theme-elegant .team-3-item {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  border-radius: 8px;
}

.theme-elegant .team-3-item:hover {
  transform: translateY(-10px);
}

.theme-elegant .team-3-item .team-3-text {
  padding: 30px;
  background: #fff;
}

/* Features */
.theme-elegant .features-2-item {
  background: transparent;
  border: 1px solid var(--color-gray-light-3);
  padding: 40px;
  height: 100%;
  transition: all 0.27s ease;
}

.theme-elegant .features-2-item:hover {
  border-color: var(--color-primary-1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Section titles */
.theme-elegant .section-descr {
  font-size: 17px;
  line-height: 1.9;
  color: var(--color-gray-1);
}

/* Contact form */
.theme-elegant .form input.input-lg,
.theme-elegant .form textarea {
  background: transparent;
  border: 1px solid var(--color-gray-light-3);
  padding: 15px 20px;
  font-size: 15px;
}

.theme-elegant .form input.input-lg:focus,
.theme-elegant .form textarea:focus {
  border-color: var(--color-primary-1);
}
```

---

## 5. Spacing System

### Global Spacing Variables
```css
:root {
  --full-wrapper-margin-x: 30px;
  --container-width: 1350px;
  --section-padding-y: 120px;
  --menu-bar-height: 85px;
  --menu-bar-height-scrolled: 65px;
}
```

### Container & Grid
```css
.container {
  max-width: var(--container-width);
  padding: 0 30px;
}

/* Default row gutter */
.row {
  --bs-gutter-x: 30px;
}

/* Large gutter variant */
.row.gx-huge {
  --bs-gutter-x: 276px;
}
```

### Margin/Padding Utilities (Bootstrap-based)
```
mb-0 to mb-5    (margin-bottom)
mt-0 to mt-5    (margin-top)
me-0 to me-5    (margin-end/right)
ms-0 to ms-5    (margin-start/left)
p-0 to p-5      (padding all sides)
px-0 to px-5    (padding horizontal)
py-0 to py-5    (padding vertical)
```

### Responsive Spacing
```css
/* Mobile spacing variants */
mb-xs-30  /* 30px margin-bottom on mobile */
mb-sm-40  /* 40px margin-bottom on small screens */
mb-md-60  /* 60px margin-bottom on medium screens */
```

---

## 5. Layout System

### Page Structure
```jsx
<main>
  <nav className="main-nav">...</nav>
  
  <section className="page-section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">...</div>
        <div className="col-md-6">...</div>
      </div>
    </div>
  </section>
  
  <footer className="footer">...</footer>
</main>
```

### Section Classes
```css
.page-section {
  padding: var(--section-padding-y) 0;
  position: relative;
}

.min-height-100vh {
  min-height: 100vh !important;
  min-height: 100svh !important;
}

.min-height-90vh {
  min-height: 90vh;
}

.min-height-80vh {
  min-height: 80vh;
}
```

### Positioning Utilities
```css
.relative { position: relative !important; }
.z-index-1 { z-index: 1 !important; }
.z-index-n1 { z-index: -1 !important; }
.stick-fixed {
  position: fixed !important;
  top: 0;
  left: 0;
}
.block-sticky {
  position: sticky;
  top: calc(var(--menu-bar-height-scrolled) + 40px);
  left: 0;
}
```

---

## 6. Component Styles

### Buttons
```css
/* Base button styles */
.btn-mod {
  display: inline-block;
  padding: 8px 21px;
  background: var(--color-dark-1);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: var(--border-radius-default);
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  transition: var(--transition-default);
}

/* Button sizes */
.btn-mod.btn-small {
  padding: 4px 14px;
  font-size: 11px;
}

.btn-mod.btn-medium {
  padding: 12px 28px;
  font-size: 13px;
}

.btn-mod.btn-large {
  padding: 17px 35px;
  font-size: 14px;
}

/* Button variants */
.btn-mod.btn-w {
  background: #fff;
  color: var(--color-dark-1);
}

.btn-mod.btn-border {
  background: none;
  border: 1px solid var(--color-dark-1);
  color: var(--color-dark-1);
}

.btn-mod.btn-border-w {
  background: none;
  border: 1px solid #fff;
  color: #fff;
}

.btn-mod.btn-grad {
  color: #fff !important;
  background-image: var(--gradient-primary-1);
  background-repeat: no-repeat;
  border: none;
}

/* Circle buttons */
.btn-mod.btn-circle {
  border-radius: 27px;
}

.btn-mod.btn-ellipse {
  border-radius: 700px;
}
```

### Forms
```css
/* Input fields */
.form input[type="text"],
.form input[type="email"],
.form input[type="number"],
.form input[type="url"],
.form input[type="search"],
.form input[type="tel"],
.form input[type="password"],
.form select {
  display: inline-block;
  height: 27px;
  vertical-align: middle;
  font-size: 13px;
  font-weight: 400;
  color: var(--color-dark-1);
  border: 1px solid rgba(0, 0, 0, 0.183);
  padding: 2px 7px 0 7px;
  border-radius: 0;
  box-shadow: none;
  transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
}

/* Input sizes */
.form input.input-sm { height: 37px; font-size: 14px; padding: 0 10px; }
.form input.input-md { height: 46px; font-size: 15px; padding: 0 15px; }
.form input.input-lg { height: 52.5px; font-size: 16px; padding: 0 20px; }

/* Form labels */
.form label {
  display: inline-block;
  margin-bottom: 7px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
}

/* Form groups */
.form .form-group {
  margin-bottom: 21px;
}
```

### Cards & Service Items
```css
/* Service item base */
.services-3-item {
  position: relative;
  padding: 40px;
  background: #fff;
  text-align: center;
  transition: var(--transition-default);
  border-radius: var(--border-radius-default);
  box-shadow: var(--box-shadow);
}

.services-3-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-strong);
}

/* Feature box */
.features-2-item {
  position: relative;
  padding: 30px;
  background: var(--color-gray-light-2);
  transition: var(--transition-default);
}

.features-2-item:before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--color-dark-1);
  background: none;
  opacity: 0.15;
  transition: opacity 0.27s var(--ease-default);
  z-index: -1;
}

.features-2-item:hover:before {
  opacity: 1;
}
```

### Navigation
```css
/* Main navigation */
.main-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--menu-bar-height);
  background: #fff;
  z-index: 1000;
  transition: height 0.3s ease;
}

.main-nav.scrolled {
  height: var(--menu-bar-height-scrolled);
}

/* Navigation links */
.inner-nav ul {
  font-size: 15px;
  font-weight: 400;
}

.inner-nav ul li {
  display: inline-block;
  margin: 0 20px;
}

.inner-nav ul li a {
  color: var(--color-dark-1);
  text-decoration: none;
  transition: var(--transition-default);
}
```

---

## 7. Animation System

### Transition Variables
```css
:root {
  --transition-default: all 0.27s cubic-bezier(0, 0, 0.58, 1);
  --ease-default: cubic-bezier(0, 0, 0.58, 1);
  --ease-out-long: cubic-bezier(0, 0.5, 0, 1);
  --ease-out-medium: cubic-bezier(0, 0.57, 0.55, 1);
  --ease-out-short: cubic-bezier(0.15, 0.7, 0.78, 1);
  --ease-elastic-1: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  --ease-elastic-2: cubic-bezier(0.68, -3, 0.27, 5);
}
```

### WOW.js Animations
```jsx
// Usage in components
<div className="wow fadeInUp" data-wow-delay="0.4s">
  Content here
</div>
```

### Text Splitting Animations
```css
/* Splitting.js setup */
.splitting .word,
.splitting .char {
  display: inline-block;
}

/* Character animation */
.charsAnimIn .char {
  animation: charsAnimIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: calc(0.03s * var(--char-index));
}

@keyframes charsAnimIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Parallax Effects
```javascript
// Jarallax for background parallax
import { jarallax } from "jarallax";

// Rellax for element parallax
import Rellax from "rellax";

// CSS classes
.parallax-5 {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

[data-rellax-speed] {
  transition: transform 0.25s var(--ease-out-short);
  will-change: transform;
}
```

### Hover Effects
```css
/* Link hover animation */
.link-hover-anim {
  position: relative;
  display: inline-block;
  transition: var(--transition-default);
}

.link-hover-anim:before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition: transform 0.27s var(--ease-default);
}

.link-hover-anim:hover:before {
  transform: scaleX(1);
}
```

---

## 8. Dark Mode Support

### Dark Mode Structure
```jsx
/* Page wrapper structure for dark sections */
<div className="dark-mode">
  <main id="main">
    <section className="page-section bg-dark-1 light-content">
      {/* Dark section content */}
    </section>
  </main>
</div>
```

### Dark Mode Implementation
```css
/* Dark background sections */
.bg-dark-1 { background: var(--color-dark-1) !important; }
.bg-dark-2 { background: var(--color-dark-2) !important; }

/* Theme-elegant dark mode variables */
.theme-elegant.dark-mode,
.theme-elegant .dark-mode {
  --color-dark-1: #171717;
  --color-dark-2: #222;
  --color-dark-3: #333;
}

/* Light content modifier */
.light-content {
  color: #fff;
}

.light-content h1,
.light-content h2,
.light-content h3,
.light-content h4,
.light-content h5,
.light-content h6 {
  color: #fff;
}

.light-content a {
  color: #fff;
}

.light-content .text-gray {
  color: var(--color-dark-mode-gray-1);
}

/* Dark mode specific components */
.dark-mode .services-3-item,
.light-content .services-3-item {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.dark-mode .btn-mod.btn-border,
.light-content .btn-mod.btn-border {
  border-color: #fff;
  color: #fff;
}

.dark-mode .btn-mod.btn-border:hover,
.light-content .btn-mod.btn-border:hover {
  background: #fff;
  color: var(--color-dark-1);
}
```

### Dark Mode Toggle (Custom CSS)
```css
.dark-mode .dark-white {
  color: white !important;
}

.dark-mode-logo {
  display: none;
}

.dark .dark-mode-logo {
  display: block;
}

.light-mode-logo {
  display: block;
}

.dark .light-mode-logo {
  display: none;
}
```

---

## 9. Responsive Design

### Breakpoints (Bootstrap 5)
```css
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { ... }

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) { ... }
```

### Responsive Typography
```css
@media only screen and (max-width: 1366px) {
  .hs-title-1 {
    font-size: calc(1.5rem + 3vw) !important;
  }
  
  .section-title {
    font-size: calc(1.179rem + 2.5vw) !important;
  }
  
  .section-title-small {
    font-size: calc(1.136rem + 1.82vw) !important;
  }
}
```

### Mobile Navigation
```css
@media (max-width: 1024px) {
  .mobile-on .desktop-nav {
    height: fit-content;
    max-height: 0px;
    display: block !important;
    overflow: scroll;
    transition: 0.6s;
  }
  
  .mobile-on .mn-sub {
    transition: max-height 0.3s ease-in-out;
  }
  
  .mobile-on .mn-sub.open {
    max-height: 200px;
    overflow: auto !important;
    opacity: 1 !important;
  }
}
```

---

## 10. CSS Architecture

### File Import Order
```css
/* In styles.css */
@import url("icons.css");
@import url("icomoon.css");
@import url("font-awesome-brands.css");
@import url("bootstrap.min.css");
@import url("vertical-rhythm.min.css");
@import url("magnific-popup.css");
@import url("owl.carousel.css");
@import url("splitting.css");
@import url("YTPlayer.css");
@import url("style.css");
@import url("style-responsive.css");
@import url("demo-elegant/demo-elegant.css"); /* Active theme */
@import url("custom.css");
```

### Naming Conventions
- **BEM-like**: `.block-name`, `.block-name__element`, `.block-name--modifier`
- **Utility classes**: `.mb-60`, `.text-center`, `.light-content`
- **Component classes**: `.btn-mod`, `.services-3-item`, `.features-2-item`
- **Section classes**: `.page-section`, `.home-section`, `.split-section`

### CSS Organization Pattern
1. **Variables** - CSS custom properties
2. **Common styles** - Resets, utilities
3. **Typography** - Font styles, headings
4. **Components** - Buttons, forms, cards
5. **Layout** - Grid, sections, containers
6. **Animations** - Transitions, keyframes
7. **Theme variations** - Dark mode, theme-specific
8. **Responsive** - Media queries

### Special Effects & Utilities

#### Border Radius
```css
:root {
  --border-radius-default: 4px;
  --border-radius-large: 30px;
}

.round { border-radius: var(--border-radius-default) !important; }
.round-large { border-radius: var(--border-radius-large) !important; }
.circle { border-radius: 100px !important; }
.circle-large { border-radius: 700px !important; }
```

#### Box Shadows
```css
:root {
  --box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05),
    0px 1px 1px 0px rgba(0, 0, 0, 0.03), 0px 3px 5px 0px rgba(0, 0, 0, 0.03);
  --box-shadow-strong: 0px 5px 10px 0px rgba(0, 0, 0, 0.08),
    0px 1px 1px 0px rgba(0, 0, 0, 0.06), 0px 3px 5px 0px rgba(0, 0, 0, 0.06);
  --box-shadow-block: 0px 3px 50px 0px rgba(0, 0, 0, 0.05);
  --box-shadow-block-strong: 0px 3px 50px 0px rgba(0, 0, 0, 0.15);
}
```

#### Opacity Utilities
```css
.opacity-003 { opacity: 0.03 !important; }
.opacity-01 { opacity: 0.1 !important; }
.opacity-02 { opacity: 0.2 !important; }
.opacity-03 { opacity: 0.3 !important; }
.opacity-04 { opacity: 0.4 !important; }
.opacity-05 { opacity: 0.5 !important; }
.opacity-06 { opacity: 0.6 !important; }
.opacity-07 { opacity: 0.7 !important; }
.opacity-08 { opacity: 0.8 !important; }
.opacity-09 { opacity: 0.9 !important; }
.opacity-1 { opacity: 1 !important; }
```

---

## Background Images & Implementation

### Hero Background
```css
/* Parallax hero section */
.home-section {
  background-image: url('/assets/images/demo-elegant/scales_of_justice_hero.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

/* With jarallax */
<div className="jarallax" data-jarallax data-speed="0.5">
  <img 
    className="jarallax-img" 
    src="/assets/images/demo-elegant/scales_of_justice_hero.jpg" 
    alt="Background"
  />
</div>
```

### Background Image Assets
```
/public/assets/images/demo-elegant/
├── scales_of_justice_hero.jpg    # Main hero background (1920x1080)
├── legal_ai_background_1920x1080.png  # Alternative background
└── section-bg-1.jpg              # Section background
```

### Parallax Implementation
```jsx
// Initialize jarallax
useEffect(() => {
  if (typeof window !== "undefined") {
    const { jarallax } = require("jarallax");
    
    // Initialize with options
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.5,
      imgSize: "cover",
      imgPosition: "center center"
    });
  }
}, []);

// Component usage
<section className="page-section bg-dark-1 light-content jarallax">
  <img 
    className="jarallax-img" 
    src="/assets/images/demo-elegant/scales_of_justice_hero.jpg" 
    alt="Background"
  />
  <div className="container position-relative">
    {/* Content */}
  </div>
</section>
```

## Implementation Notes

1. **CSS Loading**: All CSS files should be imported in the correct order through the main `styles.css` file
2. **Font Loading**: Use Next.js font optimization or standard `@font-face` declarations
3. **Image Optimization**: Use Next.js Image component with `unoptimized: true` in config
4. **Animations**: Initialize WOW.js and Splitting.js on component mount
5. **Parallax**: Initialize Jarallax and Rellax after DOM is ready
6. **Dark Mode**: Toggle classes on root element or use React context
7. **Responsive**: Use Bootstrap's grid system and custom responsive utilities
8. **Performance**: Consider lazy loading for heavy libraries like Isotope

### React Component Pattern
```jsx
// Example component structure
export default function ServiceCard({ title, description, icon, dark = false }) {
  return (
    <div className={`services-3-item ${dark ? "light-content bg-dark-2" : ""}`}>
      <div className="services-3-icon">
        <i className={icon}></i>
      </div>
      <h3 className="services-3-title">{title}</h3>
      <div className="services-3-text">{description}</div>
    </div>
  );
}
```

### Animation Initialization
```javascript
// In your main layout or app component
useEffect(() => {
  // Initialize WOW.js
  if (typeof window !== "undefined") {
    const WOW = require("wowjs");
    new WOW.WOW().init();
    
    // Initialize Jarallax
    const { jarallax } = require("jarallax");
    jarallax(document.querySelectorAll(".jarallax"));
    
    // Initialize Rellax
    const Rellax = require("rellax");
    new Rellax(".rellax");
  }
}, []);
```

This design system documentation provides all the essential information needed to recreate the exact look and feel of the LegalAI brand site. Follow these specifications carefully to maintain design consistency across your applications.