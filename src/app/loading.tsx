"use client";

import { useEffect } from "react";
import { PageLoader } from "@/components/ui/loading";

export default function Loading() {
  useEffect(() => {
    // Disable cursor effects on loading page
    document.body.dataset.cursorSuspended = "true";
    window.dispatchEvent(
      new CustomEvent("target-cursor:suspend", { detail: true })
    );

    return () => {
      document.body.dataset.cursorSuspended = "false";
      window.dispatchEvent(
        new CustomEvent("target-cursor:suspend", { detail: false })
      );
    };
  }, []);

  return <PageLoader message="Loading page..." />;
}
