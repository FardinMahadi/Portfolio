export type ExperienceEntry = {
  company: string;
  role: string;
  type: 'full-time' | 'freelance' | 'contract' | 'part-time';
  startDate: string;
  endDate: string | 'present';
  impact: string;
  description: string[];
  stack: string[];
  logo?: string;
};

export type EducationEntry = {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  highlights?: string[];
};
