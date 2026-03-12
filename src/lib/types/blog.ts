export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags?: string[];
  featuredImage?: string;
  readTime?: string;
};
