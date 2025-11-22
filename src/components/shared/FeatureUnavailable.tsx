export function FeatureUnavailable() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-theme-border/60 bg-[color-mix(in_srgb,var(--color-surface)_75%,transparent)] p-10 text-center shadow-[0_20px_60px_rgba(15,15,15,0.25)]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme-secondary">
        Technical pause
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-theme-text md:text-4xl">
        Resume experience is coming soon
      </h2>
      <p className="text-theme-muted text-base leading-relaxed md:text-lg">
        The resume feature is currently unavailable, but we’re polishing the experience and will
        ship a themed download soon. Sign up for notifications or revisit shortly.
      </p>
      <div className="flex gap-3">
        <span className="rounded-full border border-theme-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-theme-muted">
          Coming soon
        </span>
        <span className="rounded-full border border-theme-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-theme-muted">
          Stay tuned
        </span>
      </div>
    </section>
  );
}
