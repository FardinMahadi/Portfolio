import type { Project } from '@/lib/types/project';

export type ProjectSlideProps = {
  project: Project;
  index: number;
  total: number;
};

export type ProjectsSectionProps = {
  className?: string;
};
