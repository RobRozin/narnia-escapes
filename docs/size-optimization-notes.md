# Size Optimization Notes

Date reviewed: 2026-07-22

## Result

- Previous Firebase-visible root: 232.8 MiB across 99 files.
- Removed image set: 65 superseded or unused files totaling 232.68 MiB.
- Retained optimized images: 32 WebP files totaling 4.50 MiB.
- Production `dist/`: 4.61 MiB.
- Largest production image: `meet-your-hosts.webp` at approximately 486 KiB.
- Production size gate: 12 MiB.

The largest previous asset, `highlights-sauna.png`, was 53.6 MiB. Its oriented, resized WebP replacement is approximately 44 KiB.

## Deployment boundary

Firebase Hosting now publishes `dist/`. The build allowlist contains only:

- `index.html`, `404.html`, and `waiver/index.html`
- Fingerprinted application JavaScript, Petite Vue, and compiled Tailwind CSS
- The optimized `images/` tree

Docs, scripts, raw source modules, configuration, and repository metadata stay outside the hosting payload.

## Runtime reductions

- Replaced the Tailwind CDN runtime and browser-side configuration with compiled CSS.
- Bundled and minified active modules with esbuild.
- Excluded dormant newsletter and generic booking-link features from the bundle.
- Removed unused decorative-mask markup and the old sauna booking comment.
- Restricted Google Fonts requests to used weights and styles.
- Added cache headers for fingerprinted assets, images, and HTML.

## Asset policy

- Commit production WebP files only.
- Store high-resolution masters externally.
- Use `npm run optimize:image` for new assets.
- Keep the output below 700 KiB per image and 10 MiB for the complete image set.
- Run `npm run build`; the build rejects a `dist/` payload over 12 MiB.

The existing `.git` history was not rewritten. Historic large objects remain in previous commits and require a separate coordinated history rewrite if clone size becomes a concern.
