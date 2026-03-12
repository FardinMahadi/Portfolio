import { getAllBlogPosts } from '@/lib/blogData';
import { projects } from '@/lib/data/projects';
import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDate = new Date();

  const blogPosts = getAllBlogPosts();

  const blogUrls = blogPosts.map((post: { slug: string }) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: baseDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectUrls = projects.map(project => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: baseDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    {
      url: siteUrl,
      lastModified: baseDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: baseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: baseDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${siteUrl}/experience`,
      lastModified: baseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: baseDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: baseDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: baseDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...projectUrls,
    ...blogUrls,
  ];
}
