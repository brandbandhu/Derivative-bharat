import { useState } from "react";

function TimelineItem({ dayPlan, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className="rounded-2xl border border-stone-200 bg-stone-100/70 p-4 shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Day {dayPlan.day}
          </p>
          <h3 className="mt-1 font-[Playfair_Display] text-xl text-amber-950">{dayPlan.title}</h3>
        </div>
        <span className="rounded-full bg-stone-200 px-3 py-1 text-sm font-medium text-amber-950">
          {isOpen ? "Hide" : "View"}
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 grid gap-4 sm:grid-cols-[100px_1fr]">
          <img
            src={dayPlan.thumbnail}
            alt={`Day ${dayPlan.day}`}
            className="h-24 w-full rounded-xl object-cover"
          />

          <div>
            <p className="text-sm text-amber-900/90">{dayPlan.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {dayPlan.activities.map((activity) => (
                <li
                  key={activity}
                  className="rounded-full border border-stone-300 bg-stone-50 px-3 py-1 text-xs font-medium text-amber-900"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Timeline({ itinerary }) {
  return (
    <section className="space-y-4">
      <h2 className="font-[Playfair_Display] text-2xl text-amber-950">Day-by-Day Itinerary</h2>
      <div className="space-y-3">
        {itinerary.map((dayPlan, index) => (
          <TimelineItem key={dayPlan.day} dayPlan={dayPlan} defaultOpen={index === 0} />
        ))}
      </div>
    </section>
  );
}
