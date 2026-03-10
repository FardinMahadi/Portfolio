# Fardin Mahadi Portfolio — Design System

### Theme: "Deep Magenta Signal"

> **Version:** 1.0 · **Mode:** Light (with controlled dark zones) · **Stack:**
> Next.js · Tailwind CSS · Framer Motion

---

## 01 · Design Philosophy

This design system is built around a single rule: **the UI must feel like it
grew from the photo, not around it.**

Both reference images share an unmistakable visual identity — a deep
magenta-to-bright-violet gradient, bold white typography, and strong contrast.
The LinkedIn banner reinforces this as a deliberate brand choice, not an
accident. The portfolio must carry this same energy: **bold, confident,
masculine, technical.**

The VS Code developer DNA from the current site (file tabs, terminal prompts,
monospace labels, `▹` bullets) is preserved and elevated — now fused with the
magenta brand identity from the photo.

**One-line voice:** _A technical journal written by someone who ships products,
not a startup landing page._

---

## 02 · Color System

### Extraction Map — Where Every Color Comes From

| Token         | Hex       | Source                                |
| ------------- | --------- | ------------------------------------- |
| `--mag-500` ★ | `#B400D9` | Photo BG — mid magenta (KEY accent)   |
| `--mag-600`   | `#8C00AA` | Photo BG — darker magenta             |
| `--mag-400`   | `#CC22EE` | Photo BG — bright magenta left edge   |
| `--mag-700`   | `#600080` | Photo BG — deep violet                |
| `--mag-900`   | `#2A0038` | Photo BG → banner right edge          |
| `--canvas`    | `#F5F1ED` | Turban ivory — page background        |
| `--plum-600`  | `#5C1A4A` | Shirt color — structural accent       |
| `--plum-500`  | `#7A2462` | Shirt color — lighter variant         |
| `--teal-500`  | `#009B82` | Current site — preserved as secondary |
| `--teal-300`  | `#3DD9B8` | Current site — code strings & status  |

---

### Primary Scale — Deep Magenta (Photo-Extracted)

```
--mag-950   #1A0022   ░░ near-black with magenta soul
--mag-900   #2A0038   ░░ darkest — banner right edge
--mag-800   #480060   ▒▒ structural dark
--mag-700   #600080   ▒▒ deep violet-magenta
--mag-600   #8C00AA   ▓▓ dark accent
--mag-500   #B400D9   ██ ★ KEY PRIMARY — buttons, links, accents
--mag-400   #CC22EE   ██ vivid hover state
--mag-300   #DD66FF   ░░ light accent
--mag-200   #EDB3FF   ░░ tint
--mag-100   #F5DAFF   ░░ very light tint
--mag-050   #FAF0FF   ░░ faintest background tint
```

### Canvas Scale — Turban Ivory (Photo-Extracted)

```
--canvas          #F5F1ED   ★ PAGE BACKGROUND — warm parchment
--canvas-raised   #FDFCFB   cards, panels
--canvas-sunken   #EDE8E2   code blocks, inset areas
--canvas-tinted   #F7EEFF   magenta-tinted section backgrounds
--canvas-dark     #0C0814   near-black with magenta undertone
```

### Plum Scale — Shirt Color (Photo-Extracted)

```
--plum-800   #3A0830   darkest
--plum-700   #4E1040   ★ used in dark section headings
--plum-600   #5C1A4A   structural accent
--plum-500   #7A2462   hover, borders
--plum-400   #9E3880   lighter variant
```

### Teal Scale — Preserved from Current Site

```
--teal-700   #005C50
--teal-600   #007A68
--teal-500   #009B82   ★ secondary signal — status, success
--teal-400   #00C4A4
--teal-300   #3DD9B8   code strings, ▹ bullets
--teal-200   #9EEEDD
--teal-100   #D4F8F0
```

### Warm Neutral Scale — All Violet-Tinted (Never Cold Gray)

```
--n900   #110818   body bg in dark zones
--n800   #1C1028
--n700   #301840   body text in dark sections
--n600   #4E3060   body text on light
--n500   #6E5080   secondary text
--n400   #9878A8   muted text
--n300   #C0A8CC   placeholders, dividers
--n200   #DDD0E8   subtle borders
--n100   #EEE6F4   faintest tint
```

---

### Gradient Recipes

| Name            | Formula                           | Usage                                               |
| --------------- | --------------------------------- | --------------------------------------------------- |
| `grad-hero`     | `#2A0038` → `#8C00AA` → `#CC22EE` | Hero dark panel, dark section backgrounds           |
| `grad-banner`   | `#CC22EE` → `#8C00AA` → `#2A0038` | Section dividers, footer (mirrors LinkedIn banner)  |
| `grad-canvas`   | `#F5F1ED` → `#F7EEFF` → `#F5DAFF` | Hero ambient glow, tinted card hovers               |
| `grad-signal`   | `#009B82` → `#3DD9B8` → `#B400D9` | Progress bars, skill indicators, decorative borders |
| `grad-plum-mag` | `#5C1A4A` → `#8C00AA` → `#B400D9` | Secondary buttons, hover overlays                   |

---

### Shadow Tokens

```css
--sh-xs: 0 1px 3px rgba(17, 8, 24, 0.06) --sh-sm: 0 2px 10px
  rgba(17, 8, 24, 0.09) --sh-md: 0 6px 28px rgba(17, 8, 24, 0.12) --sh-lg: 0
  16px 60px rgba(17, 8, 24, 0.16) --sh-xl: 0 32px 100px rgba(17, 8, 24, 0.2)
  --sh-mag: 0 8px 36px rgba(180, 0, 217, 0.3) ← magenta glow on buttons
  --sh-teal: 0 8px 28px rgba(0, 155, 130, 0.22);
```

---

## 03 · Typography

### Font Stack

| Role               | Font      | Weight   | Usage                                  |
| ------------------ | --------- | -------- | -------------------------------------- |
| **Display / Hero** | `Syne`    | 800      | All page headings, hero name           |
| **Code / Mono**    | `DM Mono` | 400, 500 | File paths, labels, terminal, eyebrows |
| **Body**           | `Syne`    | 400      | All paragraph text                     |

```html
<!-- Google Fonts import -->
<link
  href="https://fonts.googleapis.com/css2?
  family=Syne:wght@400;500;600;700;800&
  family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400
  &display=swap"
  rel="stylesheet"
/>
```

> **Why Syne?** It has the same condensed, geometric boldness as the LinkedIn
> banner font but works across all weights. The 800 weight has sharp angular
> letterforms that match the magenta brand energy — assertive, technical, no
> softness.

---

### Type Scale

```
Display Hero:    Syne 800  · 3.8–5rem  · −0.04em tracking · 0.95 line-height
Hero Outline:    Syne 800  · same size · text-stroke: 2px var(--mag-500)
Section Head:    Syne 700  · 1.7–2.6rem· −0.025em
Subheading:      Syne 600  · 1.1–1.3rem· −0.01em
Body:            Syne 400  · 0.875rem  · 1.78 line-height
Caption:         Syne 400  · 0.78rem   · var(--n500)
Code Label:      DM Mono 400· 0.72rem  · +0.08em tracking · var(--mag-400)
Eyebrow:         DM Mono 400· 0.65rem  · +0.25em · UPPERCASE · var(--n400)
Terminal Prompt: DM Mono 500· 0.82rem  · var(--mag-300) on dark bg
```

### Mixing Rule

- **Syne only** — for all visible reading content: headings, body, descriptions,
  buttons
- **DM Mono only** — for all developer-flavored chrome: `~/file-paths`,
  `const x =`, `// comments`, `$ cat`, section labels, badge text, metadata
- Never use DM Mono for body paragraphs
- Never use a third font

### Hero Typography Technique

The hero uses a **solid + outline split** on the name — borrowed directly from
the LinkedIn banner's bold white-on-magenta approach:

```
Mahadi Hasan     ← Syne 800, solid #110818
Fardin.          ← Syne 800, outline -webkit-text-stroke: 2px var(--mag-500)
```

This creates editorial tension and directly references the photo's magenta
background color.

---

## 04 · Layout & Spacing

### Spacing Scale (4px base)

| Token   | Value | Usage                       |
| ------- | ----- | --------------------------- |
| `--s1`  | 4px   | Icon gaps, tiny nudges      |
| `--s2`  | 8px   | Inline element gaps         |
| `--s3`  | 12px  | Badge padding, small gaps   |
| `--s4`  | 16px  | Component internal padding  |
| `--s5`  | 24px  | Card padding                |
| `--s6`  | 32px  | Section element gaps        |
| `--s7`  | 48px  | Component-to-component gaps |
| `--s8`  | 64px  | Large section gaps          |
| `--s9`  | 80px  | Section vertical padding    |
| `--s10` | 128px | Hero vertical space         |

### Container Widths

```
Max content width:   1160px
Reading width:       680px
Narrow (forms):      520px
Page gutter:         40px (desktop) · 20px (mobile)
```

### Border Radius

```
--r-xs:   3px    sharp — badges, code blocks, file tabs
--r-sm:   6px    buttons, inputs, small cards
--r-md:   10px   note boxes, tooltips
--r-lg:   16px   standard cards, panels
--r-xl:   22px   hero card, project cards, featured panels
--r-pill: 100px  availability chip only
```

---

## 05 · Components

### Navigation

**Structure:** `<FardinMahadi />` logo (DM Mono, `--mag-400` angle bracket
color) + nav links (Syne 600, `--n500`) + `Download CV` button (primary button,
right side)

**Scroll behavior:** Background transitions from `transparent` →
`rgba(245,241,237,0.94)` with `backdrop-filter: blur(16px)` after 60px scroll

**Active link:** `color: var(--mag-600)` +
`border-bottom: 2px solid var(--mag-500)`

---

### Hero Section Layout

```
┌─────────────────────────────────────────────────────┐
│ NAV BAR                                             │
├───────────────────────────┬─────────────────────────┤
│                           │   ╲  DARK DIAGONAL      │
│  ~/portfolio/dev.ts tab   │    ╲ PANEL               │
│                           │     ╲ (grad-hero)        │
│  Mahadi Hasan             │      ╲                   │
│  ▓▓▓▓▓▓▓▓▓▓▓▓ ← outline  │   [ PHOTO ]             │
│                           │   naturally blends in    │
│  [View Projects] [Touch]  │   with dark violet bg   │
│                           │                         │
│  2+ yrs · 10+ projects    │   ● Available           │
└───────────────────────────┴─────────────────────────┘
│ $ cat status.txt · Remote/Dhaka · Open to work      │
└─────────────────────────────────────────────────────┘
```

**Key technique — dark diagonal panel:**

```css
.hero-dark-panel {
  background: linear-gradient(
    160deg,
    var(--mag-800) 0%,
    var(--canvas-dark) 60%
  );
  clip-path: polygon(14% 0, 100% 0, 100% 100%, 0% 100%);
}
```

This creates a diagonal cut from light left → dark right. Your photo's own
magenta background blends directly into this dark panel. **No circular crop
needed.**

---

### Buttons

| Variant          | Background                    | Color                   | Shadow      | Usage                                                 |
| ---------------- | ----------------------------- | ----------------------- | ----------- | ----------------------------------------------------- |
| `btn-primary`    | `grad: --mag-700 → --mag-500` | `#fff`                  | `--sh-mag`  | Main CTAs: "View Projects", "Download CV"             |
| `btn-secondary`  | `transparent`                 | `var(--n700)`           | none        | Border `1.5px solid --n300`, hover border `--mag-400` |
| `btn-teal`       | `var(--teal-500)`             | `#fff`                  | `--sh-teal` | "Live Demo ↗" links                                  |
| `btn-dark`       | `var(--canvas-dark)`          | `var(--n100)`           | `--sh-sm`   | Dark zone secondary                                   |
| `btn-ghost-dark` | `rgba(255,255,255,.06)`       | `rgba(255,255,255,.65)` | none        | On dark backgrounds                                   |

**Shape:** `border-radius: var(--r-sm)` — sharp, not pill. Matches the brand's
confident, non-rounded aesthetic.

---

### Badges & Tags

```
Tech stack tags:    DM Mono · --r-xs · #n100 bg · #n200 border · #n600 text
Featured badge:     DM Mono · #mag-100 bg · #mag-200 border · #mag-700 text
Status badge:       DM Mono · #teal-100 bg · #teal-200 border · #teal-700 text
Plum badge:         DM Mono · #EEE0EC bg · #DCC8D8 border · #plum-500 text
On dark:            DM Mono · rgba(255,255,255,.08) bg · rgba(255,255,255,.6) text
```

**Shape:** `border-radius: var(--r-xs)` — always rectangular, never pill.

---

### Terminal Block (VS Code DNA — Preserved)

```
Background:     #080612  (deep violet-dark, not pure black)
Title bar:      #100D1C  (slightly lighter)
Dot colors:     #FF5F56 / #FFBD2E / #27C93F  (standard macOS)
Filename:       DM Mono · rgba(255,255,255,.25)
Comment color:  #3D3050  (muted purple — not gray)
Key/property:   #C070FF  (violet — from photo)
String values:  var(--teal-300)  (PRESERVED teal)
Variables:      #7EC8E3
Functions:      #E8D44D
Prompt ($):     var(--mag-300)  (magenta — replaces previous teal prompt)
Cursor:         var(--mag-400)  blinking
```

**The prompt color change is the critical VS Code evolution:** Previously teal
`$`, now magenta `$` — this single change connects the terminal to the photo
brand.

---

### Project Cards

```
Layout:         2-col grid — left: dark image zone, right: content
Image zone bg:  linear-gradient(160deg, --mag-800, --canvas-dark)
Border-radius:  var(--r-xl) on card
File path:      DM Mono · --n400 · ~/project-name format
Title:          Syne 700
Tech badges:    neutral (--bneu variant)
Bullets (▹):    color: var(--teal-400)  ← teal preserved here
CTA buttons:    btn-primary + btn-secondary pair
Hover:          translateY(-4px) + --sh-lg
```

---

### Blog Cards

```
Left border:    3px solid var(--mag-500)
Background:     var(--canvas-raised)
Metadata:       DM Mono · --n400 · "Category · Date · X min"
Title:          Syne 700
Excerpt:        Syne 400 · --n500
Hover:          translateX(2px) + --sh-md
```

---

### Contact Form

```
Labels:         DM Mono · "const name =" style · --n500
Required mark:  var(--mag-400) asterisk/equals sign
Input bg:       var(--canvas-sunken)
Input border:   1.5px solid var(--n200)
Focus border:   var(--mag-400)
Focus ring:     0 0 0 3px var(--mag-100)
Submit button:  btn-primary full-width
```

---

### Status Bar (Bottom of Hero)

```
Background:     var(--canvas-dark) or --mag-900
Items:          DM Mono · rgba(255,255,255,.35)
Values:         var(--teal-300)
Pulse dot:      var(--teal-400) · CSS pulse animation
Format:         ● Remote / Dhaka / Cumilla · ⟶ Response: < 24h · ⟶ Open to work
```

---

## 06 · Section Structure

### Section Eyebrow Pattern

```
[─────] // 01 · projects
        ↑ 22px line, --mag-500
```

Format: `DM Mono 400 · 0.65rem · +0.25em · uppercase · --n400` The horizontal
line accent is always `--mag-500`.

### Section Heading Pattern

```html
<h2>Featured <span class="accent">Work</span></h2>
<!-- .accent = color: var(--mag-500) -->
```

### File Tab Pattern (preserved from current site)

```
┌─────────────────────────┐
│ ● ~/portfolio/dev.ts    │  ← border-bottom: 2px solid --mag-500
└─────────────────────────┘
Background: --canvas-sunken · DM Mono · --n400 · dot color: --mag-500
```

---

## 07 · Motion & Animation

### Principles

- **One orchestrated entry** — staggered hero load (`animation-delay: 0.1s`
  increments) beats scattered micro-interactions
- **Purposeful only** — animate to communicate state, not decorate
- CSS-first; Framer Motion for scroll reveals

### Key Animations

```css
/* Cursor blink in terminal */
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.cursor {
  animation: blink 1.1s step-end infinite;
}

/* Availability pulse dot */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 196, 164, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(0, 196, 164, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 196, 164, 0);
  }
}

/* Card hover lift */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--sh-lg);
  transition: all 0.2s ease;
}

/* Blog card slide */
.blog-card:hover {
  transform: translateX(3px);
  transition: all 0.18s ease;
}

/* Nav background transition */
.nav-scrolled {
  background: rgba(245, 241, 237, 0.94);
  backdrop-filter: blur(16px);
  transition: background 0.3s ease;
}
```

### Framer Motion (recommended)

```js
// Hero stagger — for each element
const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Section scroll reveal
const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
```

---

## 08 · Tailwind CSS Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        mag: {
          950: '#1A0022',
          900: '#2A0038',
          800: '#480060',
          700: '#600080',
          600: '#8C00AA',
          500: '#B400D9', // PRIMARY
          400: '#CC22EE',
          300: '#DD66FF',
          200: '#EDB3FF',
          100: '#F5DAFF',
          50: '#FAF0FF',
        },
        teal: {
          700: '#005C50',
          600: '#007A68',
          500: '#009B82', // SECONDARY
          400: '#00C4A4',
          300: '#3DD9B8',
          200: '#9EEEDD',
          100: '#D4F8F0',
        },
        plum: {
          800: '#3A0830',
          700: '#4E1040',
          600: '#5C1A4A',
          500: '#7A2462',
          400: '#9E3880',
        },
        canvas: {
          DEFAULT: '#F5F1ED',
          raised: '#FDFCFB',
          sunken: '#EDE8E2',
          tinted: '#F7EEFF',
          dark: '#0C0814',
        },
        n: {
          900: '#110818',
          800: '#1C1028',
          700: '#301840',
          600: '#4E3060',
          500: '#6E5080',
          400: '#9878A8',
          300: '#C0A8CC',
          200: '#DDD0E8',
          100: '#EEE6F4',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      boxShadow: {
        mag: '0 8px 36px rgba(180, 0, 217, 0.30)',
        teal: '0 8px 28px rgba(0, 155, 130, 0.22)',
      },
      borderRadius: {
        xs: '3px',
        xl: '22px',
      },
    },
  },
};
```

---

## 09 · CSS Custom Properties (Full Token Sheet)

```css
:root {
  /* Canvas */
  --canvas: #f5f1ed;
  --canvas-raised: #fdfcfb;
  --canvas-sunken: #ede8e2;
  --canvas-tinted: #f7eeff;
  --canvas-dark: #0c0814;

  /* Primary — Magenta */
  --mag-950: #1a0022;
  --mag-900: #2a0038;
  --mag-800: #480060;
  --mag-700: #600080;
  --mag-600: #8c00aa;
  --mag-500: #b400d9; /* ★ KEY */
  --mag-400: #cc22ee;
  --mag-300: #dd66ff;
  --mag-200: #edb3ff;
  --mag-100: #f5daff;
  --mag-050: #faf0ff;

  /* Secondary — Teal (preserved) */
  --teal-700: #005c50;
  --teal-600: #007a68;
  --teal-500: #009b82; /* ★ KEY */
  --teal-400: #00c4a4;
  --teal-300: #3dd9b8;
  --teal-200: #9eeedd;
  --teal-100: #d4f8f0;

  /* Plum accent (shirt) */
  --plum-800: #3a0830;
  --plum-700: #4e1040;
  --plum-600: #5c1a4a;
  --plum-500: #7a2462;
  --plum-400: #9e3880;

  /* Warm neutrals */
  --n900: #110818;
  --n800: #1c1028;
  --n700: #301840;
  --n600: #4e3060;
  --n500: #6e5080;
  --n400: #9878a8;
  --n300: #c0a8cc;
  --n200: #ddd0e8;
  --n100: #eee6f4;

  /* Text */
  --tx-h: #110818;
  --tx-body: #301840;
  --tx-muted: #6e5080;
  --tx-faint: #9878a8;
  --tx-on-dark: #f0e6ff;
  --tx-code: #cc22ee;

  /* Borders */
  --bd-hard: #c0a8cc;
  --bd-soft: #ddd0e8;
  --bd-faint: #eee6f4;
  --bd-dark: rgba(255, 255, 255, 0.07);

  /* Shadows */
  --sh-xs: 0 1px 3px rgba(17, 8, 24, 0.06);
  --sh-sm: 0 2px 10px rgba(17, 8, 24, 0.09);
  --sh-md: 0 6px 28px rgba(17, 8, 24, 0.12);
  --sh-lg: 0 16px 60px rgba(17, 8, 24, 0.16);
  --sh-xl: 0 32px 100px rgba(17, 8, 24, 0.2);
  --sh-mag: 0 8px 36px rgba(180, 0, 217, 0.3);
  --sh-teal: 0 8px 28px rgba(0, 155, 130, 0.22);

  /* Radius */
  --r-xs: 3px;
  --r-sm: 6px;
  --r-md: 10px;
  --r-lg: 16px;
  --r-xl: 22px;
  --r-pill: 100px;
}
```

---

## 10 · Do & Don't

### ✓ DO

- Use `#F5F1ED` warm parchment as the global page background — never pure white
- Use `--mag-500` (#B400D9) as the **only** primary button/link/accent color
- Keep teal strictly for code strings, status indicators, `▹` bullets, and
  terminal elements
- Use the dark diagonal panel behind the hero photo — it matches the photo's own
  background
- Keep all VS Code chrome: file tabs, terminal prompts, `$ cat`, `// comments`,
  `const =` labels
- Ensure all neutrals have warm violet undertone — no cold/blue-tinted grays
  ever
- Use `border-radius: var(--r-xs)` (3px) for badges and code elements — sharp,
  not pill
- Use `Syne 800` at `−0.04em` tracking for all display text
- Apply the outline text technique on the hero name second line only

### ✗ DON'T

- Don't use pure white (#FFFFFF) as the page background
- Don't use cool/neutral gray anywhere — all grays must have violet/plum
  undertone
- Don't use teal as a primary button color — magenta only
- Don't use plum as the main CTA — it's structural accent only
- Don't introduce a third font
- Don't use pill-shaped badges for tech stack tags — rectangular only
- Don't apply gradient on body text
- Don't center-align body paragraphs
- Don't use the outline text style outside the hero
- Don't use magenta at full saturation for large background areas on light pages
  (use `--mag-050` through `--mag-100` for tints)

---

## 11 · Page-by-Page Application

### Home (Hero)

- **Canvas:** `#F5F1ED` with `grad-canvas` ambient glow in right zone
- **Hero right panel:** `grad-hero` diagonal clip-path — photo blends in
  naturally
- **CTA:** btn-primary (magenta gradient) + btn-secondary (outline)
- **Status bar:** `--canvas-dark` bg, teal values, pulse dot

### About

- **Section bg:** alternating `--canvas` and `--canvas-tinted`
- **Pull quote:** `border-left: 3px solid --mag-500` · `--n700` text
- **Availability block:** terminal style with `$ cat` prompt

### Experience

- **Timeline line:** `linear-gradient(--mag-600, --teal-500)`
- **Company nodes:** `--mag-500` dot, dark card bg for job blocks
- **Tech badges:** neutral variant

### Projects

- **Cards:** dark left panel + light right content (per design above)
- **Image zone:** `grad-hero` background
- **Featured badge:** `--bvio` variant

### Blog

- **Cards:** `border-left: 3px solid --mag-500`
- **Category chip:** DM Mono, `--bvio` or `--bteal` based on topic
- **Read more:** `color: --mag-500`, no underline, arrow on hover

### Contact

- **Split layout:** form left, status/links right
- **Status block:** terminal card, `--canvas-dark` bg
- **Social links:** `--mag-500` hover color

---

## 12 · Brand Identity Summary

```
Theme Name:     Deep Magenta Signal
Mode:           Light (warm parchment canvas) + controlled dark zones
Primary:        #B400D9  Magenta — extracted from hero photo background
Secondary:      #009B82  Teal — preserved from current VS Code site
Canvas:         #F5F1ED  Warm parchment — extracted from turban ivory
Structural:     #5C1A4A  Plum — extracted from shirt color
Typography:     Syne (display/body) + DM Mono (all code chrome)
Voice:          Technical editorial · Sharp · Masculine · Developer-native
Differentiator: Photo, LinkedIn banner, and UI all share one coherent
                color story — magenta is not a theme choice, it's YOU.
```

---

_Design System v1.0 · Fardin Mahadi Studio · 2025_ _Next.js · Tailwind CSS ·
Framer Motion · shadcn/ui_
