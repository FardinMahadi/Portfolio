import type { ReactNode } from 'react';

export type BadgeProps = {
  variant?: 'neutral' | 'violet' | 'teal' | 'plum' | 'dark';
  children: ReactNode;
  className?: string;
};

export type FileTabProps = {
  path: string;
  active?: boolean;
  className?: string;
};

export type TerminalBlockProps = {
  filename?: string;
  children: ReactNode;
  className?: string;
};

export type TerminalPromptProps = {
  children: ReactNode;
  className?: string;
};

export type SectionEyebrowProps = {
  children: ReactNode;
  number?: string;
  className?: string;
};

export type SectionHeadingProps = {
  children: ReactNode;
  accent?: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
};

export type CursorProps = {
  className?: string;
};

export type PulseDotProps = {
  color?: 'teal' | 'mag';
  className?: string;
};

export type AvailabilityChipProps = {
  status?: 'available' | 'busy' | 'open';
  className?: string;
};

export type DividerProps = {
  label?: string;
  className?: string;
};

export type NoiseOverlayProps = {
  opacity?: number;
  className?: string;
};
