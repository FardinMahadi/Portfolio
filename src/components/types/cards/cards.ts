import type { BlogPost } from '@/lib/types/blog';
import type { ExperienceEntry } from '@/lib/types/experience';
import type { Project } from '@/lib/types/project';
import type { Testimonial } from '@/lib/types/testimonial';
import type { ReactNode } from 'react';

export type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

export type ServiceCardProps = {
  title: string;
  description: string;
  stack: readonly string[];
  icon: ReactNode;
  number?: string;
  className?: string;
};

export type ProjectCardProps = {
  project: Project;
  className?: string;
};

export type ExperienceCardProps = {
  entry: ExperienceEntry;
  isLast?: boolean;
  className?: string;
};

export type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export type BlogTeaserCardProps = {
  post: BlogPost;
  className?: string;
};
