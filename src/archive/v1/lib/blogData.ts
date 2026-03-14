import type { BlogPostsProps } from '@/archive/v1/components/types/blog';

import blogPostsData from '@/archive/v1/data/blogPosts.json';

export const blogPosts: BlogPostsProps[] = blogPostsData as BlogPostsProps[];

// Helper function to get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPostsProps | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Helper function to get all blog posts
export function getAllBlogPosts(): BlogPostsProps[] {
  return blogPosts;
}
