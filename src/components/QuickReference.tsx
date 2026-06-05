"use client";

import { Phone } from "lucide-react";
import { contacts } from "@/data/contacts";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function QuickReference() {
  return (
    <SectionWrapper id="contacts" title="Quick Reference" subtitle="Key contacts and numbers (tap to call)" dark>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <div key={contact.name} className="rounded-xl bg-pine-700/50 border border-pine-600 p-4">
            <p className="font-semibold text-cream">{contact.name}</p>
            <p className="text-xs text-cream/50 mb-3">{contact.context}</p>
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                {contact.phone}
              </a>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
