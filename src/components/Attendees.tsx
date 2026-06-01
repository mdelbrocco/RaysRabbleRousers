"use client";

import { Phone, Mail, Crown, User } from "lucide-react";
import { attendees } from "@/data/attendees";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Attendees() {
  return (
    <SectionWrapper
      id="crew"
      title="The Crew"
      subtitle="12 traveling from the Land (and beyond)"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {attendees.map((person, i) => (
          <div
            key={i}
            className={`rounded-xl bg-white shadow-md p-4 flex items-start gap-4 ${
              person.role === "The Groom"
                ? "ring-2 ring-amber-400 shadow-amber-100"
                : ""
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                person.role === "The Groom"
                  ? "bg-amber-100 text-amber-600"
                  : "bg-pine-50 text-pine-600"
              }`}
            >
              {person.role === "The Groom" ? (
                <Crown className="w-5 h-5" />
              ) : (
                <User className="w-5 h-5" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-charcoal">{person.name}</p>
              {person.role && (
                <p
                  className={`text-xs font-medium ${
                    person.role === "The Groom"
                      ? "text-amber-600"
                      : "text-charcoal-light"
                  }`}
                >
                  {person.role}
                </p>
              )}
              {person.phone && (
                <a
                  href={`tel:${person.phone}`}
                  className="flex items-center gap-1.5 text-sm text-pine-600 hover:text-pine-800 mt-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {person.phone}
                </a>
              )}
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-1.5 text-sm text-pine-600 hover:text-pine-800 mt-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="truncate">{person.email}</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
