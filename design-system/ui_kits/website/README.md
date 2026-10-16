# Website UI kit

Click-through version of the redesigned lesothosandstone.co.za. Open `index.html`. The current route is saved in localStorage (`ls-route`).

Pages: Home, About Us, Products overview, Custom Sandstone Products, Sandstone Bricks and Blocks, Sandstone Wall Cladding, product detail (any product), Projects (filters + lightbox), Production, Distribution, Contact. The footer has the working "Become a Distributor" form.

Files
- `data.js` — all copy, product lists, known specs and the 46 project image URLs (verbatim from the live site).
- `Shell.jsx` — PageHero, Marquee, DistributorForm, SiteFooter.
- `HomePage.jsx`, `ProjectsPage.jsx` (ProjectGrid + Lightbox), `ProductsPages.jsx`, `InfoPages.jsx`.

Gaps
- Specs are only known for 7 products; the other product pages show no spec strip.
- The Production page body couldn't be retrieved, so it reuses the "Production Expertise" and About copy.
- The Contact form fields on the live site were broken (contact-form-7 404), so Name / Email Address / Message are assumed.
- Photos are hotlinked from the live site and show strata placeholders when blocked.
