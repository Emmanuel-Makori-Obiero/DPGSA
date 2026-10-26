# DPGSA UoN membership-registration site update

## Implementation

Continue the existing React, TypeScript, Vite and static-prerender website in the provided GitHub repository. Remove the public Constitution and leadership/governance pages and all direct navigation, route, metadata, sitemap and rewrite references to them. Delete the sensitive constitutional text module from the current source tree. Remove all public membership-removal, rejection and appeal procedures, internal officer duties, and internal notice/secretariat details. Do not replace those with summaries.

Retain the association’s public mission, vision, focus areas and programme information in simple informational pages, without presenting the underlying governance document or role responsibilities. Replace the membership page with registration content transcribed from the user-supplied poster: registration is now open; fee KES 200; M-Pesa Till Number 1808373; recipient name Bora Sarah; and the four benefits printed on the poster. Include the full original poster as an image so its two association photographs remain visible, and repeat key registration information as accessible HTML text. Do not create a registration form or add unprovided contact/application details.

Keep the existing Vite static-generation and prerendering architecture. The main modules remain `client/src/pages/` for public routes, `client/src/components/SiteLayout.tsx` for shared navigation/footer, `client/src/routes.tsx` for route metadata, `client/public/` for the sitemap, route manifest, fallback and images, and `scripts/prerender.mjs` for route-specific HTML. Update project documentation to the new public content. No new backend or data storage is required.

## Design

Reuse the existing University association-site palette, logo, typography, accessible navigation and responsive layout. Present the poster as a contained, unaltered square visual beside concise, readable registration/payment cards. Keep the site’s current campus photograph and use the poster’s actual group/event photographs; do not invent imagery, forms, events, people or dates.
