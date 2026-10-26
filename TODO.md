# DPGSA UoN — Public registration site

## Homepage transparent navigation and photo slider

- On the homepage, make the shared navigation bar transparent and overlay it on the hero imagery; retain the current solid navigation styling on the other routes.
- Place a full-width photo slider directly below/behind the navigation with two images. Generate two coordinated, original landscape hero images for the slideshow.
- Make the slider advance automatically, restart its full timer whenever a slide is changed, and allow manual previous/next and direct slide selection.
- Provide an explicit keyboard-operable pause/resume control. Pause when the pointer is over the carousel, when the document is hidden, and when the visitor prefers reduced motion. On keyboard focus, stop rotation and keep it stopped after focus leaves until the visitor explicitly resumes it.
- Use real page text, not image-embedded text, for headings and buttons. Provide meaningful image descriptions and a visible, labeled slide-position indicator.
- Use responsive overlays/crops, smooth opacity/transform transitions and reduced-motion handling; avoid animation of layout properties.

## Hide internal governance material

- Keep the full Constitution and leadership/governance pages, internal role duties, membership-removal/rejection/appeal details, secretariat information, and links to internal notices out of public source, routes, navigation, metadata, sitemap and clean URL rewrites.

## Membership registration and imagery

- Publicly state that membership registration is now open, as shown in the supplied poster.
- Present the poster’s registration fee of KES 200, M-Pesa Till Number 1808373, and recipient name Bora Sarah exactly as shown.
- Include the four benefits shown on the poster: learn from data privacy experts; build skills for law, tech & policy; network with peers & professionals; and know your digital rights in Kenya.
- Include the full user-supplied registration poster, preserving its two association photographs and its original design. Provide useful alt text and repeat essential registration information as real page text.
- Do not invent an application form or registration URL, additional eligibility or payment instructions, contact details, members’ names, event dates or leadership details.

## Remaining public pages and local workflow

- Keep the public site’s mission, vision, focus areas, activities, publications and learning-resource information without mentioning or linking to the private Constitution or internal role duties.
- Synchronize the six-page route registry, metadata, Vercel rewrites, sitemap, fallback, README and image credits with the public route set. Keep the public site responsive, keyboard accessible and branded.
- Ensure the current Vite workflow remains usable through npm, including `npm run dev:static` for local development; no additional packages are required.
