import { ContentSkeleton } from "@/components/ui/loading";

export default function BlogLoading() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ContentSkeleton type="blogList" count={3} />
      </div>
    </div>
  );
}
