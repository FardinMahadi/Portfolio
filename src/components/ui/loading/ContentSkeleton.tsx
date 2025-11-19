"use client";

import { SkeletonLoader } from "./SkeletonLoader";

import type { ContentSkeletonProps } from "./schema";

export function ContentSkeleton({
  type,
  count = 1,
  className,
}: ContentSkeletonProps) {
  const renderSkeleton = () => {
    switch (type) {
      case "blogPost":
        return (
          <div className={`space-y-6 ${className || ""}`}>
            {/* Title */}
            <SkeletonLoader variant="text" height="2.5rem" width="80%" />
            {/* Meta info */}
            <div className="flex gap-4">
              <SkeletonLoader variant="text" width="100px" height="1rem" />
              <SkeletonLoader variant="text" width="80px" height="1rem" />
              <SkeletonLoader variant="text" width="120px" height="1rem" />
            </div>
            {/* Featured image */}
            <SkeletonLoader variant="image" height="400px" />
            {/* Content paragraphs */}
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonLoader
                key={i}
                variant="text"
                height="1.2rem"
                width={i === 4 ? "60%" : "100%"}
              />
            ))}
          </div>
        );

      case "blogList":
        return (
          <div className={`space-y-4 ${className || ""}`}>
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-slate-800/50 bg-slate-900/30 space-y-4"
              >
                {/* Card header */}
                <div className="flex items-start gap-4">
                  <SkeletonLoader variant="image" width="120px" height="80px" />
                  <div className="flex-1 space-y-2">
                    <SkeletonLoader
                      variant="text"
                      height="1.5rem"
                      width="70%"
                    />
                    <SkeletonLoader variant="text" height="1rem" width="40%" />
                  </div>
                </div>
                {/* Excerpt */}
                <SkeletonLoader variant="text" height="1rem" count={2} />
                {/* Meta */}
                <div className="flex gap-4">
                  <SkeletonLoader
                    variant="text"
                    width="100px"
                    height="0.875rem"
                  />
                  <SkeletonLoader
                    variant="text"
                    width="80px"
                    height="0.875rem"
                  />
                </div>
              </div>
            ))}
          </div>
        );

      case "projectCard":
        return (
          <div className={`space-y-4 ${className || ""}`}>
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-800/50 bg-slate-900/30 overflow-hidden"
              >
                <SkeletonLoader variant="image" height="200px" />
                <div className="p-4 space-y-3">
                  <SkeletonLoader variant="text" height="1.5rem" width="60%" />
                  <SkeletonLoader variant="text" height="1rem" count={2} />
                  <div className="flex gap-2">
                    <SkeletonLoader
                      variant="text"
                      width="60px"
                      height="1.5rem"
                      rounded
                    />
                    <SkeletonLoader
                      variant="text"
                      width="60px"
                      height="1.5rem"
                      rounded
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "projectGrid":
        return (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className || ""}`}
          >
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-800/50 bg-slate-900/30 overflow-hidden"
              >
                <SkeletonLoader variant="image" height="200px" />
                <div className="p-4 space-y-3">
                  <SkeletonLoader variant="text" height="1.5rem" width="70%" />
                  <SkeletonLoader variant="text" height="1rem" count={2} />
                </div>
              </div>
            ))}
          </div>
        );

      case "contactForm":
        return (
          <div className={`space-y-6 ${className || ""}`}>
            <SkeletonLoader variant="text" height="2rem" width="50%" />
            <div className="space-y-4">
              <SkeletonLoader variant="text" height="3rem" />
              <SkeletonLoader variant="text" height="3rem" />
              <SkeletonLoader variant="text" height="8rem" />
              <SkeletonLoader variant="text" height="3rem" width="150px" />
            </div>
          </div>
        );

      default:
        return (
          <SkeletonLoader variant="text" count={count} className={className} />
        );
    }
  };

  return renderSkeleton();
}
