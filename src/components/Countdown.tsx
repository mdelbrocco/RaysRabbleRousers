"use client";

import { useSyncExternalStore } from "react";
import { siteConfig } from "@/data/site-config";

const TARGET = new Date(siteConfig.startDate).getTime();

// A shared one-second "clock" read SSR-safely via useSyncExternalStore — no
// setState-in-effect, and no server/client hydration mismatch on the time.
let now = Date.now();

function subscribe(callback: () => void) {
  const id = setInterval(() => {
    now = Date.now();
    callback();
  }, 1000);
  return () => clearInterval(id);
}

function getSnapshot(): number | null {
  return now;
}

function getServerSnapshot(): number | null {
  // The time isn't known during SSR / first paint; render placeholders instead.
  return null;
}

const pad = (n: number) => n.toString().padStart(2, "0");

export default function Countdown() {
  const nowMs = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const ready = nowMs !== null;
  const diff = ready ? Math.max(0, TARGET - nowMs) : 0;
  const totalSeconds = Math.floor(diff / 1000);

  const units = [
    { label: "Days", value: Math.floor(totalSeconds / 86400), pad: false },
    { label: "Hours", value: Math.floor((totalSeconds % 86400) / 3600), pad: true },
    { label: "Minutes", value: Math.floor((totalSeconds % 3600) / 60), pad: true },
    { label: "Seconds", value: totalSeconds % 60, pad: true },
  ];

  // Trip has started (or is underway).
  if (ready && diff === 0) {
    return <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-amber-400 mb-10">It&apos;s go time! 🎉</p>;
  }

  return (
    <div className="mb-10">
      <p className="text-cream/50 text-xs font-semibold tracking-[0.2em] uppercase mb-4">The party starts in</p>
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-amber-400 tabular-nums">
              {ready ? (unit.pad ? pad(unit.value) : unit.value) : "--"}
            </span>
            <span className="text-cream/50 text-[0.65rem] sm:text-xs uppercase tracking-widest mt-1">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
