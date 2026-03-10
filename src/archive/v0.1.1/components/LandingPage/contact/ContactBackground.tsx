'use client';

export function ContactBackground() {
  return (
    <>
      <div
        className="absolute top-0 left-0 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, color-mix(in srgb, var(--color-primary) 26%, transparent), transparent 70%)',
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, color-mix(in srgb, var(--color-accent) 26%, transparent), transparent 70%)',
        }}
      />
    </>
  );
}
