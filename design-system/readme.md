# Lesotho Stone — Design System

Redesign system for **lesothosandstone.co.za** (Lesotho Stone Enterprises, "Leaders in Sandstone"). The owner asked for the same content with a much more striking look: **dark and dramatic**, a **bold condensed sans** that echoes the logo wordmark, **expressive motion**, the supplied stone colour palette, and a projects gallery modelled on the *Our Projects* layout at visual-square.com.

## Company & product
Lesotho Stone Enterprises is a sandstone quarry and producer in Lekokoaneng / Lokokoaneng, Berea, Lesotho, operating for over 20 years. It produces 200,000+ m² of natural sandstone a year and distributes through South Africa (Gauteng, North West, Free State, KwaZulu Natal, Eastern Cape, Western Cape / Garden Route) and nearby countries. There is one product surface: the **marketing website** (About, Products ×3 categories + product details, Projects gallery, Production, Distribution, Contact).

## Sources
- Live site: https://lesothosandstone.co.za/ (WordPress, Kitecx theme + Slider Revolution). Copy was collected from the homepage, the Projects page and search snippets of the other pages → `guidelines/site-content.md` (verbatim, including original typos).
- Attached folder `Lesotho Sand and Stone/` — contained only `lesotho-logo-placeholder.jpeg`.
- Uploads: `uploads/lesotho-logo-placeholder.jpeg` (logo), `uploads/Screenshot 2026-10-16 at 14.38.23.png` (colour palette → `assets/reference-palette.png`).
- Layout reference: https://visual-square.com/ — *Our Projects* section (asymmetric image grid, captions under images, "See more", numbered lightbox "1 - 4").

## Index
- `styles.css` — entry; imports only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (spacing, radii, rules, motion), `base.css` (resets + `.ls-display`, `.ls-label`, `.ls-logo-on-dark`).
- `guidelines/` — foundation cards (Colors, Type, Spacing, Brand) + `site-content.md`.
- `components/` — React primitives (see below).
- `ui_kits/website/` — full click-through recreation of all 10 pages. See its README.
- `assets/` — `logo-lesotho-stone.jpeg`, `reference-palette.png`.
- `thumbnail.html`, `SKILL.md`.

## Components
- **core/** — `Button` (primary / outline / dark / link; sm/md/lg; sliding arrow), `Eyebrow` (mono section label), `Logo` (raster logo, inverted on dark).
- **forms/** — `TextField` (underline input / select / textarea).
- **content/** — `ImageFrame`, `FeatureCard`, `ProjectCard`, `ProductTile`, `SpecGrid`, `ContactList`.
- **navigation/** — `SiteNav` (sticky header + Products dropdown), `FilterTabs`, `Breadcrumb`.
- **motion/** — `Reveal`, `Parallax`.

The source (a WordPress theme) defines no component library, so this set was sized to what the site's pages actually contain.

### Intentional additions
- `ImageFrame` — the site's photos are hotlinked from lesothosandstone.co.za; they're blocked in this preview sandbox, so every image falls back to a stone-toned strata panel labelled with its filename. On the live domain the real photos load.
- `Reveal` / `Parallax` — the owner asked for expressive motion.

---

## CONTENT FUNDAMENTALS
- **Keep copy verbatim.** The owner asked for all content to stay the same. Use `guidelines/site-content.md`; don't rewrite, shorten or fix typos ("distrubition", "availibity", "Lakaokaneng" vs "Lekokoaneng") unless the owner asks.
- **Voice:** company "We", reader implied ("your interior and exterior wall spaces"). Proud, industrial, a little formal: "the finest sandstone mother earth has to offer", "Mountain Kingdom of Lesotho", "the right way – naturally!".
- **Casing:** Title Case for nav and product names (Sandstone Wall Cladding, Diamond Cut Sandstone). The source sometimes capitalises "We" mid-sentence; keep it. Headlines are sentence-style in the source; the redesign sets them in uppercase display type with CSS only, so the underlying text doesn't change.
- **Specs** are plain data: "300 x 160mm", "20.83", "M2 per pallet". Lowercase x, no space before mm.
- **CTAs** are short: Learn More, Become a Distributor, See more, Send, Contact Us.
- **No emoji.** One exclamation mark appears in the source ("naturally!"); don't add more.
- **Labels:** small uppercase mono, e.g. "WE ARE AROUND SOUTH AFRICA", "UNITS PER M2".

## VISUAL FOUNDATIONS
- **Colour:** ten owner-supplied stone swatches (chalk, basalt, ash, pumice, sandstone, umber, clay, dune, slate, earth). The ground is basalt (#1B1B1D) with 900–500 tints. Dune (#C9BCA4) is the single accent: primary buttons, active states, highlighted words. Earth (#47362A) is the only alternate section colour (distribution bands). Use no more than two background colours per page. No blues, no gradients beyond dark photo scrims.
- **Type:** Archivo (variable width) for everything. Display is weight 900, `wdth 62`, uppercase, 0.88 line height, −0.01em tracking, set very large (56–180px). Body is Archivo 400 at normal width, 16/1.6; lead is 20–22/1.4. Labels are IBM Plex Mono 11–12px, +0.16em, uppercase. Highlight one or two words in dune, never whole headlines.
- **Spacing & layout:** 12-column grid, max width 1440, fluid gutter clamp(20,4vw,64). Sections get a lot of vertical space (`--section-y` clamp(80,12vw,180)). Layouts are asymmetric: staggered card tops (0/96px), offset project tiles.
- **Backgrounds:** full-bleed photos under a dark top-and-bottom scrim on heroes. The rest is flat basalt. Footer has a huge low-contrast "LESOTHO STONE" wordmark. No patterns or textures except the image-fallback strata.
- **Imagery:** warm, natural stone photography with no filters. Resting images are slightly desaturated (0.85) and go to full colour on hover.
- **Corner radii:** sharp (0) on everything: buttons, images, cards, inputs. `--radius-tile` 14px exists only to echo the rounded squares in the logo and should rarely be used.
- **Borders/rules:** 1px hairlines (12% chalk) for lists and dividers. A 6px solid chalk bar, taken from the logo's underline, opens major blocks (product categories, footer base).
- **Cards:** no shadows and no borders. A card is image + top hairline + text. Product tiles are flat basalt-700 blocks that flood to dune on hover.
- **Shadows/elevation:** dark UI uses tone, not shadows. `--shadow-float` is only for floating menus.
- **Transparency & blur:** the sticky header turns basalt at 86% with a 14px blur after 40px of scroll. The lightbox uses a 94% scrim with blur. Nothing else.
- **Motion:** expo-out `cubic-bezier(.16,1,.3,1)`. Scroll reveals fade and lift 40px over 1200ms, staggered 70–120ms. Hero words slide up out of masks one after another. Images zoom 5–6% over 0.9–1.4s on hover. Hero parallax speed is 0.12–0.2. The "Leaders in Sandstone" marquee alternates filled and outlined words over 40s. Motion respects `prefers-reduced-motion`.
- **Hover:** text links go chalk ↔ dune. Arrows nudge 4px right. Outline buttons gain a 6% chalk fill. Primary buttons go dune → chalk.
- **Press/focus:** no shrink. Focused fields turn their underline and label dune.

## ICONOGRAPHY
The source site uses no icon system apart from theme glyphs (phone/email icons in the header, which weren't recoverable). The redesign uses **typographic glyphs only**: → for CTAs and links, ← → ✕ in the lightbox, ● for the current list item, "+" for dropdown parents. No icon font, no SVG set, no emoji. If icons are ever needed, use Lucide at 1.5px stroke (CDN) and flag it as a substitution.

## Logo
Only a low-res JPEG exists (black on white). On dark grounds use `filter:invert(1); mix-blend-mode:screen` (the `Logo` component / `.ls-logo-on-dark`). On light grounds use `mix-blend-mode:multiply`. Never redraw the mark. **A vector logo is needed.**

## Fonts
No brand fonts were supplied. **Archivo** and **IBM Plex Mono** come from Google Fonts (`tokens/fonts.css`). Archivo's condensed black is the closest available match to the Helvetica/Univers-style condensed wordmark in the logo.
