# DPGSA UoN Public Site

Responsive public website demo for the Data Protection and Governance Students Association (DPGSA), University of Nairobi. It follows the user-provided blue-and-white association-site reference while retaining DPGSA identity, available licensed photography and separate page routes. The reference site's brand assets, wording and photos are not reused.

## Pages

The site has separate public routes for Home (`/`), About (`/about`), Leadership (`/leadership`), Publications (`/publications`), Events (`/events`), Resources (`/resources`), Membership (`/membership`) and Contact (`/contact`). Membership is informational only; there are no applications, payments or accounts. `client/src/routes.tsx` is the route registry; `client/public/manus-routes.json` declares the routes.

## Preview and build

Use Node.js and pnpm 10.18.0, pinned in `package.json`:

```sh
pnpm install --frozen-lockfile
pnpm dev:static
pnpm run build:static
```

The static build emits route-specific prerendered HTML into `dist/public`. `vercel.json` configures the Vercel build, output directory and clean page routes.

## Demo content and image notes

Article headlines, webinar dates, learning resources, draft mission and contact text are sample placeholders, not official DPGSA information. The DPGSA wordmark and palette are provisional. The homepage privacy banner is a UI preview; it stores only a local display choice and does not enable tracking. Student photos are illustrative stock and are credited in `IMAGE-CREDITS.md` and the site footer.
