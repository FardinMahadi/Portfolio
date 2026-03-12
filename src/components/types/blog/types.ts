export type BlogPostsProps = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
  content: string;
};

export type BlogPostContentProps = {
  post: BlogPostsProps;
};

export type BlogCardProps = {
  post: BlogPostsProps;
  index: number;
};

export type CategoryFilterProps = {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
};

export type MarkdownRendererProps = {
  content: string;
};
