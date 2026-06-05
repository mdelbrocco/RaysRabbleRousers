"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { ArrowLeft, DollarSign } from "lucide-react";
import { costs, costSummary } from "@/data/costs";

export default function CostsPage() {
  const { authenticated, isCrew, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!authenticated || !isCrew)) {
      router.replace("/");
    }
  }, [loading, authenticated, isCrew, router]);

  if (loading || !isCrew) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pine-800">
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pine-800 text-cream">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        {/* Back link */}
        <a href="/" className="inline-flex items-center gap-2 text-cream/60 hover:text-amber-400 text-sm font-medium transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to main page
        </a>

        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-amber-400 mb-2">Cost Breakdown</h1>
        <p className="text-cream/60 mb-8">Per-person estimates. Eric doesn&apos;t see this page.</p>

        {/* Cost table */}
        <div className="rounded-xl overflow-hidden border border-pine-600">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pine-700">
                <th className="text-left px-4 py-3 font-semibold text-amber-400">Item</th>
                <th className="text-right px-4 py-3 font-semibold text-amber-400 whitespace-nowrap">Per Person</th>
                <th className="text-left px-4 py-3 font-semibold text-amber-400 hidden sm:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {costs.map((item, i) => (
                <tr key={item.item} className={`border-t border-pine-700 ${i % 2 === 0 ? "bg-pine-800/50" : "bg-pine-800/30"}`}>
                  <td className="px-4 py-3 text-cream">{item.item}</td>
                  <td className="px-4 py-3 text-right text-cream font-medium whitespace-nowrap">{item.perPerson}</td>
                  <td className="px-4 py-3 text-cream/60 hidden sm:table-cell">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile notes */}
        <div className="sm:hidden mt-4 space-y-2">
          {costs
            .filter((c) => c.notes)
            .map((item) => (
              <p key={item.item} className="text-xs text-cream/50">
                <span className="text-cream/70 font-medium">{item.item}:</span> {item.notes}
              </p>
            ))}
        </div>

        {/* Summary */}
        <div className="mt-6 flex items-center gap-3 px-2">
          <DollarSign className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <p className="text-cream/80 font-medium">{costSummary}</p>
        </div>
      </div>
    </div>
  );
}
