import { BlogTeaserCard } from '@/components/cards/BlogTeaserCard';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getAllBlogPosts } from '@/lib/blogData';
import type { BlogPost } from '@/lib/types/blog';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function BlogSection({ className }: { className?: string }) {
  const raw = getAllBlogPosts().slice(0, 3);

  const posts: BlogPost[] = raw.map(p => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    category: p.category,
    readTime: p.readTime,
    featuredImage: p.image,
  }));

  if (posts.length === 0) return null;

  return (
    <section id="blog" className={cn('py-24', className)}>
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-4">
          <SectionEyebrow number="05">Writing</SectionEyebrow>
          <SectionHeading accent="think">How I think.</SectionHeading>
          <p className="text-n500 max-w-xl text-base leading-relaxed">
            Technical notes, lessons from shipping products, and the occasional strong opinion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts.map(post => (
            <BlogTeaserCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="font-mono text-sm font-medium underline-offset-4 hover:underline text-mag-500"
          >
            Read all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
