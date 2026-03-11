import type { StatCardProps } from '@/components/types/cards/cards';

export type HeroStatsProps = {
  stats: readonly StatCardProps[];
  className?: string;
};

export type HeroCtasProps = {
  className?: string;
};

export type HeroPhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

export type HeroTextProps = {
  name: string;
  title?: string;
  tagline: string;
  className?: string;
};

export type HeroSectionProps = {
  className?: string;
};
