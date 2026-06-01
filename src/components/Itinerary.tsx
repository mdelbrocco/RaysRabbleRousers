"use client";

import { AlertTriangle } from "lucide-react";
import * as icons from "lucide-react";
import { itinerary, weatherNote } from "@/data/itinerary";
import type { Activity, ItineraryDay } from "@/data/itinerary";
import SectionWrapper from "@/components/ui/SectionWrapper";

const colorMap: Record<string, { border: string; bg: string; badge: string }> = {
  pine: { border: "border-l-pine-500", bg: "bg-pine-50", badge: "bg-pine-100 text-pine-700" },
  amber: { border: "border-l-amber-400", bg: "bg-amber-50", badge: "bg-amber-100 text-amber-700" },
  bark: { border: "border-l-bark-400", bg: "bg-bark-50", badge: "bg-bark-100 text-bark-700" },
};

const tagColors: Record<string, string> = {
  food: "bg-amber-100 text-amber-800",
  drinks: "bg-pine-100 text-pine-800",
  activity: "bg-blue-100 text-blue-800",
  logistics: "bg-gray-100 text-gray-700",
  chill: "bg-bark-100 text-bark-700",
};

function getIcon(name: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (icons as any)[name];
  return Icon ? <Icon className="w-5 h-5" /> : null;
}

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="flex gap-4 py-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-pine-600">
        {getIcon(activity.icon)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 flex-wrap">
          <span className="text-xs font-medium text-charcoal-light whitespace-nowrap">
            {activity.time}
          </span>
          {activity.tag && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[activity.tag]}`}
            >
              {activity.tag}
            </span>
          )}
        </div>
        <h4 className="font-semibold text-charcoal mt-0.5">{activity.title}</h4>
        {activity.description && (
          <p className="text-sm text-charcoal-light mt-0.5">{activity.description}</p>
        )}
        {activity.location && (
          <p className="text-xs text-pine-600 mt-1">{activity.location}</p>
        )}
      </div>
    </div>
  );
}

function DayCard({ day }: { day: ItineraryDay }) {
  const colors = colorMap[day.color] || colorMap.pine;

  return (
    <div
      className={`rounded-xl bg-white shadow-md border-l-4 ${colors.border} overflow-hidden`}
    >
      <div className={`px-6 py-4 ${colors.bg}`}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{day.emoji}</span>
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal">
              {day.day} &middot; {day.date}
            </h3>
            <p className="text-sm text-charcoal-light">{day.title}</p>
          </div>
        </div>
        <p className="text-sm text-charcoal-light mt-2 italic">{day.summary}</p>
      </div>
      <div className="px-6 py-2 divide-y divide-gray-100">
        {day.activities.map((activity, i) => (
          <ActivityCard key={i} activity={activity} />
        ))}
      </div>
    </div>
  );
}

export default function Itinerary() {
  return (
    <SectionWrapper
      id="itinerary"
      title="The Itinerary"
      subtitle="Four days. One mission. Send it for Eric."
    >
      {/* Weather flexibility note */}
      <div className="mb-8 p-4 rounded-lg bg-amber-50 border border-amber-200 flex gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-amber-800 text-sm">Weather Flexibility</p>
          <p className="text-sm text-amber-700 mt-1">{weatherNote}</p>
        </div>
      </div>

      <div className="grid gap-8">
        {itinerary.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </div>
    </SectionWrapper>
  );
}
