# DPGSA UoN — public registration site

## Public pages and privacy

Keep the current public site free of the full Constitution, officer duties, leadership-role details, and membership removal/rejection/appeal rules. Preserve the public registration information and the six public pages: Home, About, Activities, Publications, Resources and Membership.

Add a seventh public route, `/privacy-policy`, and link to it in the footer. State only verified practices: there is no on-site membership/contact form or payment processing; Vercel may process technical request data; external links go to LinkedIn and Instagram; and DPGSA activity photos are published on the site. State Kenyan Data Protection Act section 26 rights accurately and link to Kenya Law, the ODPC rights page and Vercel’s privacy notice. Do not invent an Association email address or a log-retention period.

Add these official profiles to the shared footer: [DPGSA on LinkedIn](https://www.linkedin.com/in/dpgsa-uon/?isSelfProfile=false) and [DPGSA on Instagram](https://www.instagram.com/datapgsa_uon/).

## Homepage carousel and cards

Remove the JuaTerms partnership photos from the homepage carousel. Use DPGSA meeting and essay-competition photos instead, including the auditorium photograph. Select slide-specific image positioning so visible faces stay in frame. Keep edge-to-edge media, AVIF/WebP delivery, automatic three-second rotation, accessible pause/manual controls and reduced-motion support. Keep JuaTerms photos on the Activities partnership section only.

- [x] Rotate the homepage headline in sync with the active hero photo set on the existing three-second interval. Keep text factual, the transition subtle, reduced-motion support intact, and automatic screen-reader announcements disabled.

Give homepage focus, activity and gallery cards a noticeable, accessible pale-blue hover/focus color change as well as their existing shadow. Keep the transition short and respect reduced-motion preferences.

## Cookie banner and preferences

- [x] Add a full-width, responsive privacy banner following the supplied reference, with “We value your privacy,” an explanatory message, a Cookie Policy link, and separate “Reject All” and “Accept All” buttons. Make the buttons keyboard accessible and keep the copy accurate: the public site currently uses no advertising or analytics cookies.
- [x] Save the visitor’s choice in a first-party preference cookie for six months, explain the cookie and current tracking practices on `/privacy-policy`, and provide a footer control to reopen the preferences.

## Source organization and documentation

- [x] Keep active DPGSA components separate from reusable UI primitives, remove only starter components verified to have no application imports, and document the source layout plus npm/Vercel build workflows.

## Responsive layout

- [x] At phone widths, restore the compact three-photo carousel mosaic, with the portrait meeting photo beside the two supporting images. Keep only the Association Moments gallery full content width; keep other photo galleries in two columns and preserve each image’s full aspect ratio. Keep the headline readable, the next control clear of faces and copy, mobile navigation links at least 44px high, and stack section headings and descriptions at tablet widths where side-by-side columns become cramped.

## Existing media and registration

Continue to use the Association photo archive on relevant pages, with accurate alt text and no invented event dates, names or officer details. Keep the supplied registration poster and show its registration fee KES 200, M-Pesa Till Number 1808373 and recipient name Bora Sarah. Do not invent an application form or additional payment instructions.

Keep `npm run dev:static`, all route metadata, the route manifest, sitemap, clean Vercel routes and static prerender working together. Add no dependencies.
