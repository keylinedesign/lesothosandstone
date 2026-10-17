#!/usr/bin/env node
/*
 * Lesotho Stone — static site generator (no dependencies).
 *
 *   node build.mjs          → writes the finished HTML/CSS/JS site to ./public
 *
 * Content lives in content/site.json. Page templates live below (one function
 * per page type). Styles live in src/assets/css (tokens + components), scripts
 * in src/assets/js. The output in ./public is plain HTML/CSS and can be
 * uploaded to any web host as-is.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, 'public');
const SRC = path.join(ROOT, 'src');
const D = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/site.json'), 'utf8'));

/* ---------- helpers ---------- */
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slug = (s) => String(s).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pad = (n) => String(n).padStart(2, '0');
const TONES = ['#A79581', '#8A7863', '#625140', '#C9BCA4', '#47362A', '#7F776D', '#ABA398'];
const hash = (s) => { let h = 0; for (let i = 0; i < (s || '').length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); };
const fileLabel = (src) => decodeURIComponent(src.split('/').pop().replace(/\.(jpe?g|png|webp)$/i, '').replace(/[-_.]/g, ' '));

/* ---------- routes ---------- */
const CAT_ORDER = ['custom', 'cladding', 'bricks'];
const NAV_CAT_ORDER = ['custom', 'bricks', 'cladding']; // order used by the live site's menu
const catSlug = (id) => slug(D.categories[id].name);
const R = {
  home: '',
  about: 'about-us/',
  products: 'products/',
  projects: 'projects/',
  production: 'production/',
  distribution: 'distribution/',
  contact: 'contact/',
  cat: (id) => `products/${catSlug(id)}/`,
  product: (id, name) => `products/${catSlug(id)}/${slug(name)}/`,
};
const routeFor = (key) => (D.categories[key] ? R.cat(key) : R[key]);

/* ---------- partials ---------- */
// `b` = relative prefix back to site root for the page being rendered.
const href = (b, route) => (b + route) || './';

// Relative base of the page currently being rendered; local image paths
// (anything not starting with http) are resolved against it.
let BASE = '';
const asset = (src) => (/^(https?:)?\/\//.test(src) || src.startsWith('/') ? src : BASE + src);

function frame(src, { alt = '', label, contain = false, eager = false } = {}) {
  const tone = TONES[hash(src || label) % TONES.length];
  return `<div class="frame${contain ? ' frame--contain' : ''}" style="--tone:${tone}" data-label="${esc(label || fileLabel(src))}"><img src="${esc(asset(src))}" alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"></div>`;
}
const parallax = (inner, speed = 0.15, cls = '') => `<div class="parallax ${cls}" data-speed="${speed}"><div class="parallax__inner">${inner}</div></div>`;
const reveal = (inner, { delay = 0, y, tag = 'div', cls = '' } = {}) => {
  const st = [delay ? `--delay:${delay}ms` : '', y ? `--reveal-y:${y}px` : ''].filter(Boolean).join(';');
  return `<${tag} class="reveal${cls ? ' ' + cls : ''}"${st ? ` style="${st}"` : ''}>${inner}</${tag}>`;
};
const eyebrow = (text, { index, accent = false, tag = 'p' } = {}) =>
  `<${tag} class="eyebrow${accent ? ' eyebrow--accent' : ''}">${index != null ? `<span class="eyebrow__index">${pad(index)}</span>` : ''}<span class="eyebrow__text">${esc(text)}</span></${tag}>`;
const button = (label, url, variant = 'primary', size = '') =>
  `<a class="btn btn--${variant}${size ? ' btn--' + size : ''}" href="${esc(url)}">${esc(label)}</a>`;

function breadcrumb(b, items) {
  return `<nav aria-label="Breadcrumb"><ol class="breadcrumb">${items.map((it, i) => i < items.length - 1
    ? `<li><a href="${href(b, it.route)}">${esc(it.label)}</a></li>`
    : `<li><span aria-current="page">${esc(it.label)}</span></li>`).join('')}</ol></nav>`;
}

function contactList(lg = false) {
  return `<ul class="contact-list${lg ? ' contact-list--lg' : ''}">${D.contactList.map((c) => `<li><span class="contact-list__label">${esc(c.label)}</span>${c.href
    ? `<a class="contact-list__value" href="${esc(c.href)}">${esc(c.value)}</a>`
    : `<span class="contact-list__value">${esc(c.value)}</span>`}</li>`).join('')}</ul>`;
}

function field(id, label, { type = 'text', as = 'input', options = [], required = false, autocomplete = '' } = {}) {
  const req = required ? ' required' : '';
  const ac = autocomplete ? ` autocomplete="${autocomplete}"` : '';
  const common = `id="${id}" name="${id}" data-label="${esc(label)}" class="field__control"${req}${ac}`;
  let control;
  if (as === 'textarea') control = `<textarea ${common} rows="4" placeholder=" "></textarea>`;
  else if (as === 'select') control = `<select ${common}><option value="">Select</option>${options.map((o) => `<option>${esc(o)}</option>`).join('')}</select>`;
  else control = `<input type="${type}" ${common} placeholder=" ">`;
  return `<label class="field" for="${id}"><span class="field__label">${esc(label)}</span>${control}</label>`;
}

function distributorForm(idp = 'dist') {
  return `<form class="form form--inline" data-mailto="${esc(D.site.formEmail)}" data-subject="Become a Distributor">
    ${field(idp + '-name', 'Name', { required: true, autocomplete: 'name' })}
    ${field(idp + '-company', 'Company Name', { autocomplete: 'organization' })}
    ${field(idp + '-region', 'Region', { as: 'select', options: D.distribution.regions })}
    ${field(idp + '-email', 'Email Address', { type: 'email', required: true, autocomplete: 'email' })}
    <div><button class="btn btn--primary" type="submit">Send</button></div>
  </form>
  <div class="form__sent" hidden><p class="display">Sent</p><p class="form__note">Your email app has opened with your details — press send to reach us.</p></div>`;
}

function marquee(text = D.site.tagline) {
  const set = Array.from({ length: 8 }, () => `<span>${esc(text)}</span>`).join('');
  return `<div class="marquee" aria-hidden="true"><div class="marquee__track">${set}${set}</div></div>`;
}

function projectGrid(b, items, id) {
  return `<div class="project-grid" id="${id}">${items.map((p, i) => {
    const meta = `${p.cat} · ${pad(p.n)}`;
    return `<figure class="project-card reveal g${(i % 7) + 1}" data-cat="${esc(p.cat)}" style="--delay:${(i % 3) * 90}ms">
      <a class="project-card__link" href="${esc(asset(p.image))}" data-full="${esc(asset(p.image))}" data-title="${esc(p.title)}" data-meta="${esc(meta)}">
        <div class="project-card__media">${frame(p.image, { alt: `${p.title} project ${p.n}` })}<span class="project-card__view">View →</span></div>
        <figcaption class="project-card__caption"><span class="project-card__title">${esc(p.title)}</span><span class="project-card__meta">Project · ${pad(p.n)}</span></figcaption>
      </a>
    </figure>`;
  }).join('')}</div>`;
}

const lightbox = () => `<div class="lightbox" hidden role="dialog" aria-modal="true" aria-label="Project image">
  <div class="lightbox__stage"><img alt=""></div>
  <div class="lightbox__bar">
    <div><div class="lightbox__title"></div><div class="label lightbox__meta" style="margin-top:8px"></div></div>
    <div class="lightbox__controls">
      <button type="button" data-lb="prev" aria-label="Previous image">←</button>
      <span class="label lightbox__count"></span>
      <button type="button" data-lb="next" aria-label="Next image">→</button>
      <button type="button" data-lb="close" aria-label="Close" style="margin-left:12px">✕</button>
    </div>
  </div>
</div>`;

let CRUMBS = null; // set by hero(), read by layout() for BreadcrumbList structured data
function hero(b, { crumbs, eyebrowText, title, image, body = '', words = false }) {
  CRUMBS = crumbs || null;
  const kind = image ? 'hero--image' : 'hero--plain';
  return `<section class="hero ${kind}">
  ${image ? `<div class="hero__media">${parallax(frame(image, { eager: true }), 0.12)}<div class="hero__scrim"></div></div>` : ''}
  <div class="wrap hero__content">
    ${crumbs ? reveal(breadcrumb(b, crumbs)) : ''}
    ${eyebrowText ? reveal(eyebrow(eyebrowText, { accent: true }), { delay: 80 }) : ''}
    ${reveal(`<h1 class="display display--page">${esc(title)}</h1>`, { delay: 160, y: 60 })}
    ${body}
  </div>
</section>`;
}

/* ---------- layout ---------- */
function header(b, current) {
  const items = [
    { key: 'about', label: 'About Us' },
    { key: 'products', label: 'Products', children: NAV_CAT_ORDER.map((id) => ({ key: id, label: D.categories[id].name })) },
    { key: 'projects', label: 'Projects' },
    { key: 'production', label: 'Production' },
    { key: 'distribution', label: 'Distribution' },
    { key: 'contact', label: 'Contact' },
  ];
  const li = (it) => {
    const inSection = it.key === current || (it.children || []).some((c) => c.key === current);
    const ac = it.key === current ? ' aria-current="page"' : '';
    return `<li class="nav__item${inSection ? ' is-current' : ''}"><a class="nav__link" href="${href(b, routeFor(it.key))}"${ac}>${esc(it.label)}${it.children ? ' +' : ''}</a>${it.children
      ? `<div class="nav__dropdown"><ul>${it.children.map((c) => `<li><a href="${href(b, routeFor(c.key))}"${c.key === current ? ' aria-current="page"' : ''}>${esc(c.label)}</a></li>`).join('')}</ul></div>` : ''}</li>`;
  };
  return `<header class="site-header">
  <a class="site-header__logo" href="${href(b, R.home)}" aria-label="${esc(D.site.name)} — home"><img src="${b}assets/img/logo-lesotho-stone.jpeg" alt="${esc(D.site.name)} — ${esc(D.site.tagline)}" width="160" height="38"></a>
  <nav class="nav" id="site-nav" aria-label="Main">
    <ul class="nav__list">${items.map(li).join('')}</ul>
    <a class="site-header__phone nav__phone-mobile" href="${esc(D.site.headerPhone.href)}">${esc(D.site.headerPhone.label)}</a>
  </nav>
  <a class="site-header__phone" href="${esc(D.site.headerPhone.href)}">${esc(D.site.headerPhone.label)}</a>
  <button class="nav-toggle" type="button" aria-controls="site-nav" aria-expanded="false">Menu</button>
</header>`;
}

function footer(b) {
  const ex = [['about', 'About Us'], ['products', 'Products'], ['projects', 'Projects'], ['production', 'Production']];
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="site-footer__cols">
      <div class="stack">${eyebrow('About Us', { index: 1, tag: 'h2' })}<p class="site-footer__about">${esc(D.footerAbout)}</p>${contactList()}</div>
      <div class="stack">${eyebrow('Explore', { index: 2, tag: 'h2' })}<ul class="footer-links">${ex.map(([k, l]) => `<li><a href="${href(b, R[k])}">${esc(l)}</a></li>`).join('')}</ul></div>
      <div class="stack">${eyebrow('Become a Distributor', { index: 3, tag: 'h2' })}${distributorForm('footer')}</div>
    </div>
    <div class="site-footer__wordmark" aria-hidden="true"><span>${esc(D.site.name)}</span></div>
    <div class="site-footer__base"><span>${esc(D.site.copyright)}</span><nav aria-label="Legal"><span>Privacy Policy</span><span>Terms &amp; Conditions</span></nav></div>
  </div>
</footer>`;
}

/* ---------- structured data (schema.org JSON-LD) ----------
   Machine-readable facts for search engines, AI answer engines and agents. */
const abs = (route) => `${D.site.url}/${route}`;
const absImg = (src) => (/^https?:/.test(src) ? src : `${D.site.url}/${src.replace(/^\/+/, '')}`);
const ORG = {
  '@type': 'Organization',
  '@id': `${D.site.url}/#organization`,
  name: D.site.name,
  legalName: D.site.legal,
  slogan: D.site.tagline,
  url: `${D.site.url}/`,
  logo: `${D.site.url}/assets/img/logo-lesotho-stone.jpeg`,
  description: D.about[0],
  email: D.contactList.filter((c) => c.label === 'Email').map((c) => c.value),
  telephone: D.contactList.filter((c) => c.href && c.href.startsWith('tel:')).map((c) => c.value),
  address: { '@type': 'PostalAddress', addressLocality: 'Lokokoaneng', addressRegion: 'Berea', addressCountry: 'LS' },
  areaServed: [...D.distribution.regions.map((r) => ({ '@type': 'AdministrativeArea', name: `${r}, South Africa` })), { '@type': 'Country', name: 'Lesotho' }],
  knowsAbout: CAT_ORDER.map((id) => D.categories[id].name),
};
function productLd(id, name) {
  const c = D.categories[id];
  const s = D.specs[name];
  const props = s ? [['Format', s.format], ['Size', s.size], ['Units per M2', s.unitsPerM2], ['M2 per pallet', s.m2PerPallet]]
    .filter(([, v]) => v && v !== '—' && v !== 'N/A').map(([k, v]) => ({ '@type': 'PropertyValue', name: k, value: v })) : [];
  return {
    '@type': 'Product',
    '@id': `${abs(R.product(id, name))}#product`,
    name,
    category: c.name,
    description: c.blurb,
    image: absImg(c.image),
    url: abs(R.product(id, name)),
    material: 'Natural sandstone',
    countryOfOrigin: { '@type': 'Country', name: 'Lesotho' },
    brand: { '@type': 'Brand', name: D.site.name },
    manufacturer: { '@id': ORG['@id'] },
    ...(props.length ? { additionalProperty: props } : {}),
  };
}
function jsonLd(extra = []) {
  const graph = [ORG, ...extra];
  if (CRUMBS) graph.push({
    '@type': 'BreadcrumbList',
    itemListElement: CRUMBS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, ...(c.route != null ? { item: abs(c.route) } : {}) })),
  });
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}

function layout({ b, current, title, description, body, extra = '', ogImage, ld = [], route }) {
  const full = title ? `${title} – ${D.site.name}` : `${D.site.name} – ${D.site.tagline}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(full)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#1B1B1D">
<meta property="og:title" content="${esc(full)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
${ogImage ? `<meta property="og:image" content="${esc(ogImage)}">` : ''}
<link rel="icon" href="${b}assets/img/logo-lesotho-stone.jpeg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="${b}assets/css/site.css">
${route != null ? `<link rel="canonical" href="${abs(route)}">` : ''}
<link rel="alternate" type="text/plain" title="Site summary for AI tools" href="${b}llms.txt">
<link rel="alternate" type="application/json" title="Product catalogue" href="${b}data/products.json">
${jsonLd(ld)}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(b, current)}
<main id="main">
${body}
</main>
${footer(b)}
${extra}
<script src="${b}assets/js/site.js" defer></script>
</body>
</html>
`;
}

/* ---------- pages ---------- */
const pages = [];
const page = (route, current, title, description, bodyFn, opts = {}) => pages.push({ route, current, title, description, bodyFn, ...opts });
const H = D.home;
const HOME = { label: 'Home', route: R.home };
const PRODUCTS = { label: 'Products', route: R.products };

page(R.home, 'home', '', H.sub, (b) => {
  const words = H.title.split(' ').map((w, i) => `<span class="word"><span style="animation-delay:${200 + i * 55}ms"${/sandstone|earth/i.test(w) ? ' class="accent"' : ''}>${esc(w)}&nbsp;</span></span>`).join('');
  const preview = D.homeProjectPreview.map((i) => D.projects[i]);
  return `<section class="hero hero--home">
  <div class="hero__media">${parallax(frame(H.features[0].image, { eager: true }), 0.2)}<div class="hero__scrim"></div></div>
  <div class="wrap hero__content">
    <h1 class="display display--hero"><span class="sr-only">${esc(H.title)}</span><span aria-hidden="true">${words}</span></h1>
    <div class="hero__foot">
      ${reveal(`<p class="lead">${esc(H.sub)}</p>`, { delay: 900 })}
      ${reveal(button('Learn More', href(b, R.about), 'primary', 'lg'), { delay: 1050 })}
    </div>
  </div>
</section>
${marquee()}
<section class="wrap section">
  <div class="features">${H.features.map((f, i) => reveal(`<a class="feature-card zoom" href="${href(b, routeFor(f.to))}">
    <div class="feature-card__media">${frame(f.image, { alt: f.title })}<span class="feature-card__index">${pad(i + 1)}</span></div>
    <div class="feature-card__body"><h2 class="feature-card__title">${esc(f.title)}</h2><p class="feature-card__text">${esc(f.text)}</p></div>
  </a>`, { delay: i * 120 })).join('')}</div>
</section>
<section class="band-earth">
  <div class="wrap section two-col">
    <div class="stack">
      ${reveal(eyebrow(H.distEyebrow, { accent: true }))}
      ${reveal(`<h2 class="display display--l">${esc(H.distTitle)}</h2>`, { delay: 100 })}
      ${reveal(`<p class="body-l muted" style="max-width:520px">${esc(H.distText)}</p>`, { delay: 200 })}
      ${reveal(button('Become a Distributor', href(b, R.distribution), 'outline'), { delay: 300 })}
    </div>
    ${reveal(`<div class="map">${frame(H.map, { alt: 'Map of Lesotho Stone distribution across South Africa', label: 'LS Map — Homepage', contain: true })}</div>`, { delay: 200 })}
  </div>
</section>
<section class="wrap section">
  <div class="section-head">
    ${reveal('<h2 class="display display--xl">Our<br>Projects</h2>')}
    ${reveal(button('See more', href(b, R.projects), 'link'), { delay: 150 })}
  </div>
  ${projectGrid(b, preview, 'home-projects')}
</section>`;
}, { extra: lightbox(), ogImage: H.features[0].image, ld: [{ '@type': 'WebSite', '@id': `${D.site.url}/#website`, name: D.site.name, url: `${D.site.url}/`, publisher: { '@id': ORG['@id'] } }] });

page(R.about, 'about', 'About Us', D.about[0], (b) => {
  const A = D.about;
  return `${hero(b, { crumbs: [HOME, { label: 'About Us' }], title: 'About Us', image: H.features[3].image })}
<section class="wrap section" style="display:grid;gap:var(--section-y)">
  ${reveal(`<p class="display display--statement">${esc(A[0])}</p>`)}
  <div class="info-grid">
    ${reveal(`<div class="stat"><div class="display stat__value">200,000</div><div class="label">square meters · annually</div></div>`)}
    <div class="numbered">${A.slice(1).map((p, i) => reveal(`<div class="numbered__item"><span class="label">${pad(i + 1)}</span><p class="body-l">${esc(p)}</p></div>`, { delay: i * 100 })).join('')}</div>
  </div>
  <div class="actions">${button('Products', href(b, R.products))}${button('Production', href(b, R.production), 'outline')}</div>
</section>`;
});

page(R.products, 'products', 'Products', 'Custom Sandstone Products, Sandstone Wall Cladding and Sandstone Bricks and Blocks from Lesotho Stone.', (b) => `
${hero(b, { crumbs: [HOME, { label: 'Products' }], title: 'Products' })}
<section class="wrap section section--flush-top">
${CAT_ORDER.map((id, i) => {
  const c = D.categories[id];
  return reveal(`<div class="category-row__grid">
    <div class="stack">
      ${eyebrow(`${c.products.length} products`, { index: i + 1, accent: true })}
      <h2 class="display category-row__title"><a href="${href(b, R.cat(id))}">${esc(c.name)}</a></h2>
      <ul class="product-list">${c.products.map((p) => `<li><a href="${href(b, R.product(id, p))}">${esc(p)}</a></li>`).join('')}</ul>
      <div>${button('View range', href(b, R.cat(id)), 'link')}</div>
    </div>
    <a class="category-row__media zoom" href="${href(b, R.cat(id))}" tabindex="-1" aria-hidden="true">${frame(c.image)}</a>
  </div>`, { cls: 'category-row' });
}).join('')}
</section>`);

for (const id of CAT_ORDER) {
  const c = D.categories[id];
  page(R.cat(id), id, c.name, c.blurb, (b) => `
${hero(b, { crumbs: [HOME, PRODUCTS, { label: c.name }], title: c.name, image: c.image, body: `<p class="lead hero__body">${esc(c.blurb)}</p>` })}
<section class="wrap" style="padding-top:var(--space-8);padding-bottom:var(--section-y)">
  <div class="tiles">${c.products.map((p, i) => {
    const s = D.specs[p];
    return reveal(`<a class="tile" href="${href(b, R.product(id, p))}"><span class="tile__meta"><span>${pad(i + 1)}</span><span>${esc(s ? s.format : '')}</span></span><span class="tile__foot"><span class="tile__name">${esc(p)}</span><span class="tile__arrow" aria-hidden="true">→</span></span></a>`, { delay: (i % 4) * 70 });
  }).join('')}</div>
</section>`, { ogImage: c.image, ld: [{ '@type': 'ItemList', name: c.name, description: c.blurb, numberOfItems: c.products.length,
    itemListElement: c.products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p, url: abs(R.product(id, p)) })) }] });

  c.products.forEach((name, i) => {
    const s = D.specs[name];
    const next = c.products[(i + 1) % c.products.length];
    page(R.product(id, name), id, name, `${name} — ${c.name}. ${D.productTagline}.`, (b) => `
${hero(b, { crumbs: [HOME, PRODUCTS, { label: c.name, route: R.cat(id) }, { label: name }], eyebrowText: `${c.name} Products`, title: name })}
<section class="wrap section section--flush-top product-layout">
  <div class="product-layout__main">
    ${reveal(`<div class="product-layout__media">${frame(c.image, { alt: name, label: name })}</div>`)}
    ${reveal(`<p class="label" style="color:var(--dune);margin:0">${esc(D.productTagline)}</p>`, { delay: 60 })}
    ${s ? reveal(`<dl class="spec-grid">${[['Format', s.format], ['Size', s.size], ['Units per M2', s.unitsPerM2], ['M2 per pallet', s.m2PerPallet]].map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v ?? '—')}</dd></div>`).join('')}</dl>`, { delay: 100 }) : ''}
    ${reveal(`<p class="body-l" style="font-size:20px;line-height:1.5;color:var(--text-strong);max-width:640px">${esc(c.blurb)}</p>`, { delay: 150 })}
    <div class="actions">${button('Contact', href(b, R.contact))}${button(next, href(b, R.product(id, next)), 'outline')}</div>
  </div>
  <aside class="product-aside" aria-label="${esc(c.name)}">
    ${eyebrow(`${c.name} Products`)}
    <ul>${c.products.map((p) => `<li><a href="${href(b, R.product(id, p))}"${p === name ? ' aria-current="page"' : ''}>${esc(p)}</a></li>`).join('')}</ul>
  </aside>
</section>`, { ogImage: c.image, ld: [productLd(id, name)] });
  });
}

page(R.projects, 'projects', 'Projects', D.projectsIntro.title, (b) => {
  const counts = Object.fromEntries(D.projectFilters.map((f) => [f, f === 'All' ? D.projects.length : D.projects.filter((p) => p.cat === f).length]));
  return `${hero(b, { crumbs: [HOME, { label: 'Projects' }], eyebrowText: D.projectsIntro.eyebrow, title: D.projectsIntro.title })}
<section class="wrap section section--flush-top">
  <div class="filters"><div class="filter-tabs" role="group" aria-label="Filter projects" data-grid="all-projects">${D.projectFilters.map((f, i) => `<button type="button" data-filter="${esc(f)}" aria-pressed="${i === 0}">${esc(f)}<sup>${counts[f]}</sup></button>`).join('')}</div></div>
  ${projectGrid(b, D.projects, 'all-projects')}
</section>`;
}, { extra: lightbox() });

page(R.production, 'production', 'Production', H.features[3].text, (b) => {
  const f = H.features[3];
  return `${hero(b, { crumbs: [HOME, { label: 'Production' }], eyebrowText: f.title, title: 'Production' })}
${parallax(frame(f.image, { alt: f.title }), 0.15, 'banner')}
<section class="wrap section info-grid info-grid--wide">
  ${reveal(`<p class="display display--statement" style="font-size:clamp(32px,3.4vw,56px)">${esc(f.text)}</p>`)}
  ${reveal(`<p class="body-l">${esc(D.about[1])}</p><p class="body-l">${esc(D.about[2])}</p><div>${button(D.categories.custom.name, href(b, R.cat('custom')), 'outline')}</div>`, { delay: 120, cls: 'stack-sm' })}
</section>`;
});

page(R.distribution, 'distribution', 'Distribution', D.distribution.p1, (b) => {
  const X = D.distribution;
  return `${hero(b, { crumbs: [HOME, { label: 'Distribution' }], title: 'Distribution', body: `<div class="hero__cols">${reveal(`<p class="lead" style="max-width:none">${esc(X.p1)}</p>`, { delay: 250 })}${reveal(`<p class="body-l" style="font-size:17px">${esc(X.p2)}</p>`, { delay: 350 })}</div>` })}
<section class="band-earth">
  <div class="wrap section two-col">
    <div class="stack">
      ${eyebrow(X.eyebrow, { accent: true })}
      <h2 class="display display--m">${esc(X.footTitle)}</h2>
      <ol class="regions">${X.regions.map((r, i) => reveal(`<span class="label">${pad(i + 1)}</span><span class="display">${esc(r)}</span>`, { tag: 'li', delay: i * 80 })).join('')}</ol>
    </div>
    ${reveal(`<div class="map">${frame(H.map, { alt: 'Map of Lesotho Stone distribution across South Africa', label: 'LS Map', contain: true })}</div>`, { delay: 150 })}
  </div>
</section>
<section class="wrap section stack" style="gap:40px">
  ${reveal(`<p class="closing">${esc(X.p3)}</p>`)}
  <div>${button('Contact Us', href(b, R.contact))}</div>
</section>`;
});

page(R.contact, 'contact', 'Contact', `Contact ${D.site.legal}: ${D.contactList.map((c) => c.value).join(' · ')}`, (b) => `
${hero(b, { crumbs: [HOME, { label: 'Contact' }], title: 'Contact' })}
<section class="wrap section section--flush-top two-col" style="align-items:start">
  ${reveal(contactList(true))}
  ${reveal(`<h2 class="display">Leave a message</h2>
    <form class="form" data-mailto="${esc(D.site.formEmail)}" data-subject="Website enquiry">
      ${field('contact-name', 'Name', { required: true, autocomplete: 'name' })}
      ${field('contact-email', 'Email Address', { type: 'email', required: true, autocomplete: 'email' })}
      ${field('contact-message', 'Message', { as: 'textarea', required: true })}
      <div><button class="btn btn--primary" type="submit">Send</button></div>
    </form>
    <div class="form__sent" hidden><p class="display">Sent</p><p class="form__note">Your email app has opened with your message — press send to reach us.</p></div>`, { delay: 120, cls: 'panel' })}
</section>`);

/* ---------- write ---------- */
fs.rmSync(OUT, { recursive: true, force: true });
const seen = new Set();
for (const p of pages) {
  if (seen.has(p.route)) throw new Error(`Duplicate route: ${p.route}`);
  seen.add(p.route);
  const depth = p.route.split('/').filter(Boolean).length;
  const b = '../'.repeat(depth);
  BASE = b;
  CRUMBS = null;
  const body = p.bodyFn(b);
  const html = layout({ b, current: p.current, title: p.title, description: p.description, body, extra: p.extra, ogImage: p.ogImage, ld: p.ld, route: p.route });
  const file = path.join(OUT, p.route, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

// CSS: tokens + components → one file
const cssDir = path.join(SRC, 'assets/css');
const css = ['tokens/colors.css', 'tokens/typography.css', 'tokens/spacing.css', 'tokens/base.css', 'components.css']
  .map((f) => `/* ${f} */\n` + fs.readFileSync(path.join(cssDir, f), 'utf8')).join('\n');
fs.mkdirSync(path.join(OUT, 'assets/css'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'assets/css/site.css'), css);
fs.cpSync(path.join(SRC, 'assets/js'), path.join(OUT, 'assets/js'), { recursive: true });
fs.cpSync(path.join(SRC, 'assets/img'), path.join(OUT, 'assets/img'), { recursive: true });

// 404 + sitemap + robots
BASE = '/';
CRUMBS = null;
fs.writeFileSync(path.join(OUT, '404.html'), layout({ b: '/', current: '', title: 'Page not found', description: D.home.sub,
  body: `${hero('/', { crumbs: [HOME, { label: '404' }], title: 'Page not found' })}<section class="wrap section section--flush-top">${button('Home', '/')}</section>` }));
const urls = pages.map((p) => `  <url><loc>${D.site.url}/${p.route}</loc></url>`).join('\n');
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
// Product catalogue as JSON: one source of truth for future integrations (agents, MCP/NLWeb endpoints, distributor feeds)
const catalogue = {
  publisher: D.site.legal, url: `${D.site.url}/`, generated: new Date().toISOString().slice(0, 10),
  contact: D.contactList.map(({ label, value }) => ({ label, value })),
  categories: CAT_ORDER.map((id) => ({
    name: D.categories[id].name, url: abs(R.cat(id)), description: D.categories[id].blurb,
    products: D.categories[id].products.map((name) => ({ name, url: abs(R.product(id, name)), specs: D.specs[name] || null })),
  })),
  distribution: { regions: D.distribution.regions, summary: D.distribution.p1 },
};
fs.mkdirSync(path.join(OUT, 'data'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'data/products.json'), JSON.stringify(catalogue, null, 2) + '\n');

// llms.txt (llmstxt.org proposal): a plain-language map of the site for AI tools
const line = (label, route, note) => `- [${label}](${abs(route)})${note ? `: ${note}` : ''}`;
const llms = [
  `# ${D.site.name}`, '',
  `> ${D.about[0]}`, '',
  D.about[1], '',
  `Contact: ${D.contactList.map((c) => `${c.label} ${c.value}`).join('; ')}.`, '',
  '## Company',
  line('About Us', R.about, 'history, scale and capabilities'),
  line('Production', R.production, 'mining and production expertise'),
  line('Distribution', R.distribution, `regions served: ${D.distribution.regions.join(', ')}`),
  line('Contact', R.contact, 'phone, email, quarry location and enquiry form'), '',
  '## Products',
  line('Product catalogue (JSON)', 'data/products.json', 'all products with specifications'),
  ...CAT_ORDER.flatMap((id) => [line(D.categories[id].name, R.cat(id), D.categories[id].blurb),
    ...D.categories[id].products.map((name) => {
      const s = D.specs[name];
      return '  ' + line(name, R.product(id, name), s ? `${s.format}, ${s.size}, ${s.unitsPerM2} units per m², ${s.m2PerPallet} m² per pallet` : '');
    })]), '',
  '## Optional',
  line('Projects gallery', R.projects, `${D.projects.length} photographs of completed projects by finish`), '',
].join('\n');
fs.writeFileSync(path.join(OUT, 'llms.txt'), llms);

fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${D.site.url}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages → ${path.relative(process.cwd(), OUT) || '.'}/`);
