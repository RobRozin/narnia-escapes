# Narnia Escapes

Static landing page deployed with Firebase Hosting.

## Requirements

- Node.js 20.10 or newer
- npm
- Firebase CLI for deployment

## Local workflow

Install the locked dependencies and create the production site:

```sh
npm ci
npm run build
```

The build compiles Tailwind CSS, bundles the active JavaScript modules, fingerprints CSS and JavaScript assets, copies the production WebP images, and writes the deployable site to `dist/`. It fails if `dist/` exceeds 12 MiB.

Preview the production output:

```sh
npm run preview
```

The preview is available at `http://127.0.0.1:4173`.

## Images

Only optimized WebP images belong in `images/`. Keep high-resolution editing masters outside this repository.

Prepare a future image with Sharp:

```sh
npm run optimize:image -- path/to/source.jpg images/output.webp 1200 78
```

The optional final arguments are maximum edge length and WebP quality. The optimizer applies EXIF orientation, prevents enlargement, strips metadata, and preserves the source aspect ratio.

## Deployment

Firebase Hosting serves `dist/`, not the repository root. The configured predeploy hook runs the production build automatically:

```sh
firebase deploy --only hosting
```

Documentation, Google Apps Script source, development modules, and repository metadata are not included in the hosting payload.

## Dormant features

- The newsletter modal and its scroll trigger are disabled. Its component, feature module, endpoint configuration, and setup documentation remain available for a later implementation.
- The generic Square booking-link feature is retained as source but is not included in the active application bundle. Current retreat reservation links are rendered directly from retreat date data.
