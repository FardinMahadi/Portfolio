import { ContentSkeleton } from "@/components/ui/loading";

export default function BlogPostLoading() {
  return (
    <div className="relative min-h-screen bg-(--color-background) text-theme-text">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ContentSkeleton type="blogPost" />
      </div>
    </div>
  );
}
