# Lesotho Stone — website

New website for **Lesotho Stone Enterprises** ("Leaders in Sandstone", lesothosandstone.co.za), built from the Lesotho Stone design system (`design-system/`). It keeps the original site's copy, products, specs and project photos.

The site is plain **HTML/CSS** (plus a small script for menus, filters, lightbox and motion), generated from one content file.

```bash
node build.mjs                          # writes the site to public/
python3 -m http.server 8123 -d public   # preview at http://localhost:8123
```

Deploy by uploading the contents of `public/` to the web host.

- `content/site.json`: all copy, contacts, products, specs and project images
- `build.mjs`: page templates and the generator
- `src/assets/`: CSS (design tokens and components), JS, logo
- `design-system/`: the source design system (brand rules in `design-system/readme.md`)
- `.claude/skills/update-website/`: instructions for making future updates with Claude Code (`/update-website`)

## Pages
Home · About Us · Products · Custom Sandstone Products · Sandstone Bricks and Blocks · Sandstone Wall Cladding · 33 product pages · Projects (filters + lightbox) · Production · Distribution · Contact · 404

## Known gaps
- Photos are still loaded from `lesothosandstone.co.za/wp-content/uploads/`. Download them into `src/assets/img/` before the old WordPress site is switched off (see the skill).
- Specs are only known for 7 products. Product pages show the category photo.
- The Production page body couldn't be retrieved from the old site, so it reuses the About and "Production Expertise" copy.
- The forms open the visitor's email app, addressed to lesothosandstone@gmail.com. There's no server-side form handler.
- Privacy Policy and Terms & Conditions are listed in the footer but have no content yet.
- Only a low-resolution JPEG logo exists. A vector logo is needed.
