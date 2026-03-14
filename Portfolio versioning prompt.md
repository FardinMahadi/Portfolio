# Portfolio Versioning — Implementation Prompt

**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · Framer Motion
**Repo:** https://github.com/FardinMahadi/Portfolio **Live:**
https://fardinmahadi.vercel.app **Deploy target:** Vercel **Goal:** Serve v2 at
`/` and v1 at `/v1/` from one deployment. Pattern must scale to `/v2/`, `/v3/`
etc.

---

## Current repo state

```
main branch  →  v2 (current live site)
v1 branch    →  v1 (previous version)

src/app/
├── layout.tsx
├── page.tsx
├── globals.css
├── about/
├── projects/
├── experience/
├── blog/
└── contact/
```

---

## Target structure after implementation

```
src/
├── app/
│   ├── layout.tsx          ← v2 root layout, untouched
│   ├── page.tsx            ← v2 homepage, untouched
│   ├── globals.css         ← v2 globals, untouched
│   ├── about/              ← v2 routes, untouched
│   └── v1/
│       ├── layout.tsx      ← NEW: v1 isolated layout
│       └── page.tsx        ← NEW: v1 entry, lazy loads V1App
│
└── archive/
    └── v1/
        ├── components/     ← copied from v1 branch
        ├── sections/       ← copied from v1 branch
        ├── lib/            ← copied from v1 branch
        ├── data/           ← copied from v1 branch
        ├── hooks/          ← copied from v1 branch
        ├── styles/
        │   └── v1.css      ← v1 globals, scoped to .portfolio-v1
        └── V1App.tsx       ← v1 root component

public/
└── archive/
    └── v1/                 ← v1 public assets (images, icons, OG, CV)
```

---

## Step 1 — Git tags (run before touching any files)

```bash
git checkout v1
git tag v1.0.0 && git push origin v1.0.0

git checkout main
git tag v2.0.0 && git push origin v2.0.0
```

---

## Step 2 — Copy v1 files into the archive

From the repo root, on `main` branch:

```bash
mkdir -p src/archive/v1/styles public/archive/v1

# Pull specific folders from v1 branch without switching
git checkout v1 -- src/components src/sections src/lib src/data src/hooks
git checkout v1 -- public/images public/icons

# Move them into archive (don't overwrite v2)
mv src/components  src/archive/v1/components
mv src/sections    src/archive/v1/sections
mv src/lib         src/archive/v1/lib
mv src/data        src/archive/v1/data
mv src/hooks       src/archive/v1/hooks
mv public/images   public/archive/v1/images
mv public/icons    public/archive/v1/icons
```

> If v1 and v2 share a folder name and `git checkout v1 --` would overwrite v2
> files, use a fresh clone instead:
>
> ```bash
> git clone --branch v1 https://github.com/FardinMahadi/Portfolio /tmp/portfolio-v1
> cp -r /tmp/portfolio-v1/src/components src/archive/v1/components
> # repeat for other folders
> ```

---

## Step 3 — Update asset paths inside v1 archive

All public asset references in `src/archive/v1/**` must be updated. Run a global
find-replace inside `src/archive/v1/`:

| Find            | Replace                    |
| --------------- | -------------------------- |
| `src="/images/` | `src="/archive/v1/images/` |
| `src="/icons/`  | `src="/archive/v1/icons/`  |
| `src="/docs/`   | `src="/archive/v1/docs/`   |
| `url('/images/` | `url('/archive/v1/images/` |

For Next.js `<Image />` components:

```tsx
// before
<Image src="/images/avatar/fardin-mahadi-no-bg.png" ... />
// after
<Image src="/archive/v1/images/avatar/fardin-mahadi-no-bg.png" ... />
```

---

## Step 4 — Create `src/archive/v1/styles/v1.css`

Scope ALL v1 global styles under `.portfolio-v1`. Never import this file at the
app root — only in `src/app/v1/layout.tsx`.

```css
/* v1 design tokens — scoped, never leak to v2 */
.portfolio-v1 {
  /* paste v1's CSS variables here */
  --background: #your-v1-bg;
  --foreground: #your-v1-fg;
  /* etc. */
}

.portfolio-v1 *,
.portfolio-v1 *::before,
.portfolio-v1 *::after {
  box-sizing: border-box;
}

/* Scope any v1 element resets */
.portfolio-v1 h1,
.portfolio-v1 h2,
.portfolio-v1 p,
.portfolio-v1 a {
  /* v1 typography resets if different from v2 */
}

/* Tailwind base conflict fix:
   v2's globals.css applies `body { ... }` globally.
   Override it for v1 here: */
.portfolio-v1 {
  font-family: /* v1 font stack */;
  background-color: var(--background);
  color: var(--foreground);
}
```

---

## Step 5 — Create `src/archive/v1/V1App.tsx`

```tsx
import { VersionBanner } from './components/VersionBanner';

// Import v1 sections — adjust to match v1's actual component names
// import Hero     from "./sections/Hero";
// import About    from "./sections/About";
// import Projects from "./sections/Projects";
// import Contact  from "./sections/Contact";

export default function V1App() {
  return (
    <>
      <VersionBanner />
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </>
  );
}
```

---

## Step 6 — Create `src/archive/v1/components/VersionBanner.tsx`

Sticky top bar. Matches your Deep Magenta Signal design system.

```tsx
export function VersionBanner() {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        background: '#0a0a0a',
        borderBottom: '1px solid #1f1f1f',
        padding: '8px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        fontSize: '12px',
        color: '#6b7280',
        fontFamily: 'monospace',
        letterSpacing: '0.05em',
      }}
    >
      <span>
        archive / <strong style={{ color: '#e5e7eb' }}>v1</strong>
      </span>
      <span style={{ color: '#374151' }}>·</span>
      <a
        href="/"
        style={{
          color: '#B400D9',
          textDecoration: 'none',
          padding: '2px 10px',
          border: '1px solid #B400D9',
          borderRadius: '3px',
          fontSize: '11px',
        }}
      >
        current version →
      </a>
    </div>
  );
}
```

---

## Step 7 — Create `src/app/v1/layout.tsx`

```tsx
import type { Metadata } from 'next';
import '@/archive/v1/styles/v1.css';

export const metadata: Metadata = {
  title: 'Mahadi Hasan Fardin — Portfolio v1 (Archive)',
  description: "Archived version of Fardin Mahadi's developer portfolio.",
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://fardinmahadi.vercel.app/' },
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return <div className="portfolio-v1">{children}</div>;
}
```

---

## Step 8 — Create `src/app/v1/page.tsx`

```tsx
import dynamic from 'next/dynamic';

const V1App = dynamic(() => import('@/archive/v1/V1App'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#0a0a0a',
        color: '#4b5563',
        fontFamily: 'monospace',
        fontSize: '13px',
      }}
    >
      loading archive...
    </div>
  ),
});

export default function V1Page() {
  return <V1App />;
}
```

> **Why `ssr: false`?** Prevents hydration mismatches if v1 has components that
> read `window`, use browser APIs, or have Framer Motion animations that differ
> between server and client. Switch to `ssr: true` only if v1 needs
> server-rendered HTML for SEO (it shouldn't — it's `noindex`).

---

## Step 9 — Fix `next/router` → `next/navigation` in v1 components

App Router removed `next/router`. Search `src/archive/v1/` for these and fix:

```tsx
// ❌ v1 original (Pages Router)
import { useRouter } from 'next/router';
import { useRouter } from 'next/dist/client/router';

// ✅ App Router replacement
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
```

Also fix any `<Link>` imports if v1 used the old API:

```tsx
// ❌ old
import Link from 'next/link';
<Link href="/about">
  <a>About</a>
</Link>;

// ✅ App Router
import Link from 'next/link';
<Link href="/about">About</Link>; // no <a> wrapper
```

---

## Step 10 — Verify `"use client"` directives

App Router components are Server Components by default. Any v1 component using
hooks, event handlers, or Framer Motion needs:

```tsx
'use client'; // must be the very first line
```

Search `src/archive/v1/` for:

- `useState`, `useEffect`, `useRef`, `useContext` → needs `"use client"`
- `motion.div`, `AnimatePresence`, `useAnimation` → needs `"use client"`
- `onClick`, `onChange`, `onSubmit` → needs `"use client"`

---

## Step 11 — Tailwind CSS in v1 archive

Tailwind scans files based on `tailwind.config.ts` content paths. Ensure v1
archive files are included:

```ts
// tailwind.config.ts
const config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/archive/**/*.{ts,tsx}', // ← ADD THIS
  ],
  // rest of config unchanged
};
```

v1 can use all the same Tailwind utilities as v2 — they share one config. Only
add new tokens if v1 genuinely needs them AND they don't conflict with v2.

---

## Step 12 — Local testing checklist

```bash
npm run dev
```

| Check             | URL                  | Expected                       |
| ----------------- | -------------------- | ------------------------------ |
| v2 loads          | `localhost:3000/`    | Current portfolio, no changes  |
| v1 loads          | `localhost:3000/v1/` | v1 with VersionBanner at top   |
| v2 styles intact  | DevTools → Elements  | No `.portfolio-v1` class on v2 |
| v1 styles scoped  | DevTools → Elements  | Root div has `.portfolio-v1`   |
| No console errors | DevTools → Console   | Clean                          |
| v1 assets load    | DevTools → Network   | 200s from `/archive/v1/...`    |

```bash
npm run build  # fix any TypeScript errors before pushing
```

---

## Step 13 — Deploy to Vercel

```bash
git add .
git commit -m "feat: add v1 archive at /v1/ route"
git push origin main
```

Vercel auto-deploys. No config changes needed — App Router routes work natively.

Verify on production:

- `https://fardinmahadi.vercel.app/` → v2 ✓
- `https://fardinmahadi.vercel.app/v1/` → v1 ✓

---

## Adding future versions (v3, v4, ...)

When v3 is ready:

```bash
# 1. Tag current v2
git tag v2.0.0 && git push origin v2.0.0

# 2. Archive current v2
cp -r src/app/page.tsx         src/archive/v2/
cp -r src/components/          src/archive/v2/components/
# etc.

# 3. Create /v2/ route
mkdir -p src/app/v2
# create src/app/v2/layout.tsx  (noindex, import v2.css)
# create src/app/v2/page.tsx    (dynamic import V2App)

# 4. Build v3 in src/app/ as normal
```

---

## Hard rules — do not violate

- ❌ Never import `src/archive/v1/styles/v1.css` anywhere except
  `src/app/v1/layout.tsx`
- ❌ Never add v1-specific tokens to root `tailwind.config.ts` `theme.extend`
  without confirming they don't conflict with v2
- ❌ Never use `next/router` in archive components — always `next/navigation`
- ❌ Never forget `"use client"` on v1 components with hooks or Framer Motion
- ❌ Never skip `robots: noindex` on `src/app/v1/layout.tsx` — it will split SEO
- ❌ Never put `<a>` wrapper inside Next.js `<Link>` — App Router doesn't need
  it

---

_Fardin Mahadi Studio — fardinmahadi.vercel.app_
