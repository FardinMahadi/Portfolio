# Archive — v0.1.1

Static code snapshot of the portfolio before the redesign.

**Snapshot date:** March 2026 **Live preview:** `/v0.1.1/`

## Contents

| Folder            | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `components/`     | All React components as they existed at v0.1.1                 |
| `data/`           | JSON data files (blogPosts, projects, resumeData, socialLinks) |
| `hooks/`          | Custom React hooks                                             |
| `lib/`            | Utility functions and helpers                                  |
| `contexts/`       | React context providers                                        |
| `app/page.tsx`    | The homepage entry point                                       |
| `app/layout.tsx`  | Root layout                                                    |
| `app/globals.css` | Global CSS and design tokens                                   |

## Notes

- Files in this archive still reference `@/components/`, `@/lib/` etc. — they
  are **reference copies only**, not independently runnable.
- The live `/v0.1.1/` route imports directly from `src/components/` (the live
  tree at snapshot time).
- Do not modify files in this archive — it is a read-only historical record.
- When rebuilding components during the redesign, use the archived files here as
  reference.
