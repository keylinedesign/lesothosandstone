/* @ds-bundle: {"format":4,"namespace":"LesothoStoneDesignSystem_06b6df","components":[{"name":"LS_CONTACTS","sourcePath":"components/content/ContactList.jsx"},{"name":"ContactList","sourcePath":"components/content/ContactList.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"ImageFrame","sourcePath":"components/content/ImageFrame.jsx"},{"name":"ProductTile","sourcePath":"components/content/ProductTile.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"SpecGrid","sourcePath":"components/content/SpecGrid.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Parallax","sourcePath":"components/motion/Reveal.jsx"},{"name":"Reveal","sourcePath":"components/motion/Reveal.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"FilterTabs","sourcePath":"components/navigation/FilterTabs.jsx"},{"name":"LS_NAV","sourcePath":"components/navigation/SiteNav.jsx"},{"name":"SiteNav","sourcePath":"components/navigation/SiteNav.jsx"}],"sourceHashes":{"components/content/ContactList.jsx":"a300015d36eb","components/content/FeatureCard.jsx":"2c04b4806c01","components/content/ImageFrame.jsx":"aef4f7b5cd27","components/content/ProductTile.jsx":"1d62683f863c","components/content/ProjectCard.jsx":"2cc0c8b5cda3","components/content/SpecGrid.jsx":"fe5ffd618f7f","components/core/Button.jsx":"2a14b26c5f26","components/core/Eyebrow.jsx":"f7610c9f3c3c","components/core/Logo.jsx":"ac18fb02f7b7","components/forms/TextField.jsx":"3375eb3f8bbe","components/motion/Parallax.jsx":"583d288469d2","components/motion/Reveal.jsx":"0dbc80c06cff","components/navigation/Breadcrumb.jsx":"0af4c434a2c1","components/navigation/FilterTabs.jsx":"9d8ddedf9d38","components/navigation/SiteNav.jsx":"e95d5edc9e94","ui_kits/website/HomePage.jsx":"5bef5727931e","ui_kits/website/InfoPages.jsx":"3032a9f6fbbf","ui_kits/website/ProductsPages.jsx":"80b149408b3e","ui_kits/website/ProjectsPage.jsx":"f821806acfb8","ui_kits/website/Shell.jsx":"81b1caaabf1c","ui_kits/website/data.js":"a53368a78e71"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LesothoStoneDesignSystem_06b6df = window.LesothoStoneDesignSystem_06b6df || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ContactList.jsx
try { (() => {
const LS_CONTACTS = [{
  label: 'Lesotho',
  value: '+26 5888 8889',
  href: 'tel:+26 5888 8889'
}, {
  label: 'National Sales and distrubition',
  value: '083 564 8113',
  href: 'tel:083 564 8113'
}, {
  label: 'Email',
  value: 'lesothosandstone@gmail.com',
  href: 'mailto:lesothosandstone@gmail.com'
}, {
  label: 'Email',
  value: 'travis.lesothostone@gmail.com',
  href: 'mailto:travis.lesothostone@gmail.com'
}, {
  label: 'Quarry',
  value: 'Lokokoaneng, Berea, Lesotho'
}];
function ContactList({
  items = LS_CONTACTS,
  size = 'md'
}) {
  const fs = size === 'lg' ? 28 : 18;
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(120px,200px) 1fr',
      gap: 16,
      alignItems: 'baseline',
      padding: '14px 0',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, it.label), it.href ? /*#__PURE__*/React.createElement("a", {
    href: it.href,
    style: {
      fontSize: fs,
      color: 'var(--text-strong)',
      wordBreak: 'break-word'
    }
  }, it.value) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs,
      color: 'var(--text-strong)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { LS_CONTACTS, ContactList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactList.jsx", error: String((e && e.message) || e) }); }

// components/content/ImageFrame.jsx
try { (() => {
const TONES = ['#A79581', '#8A7863', '#625140', '#C9BCA4', '#47362A', '#7F776D', '#ABA398'];
function hash(s) {
  let h = 0;
  for (let i = 0; i < (s || '').length; i++) h = h * 31 + s.charCodeAt(i) | 0;
  return Math.abs(h);
}
function ImageFrame({
  src,
  alt = '',
  caption,
  zoom = false,
  style,
  imgStyle
}) {
  const [failed, setFailed] = React.useState(!src);
  const tone = TONES[hash(src || caption) % TONES.length];
  const name = caption || (src ? decodeURIComponent(src.split('/').pop().replace(/\.(jpe?g|png|webp)$/i, '').replace(/[-_.]/g, ' ')) : 'Image');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: tone,
      width: '100%',
      height: '100%',
      ...style
    }
  }, failed ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(172deg,rgba(255,255,255,.07) 0 1px,transparent 1px 22px),repeating-linear-gradient(176deg,rgba(0,0,0,.08) 0 2px,transparent 2px 57px)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(27,27,29,.7)',
      background: 'rgba(247,247,245,.35)',
      padding: '4px 6px'
    }
  }, name)) : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    onError: () => setFailed(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: zoom ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform 1.4s var(--ease-out), filter var(--dur-slow) var(--ease-out)',
      ...imgStyle
    }
  }));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function FeatureCard({
  index,
  title,
  text,
  image,
  href,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'grid',
      gap: 20,
      color: 'inherit',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      overflow: 'hidden',
      background: 'var(--basalt-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: image,
    zoom: h,
    imgStyle: {
      filter: h ? 'none' : 'saturate(.85)'
    }
  }), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.16em',
      color: 'var(--chalk)'
    }
  }, String(index).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid ' + (h ? 'var(--dune)' : 'var(--line-hairline)'),
      paddingTop: 18,
      transition: 'border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontVariationSettings: "'wdth' 62",
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      fontSize: 34,
      lineHeight: .92
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, text)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductTile.jsx
try { (() => {
function ProductTile({
  name,
  index,
  image,
  meta,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      all: 'unset',
      cursor: 'pointer',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 200,
      padding: 20,
      background: h ? 'var(--dune)' : 'var(--surface-card)',
      color: h ? 'var(--basalt)' : 'var(--text-strong)',
      overflow: 'hidden',
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: h ? 0 : .35,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: image
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      opacity: .8
    }
  }, /*#__PURE__*/React.createElement("span", null, index != null ? String(index).padStart(2, '0') : ''), /*#__PURE__*/React.createElement("span", null, meta)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontVariationSettings: "'wdth' 62",
      textTransform: 'uppercase',
      fontSize: 30,
      lineHeight: .92
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      transform: h ? 'translateX(0)' : 'translateX(-6px)',
      opacity: h ? 1 : 0,
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function ProjectCard({
  image,
  title,
  category,
  index,
  aspect = '4/3',
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      margin: 0,
      cursor: 'pointer',
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: aspect,
      overflow: 'hidden',
      background: 'var(--basalt-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: image,
    alt: title,
    zoom: h
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)',
      opacity: h ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--chalk)',
      opacity: h ? 1 : 0,
      transform: h ? 'none' : 'translateY(8px)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, "View \u2192")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontVariationSettings: "'wdth' 62",
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      fontSize: 22,
      lineHeight: 1,
      color: h ? 'var(--dune)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      whiteSpace: 'nowrap'
    }
  }, category, index != null ? ' · ' + String(index).padStart(2, '0') : '')));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SpecGrid.jsx
try { (() => {
function SpecGrid({
  format,
  size,
  unitsPerM2,
  m2PerPallet
}) {
  const rows = [['Format', format], ['Size', size], ['Units per M2', unitsPerM2], ['M2 per pallet', m2PerPallet]];
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))',
      borderTop: '1px solid var(--line-strong)'
    }
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: '18px 20px 22px 0',
      borderBottom: '1px solid var(--line-hairline)',
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontVariationSettings: "'wdth' 62",
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      fontSize: 36,
      lineHeight: .95
    }
  }, v ?? '—'))));
}
Object.assign(__ds_scope, { SpecGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpecGrid.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  icon = 'arrow',
  href,
  onClick,
  disabled,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  const pad = {
    sm: '10px 16px',
    md: '16px 26px',
    lg: '22px 34px'
  }[size];
  const fs = {
    sm: 12,
    md: 13,
    lg: 15
  }[size];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 14,
    padding: variant === 'link' ? '6px 0' : pad,
    fontFamily: 'var(--font-mono)',
    fontSize: fs,
    fontWeight: 500,
    letterSpacing: '.16em',
    textTransform: 'uppercase',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-0)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .4 : 1,
    textDecoration: 'none',
    transition: 'all var(--dur-fast) var(--ease-out)',
    background: 'none',
    whiteSpace: 'nowrap'
  };
  const v = {
    primary: {
      background: h ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: 'var(--text-on-accent)'
    },
    outline: {
      borderColor: h ? 'var(--chalk)' : 'var(--line-strong)',
      color: 'var(--text-strong)',
      background: h ? 'rgba(247,247,245,.06)' : 'transparent'
    },
    dark: {
      background: h ? 'var(--earth)' : 'var(--basalt)',
      color: 'var(--chalk)'
    },
    link: {
      color: h ? 'var(--text-strong)' : 'var(--text-accent)',
      borderBottom: '1px solid currentColor'
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...base,
      ...v,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), icon === 'arrow' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      transform: h && !disabled ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  index,
  children,
  tone = 'muted',
  style
}) {
  const c = tone === 'accent' ? 'var(--text-accent)' : tone === 'dark' ? 'var(--basalt)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: c,
      ...style
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: 'currentColor',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  src = 'assets/logo-lesotho-stone.jpeg',
  height = 44,
  onDark = true,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Lesotho Stone \u2014 Leaders in Sandstone",
    style: {
      height,
      width: 'auto',
      display: 'block',
      filter: onDark ? 'invert(1)' : 'none',
      mixBlendMode: onDark ? 'screen' : 'multiply',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  as = 'input',
  type = 'text',
  value,
  onChange,
  placeholder,
  options = [],
  error,
  rows = 4,
  name,
  style
}) {
  const [f, setF] = React.useState(false);
  const field = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid ' + (error ? 'var(--state-error)' : f ? 'var(--dune)' : 'var(--line-strong)'),
    color: 'var(--text-strong)',
    font: '400 17px/1.4 var(--font-body)',
    padding: '10px 0 12px',
    outline: 'none',
    borderRadius: 0,
    transition: 'border-color var(--dur-fast) var(--ease-out)',
    resize: 'vertical',
    appearance: 'none'
  };
  const p = {
    name,
    value,
    onChange,
    placeholder,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: field
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: f ? 'var(--text-accent)' : 'var(--text-muted)'
    }
  }, label), as === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, p)) : as === 'select' ? /*#__PURE__*/React.createElement("select", p, /*#__PURE__*/React.createElement("option", {
    value: "",
    style: {
      background: '#1B1B1D'
    }
  }, placeholder || 'Select'), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      background: '#1B1B1D'
    }
  }, o))) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, p)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--state-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/motion/Reveal.jsx
try { (() => {
function Reveal({
  children,
  delay = 0,
  y = 40,
  as = 'div',
  style
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: .12,
      rootMargin: '0px 0px -5% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(' + y + 'px)',
      transition: 'opacity var(--dur-reveal) var(--ease-out) ' + delay + 'ms, transform var(--dur-reveal) var(--ease-out) ' + delay + 'ms',
      ...style
    }
  }, children);
}
function Parallax({
  children,
  speed = .15,
  style
}) {
  const ref = React.useRef(null);
  const [o, setO] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const c = r.top + r.height / 2 - window.innerHeight / 2;
        setO(-c * speed);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      overflow: 'hidden',
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-12% 0',
      transform: 'translate3d(0,' + o + 'px,0)',
      willChange: 'transform'
    }
  }, children));
}
Object.assign(__ds_scope, { Reveal, Parallax });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/motion/Parallax.jsx
try { (() => {

Object.assign(__ds_scope, { Parallax: __ds_scope.Parallax });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Parallax.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  onNavigate = () => {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)'
    }
  }, "/"), it.id && i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate(it.id),
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterTabs.jsx
try { (() => {
function FilterTabs({
  options = [],
  value,
  onChange = () => {},
  counts
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 28px',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, options.map(o => {
    const a = o === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      role: "tab",
      "aria-selected": a,
      onClick: () => onChange(o),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '14px 0',
        marginBottom: -1,
        borderBottom: '2px solid ' + (a ? 'var(--dune)' : 'transparent'),
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: a ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast)'
      }
    }, o, counts && counts[o] != null && /*#__PURE__*/React.createElement("sup", {
      style: {
        marginLeft: 6,
        color: 'var(--text-subtle)'
      }
    }, counts[o]));
  }));
}
Object.assign(__ds_scope, { FilterTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteNav.jsx
try { (() => {
const LS_NAV = [{
  id: 'about',
  label: 'About Us'
}, {
  id: 'products',
  label: 'Products',
  children: [{
    id: 'custom',
    label: 'Custom Sandstone Products'
  }, {
    id: 'bricks',
    label: 'Sandstone Bricks and Blocks'
  }, {
    id: 'cladding',
    label: 'Sandstone Wall Cladding'
  }]
}, {
  id: 'projects',
  label: 'Projects'
}, {
  id: 'production',
  label: 'Production'
}, {
  id: 'distribution',
  label: 'Distribution'
}, {
  id: 'contact',
  label: 'Contact'
}];
function SiteNav({
  current,
  onNavigate = () => {},
  logoSrc,
  solid = false,
  items = LS_NAV
}) {
  const [open, setOpen] = React.useState(null);
  const link = a => ({
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: a ? 'var(--dune)' : 'var(--chalk)',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '8px 0',
    borderBottom: '1px solid ' + (a ? 'var(--dune)' : 'transparent')
  });
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '18px var(--gutter)',
      background: solid ? 'rgba(27,27,29,.86)' : 'transparent',
      backdropFilter: solid ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: solid ? 'blur(14px)' : 'none',
      borderBottom: '1px solid ' + (solid ? 'var(--line-hairline)' : 'transparent'),
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    height: 38
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setOpen(it.children ? it.id : null),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("button", {
    style: link(current === it.id || (it.children || []).some(c => c.id === current)),
    onClick: () => onNavigate(it.id)
  }, it.label, it.children ? ' +' : ''), it.children && open === it.id && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -20,
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--basalt-700)',
      border: '1px solid var(--line-hairline)',
      boxShadow: 'var(--shadow-float)',
      padding: '10px 0',
      minWidth: 280
    }
  }, it.children.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => {
      setOpen(null);
      onNavigate(c.id);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      padding: '12px 20px',
      color: current === c.id ? 'var(--dune)' : 'var(--text-body)',
      font: '500 15px var(--font-body)',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--dune)',
    onMouseLeave: e => e.currentTarget.style.color = current === c.id ? 'var(--dune)' : 'var(--text-body)'
  }, c.label))))))), /*#__PURE__*/React.createElement("a", {
    href: "tel:+27835648113",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.1em',
      color: 'var(--chalk)',
      border: '1px solid var(--line-strong)',
      padding: '10px 14px',
      whiteSpace: 'nowrap'
    }
  }, "083 564 8113"));
}
Object.assign(__ds_scope, { LS_NAV, SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function HomePage({
  go
}) {
  const {
    Button,
    Eyebrow,
    FeatureCard,
    Reveal,
    Parallax,
    ImageFrame
  } = LSN;
  const D = window.LS_DATA,
    H = D.home;
  const [open, setOpen] = React.useState(null);
  const preview = [0, 6, 24, 30, 36, 41, 8].map(i => D.projects[i]);
  const words = H.title.split(' ');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: -75,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: .2,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: H.features[0].image
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(27,27,29,.7) 0%,rgba(27,27,29,.25) 35%,rgba(27,27,29,.96) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...lsWrap,
      position: 'relative',
      width: '100%',
      paddingBottom: 'clamp(48px,6vw,88px)',
      paddingTop: 160
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...lsDisplay,
      fontSize: 'clamp(52px,8.4vw,150px)',
      maxWidth: 1400
    }
  }, words.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-block',
      overflow: 'hidden',
      verticalAlign: 'top',
      paddingBottom: '.04em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ls-word",
    style: {
      display: 'inline-block',
      animationDelay: 200 + i * 55 + 'ms',
      color: /sandstone|earth/i.test(w) ? 'var(--dune)' : undefined
    }
  }, w, "\xA0")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      flexWrap: 'wrap',
      marginTop: 48,
      paddingTop: 28,
      borderTop: '1px solid var(--line-strong)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 900
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'clamp(18px,1.6vw,22px)',
      lineHeight: 1.4,
      color: 'var(--text-strong)',
      maxWidth: 520
    }
  }, H.sub)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1050
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('about')
  }, "Learn More"))))), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement("section", {
    style: {
      ...lsWrap,
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: '64px var(--grid-gap)'
    }
  }, H.features.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f.title,
    delay: i * 120,
    style: {
      marginTop: window.innerWidth > 900 ? [0, 96, 0, 96][i] : 0
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    index: i + 1,
    title: f.title,
    text: f.text,
    image: f.image,
    onClick: () => go(f.to)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-earth)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lsWrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: 'var(--space-8)',
      padding: 'var(--section-y) var(--gutter)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, H.distEyebrow)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...lsDisplay,
      fontSize: 'clamp(44px,5.4vw,92px)',
      textWrap: 'balance'
    }
  }, H.distTitle)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--ash)',
      maxWidth: 520
    }
  }, H.distText)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('distribution')
  }, "Become a Distributor"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: H.map,
    caption: "LS Map \u2014 Homepage",
    imgStyle: {
      objectFit: 'contain'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...lsWrap,
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 72
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...lsDisplay,
      fontSize: 'clamp(64px,10vw,180px)'
    }
  }, "Our", /*#__PURE__*/React.createElement("br", null), "Projects")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => go('projects')
  }, "See more"))), /*#__PURE__*/React.createElement(ProjectGrid, {
    items: preview,
    onOpen: setOpen
  })), /*#__PURE__*/React.createElement(Lightbox, {
    items: preview,
    index: open,
    onClose: () => setOpen(null),
    onStep: d => setOpen(i => (i + d + preview.length) % preview.length)
  }));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InfoPages.jsx
try { (() => {
function AboutPage({
  go
}) {
  const {
    Reveal,
    ImageFrame,
    Eyebrow,
    Button
  } = LSN;
  const A = window.LS_DATA.about;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    go: go,
    crumbs: [{
      label: 'Home',
      id: 'home'
    }, {
      label: 'About Us'
    }],
    title: "About Us",
    image: window.LS_DATA.home.features[3].image
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...lsWrap,
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gap: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...lsDisplay,
      fontSize: 'clamp(32px,3.6vw,60px)',
      lineHeight: 1.02,
      maxWidth: 1200,
      textWrap: 'pretty'
    }
  }, A[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
      gap: '48px var(--grid-gap)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lsDisplay,
      fontSize: 'clamp(80px,11vw,200px)',
      color: 'var(--dune)'
    }
  }, "200,000"), /*#__PURE__*/React.createElement("div", {
    className: "ls-label"
  }, "square meters \xB7 annually")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28
    }
  }, A.slice(1).map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gap: 16,
      paddingTop: 20,
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ls-label"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6
    }
  }, p)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('products')
  }, "Products"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('production')
  }, "Production"))));
}
function ProductionPage({
  go
}) {
  const {
    Reveal,
    ImageFrame,
    Parallax,
    Button
  } = LSN;
  const D = window.LS_DATA;
  const f = D.home.features[3];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    go: go,
    crumbs: [{
      label: 'Home',
      id: 'home'
    }, {
      label: 'Production'
    }],
    eyebrow: f.title,
    title: "Production"
  }), /*#__PURE__*/React.createElement(Parallax, {
    speed: .15,
    style: {
      height: '70vh'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: f.image
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...lsWrap,
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
      gap: '48px var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...lsDisplay,
      fontSize: 'clamp(32px,3.4vw,56px)',
      lineHeight: 1.02
    }
  }, f.text)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      display: 'grid',
      gap: 24,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6
    }
  }, D.about[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6
    }
  }, D.about[2]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('custom')
  }, "Custom Sandstone Products")))));
}
function DistributionPage({
  go
}) {
  const {
    Reveal,
    ImageFrame,
    Eyebrow,
    Button
  } = LSN;
  const D = window.LS_DATA,
    X = D.distribution;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    go: go,
    crumbs: [{
      label: 'Home',
      id: 'home'
    }, {
      label: 'Distribution'
    }],
    title: "Distribution"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))',
      gap: '24px var(--space-8)',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 250
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.45,
      color: 'var(--text-strong)'
    }
  }, X.p1)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 350
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.6
    }
  }, X.p2)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-earth)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lsWrap,
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, X.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...lsDisplay,
      fontSize: 'clamp(40px,4.5vw,72px)'
    }
  }, X.footTitle), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, X.regions.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    as: "li",
    key: r,
    delay: i * 80,
    style: {
      display: 'grid',
      gridTemplateColumns: '56px 1fr',
      alignItems: 'baseline',
      padding: '14px 0',
      borderBottom: '1px solid rgba(247,247,245,.16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ls-label",
    style: {
      color: 'var(--dune)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lsDisplay,
      fontSize: 'clamp(32px,3.4vw,52px)'
    }
  }, r))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: D.home.map,
    caption: "LS Map",
    imgStyle: {
      objectFit: 'contain'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...lsWrap,
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'clamp(22px,2vw,30px)',
      lineHeight: 1.35,
      color: 'var(--text-strong)',
      maxWidth: 900
    }
  }, X.p3)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "Contact Us"))));
}
function ContactPage({
  go
}) {
  const {
    ContactList,
    TextField,
    Button,
    Eyebrow,
    Reveal
  } = LSN;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    go: go,
    crumbs: [{
      label: 'Home',
      id: 'home'
    }, {
      label: 'Contact'
    }],
    title: "Contact"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...lsWrap,
      paddingBottom: 'var(--section-y)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))',
      gap: '64px var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ContactList, {
    size: "lg"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      background: 'var(--surface-card)',
      padding: 'clamp(28px,4vw,56px)',
      display: 'grid',
      gap: 32,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...lsDisplay,
      fontSize: 56
    }
  }, "Leave a message"), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--dune)',
      fontSize: 18
    }
  }, "Sent.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Name"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email Address",
    type: "email"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Message",
    as: "textarea"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, null, "Send"))))));
}
Object.assign(window, {
  AboutPage,
  ProductionPage,
  DistributionPage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InfoPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductsPages.jsx
try { (() => {
const LS_CAT_ORDER = ['custom', 'cladding', 'bricks'];
function ProductsOverview({
  go
}) {
  const {
    Reveal,
    ImageFrame,
    Eyebrow
  } = LSN;
  const D = window.LS_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    go: go,
    crumbs: [{
      label: 'Home',
      id: 'home'
    }, {
      label: 'Products'
    }],
    title: "Products"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...lsWrap,
      paddingBottom: 'var(--section-y)'
    }
  }, LS_CAT_ORDER.map((id, i) => {
    const c = D.categories[id];
    return /*#__PURE__*/React.createElement(CategoryRow, {
      key: id,
      index: i + 1,
      id: id,
      c: c,
      go: go
    });
  })));
}
function CategoryRow({
  index,
  id,
  c,
  go
}) {
  const {
    Reveal,
    ImageFrame,
    Eyebrow,
    Button
  } = LSN;
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement(Reveal, {
    style: {
      borderTop: 'var(--rule-bar) solid var(--chalk)',
      padding: '40px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
      gap: '40px var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: index,
    tone: "accent"
  }, c.products.length, " products"), /*#__PURE__*/React.createElement("h2", {
    onClick: () => go(id),
    style: {
      ...lsDisplay,
      fontSize: 'clamp(48px,6vw,104px)',
      cursor: 'pointer',
      color: h ? 'var(--dune)' : 'var(--text-strong)',
      transition: 'color var(--dur-base)'
    }
  }, c.name), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      columns: '2 200px',
      columnGap: 24
    }
  }, c.products.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      breakInside: 'avoid',
      padding: '8px 0',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('product:' + id + ':' + p),
    style: {
      cursor: 'pointer',
      color: 'var(--text-body)',
      fontSize: 15
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--dune)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-body)'
  }, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => go(id)
  }, "View range"))), /*#__PURE__*/React.createElement("div", {
    onClick: () => go(id),
    style: {
      aspectRatio: '5/4',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: c.image,
    zoom: h
  }))));
}
function CategoryPage({
  id,
  go
}) {
  const {
    ProductTile,
    Reveal
  } = LSN;
  const c = window.LS_DATA.categories[id];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    go: go,
    crumbs: [{
      label: 'Home',
      id: 'home'
    }, {
      label: 'Products',
      id: 'products'
    }, {
      label: c.name
    }],
    title: c.name,
    image: c.image
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '32px 0 0',
      fontSize: 20,
      lineHeight: 1.45,
      color: 'var(--text-strong)',
      maxWidth: 560
    }
  }, c.blurb)), /*#__PURE__*/React.createElement("section", {
    style: {
      ...lsWrap,
      padding: 'var(--space-8) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
      gap: 2
    }
  }, c.products.map((p, i) => {
    const s = window.LS_DATA.specs[p];
    return /*#__PURE__*/React.createElement(Reveal, {
      key: p,
      delay: i % 4 * 70
    }, /*#__PURE__*/React.createElement(ProductTile, {
      index: i + 1,
      name: p,
      meta: s ? s.format : '',
      onClick: () => go('product:' + id + ':' + p)
    }));
  }))));
}
function ProductPage({
  cat,
  name,
  go
}) {
  const {
    SpecGrid,
    Reveal,
    ImageFrame,
    Eyebrow,
    Button
  } = LSN;
  const D = window.LS_DATA;
  const c = D.categories[cat];
  const s = D.specs[name];
  const i = c.products.indexOf(name);
  const next = c.products[(i + 1) % c.products.length];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    go: go,
    crumbs: [{
      label: 'Home',
      id: 'home'
    }, {
      label: 'Products',
      id: 'products'
    }, {
      label: c.name,
      id: cat
    }, {
      label: name
    }],
    eyebrow: c.name + ' Products',
    title: name
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...lsWrap,
      paddingBottom: 'var(--section-y)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
      gap: '64px var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      display: 'grid',
      gap: 48,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: c.image,
    caption: name
  }))), s && /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(SpecGrid, s)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.5,
      color: 'var(--text-strong)',
      maxWidth: 640
    }
  }, c.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "Contact"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('product:' + cat + ':' + next)
  }, next))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'grid',
      gap: 20,
      alignContent: 'start',
      position: 'sticky',
      top: 110
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, c.name, " Products"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, c.products.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('product:' + cat + ':' + p),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid var(--line-hairline)',
      cursor: 'pointer',
      fontSize: 15,
      color: p === name ? 'var(--dune)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, p), /*#__PURE__*/React.createElement("span", null, p === name ? '●' : ''))))))));
}
Object.assign(window, {
  ProductsOverview,
  CategoryPage,
  ProductPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductsPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsPage.jsx
try { (() => {
const LS_GRID = [{
  c: '1 / span 7',
  a: '4/3'
}, {
  c: '9 / span 4',
  a: '4/5',
  m: 120
}, {
  c: '1 / span 4',
  a: '1/1'
}, {
  c: '5 / span 4',
  a: '4/5',
  m: 80
}, {
  c: '9 / span 4',
  a: '1/1'
}, {
  c: '2 / span 5',
  a: '4/5'
}, {
  c: '7 / span 6',
  a: '16/10',
  m: 140
}];
function ProjectGrid({
  items,
  onOpen
}) {
  const {
    ProjectCard,
    Reveal
  } = LSN;
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const r = () => setW(window.innerWidth);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const narrow = w < 760;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : 'repeat(12,minmax(0,1fr))',
      columnGap: 'var(--grid-gap)',
      rowGap: 'clamp(48px,6vw,96px)'
    }
  }, items.map((p, i) => {
    const g = LS_GRID[i % LS_GRID.length];
    return /*#__PURE__*/React.createElement(Reveal, {
      key: p.image,
      delay: i % 3 * 90,
      style: {
        gridColumn: narrow ? 'auto' : g.c,
        marginTop: narrow ? 0 : g.m || 0,
        alignSelf: 'start'
      }
    }, /*#__PURE__*/React.createElement(ProjectCard, {
      image: p.image,
      title: p.title,
      category: "Project",
      index: p.n,
      aspect: g.a,
      onClick: () => onOpen(i)
    }));
  }));
}
function Lightbox({
  items,
  index,
  onClose,
  onStep
}) {
  const {
    ImageFrame
  } = LSN;
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onClose, onStep]);
  if (index == null) return null;
  const p = items[index];
  const btn = {
    background: 'none',
    border: '1px solid var(--line-strong)',
    color: 'var(--chalk)',
    width: 52,
    height: 52,
    fontSize: 20,
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(18,18,19,.94)',
      backdropFilter: 'blur(10px)',
      display: 'grid',
      gridTemplateRows: '1fr auto',
      padding: 'clamp(16px,4vw,48px)',
      gap: 20,
      animation: 'lsFade .4s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    key: p.image,
    src: p.image,
    imgStyle: {
      objectFit: 'contain'
    },
    style: {
      background: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lsDisplay,
      fontSize: 40
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "ls-label",
    style: {
      marginTop: 8
    }
  }, p.cat, " \xB7 ", String(p.n).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => onStep(-1)
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    className: "ls-label",
    style: {
      color: 'var(--text-strong)',
      minWidth: 70,
      textAlign: 'center'
    }
  }, index + 1, " - ", items.length), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => onStep(1)
  }, "\u2192"), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      marginLeft: 12
    },
    onClick: onClose
  }, "\u2715"))));
}
function ProjectsPage({
  go
}) {
  const {
    FilterTabs
  } = LSN;
  const D = window.LS_DATA;
  const [cat, setCat] = React.useState('All');
  const [open, setOpen] = React.useState(null);
  const items = cat === 'All' ? D.projects : D.projects.filter(p => p.cat === cat);
  const counts = Object.fromEntries(D.projectFilters.map(f => [f, f === 'All' ? D.projects.length : D.projects.filter(p => p.cat === f).length]));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    go: go,
    crumbs: [{
      label: 'Home',
      id: 'home'
    }, {
      label: 'Projects'
    }],
    eyebrow: D.projectsIntro.eyebrow,
    title: D.projectsIntro.title
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...lsWrap,
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 75,
      zIndex: 5,
      background: 'var(--surface-page)',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement(FilterTabs, {
    options: D.projectFilters,
    value: cat,
    onChange: setCat,
    counts: counts
  })), /*#__PURE__*/React.createElement(ProjectGrid, {
    key: cat,
    items: items,
    onOpen: setOpen
  })), /*#__PURE__*/React.createElement(Lightbox, {
    items: items,
    index: open,
    onClose: () => setOpen(null),
    onStep: d => setOpen(i => (i + d + items.length) % items.length)
  }));
}
Object.assign(window, {
  ProjectGrid,
  Lightbox,
  ProjectsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const LSN = window.LesothoStoneDesignSystem_06b6df;
const lsDisplay = {
  fontFamily: 'var(--font-display)',
  fontWeight: 900,
  fontVariationSettings: "'wdth' 62",
  textTransform: 'uppercase',
  color: 'var(--text-strong)',
  lineHeight: .88,
  letterSpacing: '-.01em',
  margin: 0
};
const lsWrap = {
  maxWidth: 'var(--max-width)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
function PageHero({
  crumbs,
  eyebrow,
  title,
  image,
  go,
  children
}) {
  const {
    Breadcrumb,
    Eyebrow,
    Reveal,
    Parallax,
    ImageFrame
  } = LSN;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: image ? '82vh' : 'auto',
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: -75,
      paddingTop: image ? 0 : 180
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: .12,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: image
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(27,27,29,.55) 0%,rgba(27,27,29,.2) 40%,rgba(27,27,29,.95) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...lsWrap,
      position: 'relative',
      width: '100%',
      paddingBottom: 'clamp(48px,7vw,96px)',
      paddingTop: image ? 160 : 0
    }
  }, crumbs && /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: crumbs,
    onNavigate: go
  })), eyebrow && /*#__PURE__*/React.createElement(Reveal, {
    delay: 80,
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, eyebrow)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    y: 60
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...lsDisplay,
      fontSize: 'clamp(56px,9vw,160px)',
      marginTop: 24,
      maxWidth: 1300,
      textWrap: 'balance'
    }
  }, title)), children));
}
function Marquee({
  text = 'Leaders in Sandstone'
}) {
  const items = Array.from({
    length: 8
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderTop: '1px solid var(--line-hairline)',
      borderBottom: '1px solid var(--line-hairline)',
      padding: '22px 0',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ls-marquee",
    style: {
      display: 'flex',
      gap: 48,
      width: 'max-content'
    }
  }, [0, 1].map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      gap: 48
    }
  }, items.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...lsDisplay,
      fontSize: 56,
      lineHeight: 1,
      color: i % 2 ? 'transparent' : 'var(--dune)',
      WebkitTextStroke: i % 2 ? '1px var(--sandstone)' : '0',
      whiteSpace: 'nowrap'
    }
  }, text))))));
}
function DistributorForm() {
  const {
    TextField,
    Button
  } = LSN;
  const [sent, setSent] = React.useState(false);
  const [v, setV] = React.useState({
    name: '',
    company: '',
    region: '',
    email: ''
  });
  const up = k => e => setV({
    ...v,
    [k]: e.target.value
  });
  if (sent) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 0',
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lsDisplay,
      fontSize: 40,
      color: 'var(--dune)'
    }
  }, "Sent"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, v.name || 'Thank you', " \u2014 ", v.email));
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: '22px 28px'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Name",
    value: v.name,
    onChange: up('name')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Company Name",
    value: v.company,
    onChange: up('company')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Region",
    as: "select",
    value: v.region,
    onChange: up('region'),
    options: window.LS_DATA.distribution.regions
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email Address",
    type: "email",
    value: v.email,
    onChange: up('email')
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, null, "Send")));
}
function SiteFooter({
  go
}) {
  const {
    ContactList,
    Eyebrow,
    Logo
  } = LSN;
  const D = window.LS_DATA;
  const ex = [['about', 'About Us'], ['products', 'Products'], ['projects', 'Projects'], ['production', 'Production']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-sunken)',
      paddingTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lsWrap
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: '64px var(--grid-gap)',
      paddingBottom: 80,
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: 1
  }, "About Us"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.45,
      color: 'var(--text-strong)',
      maxWidth: 440,
      textWrap: 'pretty'
    }
  }, D.footerAbout), /*#__PURE__*/React.createElement(ContactList, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: 2
  }, "Explore"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 4
    }
  }, ex.map(([id, l]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go(id),
    style: {
      ...lsDisplay,
      fontSize: 48,
      cursor: 'pointer',
      display: 'inline-block'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--dune)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-strong)'
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: 3
  }, "Become a Distributor"), /*#__PURE__*/React.createElement(DistributorForm, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0 24px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lsDisplay,
      fontSize: 'clamp(80px,17vw,300px)',
      lineHeight: .8,
      color: 'var(--basalt-600)',
      whiteSpace: 'nowrap'
    }
  }, "Lesotho Stone")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      padding: '20px 0 32px',
      borderTop: 'var(--rule-bar) solid var(--chalk)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Copyright 2022 Lesotho Stone"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Terms & Conditions")))));
}
Object.assign(window, {
  LSN,
  lsDisplay,
  lsWrap,
  PageHero,
  Marquee,
  SiteFooter,
  DistributorForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.LS_DATA = {
  "U": "https://lesothosandstone.co.za/wp-content/uploads/",
  "contacts": {
    "phone": "083 564 8113",
    "email": "lesothosandstone@gmail.com"
  },
  "home": {
    "title": "Combining expert mining and production with the finest sandstone mother earth has to offer",
    "sub": "Leaders in the production of sandstone wall cladding and building products",
    "features": [{
      "title": "Aesthetic",
      "text": "Transform your interior and exterior wall spaces using a uniquely natural blend of colours, textures and styles.",
      "image": "https://lesothosandstone.co.za/wp-content/uploads/2022/11/lesotho-stone-cladding.jpg",
      "to": "cladding"
    }, {
      "title": "Structural",
      "text": "Naturally authentic in every way - our range of sandstone bricks and blocks are cut and produced according to specific structural and load bearing building standards.",
      "image": "https://lesothosandstone.co.za/wp-content/uploads/2022/11/lesotho-stone-structural.jpg",
      "to": "bricks"
    }, {
      "title": "Landscaping & Custom Sandstone Design",
      "text": "We have the expertise to design and produce an extensive range of landscaping and custom sandstone products that will enhance and improve any space the right way – naturally!",
      "image": "https://lesothosandstone.co.za/wp-content/uploads/2022/11/lesotho-stone-landscaping-custom-sandstone-design.jpg",
      "to": "custom"
    }, {
      "title": "Production Expertise",
      "text": "Utilising only the best skills, machinery and sandstone mining practices, We are able to maintain the highest level of production efficiency and quality standards at an industry leading scale.",
      "image": "https://lesothosandstone.co.za/wp-content/uploads/2022/11/lesotho-stone-product-expertise.jpg",
      "to": "production"
    }],
    "map": "https://lesothosandstone.co.za/wp-content/uploads/2022/11/LS-Map1-Homepage.png",
    "distEyebrow": "We are around South Africa",
    "distTitle": "Crossing borders to deliver the finest sandstone from the Mountain Kingdom of Lesotho.",
    "distText": "Through our strategic logistics and distribution partnerships, We have ensured the availability of our sandstone products throughout the majority of South Africa and neighbouring countries."
  },
  "about": ["Lesotho Stone Enterprises is a mature mining Company operating in the region of Lakaokaneng, Lesotho for over 20 years, and is the largest quarry of Natural Sandstone building products in Southern Africa cut from the finest sandstone resources in the Kingdom of Lesotho.", "Specialist, precision cutting machines and a skilled team of stone masons offer some of the most advanced stone mining technology and expertise, assuring productivity in excess of 200,000 square meters of Natural Sandstone cut, produced and supplied annually.", "In addition to volume production of our standard product range, we also have the capability to produce an extensive range of custom designed products to suit specific building and architectural and specifications.", "We have country wide market coverage and distribution channels which include, the greater Gauteng Region, Free state, KwaZulu Natal, Eastern Cape, Garden Route and Western Cape, and soon into neighboring African Countries."],
  "footerAbout": "Lesotho Stone Enterprises is a mature mining Company operating in the region of Lakaokaneng, Lesotho.",
  "categories": {
    "custom": {
      "name": "Custom Sandstone Products",
      "blurb": "We have the expertise to design an extensive range of landscaping and custom sandstone products that will enhance and improve any space the right way – naturally!",
      "image": "https://lesothosandstone.co.za/wp-content/uploads/2022/11/lesotho-stone-landscaping-custom-sandstone-design.jpg",
      "products": ["Pillar Caps", "Round Sandstone Paver", "Sandstone Ball", "Sandstone - Structural", "Sandstone Bench", "Sandstone Column", "Sandstone Feature", "Sandstone Furniture", "Sandstone Pots", "Sandstone Tumbled Pebbles", "Sandstone Window Cill"]
    },
    "bricks": {
      "name": "Sandstone Bricks and Blocks",
      "blurb": "Naturally authentic in every way – our range of sandstone bricks and blocks are cut and produced according to specific structural and load bearing building standards.",
      "image": "https://lesothosandstone.co.za/wp-content/uploads/2022/11/lesotho-stone-structural.jpg",
      "products": ["Sandstone Brick", "Sandstone Block"]
    },
    "cladding": {
      "name": "Sandstone Wall Cladding",
      "blurb": "Transform your interior and exterior wall spaces using a natural blend of colours, textures and styles.",
      "image": "https://lesothosandstone.co.za/wp-content/uploads/2022/11/lesotho-stone-cladding.jpg",
      "products": ["8P Multi Cut Grey", "8P Interlocking Multi Cut", "10P Interlocking", "Diamond Cut Grey", "Diamond Cut Sandstone", "Imperial Rockface Grey", "XL Interlocking", "40mm Loose Riven", "40mm Multi Cut Loose Riven", "Raised and Flat Grey", "Strip Walling", "Cladding Tile", "Subway Tile Grey", "Multiple Dry Pack", "Sandstone Chunks", "Petra Mix", "B3 Random", "60 mm Sandstone Strip Walling", "60mm Sandstone Strip Walling - Grey", "Sandstone Chunks - Grey"]
    }
  },
  "specs": {
    "Cladding Tile": {
      "format": "Random",
      "size": "200 x 150mm",
      "unitsPerM2": "33.33",
      "m2PerPallet": "30"
    },
    "Diamond Cut Sandstone": {
      "format": "Panel",
      "size": "300 x 160mm",
      "unitsPerM2": "20.83",
      "m2PerPallet": "30"
    },
    "Imperial Rockface Grey": {
      "format": "Panel",
      "size": "300 x 250mm",
      "unitsPerM2": "13.33",
      "m2PerPallet": "30"
    },
    "Subway Tile Grey": {
      "format": "Random",
      "size": "300 x 150mm",
      "unitsPerM2": "22.22",
      "m2PerPallet": "30"
    },
    "Sandstone Chunks": {
      "format": "Random",
      "size": "N/A",
      "unitsPerM2": "—",
      "m2PerPallet": "10"
    },
    "Sandstone Brick": {
      "format": "Bricks",
      "size": "220 x 110 x 75mm",
      "unitsPerM2": "61",
      "m2PerPallet": "6"
    },
    "Sandstone Block": {
      "format": "Blocks",
      "size": "450 x 140 x 110mm",
      "unitsPerM2": "15.87",
      "m2PerPallet": "5.54"
    }
  },
  "projectsIntro": {
    "eyebrow": "Our Projects",
    "title": "Bring your creativity to life with inspiration from our commercial and residential projects gallery."
  },
  "projectFilters": ["All", "Custom Cladding", "Random Cladding", "Sandstone Cladding", "Sandstone Blocks", "Sandstone Bricks", "Strip Walling"],
  "projects": [{
    "cat": "Custom Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Custom-Cladding-Tiles.6.jpg",
    "title": "Custom Cladding",
    "n": 6
  }, {
    "cat": "Custom Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Custom-Cladding-Tiles.5.jpg",
    "title": "Custom Cladding",
    "n": 5
  }, {
    "cat": "Custom Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Custom-Cladding-Tiles.4.jpg",
    "title": "Custom Cladding",
    "n": 4
  }, {
    "cat": "Custom Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Custom-Cladding-Tiles.3.jpg",
    "title": "Custom Cladding",
    "n": 3
  }, {
    "cat": "Custom Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Custom-Cladding-Tiles.2.jpg",
    "title": "Custom Cladding",
    "n": 2
  }, {
    "cat": "Custom Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Custom-Cladding-Tiles.1.jpg",
    "title": "Custom Cladding",
    "n": 1
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.19.jpg",
    "title": "Random Cladding",
    "n": 19
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.18.jpg",
    "title": "Random Cladding",
    "n": 18
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.17.jpg",
    "title": "Random Cladding",
    "n": 17
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.16.jpg",
    "title": "Random Cladding",
    "n": 16
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.15.jpg",
    "title": "Random Cladding",
    "n": 15
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.14.jpg",
    "title": "Random Cladding",
    "n": 14
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.13.jpg",
    "title": "Random Cladding",
    "n": 13
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.11.jpg",
    "title": "Random Cladding",
    "n": 11
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.10.jpg",
    "title": "Random Cladding",
    "n": 10
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.9.jpg",
    "title": "Random Cladding",
    "n": 9
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.8.jpg",
    "title": "Random Cladding",
    "n": 8
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.7.jpg",
    "title": "Random Cladding",
    "n": 7
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.6.jpg",
    "title": "Random Cladding",
    "n": 6
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.5.jpg",
    "title": "Random Cladding",
    "n": 5
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.4.jpg",
    "title": "Random Cladding",
    "n": 4
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.3.jpg",
    "title": "Random Cladding",
    "n": 3
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-cladding.2.jpg",
    "title": "Random Cladding",
    "n": 2
  }, {
    "cat": "Random Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Random-Cladding.1.jpg",
    "title": "Random Cladding",
    "n": 1
  }, {
    "cat": "Sandstone Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Cladding-Chunks.3.jpg",
    "title": "Sandstone Cladding",
    "n": 3
  }, {
    "cat": "Sandstone Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Cladding-Chunks.2.jpg",
    "title": "Sandstone Cladding",
    "n": 2
  }, {
    "cat": "Sandstone Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Cladding-Chunks.1.jpg",
    "title": "Sandstone Cladding",
    "n": 1
  }, {
    "cat": "Sandstone Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Riven-Cladding.4.jpg",
    "title": "Sandstone Cladding",
    "n": 7
  }, {
    "cat": "Sandstone Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Riven-Cladding.2.jpg",
    "title": "Sandstone Cladding",
    "n": 5
  }, {
    "cat": "Sandstone Cladding",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Riven-Cladding.1.jpg",
    "title": "Sandstone Cladding",
    "n": 4
  }, {
    "cat": "Sandstone Blocks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Blocks.6.jpg",
    "title": "Sandstone Blocks",
    "n": 6
  }, {
    "cat": "Sandstone Blocks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Blocks.5.jpg",
    "title": "Sandstone Blocks",
    "n": 5
  }, {
    "cat": "Sandstone Blocks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Blocks.4.jpg",
    "title": "Sandstone Blocks",
    "n": 4
  }, {
    "cat": "Sandstone Blocks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Blocks.3.jpg",
    "title": "Sandstone Blocks",
    "n": 3
  }, {
    "cat": "Sandstone Blocks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Blocks.2.jpg",
    "title": "Sandstone Blocks",
    "n": 2
  }, {
    "cat": "Sandstone Blocks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Blocks.1.jpg",
    "title": "Sandstone Blocks",
    "n": 1
  }, {
    "cat": "Sandstone Bricks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Bricks.5.jpg",
    "title": "Sandstone Bricks",
    "n": 5
  }, {
    "cat": "Sandstone Bricks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Bricks.4.jpg",
    "title": "Sandstone Bricks",
    "n": 4
  }, {
    "cat": "Sandstone Bricks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Bricks.3.jpg",
    "title": "Sandstone Bricks",
    "n": 3
  }, {
    "cat": "Sandstone Bricks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Bricks.2.jpg",
    "title": "Sandstone Bricks",
    "n": 2
  }, {
    "cat": "Sandstone Bricks",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Sandstone-Bricks.1.jpg",
    "title": "Sandstone Bricks",
    "n": 1
  }, {
    "cat": "Strip Walling",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Strip-Walling.4.jpg",
    "title": "Strip Walling",
    "n": 4
  }, {
    "cat": "Strip Walling",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Strip-Walling.3.jpg",
    "title": "Strip Walling",
    "n": 3
  }, {
    "cat": "Strip Walling",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Strip-Walling.2.jpg",
    "title": "Strip Walling",
    "n": 2
  }, {
    "cat": "Strip Walling",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2020/12/Strip-Walling.1.jpg",
    "title": "Strip Walling",
    "n": 1
  }, {
    "cat": "Strip Walling",
    "image": "https://lesothosandstone.co.za/wp-content/uploads/2022/11/Strip-Walling.jpg",
    "title": "Strip Walling",
    "n": 5
  }],
  "distribution": {
    "p1": "Our sandstone mine is based in the Lekokoaneng region of Lesotho and serves as the production and distribution centre for our extensive range of Sandstone Products which are exported into South Africa and other African countries.",
    "p2": "We have gone to great lengths to ensure the availability of our sandstone products throughout the majority of South Africa as well as a growing number of African Countries. To this end, we have distribution Partnerships with a network of independent transporters clearing Agents and Distributors.",
    "eyebrow": "We are around South Africa",
    "footTitle": "Our Distribution Footprint",
    "regions": ["Gauteng", "North West", "Free State", "Kwazulu Natal", "Eastern Cape", "Western Cape"],
    "p3": "With Country wide distribution partnerships and a well established logistics network, We have ensured availibity of our extensive range of sandstone products throughout the majority of South Africa and neighbouring Countries."
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.LS_CONTACTS = __ds_scope.LS_CONTACTS;

__ds_ns.ContactList = __ds_scope.ContactList;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SpecGrid = __ds_scope.SpecGrid;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Parallax = __ds_scope.Parallax;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.FilterTabs = __ds_scope.FilterTabs;

__ds_ns.LS_NAV = __ds_scope.LS_NAV;

__ds_ns.SiteNav = __ds_scope.SiteNav;

})();
