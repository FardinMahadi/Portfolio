import type { BlogPostsProps } from '@/components/types/blog';

import blogPostsData from '@/data/blogPosts.json';

export const blogPosts: BlogPostsProps[] = blogPostsData as BlogPostsProps[];

export function getBlogPostBySlug(slug: string): BlogPostsProps | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPostsProps[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map(p => p.category))).sort();
}

export function getPostsByCategory(category: string): BlogPostsProps[] {
  return blogPosts.filter(p => p.category === category);
}

export function getRelatedPosts(slug: string, n = 3): BlogPostsProps[] {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];
  return blogPosts.filter(p => p.slug !== slug && p.category === current.category).slice(0, n);
}
