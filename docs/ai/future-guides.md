# Future Guide Recommendations

To keep the learning and onboarding experience polished, expand the supporting docs with companion
guides that preempt common questions and tie directly into the structural and testing workflows
already documented elsewhere.

## docs/ai/architecture.md – Architecture Review Guide

- Articulate the current architectural rationale (layout structure, data ownership, palette
  management) so contributors understand the “why” behind the folder tree before rearranging it.
- Provide decision flows for when to choose server actions, server components, or client components,
  with callouts specific to this codebase’s hybrid rendering needs.
- Include annotated templates for new subsystems (`components`, `lib`, `data`, `hooks`) and describe
  how those layers should interact (data ownership, prop flow, shared utilities).
- Keep a changelog section that summarizes migrations, constraints, and deviations so
  `.cursor/commands/code-structure.md` can reference a trusted source when reminding others to
  document decisions.

## docs/ai/testing.md – Testing & QA Guide

- Define the required test surfaces (e.g., `pnpm format`, `pnpm lint`, manual sanity checks) plus
  any additional verification steps for forms, blog rendering, and contact flows.
- Share repeatable recipes for rerunning the `docs/ai/training-guide` examples, ensuring animations
  and interactive behavior still behave as expected after structural or UI updates.
- Document storybook-like snapshots, visual regression aids, or other tooling (screen recordings,
  smoke checks) that reviewers can follow to confirm a stable release.
- Provide guidance on how to capture and share lint reports, screenshot evidence, or other artifacts
  when submitting PRs that touch structure or behavior.

Update `README.md` or `docs/getting-started/development-workflow.md` to reference this file and keep
collaborators aware of the expectation to run `pnpm format` and `pnpm lint` before publishing
changes.
