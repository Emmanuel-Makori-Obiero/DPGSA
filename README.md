# DPGSA UoN public website

The responsive public site for the Data Privacy and Governance Students’ Association at the University of Nairobi presents association information, genuine club activities and the membership-registration details from the user-supplied poster.

## Public pages

Home (`/`), About (`/about`), Publications (`/publications`), Activities (`/events`), Resources (`/resources`), and Membership Registration (`/membership`). Internal constitutional and leadership material is not served as a public page.

## Club photos, galleries and partnership

All fifteen activity photographs from the user-shared `dpgsa.zip` are used on the site in relevant page galleries: meeting and group photos on Home, About, Resources and Membership; essay-writing competition photos on Publications; and JuaTerms collaboration photos on Activities. The Activities page includes a partnership feature with one JuaTerms logo. Optimized AVIF files with WebP fallbacks preserve the photo aspect ratios.

The homepage carousel advances every three seconds and uses three matching landscape photos in a full-width, edge-to-edge frame. Its small headline is wrapped over two lines; the carousel retains accessible pause/next controls and respects reduced-motion preferences. Interior pages use subtle color and line details, with restrained card lift on pointer hover. Social previews use the supplied JuaTerms group photo.

The Membership page keeps the supplied registration poster at `client/public/images/membership-registration-poster.jpeg` and repeats its key information as accessible page text.

## Run with npm

```sh
npm install
npm run dev:static
```

The development server is available at `http://localhost:3000` by default. Verify changes and create the production-ready static site with:

```sh
npm run check
npm test
npm run build:static
```

The static build emits route-specific prerendered HTML into `dist/public`. `vercel.json` configures the Vercel build and clean page routes. The repository also retains its existing pnpm lockfile and package-manager pin.
