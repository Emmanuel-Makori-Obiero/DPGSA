# DPGSA UoN public website

The responsive site for the Data Privacy and Governance Students’ Association at the University of Nairobi presents Association information, real activities and the open-registration details from the poster supplied by the Association.

## Public pages

Home (`/`), About (`/about`), Activities (`/events`), Publications (`/publications`), Resources (`/resources`), Membership Registration (`/membership`) and the Privacy Policy (`/privacy-policy`). The full Constitution, internal officer duties and membership-removal rules are not published as public pages.

## Activity photographs and partnership

The homepage carousel shows DPGSA activity: a meeting in an auditorium and essay-competition moments. Each slide is a full-bleed three-photo composition so the portrait auditorium shot and landscape event photographs can be shown together without blank margins. The slide set changes every three seconds and includes accessible pause/next controls and reduced-motion support. JuaTerms collaboration photos are kept on the Activities page and are not used in the homepage carousel.

The shared Google Drive archive supplies fifteen activity photographs. Optimized AVIF and WebP versions are used across relevant page galleries and loaded lazily outside the carousel. The DPGSK-labelled group photo is identified as a wider data-privacy community image, not as a DPGSA officer or member roster. The Activities page displays one JuaTerms logo variant. Official LinkedIn and Instagram links appear in the site footer.

The Membership page keeps the poster at `client/public/images/membership-registration-poster.jpeg` and repeats its fee and Till details as accessible text. No membership form or online payment flow has been invented.

## Run with npm

```sh
npm install
npm run dev:static
```

The development server is available at `http://localhost:3000` by default. Validate changes and build the prerendered public pages with:

```sh
npm run check
npm test
npm run build:static
```

The static build emits route-specific HTML into `dist/public`. `vercel.json`, the route manifest and sitemap include the same public routes. The repository retains its existing pnpm lockfile for the Vercel build.
