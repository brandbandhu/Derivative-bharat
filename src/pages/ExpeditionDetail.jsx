import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Bus,
  CalendarDays,
  Hotel,
  Star,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react";
import StickyBookingWidget from "../components/StickyBookingWidget";
import Timeline from "../components/Timeline";
import { BookingProvider } from "../context/BookingContext";
import { getExpeditionById } from "../data/expeditionData";

function MediaGallery({ images, title }) {
  return (
    <section className="grid gap-3 md:grid-cols-4 md:grid-rows-2">
      <img
        src={images[0]}
        alt={`${title} hero`}
        className="h-72 w-full rounded-3xl object-cover md:col-span-2 md:row-span-2 md:h-full"
      />
      {images.slice(1, 4).map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${title} gallery ${index + 1}`}
          className="h-44 w-full rounded-2xl object-cover md:h-full"
        />
      ))}
    </section>
  );
}

function GuideCard({ guide }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-stone-100/80 p-4 shadow-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-700">Your Expert Historian</p>
      <div className="mt-3 flex items-center gap-3">
        <img src={guide.avatar} alt={guide.name} className="h-14 w-14 rounded-full object-cover" />
        <div>
          <h2 className="font-semibold text-amber-950">{guide.name}</h2>
          <p className="text-sm text-amber-900/85">{guide.title}</p>
        </div>
      </div>
    </article>
  );
}

function Inclusions({ items }) {
  const inclusionIcons = {
    stay: Hotel,
    transit: Bus,
    meals: UtensilsCrossed,
    guide: BookOpen,
  };

  return (
    <section>
      <h2 className="font-[Playfair_Display] text-2xl text-amber-950">Inclusions</h2>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((item) => {
          const Icon = inclusionIcons[item.key];
          return (
            <div
              key={item.label}
              className="rounded-2xl border border-stone-200 bg-stone-100/80 p-3 text-center shadow-sm"
            >
              {Icon ? <Icon className="mx-auto h-6 w-6 text-amber-900" /> : null}
              <p className="mt-1 text-sm font-medium text-amber-900">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Highlights({ highlights, exclusions }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      <article className="rounded-2xl border border-stone-200 bg-stone-100/80 p-4 shadow-sm">
        <h2 className="font-[Playfair_Display] text-xl text-amber-950">Expedition Highlights</h2>
        <ul className="mt-3 space-y-2 text-sm text-amber-900/90">
          {highlights.map((highlight) => (
            <li key={highlight} className="rounded-xl bg-stone-50 px-3 py-2">
              {highlight}
            </li>
          ))}
        </ul>
      </article>
      <article className="rounded-2xl border border-stone-200 bg-stone-100/80 p-4 shadow-sm">
        <h2 className="font-[Playfair_Display] text-xl text-amber-950">Exclusions</h2>
        <ul className="mt-3 space-y-2 text-sm text-amber-900/90">
          {exclusions.map((item) => (
            <li key={item} className="rounded-xl bg-stone-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

function ExpeditionDetailContent({ expedition }) {
  const formattedDeparture = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(expedition.nextDeparture));

  return (
    <main className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center rounded-full px-3 py-1.5 text-sm text-amber-900 hover:bg-stone-100"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Discovery
      </Link>

      <div className="mb-6 mt-3">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-700">Derivative Bharat Expedition</p>
        <h1 className="mt-2 font-[Playfair_Display] text-4xl leading-tight text-amber-950 sm:text-5xl">
          {expedition.title}
        </h1>
        <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-amber-900/85">
          <span>{expedition.location}</span>
          <span>{expedition.duration}</span>
          <span className="inline-flex items-center">
            <Star className="mr-1 h-4 w-4 fill-yellow-600 text-yellow-600" />
            {expedition.rating} ({expedition.reviews} reviews)
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-900">
            <UsersRound className="mr-1 h-3.5 w-3.5" />
            Group tours only
          </span>
          <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 font-medium text-amber-900">
            Group size {expedition.groupSize.min}-{expedition.groupSize.max}
          </span>
          <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 font-medium text-amber-900">
            <CalendarDays className="mr-1 h-3.5 w-3.5" />
            Next departure {formattedDeparture}
          </span>
        </div>
      </div>

      <MediaGallery images={expedition.heroImages} title={expedition.title} />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        <section className="space-y-6">
          <GuideCard guide={expedition.guide} />
          <Inclusions items={expedition.inclusions} />
          <Highlights highlights={expedition.highlights} exclusions={expedition.exclusions} />
          <Timeline itinerary={expedition.itinerary} />
        </section>

        <StickyBookingWidget
          duration={expedition.duration}
          pricePerAdult={expedition.pricePerAdult}
          groupSize={expedition.groupSize}
          seatsLeft={expedition.seatsLeft}
          nextDeparture={expedition.nextDeparture}
        />
      </div>
    </main>
  );
}

export default function ExpeditionDetail() {
  const { expeditionId } = useParams();

  const expedition = useMemo(() => getExpeditionById(expeditionId), [expeditionId]);

  return (
    <BookingProvider basePrice={expedition.pricePerAdult}>
      <ExpeditionDetailContent expedition={expedition} />
    </BookingProvider>
  );
}
