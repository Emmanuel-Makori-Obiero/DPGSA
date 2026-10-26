# DPGSA UoN Public Site

Responsive public website demo for the Data Privacy and Governance Students Association, University of Nairobi. It follows the user-provided blue-and-white association-site reference while using the DPGSA logo supplied by the user, available licensed photography and separate public page routes. The reference site's identity, wording and photos are not reused. The exact long-form association name and chapter wording should be confirmed against the user’s preferred display text.

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

The amended constitution supplied by the user is the source for mission, vision, focus areas and membership eligibility. Article headlines, webinar dates, learning resources and contact text remain sample placeholders until official materials are confirmed. The supplied logo is prepared for blending into the white site header/footer; its original upload is left unchanged. The site color palette is provisional. The privacy banner is a UI preview; it stores only a local display choice and does not enable tracking. Student photos are illustrative stock and are credited in `IMAGE-CREDITS.md` and the site footer.
