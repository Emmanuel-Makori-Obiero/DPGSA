# DPGSA UoN public website

The responsive public website for the Data Privacy and Governance Students’ Association, University of Nairobi, Parklands Campus Chapter. It presents association information and the membership-registration details from the poster supplied by the Association.

## Public pages

Home (`/`), About (`/about`), Publications (`/publications`), Activities (`/events`), Resources (`/resources`), and Membership Registration (`/membership`). Public routes are declared in `client/src/routes.tsx` and `client/public/manus-routes.json`. Internal constitutional and leadership material is not served as a public page.

## Registration image

`client/public/images/membership-registration-poster.jpeg` is the original poster supplied for the registration page. Its registration terms are also rendered as accessible webpage text.

## Build

Use Node.js and pnpm 10.18.0, pinned in `package.json`:

```sh
pnpm install --frozen-lockfile
pnpm dev:static
pnpm run build:static
```

The static build emits route-specific prerendered HTML into `dist/public`. `vercel.json` configures the Vercel build, output directory and clean page routes.
