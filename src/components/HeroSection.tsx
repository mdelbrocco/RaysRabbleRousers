"use client";

import { MapPin, Calendar, Users } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-pine-800 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pine-900/80 via-pine-800/60 to-pine-800" />

      {/* Decorative trees pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl">🌲</div>
        <div className="absolute top-40 right-20 text-6xl">🌲</div>
        <div className="absolute bottom-40 left-1/4 text-7xl">🌲</div>
        <div className="absolute top-60 right-1/3 text-5xl">🌲</div>
        <div className="absolute bottom-20 right-10 text-8xl">🌲</div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Bachelor Weekend
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-cream mb-4 leading-tight">
          {siteConfig.title}
        </h1>
        <p className="text-cream/70 text-xl md:text-2xl mb-10 font-[family-name:var(--font-playfair)] italic">
          Celebrating {siteConfig.groom}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-cream/60 text-sm mb-12">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            {siteConfig.dates}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            {siteConfig.location}
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" />
            {siteConfig.headcount} friends
          </div>
        </div>

        <a
          href="#itinerary"
          className="inline-block px-8 py-3 rounded-lg bg-amber-400 text-pine-900 font-semibold hover:bg-amber-300 transition-colors"
        >
          See the Plan
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cream/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
