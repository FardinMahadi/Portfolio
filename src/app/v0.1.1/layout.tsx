import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio v0.1.1 — Fardin Mahadi',
  description: 'Archived version of the previous portfolio design.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function V011Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
