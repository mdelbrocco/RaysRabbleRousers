"use client";

import { useState } from "react";
import * as icons from "lucide-react";
import { Check } from "lucide-react";
import { packingList, sharedGear } from "@/data/packing-list";
import SectionWrapper from "@/components/ui/SectionWrapper";

function getIcon(name: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (icons as any)[name];
  return Icon ? <Icon className="w-5 h-5" /> : null;
}

export default function PackingList() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (item: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) {
        next.delete(item);
      } else {
        next.add(item);
      }
      return next;
    });
  };

  return (
    <SectionWrapper id="packing" title="Packing List" subtitle="Don't forget the sunscreen">
      <div className="grid sm:grid-cols-2 gap-6">
        {packingList.map((category) => (
          <div key={category.category} className="rounded-xl bg-white shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-pine-50 flex items-center justify-center text-pine-600">{getIcon(category.icon)}</div>
              <h3 className="font-semibold text-charcoal text-lg">{category.category}</h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((item) => {
                const isChecked = checked.has(item);
                return (
                  <li key={item}>
                    <button onClick={() => toggle(item)} className="flex items-center gap-3 w-full text-left py-1 group">
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          isChecked ? "bg-pine-500 border-pine-500" : "border-gray-300 group-hover:border-pine-400"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className={`text-sm transition-colors ${isChecked ? "line-through text-charcoal-light" : "text-charcoal"}`}>{item}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Shared gear — group stuff, only need one of each */}
      <div className="mt-8 rounded-xl bg-white shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">{getIcon("Users")}</div>
          <div>
            <h3 className="font-semibold text-charcoal text-lg">Shared Gear</h3>
            <p className="text-xs text-charcoal-light">Group stuff &mdash; claim in advance (tell Matt) so we only bring one of each</p>
          </div>
        </div>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
          {sharedGear.map((gear) => (
            <li key={gear.item} className="flex items-center justify-between gap-3 border-b border-gray-100 pb-2">
              <span className="text-sm text-charcoal">{gear.item}</span>
              {gear.who ? (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-pine-100 text-pine-700 whitespace-nowrap">{gear.who}</span>
              ) : (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-400 whitespace-nowrap">TBD</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center text-sm text-charcoal-light mt-6 italic">
        Late June in TC is typically high 70s &ndash; low 80s. Pack layers for evenings on the water.
      </p>
    </SectionWrapper>
  );
}
