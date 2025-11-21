## Architecture Guidance

1. **Document the “why” before touching the tree.** Reference `docs/ai/README.md` and
   `docs/ai/architecture.md` to recall the current rationale, feature boundaries, and shared
   concerns before reorganizing directories. Highlight any constraints (data ownership, palette
   rules, rendering decisions) that justify the existing layout.

2. **Clarify rendering patterns.** Describe when this stack prefers server actions, server
   components, or client components, discussing the trade-offs the repo currently balances (e.g.,
   fetching data at build time versus coordinating client-side validation).

3. **Share subsystem templates.** Include annotated folder examples for `components`, `lib`, `data`,
   and `hooks`, showing how data flows through the layers and where shared helpers, animation
   utilities, or transition hooks belong.

4. **Log migrations.** Whenever a layout shifts, summarize the rationale, constraints, and follow-up
   work in `docs/ai/architecture.md` so `.cursor/commands/code-structure.md` can reference a trusted
   history of why decisions were made.
