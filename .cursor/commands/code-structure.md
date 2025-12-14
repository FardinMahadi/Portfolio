## Code Structure Guidance

1. **Reaffirm the architectural intent.** Start by reviewing
   `docs/ai/README.md`, then check `docs/ai/architecture` (and any
   subsystem-specific files such as `docs/ai/training-guide` or
   `docs/ai/quick-prompt`) to understand the current rationale, constraints, and
   expected data flows. Note any unmet assumptions before rearranging
   directories so your changes align with documented goals.
2. **Verify the stack-level checks.** Before committing structure changes,
   confirm that your new layout, exports, or naming conventions match the
   expectations described in `docs/ai/architecture` (e.g., feature boundaries,
   shared layers, data-versus-ui rules). If you deviate, record why the existing
   guidance wasn’t sufficient and which tests or manual checks you ran to feel
   confident.
3. **Keep files in thematic homes.** Add or refactor components/utilities within
   their established folders (`components`, `data`, `lib`, `hooks`, etc.). When
   reorganizing types or barrels, maintain the hierarchy under
   `src/components/types` and prefer exporting through the feature-level
   `index.ts` files so consumers continue importing via namespaces like
   `from "@/components/types/landing"`.
4. **Capture and surface rationales.** After implementing the change, summarize
   the architectural motivations, migration notes, or constraints in
   `docs/ai/architecture` (or a more specific guide) so future contributors can
   trace why this layout exists and avoid accidental reversions.
5. **Document decisions in the log.** For each non-trivial layout change, add a
   short entry to `docs/ai/code-decisions.md` (create the file if it’s missing).
   Use this template to keep things consistent:
   - Date: YYYY-MM-DD
   - Change: [What was moved/refactored]
   - Rationale: [Why this structure better matches the architecture goals]
   - Impact: [Systems, imports, or consumers affected]

6. **Run formatting and lint before submitting.** After every structural
   adjustment, execute `pnpm format` and then `pnpm lint`; document the commands
   you ran in your PR/TODO comment so reviewers know the clean state is
   verified. This step enforces consistent imports, spacing, and TypeScript
   hygiene before anyone merges the change.
7. **Keep the surface understandable.** Continue using the naming, spacing, and
   grouping conventions from the docs so new contributors can read the structure
   quickly and understand how features map to folders.
