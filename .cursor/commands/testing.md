## Testing Guidance

1. **Verify every structural change.** After modifying directories, exports, or shared utilities,
   run `pnpm format` and `pnpm lint` and record the commands/results in your notes so reviewers know
   the workspace was cleaned before review.

2. **Use the testing roadmap.** Reference `docs/ai/testing.md` for the required test suite (lint,
   format, manual checks) plus recipes for exercising contact flows, blog rendering, and any
   training-guide demos that could break when components move.

3. **Capture artifacts.** When possible, provide traces of manual smoke tests (screenshots, terminal
   logs, Storybook snapshots) alongside lint reports so the team can see how the UI behaves after
   structural shifts.

4. **Keep regression fast.** Encourage smaller verification loops (e.g., rerun the same `pnpm lint`
   command after refactors, rerender training-guide examples) so architectural changes settle before
   extra features are layered on top.
