# DPGSA UoN public website

The responsive public website for the Data Privacy and Governance Students’ Association at the University of Nairobi. It presents Association information, activity photos and the open-registration details supplied by the Association.

## Public pages

Home (`/`), About (`/about`), Activities (`/events`), Publications (`/publications`), Resources (`/resources`), Membership Registration (`/membership`) and the Privacy Policy (`/privacy-policy`). The full Constitution, internal officer duties, leadership-role details and membership-removal rules are not published as public pages.

## Homepage and media

The homepage carousel uses DPGSA meeting and essay-competition photos—not JuaTerms partnership photos. Its three-photo compositions fill the hero edge-to-edge without cropping the auditorium photo’s faces. Slide-specific text and images change together every three seconds; the controls pause or advance the carousel, and reduced-motion preferences are respected. JuaTerms collaboration photos appear on the Activities page.

The supplied photo archive is optimized to AVIF and WebP and reused on relevant pages. The DPGSK-labelled wider-community photo is identified accurately, not presented as a DPGSA officer or member roster. The Membership page shows the supplied registration poster and repeats its fee and Till details as accessible text; there is no on-site application or payment flow. Official LinkedIn and Instagram links are in the footer.

## Project layout

- `client/src/pages/` — one React page component per public route.
- `client/src/components/site/` — DPGSA-specific layout, hero carousel, photo gallery and cookie-preference banner.
- `client/src/components/ui/` — reusable interface primitives.
- `client/src/data/clubPhotos.ts` — photo metadata, alt text and hero slide content.
- `client/src/routes.tsx` — public route paths, labels, titles, descriptions and page components.
- `client/src/App.tsx` and `client/src/main.tsx` — application shell and browser entry point.
- `client/src/index.css` — shared responsive site styling.
- `client/public/` — optimized images, route manifest, sitemap, robots rules and other static assets.
- `scripts/prerender.mjs` — writes static HTML for the public routes into `dist/public`.

The repository also retains `server/`, `shared/` and `drizzle/` for its optional Express/database build and Docker workflow. Vercel publishes the static site from `dist/public`; those are separate runtime targets.

## Local development and checks

The repository pins pnpm 10.18.0 in `packageManager` and `pnpm-lock.yaml`; Vercel installs from that lockfile with `pnpm install --frozen-lockfile`. To reproduce the deployment dependency set locally:

```sh
corepack pnpm install --frozen-lockfile
```

After dependencies are installed, the project’s scripts can be run with npm. Start the static development server with:

```sh
npm run dev:static
```

It serves at `http://localhost:3000` by default. Run the checks and generate the prerendered pages with:

```sh
npm run check
npm test
npm run build:static
```

Vercel uses `pnpm run build:static` and the `dist/public` output. The Express/Docker target uses the separate `build` and `start` scripts.
