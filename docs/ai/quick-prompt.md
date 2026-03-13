# Quick AI Prompt — v2

Copy-paste this into a new AI session to give it full context about the project:

---

```
You are working on a Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 portfolio.

Design system: "Deep Magenta Signal"
- Primary accent: var(--mag-500) = #B400D9
- Hover: var(--mag-400) = #CC22EE
- Background: var(--canvas) = #F5F1ED
- Panel: var(--canvas-raised) = #FDFCFB
- Secondary: var(--teal-500) = #009B82
- Fonts: Syne 800 (display), DM Mono (labels/code), Inter (body)

Component rules:
- Named exports only (no export default)
- Prop types use `type`, not `interface`
- Prop types live in src/components/types/, never in component files
- Use cn() from @/lib/utils for conditional classes
- Never hardcode hex colors; use CSS var() tokens
- No @apply in CSS
- Import order: 'use client' > type imports > React/Next > third-party > internal @/

Animation rules:
- All Framer Motion variants defined in config/animations.ts
- Never define variants inline in components
- Import: import { fadeUp, staggerContainer } from '@/config/animations'
- Include useReducedMotion() guard on all in-view animations

For full rules, read: .github/copilot-instructions.md
```

- External packages (React, libraries)
- @mui/\* imports
- src/routes/\* imports
- src/hooks/\* imports
- src/utils/\* imports
- Other internal src/\* imports
- src/components/\* imports
- src/sections/\* imports
- src/auth/\* imports
- src/types/\* imports
- Relative imports (./, ../)
- Relative type imports

4. Use eslint-plugin-perfectionist with this config:
   - 'perfectionist/sort-imports' rule at error level (2)
   - Custom groups for src/\* patterns
   - TypeScript import resolver

5. Also enable:
   - 'import/newline-after-import': 2
   - 'unused-imports/no-unused-imports': 1

Install required packages and update eslint.config.mjs (or equivalent) with the
full configuration.

```

---

## Even Shorter Version

```

Set up ESLint import ordering: pyramid structure (line-length), blank lines
between groups, group order: types → external → @mui → src/routes → src/hooks →
src/utils → internal → src/components → src/sections → relative. Use
eslint-plugin-perfectionist with custom groups for src/\* patterns.

```

---

For detailed instructions, see `docs/AI_SETUP_PROMPT.md`
```
