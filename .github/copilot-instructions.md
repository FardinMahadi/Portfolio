# Fardin Mahadi Portfolio — Copilot Instructions

This is a Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 personal
portfolio. **Follow every rule below exactly — do not introduce patterns not
already present in the codebase.**

---

## Tech Stack

- **Framework:** Next.js 15 with App Router and Turbopack
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4 (utility-first; no CSS modules)
- **Animation:** Framer Motion 12 (primary), GSAP 3 (complex sequences), Motion
  library (view transitions)
- **UI library:** ShadCN UI — use existing components from `src/components/ui/`,
  never install duplicates
- **Icons:** Lucide React only
- **Utility:** `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for all
  conditional class composition

---

## Project Structure Rules

- **Components** live in `src/components/` and are organized by feature:
  `blog/`, `about/`, `experience/`, `effects/`, `LandingPage/`, `shared/`,
  `ui/`, `resume/`
- **Types** live in `src/components/types/` mirroring the feature folder
  structure — never co-locate prop types inside component files
- **Data** is JSON in `src/data/` — never hardcode content inline; reference
  those files
- **Utilities** belong in `src/lib/` — no utility logic inside components
- **Hooks** go in `src/hooks/` — prefix with `use-` (kebab-case filename, `use`
  prefix in hook name)
- **Pages** live in `src/app/` following App Router conventions

---

## Component Conventions

### Exports

- **Named exports only** — never `export default` for components
- Export the component directly: `export function ComponentName() {}`

### Directive

- Add `'use client'` at the top of any component that uses hooks, event
  handlers, browser APIs, or Framer Motion
- Server components have no directive — keep them server-side wherever possible

### Props

- Define props with the `type` keyword, never `interface`:
  ```ts
  type ComponentNameProps = {
    title: string;
    variant?: 'primary' | 'ghost';
  };
  ```
- Props type name must be `{ComponentName}Props`
- Place the type definition in `src/components/types/<feature>/<file>.ts`, not
  in the component file

### File order (strict)

1. `'use client'` (if needed)
2. Type-only imports (`import type ...`)
3. React / Next.js imports
4. Third-party library imports (motion, gsap, lucide-react, etc.)
5. Internal `@/` imports (components, hooks, lib, data)
6. Component function
7. Named export

---

## TypeScript Rules

- **Strict mode is on** — never use `any`; use `unknown` + type narrowing if
  needed
- Prefer `type` over `interface` everywhere
- Use `as const` for constant literal objects and arrays
- Union types for variants: `variant?: 'fade' | 'slide' | 'scale'`
- Use the `@/` path alias for all internal imports — no relative `../../` paths
  beyond one level

---

## Styling Rules

### Tailwind CSS

- Use utility classes directly on JSX elements — no `@apply` in CSS files
- Compose conditional classes only with `cn()`:
  ```tsx
  className={cn('rounded-lg border', isActive && 'border-[var(--mag-500)]')}
  ```
- Responsive classes follow mobile-first: `base sm: md: lg: xl:`

### CSS Variables (Design System — "Deep Magenta Signal")

- Primary accent: `var(--mag-500)` (`#B400D9`) — buttons, links, highlights
- Hover state: `var(--mag-400)` (`#CC22EE`)
- Page background: `var(--canvas)` (`#F5F1ED`)
- Card/panel background: `var(--canvas-raised)` (`#FDFCFB`)
- Teal secondary: `var(--teal-500)` (`#009B82`) — code strings, status
- All color tokens are defined in `src/app/globals.css` and
  `src/lib/colorPalettes.ts` — add new colors there, never hardcode hex values
  inline
- Use `color-mix(in srgb, var(--mag-500) 24%, transparent)` pattern for gradient
  overlays in inline styles

### Inline styles

- Only use `style={{}}` for values that **cannot** be expressed as static
  Tailwind classes: dynamic opacity, runtime CSS variable injection, radial
  gradients
- Background gradients use `radial-gradient` with `color-mix()` as seen in
  existing hero/effects components — keep that pattern

---

## Animation Rules

- **Framer Motion** is the default for all UI animations
- Use `motion.div`, `motion.section`, etc. — never wrap plain elements when a
  motion element suffices
- Standard entry pattern:
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
  />
  ```
- Stagger children via `delay: index * 0.08` on `transition`
- Magnetic / spring effects use `stiffness: 150, damping: 15`
- GSAP is reserved for complex scroll-driven or timeline sequences only — do not
  add GSAP to simple hover/appear effects

---

## Data Handling

- Blog posts: `src/data/blogPosts.json` — parsed via `src/lib/blogData.ts`
- Projects: `src/data/projects.json`
- Resume: `src/data/resumeData.json`
- Social links: `src/data/socialLinks.json`
- Never fetch data inside a Client Component — use Server Components or pass
  data as props

---

## Design Voice

- This portfolio follows a **"technical journal written by someone who ships
  products"** voice — bold, confident, minimal fluff
- VS Code developer DNA is intentional: monospace labels, terminal prompts, `▹`
  bullets — preserve these decorative elements
- The magenta brand identity (`--mag-500`) is the visual anchor — every
  interactive element should relate back to it

---

## What NOT to Do

- Do not add `export default` to any component
- Do not use `interface` for prop types — use `type`
- Do not hardcode hex color values — use CSS tokens from the design system
- Do not use `@apply` in CSS
- Do not place utility logic inside component files
- Do not define prop types inside component files — use `src/components/types/`
- Do not use relative paths with `../` more than one level deep — use `@/`
- Do not add `console.log` statements
- Do not install new icon libraries — Lucide React only
- Do not install new animation libraries — Framer Motion + GSAP only
- Do not add comments explaining what code does unless the logic is non-obvious
