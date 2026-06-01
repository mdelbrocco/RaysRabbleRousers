"use client";

import { Camera } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PhotoGallery() {
  return (
    <SectionWrapper
      id="photos"
      title="Photos"
      subtitle="Memories from the weekend"
    >
      <div className="rounded-xl bg-white shadow-md p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-pine-50 flex items-center justify-center mx-auto mb-4">
          <Camera className="w-8 h-8 text-pine-400" />
        </div>
        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-2">
          Photos Coming Soon
        </h3>
        <p className="text-charcoal-light max-w-md mx-auto">
          This section will be updated with photos after the trip. For now, focus on making the memories.
        </p>
      </div>
    </SectionWrapper>
  );
}
