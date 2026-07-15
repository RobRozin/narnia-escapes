# Size Optimization Notes

Date reviewed: 2026-03-07

## Immediate wins already applied

- Removed unused AOS CSS and JS includes from [index.html](/Users/robertrozin/Developer/Narnia Escapes/narnia-escapes/index.html).
- Removed duplicate Google Fonts preconnect tags from [index.html](/Users/robertrozin/Developer/Narnia Escapes/narnia-escapes/index.html).
- Added lazy loading to below-the-fold section and host images in:
  - [js/components/04-RetreatsSection.js](/Users/robertrozin/Developer/Narnia Escapes/narnia-escapes/js/components/04-RetreatsSection.js)
  - [js/components/05-SaunaSection.js](/Users/robertrozin/Developer/Narnia Escapes/narnia-escapes/js/components/05-SaunaSection.js)
  - [js/components/06-EventsSection.js](/Users/robertrozin/Developer/Narnia Escapes/narnia-escapes/js/components/06-EventsSection.js)
  - [js/components/07-AboutSection.js](/Users/robertrozin/Developer/Narnia Escapes/narnia-escapes/js/components/07-AboutSection.js)

## Largest current assets

Measured from the repo:

- `images/highlights-sauna.jpeg`: 4.2 MB
- `images/sauna-hero.jpeg`: 2.4 MB
- `images/home-hero-mobile-winter.jpg`: 2.4 MB
- `images/home-hero-winter.jpg`: 2.3 MB
- `images/host-alex.jpg`: 1.4 MB
- `images/narnia-escapes-logo-main.png`: 117 KB
- `images/home-hero-fall.png`: 725 KB
- `images/host-stan.jpg`: 717 KB
- `images/home-hero-fall-mobile.png`: 634 KB
- `images/events-hero.jpg`: 581 KB

JavaScript is not the current bottleneck:

- `js/app.js`: 19 KB
- `js/petite-vue.iife.js`: 17 KB
- `js/tailwind-config.js`: 2.4 KB
- `index.html`: 1.7 KB

## Highest-value next steps

1. Convert the large JPG, JPEG, and PNG assets to AVIF or WebP and keep a JPG fallback only where needed.
   The top four images alone are over 11 MB in the repository.

2. Replace CSS background hero images with responsive `<picture>` markup.
   The hero currently uses CSS background URLs in [js/components/02-HeroSection.js](/Users/robertrozin/Developer/Narnia Escapes/narnia-escapes/js/components/02-HeroSection.js), which prevents normal responsive image controls like `srcset`, `sizes`, and modern format fallbacks.

3. Resize assets to actual render dimensions before export.
   Several section images are displayed around card width but are stored at multi-megabyte source sizes.

4. Consider converting the replacement logo to SVG or transparent WebP if further optimization is needed.
   `images/narnia-escapes-logo-main.png` is currently 117 KB and appears multiple times on the page.

5. Move away from the Tailwind CDN runtime script to a generated static CSS file.
   This reduces runtime work in the browser and gives tighter control over shipped CSS.

6. Self-host and subset the Google Fonts payload if this site will stay static.
   Current font loading requests full remote families for three fonts.

## Suggested order

1. Re-export and convert images.
2. Convert the hero to `<picture>` with `srcset`.
3. Replace the logo asset.
4. Swap Tailwind CDN for compiled CSS.
5. Revisit font delivery.
