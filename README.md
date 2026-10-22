# DPGSA UoN Homepage

Homepage-only React/Vite project for the Data Protection and Governance Students Association (DPGSA), University of Nairobi.

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

The static site is generated in `dist/public`. `vercel.json` configures this build command, install command, output directory and SPA rewrite for Vercel.

## Demo-content notice

The homepage currently contains fictional sample article, event, announcement, activity, resource and contact content for layout review. The visible DEMO labels are intentional. Replace sample content and provisional branding with association-approved information before treating the site as official. Membership links and external destinations are not connected in this homepage milestone.
