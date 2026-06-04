"use client";

import { Car, ParkingCircle, AlertCircle, Users } from "lucide-react";
import { gettingAround } from "@/data/logistics";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function GettingAround() {
  return (
    <SectionWrapper
      id="getting-around"
      title="Getting Around"
      subtitle="Transportation and parking logistics"
      dark
    >
      <p className="text-cream/80 mb-8">{gettingAround.overview}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* DD Plan */}
        <div className="rounded-xl bg-pine-700/50 border border-pine-600 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-cream">
              {gettingAround.ddPlan.title}
            </h3>
          </div>
          <p className="text-cream/70 text-sm">
            {gettingAround.ddPlan.description}
          </p>
          <p className="text-cream/60 text-sm mt-3 italic">
            {gettingAround.ddPlan.hybrid}
          </p>
        </div>

        {/* Parking */}
        <div className="rounded-xl bg-pine-700/50 border border-pine-600 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
              <ParkingCircle className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-cream">
              {gettingAround.parking.name}
            </h3>
          </div>
          <ul className="space-y-2">
            {gettingAround.parking.details.map((detail, i) => (
              <li key={i} className="text-cream/70 text-sm flex gap-2">
                <span className="text-amber-400">&#8226;</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Rideshare Warning */}
        <div className="rounded-xl bg-red-900/20 border border-red-800/40 p-6 md:col-span-2">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-red-300">
                {gettingAround.rideshare.title}
              </h3>
              <p className="text-red-200/70 text-sm mt-1">
                {gettingAround.rideshare.warning}
              </p>
            </div>
          </div>
        </div>

        {/* Vehicles */}
        <div className="md:col-span-2 flex items-center gap-3 px-2">
          <Car className="w-5 h-5 text-amber-400" />
          <p className="text-cream/70 text-sm">{gettingAround.vehicles}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
