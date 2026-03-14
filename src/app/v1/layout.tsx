import type { Metadata } from 'next';

import { ColorPaletteProvider } from '@/archive/v1/contexts/ColorPaletteContext';

import '@/archive/v1/styles/v1.css';

export const metadata: Metadata = {
  title: 'Mahadi Hasan Fardin — Portfolio v1 (Archive)',
  description:
    "Archived version of Fardin Mahadi's developer portfolio. View the current version at fardinmahadi.vercel.app.",
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://fardinmahadi.vercel.app/' },
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <ColorPaletteProvider>
      <div className="portfolio-v1">{children}</div>
    </ColorPaletteProvider>
  );
}
