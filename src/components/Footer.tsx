"use client";

import { Trees } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pine-900 text-cream/50 py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Trees className="w-4 h-4 text-amber-400" />
          <span className="font-[family-name:var(--font-playfair)] text-cream/70 font-semibold">
            Ray&apos;s Rabble Rousers
          </span>
        </div>
        <p className="text-sm">
          Traverse City, MI &middot; June 25&ndash;28, 2026
        </p>
      </div>
    </footer>
  );
}
