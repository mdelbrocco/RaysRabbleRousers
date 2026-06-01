"use client";

import { DollarSign } from "lucide-react";
import { costs, costSummary } from "@/data/costs";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CostBreakdown() {
  return (
    <SectionWrapper
      id="costs"
      title="Cost Breakdown"
      subtitle="What to budget per person"
      dark
    >
      <div className="rounded-xl overflow-hidden border border-pine-600">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-pine-700">
              <th className="text-left px-4 py-3 font-semibold text-amber-400">Item</th>
              <th className="text-right px-4 py-3 font-semibold text-amber-400 whitespace-nowrap">
                Per Person
              </th>
              <th className="text-left px-4 py-3 font-semibold text-amber-400 hidden sm:table-cell">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {costs.map((item, i) => (
              <tr
                key={item.item}
                className={`border-t border-pine-700 ${
                  i % 2 === 0 ? "bg-pine-800/50" : "bg-pine-800/30"
                }`}
              >
                <td className="px-4 py-3 text-cream">{item.item}</td>
                <td className="px-4 py-3 text-right text-cream font-medium whitespace-nowrap">
                  {item.perPerson}
                </td>
                <td className="px-4 py-3 text-cream/60 hidden sm:table-cell">
                  {item.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile notes (shown below table on small screens) */}
      <div className="sm:hidden mt-4 space-y-2">
        {costs
          .filter((c) => c.notes)
          .map((item) => (
            <p key={item.item} className="text-xs text-cream/50">
              <span className="text-cream/70 font-medium">{item.item}:</span> {item.notes}
            </p>
          ))}
      </div>

      <div className="mt-6 flex items-center gap-3 px-2">
        <DollarSign className="w-5 h-5 text-amber-400 flex-shrink-0" />
        <p className="text-cream/80 font-medium">{costSummary}</p>
      </div>
    </SectionWrapper>
  );
}
