export interface LoadingSpinnerProps {
  variant?: 'default' | 'terminal' | 'minimal' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export interface SkeletonLoaderProps {
  variant?: 'text' | 'image' | 'card' | 'list' | 'custom';
  width?: string | number;
  height?: string | number;
  count?: number;
  className?: string;
  rounded?: boolean;
}

export interface PageLoaderProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
  variant?: 'overlay' | 'inline';
  className?: string;
}

export interface ContentSkeletonProps {
  type: 'blogPost' | 'blogList' | 'projectCard' | 'projectGrid' | 'contactForm';
  count?: number;
  className?: string;
}
