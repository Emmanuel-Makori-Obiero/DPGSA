# DPGSA UoN Public Site

Responsive public website for the Data Protection and Governance Students Association (DPGSA), University of Nairobi. This is a demo build: fictional article/event/resource entries and stock student photos are explicitly labeled and must be replaced with association-approved material before the site is treated as official.

## Pages

The site has separate public routes for Home (`/`), About (`/about`), Leadership (`/leadership`), Publications (`/publications`), Events (`/events`), Resources (`/resources`) and Contact (`/contact`). Each route is prerendered as its own HTML document with route-specific title, description and canonical URL. `client/src/routes.tsx` is the shared route registry; `client/public/manus-routes.json` declares the public routes.

## Preview locally

Requires Node.js and pnpm 10.18.0, as pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev:static
```

## Build

```sh
pnpm run build:static
```

Vite builds the frontend and `scripts/prerender.mjs` renders one HTML page per route into `dist/public`. `vercel.json` configures the static build, clean-page rewrites and output directory. The deploy does not require a database or application server.

## Demo content and images

Sample article titles, dates, events, announcements, activities and learning-resource cards are fictional layout data, not official DPGSA content. Official leadership names, contact channels, mission/vision copy and social links await confirmation. The three image assets are credited in the site footer and in `IMAGE-CREDITS.md`; student stock photos are illustrative and do not depict DPGSA activities.
