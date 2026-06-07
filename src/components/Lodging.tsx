"use client";

import { Home, MapPin, Clock, ExternalLink, Info } from "lucide-react";
import { lodging } from "@/data/lodging";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Lodging() {
  return (
    <SectionWrapper id="lodging" title="The House" subtitle="Home base for the weekend">
      <div className="rounded-xl bg-white shadow-md overflow-hidden">
        <div className="bg-pine-50 px-6 py-4 border-b border-pine-100">
          <div className="flex items-center gap-3">
            <Home className="w-6 h-6 text-pine-600" />
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal">{lodging.name}</h3>
              <span className="text-xs font-medium text-pine-600 uppercase tracking-wide">{lodging.type}</span>
            </div>
          </div>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-pine-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-charcoal">Address</p>
                <p className="text-sm text-charcoal-light">{lodging.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-pine-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-charcoal">Check-in / Check-out</p>
                <p className="text-sm text-charcoal-light">
                  In: {lodging.checkIn} &middot; Out: {lodging.checkOut}
                </p>
              </div>
            </div>
            {lodging.link && (
              <a
                href={lodging.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-pine-600 hover:text-pine-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                View Listing
              </a>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-4 h-4 text-pine-500" />
              <p className="font-medium text-charcoal text-sm">Key Details</p>
            </div>
            <ul className="space-y-2">
              {lodging.notes.map((note, i) => (
                <li key={i} className="text-sm text-charcoal-light flex gap-2">
                  <span className="text-pine-500">&#8226;</span>
                  {note}
                </li>
              ))}
            </ul>

            <p className="font-medium text-charcoal text-sm mt-5 mb-2">House Rules</p>
            <ul className="space-y-2">
              {lodging.houseRules.map((rule, i) => (
                <li key={i} className="text-sm text-charcoal-light flex gap-2">
                  <span className="text-amber-500">&#8226;</span>
                  {rule}
                </li>
              ))}
            </ul>
            <a href="#Itinerary-Sunday" className="inline-block text-sm text-pine-600 hover:text-pine-800 font-medium mt-4">
              See checkout checklist in Sunday&apos;s itinerary &uarr;
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
