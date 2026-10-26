# DPGSA UoN public website

The responsive public website for the Data Privacy and Governance Students’ Association at the University of Nairobi. It presents association information and the membership-registration details from the poster supplied by the Association.

## Public pages

Home (`/`), About (`/about`), Publications (`/publications`), Activities (`/events`), Resources (`/resources`), and Membership Registration (`/membership`). Public routes are declared in `client/src/routes.tsx` and `client/public/manus-routes.json`. Internal constitutional and leadership material is not served as a public page.

## Homepage carousel and registration image

The homepage carousel advances every three seconds and features three real club-activity photos supplied by the Association through Google Drive. It serves compact AVIF files first with matching WebP fallbacks; its social preview uses an original JPEG. The registration page displays the original poster supplied by the user at `client/public/images/membership-registration-poster.jpeg` and repeats its payment details in accessible text.

## Run with npm

Use Node.js and npm to install dependencies and run the static site locally:

```sh
npm install
npm run dev:static
```

The development server is available at `http://localhost:3000` by default. To run the project checks or create the production-ready static site:

```sh
npm run check
npm test
npm run build:static
```

The static build emits route-specific prerendered HTML into `dist/public`. `vercel.json` configures the Vercel build, output directory and clean page routes. The repository also retains its existing pnpm lockfile and package-manager pin.
