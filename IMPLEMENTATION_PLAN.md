# Fardin Mahadi Portfolio — Implementation Plan & Folder Structure

### Phase 2 · Next.js App Router · Tailwind CSS · Framer Motion

> Follows directly from UX Architecture Report v1.0

---

## PART 1 — IMPLEMENTATION PHASES

### Phase Overview

```
Phase 1 → Foundation        Design system tokens, global styles, fonts, layout shell
Phase 2 → Core Components   All reusable UI primitives (buttons, badges, terminal, cards)
Phase 3 → Data Layer        Content types, project/blog data, site config
Phase 4 → Page Sections     All homepage sections, built in isolation
Phase 5 → Inner Pages        /projects, /about, /experience, /blog, /projects/[slug]
Phase 6 → Animations        Framer Motion variants, scroll triggers, entrance effects
Phase 7 → Polish            SEO, OG images, performance audit, accessibility pass
```

**Build Rule:** Never build a page before its components exist. Never build a
component before its design token exists. Always data → component → section →
page.

---

## PART 2 — COMPLETE FOLDER STRUCTURE

```
fardin-portfolio/
│
├── app/                                    ← Next.js App Router root
│   ├── layout.tsx                          ← Root layout: fonts, metadata, nav, footer
│   ├── page.tsx                            ← Homepage (/) — imports all sections
│   ├── globals.css                         ← CSS custom properties + base styles
│   │
│   ├── about/
│   │   └── page.tsx                        ← /about — extended bio, values, stack
│   │
│   ├── experience/
│   │   └── page.tsx                        ← /experience — full timeline
│   │
│   ├── projects/
│   │   ├── page.tsx                        ← /projects — gallery + filter
│   │   └── [slug]/
│   │       └── page.tsx                    ← /projects/[slug] — case study
│   │
│   ├── blog/
│   │   ├── page.tsx                        ← /blog — article index
│   │   └── [slug]/
│   │       └── page.tsx                    ← /blog/[slug] — individual article
│   │
│   ├── resume/
│   │   └── route.ts                        ← /resume — redirect to PDF download
│   │
│   └── api/
│       └── contact/
│           └── route.ts                    ← POST /api/contact — form handler
│
│
├── components/                             ← ALL reusable components
│   │
│   ├── layout/                             ← Structural layout components
│   │   ├── Navbar.tsx                      ← Fixed top nav with scroll behavior
│   │   ├── NavLink.tsx                     ← Individual nav link with active state
│   │   ├── MobileNav.tsx                   ← Hamburger + full-screen overlay drawer
│   │   ├── Footer.tsx                      ← Footer bar: nav links + copyright
│   │   └── PageTransition.tsx              ← Framer Motion AnimatePresence wrapper
│   │
│   ├── ui/                                 ← Design system primitives
│   │   ├── Button.tsx                      ← btn-primary, btn-secondary, btn-teal, btn-ghost
│   │   ├── Badge.tsx                       ← Tech tags, status badges, category chips
│   │   ├── FileTab.tsx                     ← VS Code file tab (~/path/to/file.ts)
│   │   ├── TerminalBlock.tsx               ← Full terminal card with title bar + dots
│   │   ├── TerminalPrompt.tsx              ← Inline $ prompt line
│   │   ├── SectionEyebrow.tsx              ← // eyebrow label with line accent
│   │   ├── SectionHeading.tsx              ← h2 with optional .accent span
│   │   ├── Cursor.tsx                      ← Blinking terminal cursor
│   │   ├── PulseDot.tsx                    ← Teal availability pulse dot
│   │   ├── AvailabilityChip.tsx            ← "● Available for hire" pill
│   │   ├── Divider.tsx                     ← Section divider with optional label
│   │   └── NoiseOverlay.tsx                ← SVG noise texture for dark sections
│   │
│   ├── sections/                           ← Homepage section components
│   │   ├── HeroSection.tsx                 ← Full hero: text left + photo panel right
│   │   ├── StatsStrip.tsx                  ← 4-stat dark bar with count-up animation
│   │   ├── WhatIDoSection.tsx              ← 3 service pillar cards
│   │   ├── FeaturedProjectsSection.tsx     ← 2-3 featured project cards
│   │   ├── ExperienceHighlight.tsx         ← Timeline preview (2 most recent roles)
│   │   ├── TechStackSection.tsx            ← Grouped badge clusters by category
│   │   ├── TestimonialsSection.tsx         ← Social proof cards (or logos fallback)
│   │   ├── BlogTeaserStrip.tsx             ← 2-article minimal teaser
│   │   ├── CtaSection.tsx                  ← Full-bleed dark CTA block
│   │   └── ContactSection.tsx             ← Form left + terminal status right
│   │
│   ├── cards/                              ← Standalone card components
│   │   ├── ProjectCard.tsx                 ← Featured project card (homepage)
│   │   ├── ProjectGalleryCard.tsx          ← Compact card for /projects gallery
│   │   ├── BlogCard.tsx                    ← Blog listing card
│   │   ├── BlogTeaserCard.tsx              ← Minimal teaser card (homepage strip)
│   │   ├── ServiceCard.tsx                 ← "What I Do" pillar card
│   │   ├── TestimonialCard.tsx             ← Quote + attribution card
│   │   ├── ExperienceCard.tsx              ← Timeline entry card
│   │   └── StatCard.tsx                    ← Single stat with count-up
│   │
│   ├── forms/                              ← Form components
│   │   ├── ContactForm.tsx                 ← Full contact form with validation
│   │   ├── FormField.tsx                   ← Reusable input/textarea with label
│   │   └── FormSuccess.tsx                 ← Terminal-style success confirmation
│   │
│   ├── hero/                               ← Hero-specific sub-components
│   │   ├── HeroText.tsx                    ← Name + role + tagline block
│   │   ├── HeroPhoto.tsx                   ← Photo in dark diagonal panel
│   │   ├── HeroStats.tsx                   ← "2+ yrs · 10+ projects" mini-bar
│   │   └── HeroCtas.tsx                    ← CTA button pair
│   │
│   ├── project/                            ← Project page components
│   │   ├── CaseStudyHero.tsx               ← Project name + role + brief
│   │   ├── CaseStudyBody.tsx               ← Problem / Decision / Result blocks
│   │   ├── ProjectImageGallery.tsx         ← Screenshots carousel/grid
│   │   ├── ProjectMeta.tsx                 ← Stack, role, date, links sidebar
│   │   ├── ProjectFilter.tsx               ← Filter buttons for /projects gallery
│   │   └── ProjectGrid.tsx                 ← Responsive grid of ProjectGalleryCards
│   │
│   ├── blog/                               ← Blog-specific components
│   │   ├── BlogGrid.tsx                    ← Blog listing grid
│   │   ├── BlogMeta.tsx                    ← Category + date + read time
│   │   ├── BlogBody.tsx                    ← MDX content renderer with styled prose
│   │   └── BlogTableOfContents.tsx         ← Sticky TOC for long articles
│   │
│   └── experience/                         ← Experience page components
│       ├── Timeline.tsx                    ← Full vertical timeline
│       ├── TimelineEntry.tsx               ← Individual role entry
│       └── EducationSection.tsx            ← Education block
│
│
├── lib/                                    ← Utilities and data access
│   ├── data/
│   │   ├── projects.ts                     ← All project data (typed, exported)
│   │   ├── experience.ts                   ← Work history + education data
│   │   ├── skills.ts                       ← Tech stack organized by category
│   │   ├── testimonials.ts                 ← Testimonial/social proof data
│   │   └── site.ts                         ← Site-wide config (name, email, socials)
│   │
│   ├── types/
│   │   ├── project.ts                      ← Project type definition
│   │   ├── blog.ts                         ← Blog post type definition
│   │   ├── experience.ts                   ← Work/education type definitions
│   │   └── testimonial.ts                  ← Testimonial type definition
│   │
│   ├── utils/
│   │   ├── cn.ts                           ← clsx + tailwind-merge utility
│   │   ├── formatDate.ts                   ← Date formatting helpers
│   │   └── readTime.ts                     ← Blog read time calculator
│   │
│   └── hooks/
│       ├── useScrollY.ts                   ← Scroll position for nav bg transition
│       ├── useInView.ts                    ← IntersectionObserver for animations
│       └── useCountUp.ts                   ← Count-up animation for stats
│
│
├── content/                                ← MDX content files
│   ├── blog/
│   │   ├── programming-should-be-fun.mdx
│   │   ├── start-small-think-big.mdx
│   │   ├── mistakes-are-your-teachers.mdx
│   │   └── build-something-you-love.mdx
│   │
│   └── projects/
│       ├── lern-beta-platform.mdx          ← Full case study content
│       └── acs-youth-summit.mdx            ← Full case study content
│
│
├── styles/                                 ← Supplemental styles
│   ├── typography.css                      ← Prose styles for MDX content
│   └── animations.css                      ← Keyframe definitions (blink, pulse, etc.)
│
│
├── public/                                 ← Static assets
│   ├── images/
│   │   ├── hero/
│   │   │   └── FardinMahadi.png            ← Hero photo (full resolution)
│   │   ├── projects/
│   │   │   ├── lern/
│   │   │   │   ├── thumbnail.png           ← Card thumbnail (800×500)
│   │   │   │   ├── hero.png                ← Case study hero (1200×675)
│   │   │   │   └── screens/                ← Gallery screenshots
│   │   │   │       ├── screen-1.png
│   │   │   │       └── screen-2.png
│   │   │   └── acs/
│   │   │       ├── thumbnail.png
│   │   │       ├── hero.png
│   │   │       └── screens/
│   │   ├── logos/                          ← Company/client logos for trust row
│   │   │   └── devgenit.svg
│   │   └── og/
│   │       └── og-default.png              ← Default OG image (1200×630)
│   │
│   ├── fonts/                              ← Self-hosted fonts (optional)
│   ├── resume/
│   │   └── fardin-mahadi-resume.pdf        ← Downloadable CV
│   └── icons/
│       └── favicon.ico
│
│
├── config/
│   └── animations.ts                       ← Framer Motion variant definitions (shared)
│
│
├── tailwind.config.ts                      ← Design system tokens (colors, fonts, shadows)
├── postcss.config.js
├── next.config.ts                          ← Image domains, MDX, redirects
├── tsconfig.json
├── .env.local                              ← Contact form API keys (Resend/EmailJS)
├── .env.example                            ← Template for env vars
├── package.json
└── README.md
```

---

## PART 3 — FILE-BY-FILE RESPONSIBILITY MAP

### `app/` — Pages

| File                           | Renders                                                     | Data Source                  |
| ------------------------------ | ----------------------------------------------------------- | ---------------------------- |
| `app/layout.tsx`               | `<Navbar>` + `<PageTransition>` + `{children}` + `<Footer>` | `lib/data/site.ts`           |
| `app/page.tsx`                 | All 10 homepage sections in order                           | Imports from `lib/data/*`    |
| `app/about/page.tsx`           | Extended bio, values, stack depth, process                  | `lib/data/skills.ts`         |
| `app/experience/page.tsx`      | Full `<Timeline>` component                                 | `lib/data/experience.ts`     |
| `app/projects/page.tsx`        | `<ProjectFilter>` + `<ProjectGrid>`                         | `lib/data/projects.ts`       |
| `app/projects/[slug]/page.tsx` | `<CaseStudyHero>` + `<CaseStudyBody>` + `<ProjectMeta>`     | MDX + `lib/data/projects.ts` |
| `app/blog/page.tsx`            | `<BlogGrid>`                                                | MDX file list                |
| `app/blog/[slug]/page.tsx`     | `<BlogBody>` + `<BlogMeta>` + `<BlogTableOfContents>`       | MDX content                  |
| `app/resume/route.ts`          | `redirect()` to `/resume/fardin-mahadi-resume.pdf`          | Static                       |
| `app/api/contact/route.ts`     | Email send via Resend API                                   | `.env.local`                 |

---

### `components/ui/` — Design System Primitives

Each primitive maps directly to a design system token from
`design-system-v3.md`:

| Component          | Props                                                                                   | Token Usage                           |
| ------------------ | --------------------------------------------------------------------------------------- | ------------------------------------- |
| `Button`           | `variant` (`primary`\|`secondary`\|`teal`\|`ghost`\|`dark`) · `size` (`sm`\|`md`\|`lg`) | `--mag-500`, `--sh-mag`, `--r-sm`     |
| `Badge`            | `variant` (`neutral`\|`violet`\|`teal`\|`plum`\|`dark`)                                 | `--mag-100`, `--teal-100`, etc.       |
| `FileTab`          | `path` (string) · `active` (bool)                                                       | `--canvas-sunken`, `--mag-500` border |
| `TerminalBlock`    | `filename` · `children`                                                                 | `#080612`, `--mag-300` prompt         |
| `SectionEyebrow`   | `label` · `number` (optional)                                                           | `--mag-500` line, `--n400` text       |
| `SectionHeading`   | `children` · `accent` (substring to color)                                              | `--mag-500` for accent span           |
| `AvailabilityChip` | `status` (`available`\|`busy`\|`open`)                                                  | `--teal-300`, `--teal-100` bg         |
| `PulseDot`         | `color` (`teal`\|`mag`)                                                                 | CSS `@keyframes pulse`                |
| `NoiseOverlay`     | `opacity` (default 0.03)                                                                | SVG filter                            |

---

### `lib/data/` — Content Types

#### `lib/types/project.ts`

```typescript
export type Project = {
  slug: string;
  title: string;
  shortDesc: string;
  problem: string;
  decision: string;
  result: string;
  role: string;
  company?: string;
  stack: string[];
  category: ('fullstack' | 'frontend' | 'ai' | 'mobile')[];
  featured: boolean;
  liveUrl?: string;
  codeUrl?: string;
  thumbnail: string; // /images/projects/[slug]/thumbnail.png
  heroImage: string; // /images/projects/[slug]/hero.png
  screens: string[]; // gallery screenshots
  date: string; // "2024-12"
  duration?: string; // "3 months"
};
```

#### `lib/types/experience.ts`

```typescript
export type ExperienceEntry = {
  company: string;
  role: string;
  type: 'full-time' | 'freelance' | 'contract' | 'part-time';
  startDate: string; // "2024-01"
  endDate: string | 'present';
  impact: string; // One-line impact statement
  description: string[]; // Bullet points for full timeline
  stack: string[];
  logo?: string; // /images/logos/[company].svg
};

export type EducationEntry = {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  highlights?: string[];
};
```

#### `lib/types/testimonial.ts`

```typescript
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  linkedIn?: string;
};
```

---

### `config/animations.ts` — Shared Framer Motion Variants

```typescript
// All page-level animation variants live here.
// Import and reuse across components — never define inline.

export const fadeUp = { ... }           // Standard entrance
export const fadeIn = { ... }           // Opacity only
export const staggerContainer = { ... } // Parent stagger wrapper
export const staggerItem = { ... }      // Child stagger item
export const scaleIn = { ... }          // Scale up entrance
export const slideInLeft = { ... }      // From left (blog cards)
export const countUp = { ... }          // For stat numbers
export const timelineLine = { ... }     // Height 0 → 100%
export const timelineNode = { ... }     // Scale 0 → 1
export const navBackground = { ... }    // Nav scroll transition
```

---

## PART 4 — BUILD SEQUENCE (ORDERED)

Follow this exact sequence. Each step must be complete before the next begins.

---

### STEP 1 — Project Foundation

```
1.1  Set up Next.js 14 App Router project (if starting fresh) or audit existing
1.2  Install dependencies:
       - framer-motion
       - clsx + tailwind-merge
       - @tailwindcss/typography (for MDX prose)
       - next-mdx-remote or @next/mdx
       - resend (contact form email)
       - react-intersection-observer (scroll triggers)
1.3  Configure tailwind.config.ts with full design system token map
1.4  Create app/globals.css with all CSS custom properties from design-system-v3.md
1.5  Set up fonts: Syne + DM Mono via next/font/google
1.6  Create lib/utils/cn.ts
1.7  Create config/animations.ts with all Framer Motion variants
```

---

### STEP 2 — Data Layer

```
2.1  Create lib/types/ — all TypeScript type definitions
2.2  Create lib/data/site.ts — name, title, email, social URLs, nav items
2.3  Create lib/data/projects.ts — populate with Lern + ACS data
2.4  Create lib/data/experience.ts — DevGenit + freelance history
2.5  Create lib/data/skills.ts — full stack grouped by category
2.6  Create lib/data/testimonials.ts — even if empty, establish structure
2.7  Migrate existing blog posts to /content/blog/*.mdx
2.8  Create /content/projects/*.mdx — write case studies for Lern + ACS
```

---

### STEP 3 — Design System Primitives (`components/ui/`)

Build in this order (each depends on the previous):

```
3.1  cn.ts utility (used by everything)
3.2  Cursor.tsx + PulseDot.tsx (used by hero and terminal)
3.3  Badge.tsx
3.4  Button.tsx
3.5  FileTab.tsx
3.6  TerminalPrompt.tsx
3.7  TerminalBlock.tsx (uses TerminalPrompt + Cursor)
3.8  SectionEyebrow.tsx
3.9  SectionHeading.tsx
3.10 AvailabilityChip.tsx (uses PulseDot)
3.11 NoiseOverlay.tsx
3.12 Divider.tsx
```

**Testing gate:** Build a `/_dev/components` page (dev-only route) that renders
all primitives side by side for visual QA before moving forward.

---

### STEP 4 — Layout Shell (`components/layout/`)

```
4.1  NavLink.tsx
4.2  Navbar.tsx (uses NavLink, Button, AvailabilityChip)
4.3  MobileNav.tsx (uses NavLink, Button)
4.4  Footer.tsx
4.5  PageTransition.tsx (Framer Motion AnimatePresence wrapper)
4.6  Wire up app/layout.tsx with Navbar + Footer + PageTransition
```

---

### STEP 5 — Card Components (`components/cards/`)

```
5.1  StatCard.tsx (uses useCountUp hook)
5.2  ServiceCard.tsx (uses Badge)
5.3  BlogTeaserCard.tsx (uses Badge)
5.4  BlogCard.tsx (uses Badge, BlogMeta)
5.5  TestimonialCard.tsx
5.6  ExperienceCard.tsx (uses Badge)
5.7  ProjectCard.tsx (uses Badge, Button, FileTab — the full featured card)
5.8  ProjectGalleryCard.tsx (compact version of ProjectCard)
```

---

### STEP 6 — Homepage Sections (`components/sections/`)

Build each section as a completely isolated component. The homepage `page.tsx`
is just a composition of these.

```
6.1  StatsStrip.tsx           (uses StatCard)
6.2  WhatIDoSection.tsx       (uses SectionEyebrow, SectionHeading, ServiceCard)
6.3  TechStackSection.tsx     (uses SectionEyebrow, SectionHeading, Badge)
6.4  BlogTeaserStrip.tsx      (uses SectionEyebrow, BlogTeaserCard)
6.5  ExperienceHighlight.tsx  (uses SectionEyebrow, ExperienceCard, Timeline)
6.6  TestimonialsSection.tsx  (uses SectionEyebrow, TestimonialCard)
6.7  FeaturedProjectsSection.tsx (uses SectionEyebrow, ProjectCard)
6.8  CtaSection.tsx           (uses SectionHeading, Button, NoiseOverlay)
6.9  ContactSection.tsx       (uses TerminalBlock, ContactForm, Footer partial)
```

---

### STEP 7 — Hero (`components/hero/`)

Hero is the most complex section. Build its sub-components first:

```
7.1  HeroStats.tsx            (uses PulseDot)
7.2  HeroCtas.tsx             (uses Button)
7.3  HeroPhoto.tsx            (dark panel + Next.js Image)
7.4  HeroText.tsx             (uses FileTab, AvailabilityChip, Cursor)
7.5  HeroSection.tsx          (assembles 7.1–7.4, all entrance animations)
```

---

### STEP 8 — Homepage Assembly

```
8.1  Wire app/page.tsx:
       <HeroSection />
       <StatsStrip />
       <WhatIDoSection />
       <FeaturedProjectsSection />
       <ExperienceHighlight />
       <TechStackSection />
       <TestimonialsSection />
       <BlogTeaserStrip />
       <CtaSection />
       <ContactSection />

8.2  Add scroll-reveal wrapper (IntersectionObserver) around each section
8.3  Verify section flow and narrative transitions
8.4  Mobile responsive pass
```

---

### STEP 9 — Inner Pages

```
9.1  /projects page:
       - ProjectFilter.tsx + ProjectGrid.tsx
       - app/projects/page.tsx

9.2  /projects/[slug] (case study):
       - CaseStudyHero.tsx, CaseStudyBody.tsx, ProjectMeta.tsx
       - app/projects/[slug]/page.tsx with MDX rendering
       - generateStaticParams() for all project slugs

9.3  /about page:
       - Structured bio + values + stack + process
       - app/about/page.tsx

9.4  /experience page:
       - Timeline.tsx + TimelineEntry.tsx + EducationSection.tsx
       - app/experience/page.tsx

9.5  /blog page:
       - BlogGrid.tsx
       - app/blog/page.tsx

9.6  /blog/[slug] (article):
       - BlogBody.tsx + BlogMeta.tsx + BlogTableOfContents.tsx
       - app/blog/[slug]/page.tsx

9.7  /resume redirect:
       - app/resume/route.ts → redirect to PDF
```

---

### STEP 10 — API & Forms

```
10.1  Set up Resend account + API key in .env.local
10.2  Build app/api/contact/route.ts
10.3  Wire ContactForm.tsx to POST /api/contact
10.4  Build FormSuccess.tsx (terminal-style success message)
10.5  Add form validation (zod or react-hook-form)
```

---

### STEP 11 — SEO & Metadata

```
11.1  Root metadata in app/layout.tsx (title template, description, OG)
11.2  generateMetadata() for /projects/[slug]
11.3  generateMetadata() for /blog/[slug]
11.4  Design OG image (1200×630) → /public/images/og/og-default.png
11.5  Dynamic OG images for project case studies (optional, Phase 2)
11.6  robots.txt + sitemap.xml (next-sitemap or app/sitemap.ts)
11.7  JSON-LD structured data for homepage (Person schema)
```

---

### STEP 12 — Performance & Polish

```
12.1  Audit all next/image usages:
        - Hero photo: priority={true}, sizes="50vw"
        - Project thumbnails: sizes="(max-width: 768px) 100vw, 50vw"
        - Fix current 3840px image issue → max w=800 for cards
12.2  Dynamic imports for heavy sections (ProjectImageGallery, etc.)
12.3  Reduce animation on prefers-reduced-motion
12.4  WCAG contrast audit on all color combinations
12.5  Keyboard navigation pass
12.6  Lighthouse run → target 90+ on all metrics
```

---

## PART 5 — KEY FILE CONTENTS (STARTERS)

### `tailwind.config.ts` — Token Structure

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mag: {
          950: '#1A0022',
          900: '#2A0038',
          800: '#480060',
          700: '#600080',
          600: '#8C00AA',
          500: '#B400D9',
          400: '#CC22EE',
          300: '#DD66FF',
          200: '#EDB3FF',
          100: '#F5DAFF',
          50: '#FAF0FF',
        },
        teal: {
          700: '#005C50',
          600: '#007A68',
          500: '#009B82',
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
        syne: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      boxShadow: {
        mag: '0 8px 36px rgba(180,0,217,0.30)',
        teal: '0 8px 28px rgba(0,155,130,0.22)',
        sm: '0 2px 10px rgba(17,8,24,0.09)',
        md: '0 6px 28px rgba(17,8,24,0.12)',
        lg: '0 16px 60px rgba(17,8,24,0.16)',
        xl: '0 32px 100px rgba(17,8,24,0.20)',
      },
      borderRadius: {
        xs: '3px',
        xl: '22px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
```

---

### `app/globals.css` — CSS Custom Properties

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-syne: ''; /* set by next/font */
    --font-dm-mono: ''; /* set by next/font */
  }

  html {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  body {
    background-color: #f5f1ed; /* --canvas */
    color: #301840; /* --tx-body */
    font-family: var(--font-syne), sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #1c1028;
  }
  ::-webkit-scrollbar-thumb {
    background: #8c00aa;
    border-radius: 3px;
  }
}

@layer utilities {
  .text-outline-mag {
    color: transparent;
    -webkit-text-stroke: 2px theme('colors.mag.500');
  }
  .font-mono-code {
    font-family: var(--font-dm-mono), monospace;
  }
  .section-pad {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/noise.svg');
    opacity: 0.03;
    pointer-events: none;
  }
}
```

---

### `app/layout.tsx` — Root Layout Structure

```typescript
import { Syne, DM_Mono } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/layout/PageTransition'
import { siteConfig } from '@/lib/data/site'
import type { Metadata } from 'next'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: { template: `%s · ${siteConfig.name}`, default: siteConfig.title },
  description: siteConfig.description,
  // ... OG, twitter, etc.
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <PageTransition>
          <main id="main-content">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
```

---

### `app/page.tsx` — Homepage Composition

```typescript
import HeroSection from '@/components/sections/HeroSection'
import StatsStrip from '@/components/sections/StatsStrip'
import WhatIDoSection from '@/components/sections/WhatIDoSection'
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection'
import ExperienceHighlight from '@/components/sections/ExperienceHighlight'
import TechStackSection from '@/components/sections/TechStackSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BlogTeaserStrip from '@/components/sections/BlogTeaserStrip'
import CtaSection from '@/components/sections/CtaSection'
import ContactSection from '@/components/sections/ContactSection'
import { getFeaturedProjects } from '@/lib/data/projects'
import { getRecentExperience } from '@/lib/data/experience'
import { getFeaturedTestimonials } from '@/lib/data/testimonials'
import { getRecentPosts } from '@/lib/mdx'

export default async function HomePage() {
  const projects = getFeaturedProjects()
  const experience = getRecentExperience(2)
  const testimonials = getFeaturedTestimonials()
  const posts = await getRecentPosts(2)

  return (
    <>
      <HeroSection />
      <StatsStrip />
      <WhatIDoSection />
      <FeaturedProjectsSection projects={projects} />
      <ExperienceHighlight entries={experience} />
      <TechStackSection />
      <TestimonialsSection testimonials={testimonials} />
      <BlogTeaserStrip posts={posts} />
      <CtaSection />
      <ContactSection />
    </>
  )
}
```

---

### `config/animations.ts` — Framer Motion Variants

```typescript
import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const countUp = (target: number) => ({
  hidden: { value: 0 },
  visible: {
    value: target,
    transition: { duration: 1.5, ease: 'easeOut' },
  },
});

export const timelineLine: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
};

export const timelineNode: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: 'backOut' },
  },
};

export const navBg = {
  transparent: {
    backgroundColor: 'rgba(12,8,20,0)',
    backdropFilter: 'blur(0px)',
  },
  solid: {
    backgroundColor: 'rgba(12,8,20,0.92)',
    backdropFilter: 'blur(16px)',
  },
};

// Hero entrance — staggered chain
export const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};
```

---

## PART 6 — COMPONENT DEPENDENCY TREE

```
app/layout.tsx
├── components/layout/Navbar.tsx
│   ├── components/ui/Button.tsx
│   ├── components/layout/NavLink.tsx
│   ├── components/ui/AvailabilityChip.tsx
│   │   └── components/ui/PulseDot.tsx
│   └── components/layout/MobileNav.tsx
│       ├── components/layout/NavLink.tsx
│       └── components/ui/Button.tsx
└── components/layout/Footer.tsx

app/page.tsx
├── HeroSection
│   ├── HeroText → FileTab, AvailabilityChip, Cursor
│   ├── HeroPhoto → next/image
│   ├── HeroCtas → Button
│   └── HeroStats → PulseDot
├── StatsStrip → StatCard → useCountUp
├── WhatIDoSection → SectionEyebrow, SectionHeading, ServiceCard → Badge
├── FeaturedProjectsSection → SectionEyebrow, ProjectCard
│   └── ProjectCard → FileTab, Badge, Button
├── ExperienceHighlight → SectionEyebrow, Timeline, ExperienceCard → Badge
├── TechStackSection → SectionEyebrow, SectionHeading, Badge
├── TestimonialsSection → SectionEyebrow, TestimonialCard
├── BlogTeaserStrip → SectionEyebrow, BlogTeaserCard → Badge
├── CtaSection → SectionHeading, Button, NoiseOverlay
└── ContactSection → TerminalBlock, ContactForm, FormSuccess
    └── ContactForm → FormField, Button
```

---

## PART 7 — ENVIRONMENT VARIABLES

```bash
# .env.local

# Contact form (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=mahadihasanfardin2015@gmail.com

# Site URL (for OG images, sitemap)
NEXT_PUBLIC_SITE_URL=https://fardinmahadi.vercel.app

# Analytics (optional)
NEXT_PUBLIC_UMAMI_WEBSITE_ID=xxxx    # or Vercel Analytics
```

```bash
# .env.example (committed to repo)
RESEND_API_KEY=
CONTACT_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

---

## PART 8 — ANTI-PATTERNS TO AVOID

These are patterns from the current site that must NOT be replicated:

| Anti-Pattern                           | Why                                   | Correct Approach                            |
| -------------------------------------- | ------------------------------------- | ------------------------------------------- |
| `w=3840` on card images                | Loads 4K images for thumbnail slots   | Use `sizes` prop + max `w=800` for cards    |
| Circular avatar crop                   | Destroys photo brand identity         | Full-panel photo in dark diagonal container |
| Social links in hero                   | Creates 6-action decision zone        | Social links in footer and contact only     |
| Blog section before CTA                | Pulls visitors away before conversion | Blog after CTA, minimal teaser only         |
| Zigzag project card layout             | Dated 2018 pattern, visual chaos      | Consistent direction on all cards           |
| Emoji in blog titles                   | Unprofessional, screen reader noise   | DM Mono category badge + clean title        |
| Redundant "Resume" nav link            | Duplicate of "Download CV" button     | Remove nav link, keep button only           |
| Equal-weight CTA pair                  | Visitor paralysis                     | One dominant + one ghost CTA                |
| No `generateMetadata()` on inner pages | Poor SEO for project/blog pages       | Add to all dynamic routes                   |
| Inline animation variants              | Inconsistent, hard to maintain        | All variants in `config/animations.ts`      |

---

## PART 9 — WHAT TO BUILD FIRST (DECISION GUIDE)

If you have limited time, build in this priority:

### Priority 1 — Maximum impact, minimum time

```
✓ tailwind.config.ts with design tokens
✓ globals.css with CSS properties
✓ HeroSection with full photo panel (biggest visual impact)
✓ FeaturedProjectsSection with consistent card layout
✓ ContactSection with working form
```

### Priority 2 — Trust and credibility

```
✓ StatsStrip with count-up animation
✓ ExperienceHighlight with timeline
✓ TestimonialsSection (even with just one quote)
✓ /projects/[slug] case study for Lern + ACS
```

### Priority 3 — Completeness

```
✓ WhatIDoSection
✓ TechStackSection
✓ CtaSection
✓ /about page
✓ /experience full timeline
✓ Blog migrated to MDX
```

### Priority 4 — Polish

```
✓ All Framer Motion entrance animations
✓ Count-up stats
✓ Timeline draw animation
✓ Mobile nav overlay
✓ OG images + metadata
✓ Lighthouse performance pass
```

---

## PART 10 — PHASE COMPLETION CHECKLIST

```
PHASE 1 · FOUNDATION
□ tailwind.config.ts complete with all design tokens
□ globals.css with all CSS custom properties
□ Fonts configured (Syne + DM Mono)
□ config/animations.ts with all Framer variants
□ lib/utils/cn.ts

PHASE 2 · DATA LAYER
□ All TypeScript types created
□ lib/data/site.ts populated
□ lib/data/projects.ts — 2+ projects
□ lib/data/experience.ts — 2+ roles
□ lib/data/skills.ts — all categories
□ Blog MDX files migrated
□ Project case study MDX files written

PHASE 3 · PRIMITIVES
□ All 12 components/ui/ built + visually tested on /_dev/components

PHASE 4 · LAYOUT SHELL
□ Navbar with scroll behavior working
□ MobileNav overlay working
□ Footer complete
□ PageTransition working between routes

PHASE 5 · CARDS
□ All 8 card components built

PHASE 6 · HOMEPAGE
□ All 10 sections built
□ app/page.tsx assembled
□ Section scroll reveals working
□ Mobile responsive

PHASE 7 · INNER PAGES
□ /projects gallery
□ /projects/[slug] case studies (min 2)
□ /about
□ /experience
□ /blog
□ /blog/[slug]
□ /resume redirect

PHASE 8 · API
□ Contact form API route
□ Form validation
□ Success/error states

PHASE 9 · SEO
□ Root metadata
□ Dynamic metadata on inner pages
□ OG image
□ Sitemap
□ robots.txt

PHASE 10 · PERFORMANCE
□ All images optimized
□ Dynamic imports where needed
□ prefers-reduced-motion respected
□ Lighthouse 90+ all categories
□ WCAG contrast passing
```

---

_Implementation Plan v1.0 · Fardin Mahadi Studio_ _Phase 2 of Portfolio Redesign
— Ready to build_
