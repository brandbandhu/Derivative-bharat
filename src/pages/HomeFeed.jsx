import { useMemo, useState } from "react";
import {
  CalendarDays,
  MapPin,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Users,
  UsersRound,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { expeditions } from "../data/expeditionData";

const categories = ["All", "Forts", "Temples", "Culinary", "Battlefields"];

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function getDurationDays(durationLabel) {
  const [days] = durationLabel.split(" ");
  return Number(days);
}

function formatMonthLabel(monthValue) {
  const [year, month] = monthValue.split("-");
  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric",
  }).format(new Date(Number(year), Number(month) - 1, 1));
}

export default function HomeFeed() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";

  const [destinationQuery, setDestinationQuery] = useState("");
  const [requestedGroupSize, setRequestedGroupSize] = useState(10);
  const [durationFilter, setDurationFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");
  const [sortFilter, setSortFilter] = useState("featured");

  const departureMonthOptions = useMemo(() => {
    const monthSet = new Set(
      expeditions.map((expedition) => expedition.nextDeparture.slice(0, 7))
    );
    return ["all", ...Array.from(monthSet)];
  }, []);

  const filteredExpeditions = useMemo(() => {
    let list = [...expeditions];

    if (selectedCategory !== "All") {
      list = list.filter((expedition) => expedition.category === selectedCategory);
    }

    if (destinationQuery.trim()) {
      const query = destinationQuery.toLowerCase();
      list = list.filter(
        (expedition) =>
          expedition.title.toLowerCase().includes(query) ||
          expedition.location.toLowerCase().includes(query) ||
          expedition.category.toLowerCase().includes(query)
      );
    }

    list = list.filter(
      (expedition) =>
        requestedGroupSize >= expedition.groupSize.min &&
        requestedGroupSize <= expedition.groupSize.max
    );

    if (durationFilter !== "all") {
      list = list.filter((expedition) => {
        const days = getDurationDays(expedition.duration);
        if (durationFilter === "short") return days <= 3;
        if (durationFilter === "medium") return days >= 4 && days <= 5;
        return days >= 6;
      });
    }

    if (priceFilter !== "all") {
      list = list.filter((expedition) => {
        if (priceFilter === "under25000") return expedition.pricePerAdult < 25000;
        if (priceFilter === "25000to32000")
          return expedition.pricePerAdult >= 25000 && expedition.pricePerAdult <= 32000;
        return expedition.pricePerAdult > 32000;
      });
    }

    if (monthFilter !== "all") {
      list = list.filter((expedition) => expedition.nextDeparture.startsWith(monthFilter));
    }

    if (sortFilter === "priceAsc") {
      list.sort((a, b) => a.pricePerAdult - b.pricePerAdult);
    } else if (sortFilter === "priceDesc") {
      list.sort((a, b) => b.pricePerAdult - a.pricePerAdult);
    } else if (sortFilter === "ratingDesc") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortFilter === "departureSoon") {
      list.sort((a, b) => new Date(a.nextDeparture) - new Date(b.nextDeparture));
    } else {
      list.sort((a, b) => b.reviews - a.reviews);
    }

    return list;
  }, [
    destinationQuery,
    durationFilter,
    monthFilter,
    priceFilter,
    requestedGroupSize,
    selectedCategory,
    sortFilter,
  ]);

  const upcomingDepartures = useMemo(() => {
    return [...expeditions]
      .sort((a, b) => new Date(a.nextDeparture) - new Date(b.nextDeparture))
      .slice(0, 4);
  }, []);

  const resetFilters = () => {
    setSearchParams({}, { replace: true });
    setDestinationQuery("");
    setRequestedGroupSize(10);
    setDurationFilter("all");
    setPriceFilter("all");
    setMonthFilter("all");
    setSortFilter("featured");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1900&q=80"
          alt="Indian heritage landscape"
          className="h-[66vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-amber-900/35 to-transparent" />

        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-yellow-500/30 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-52 w-52 rounded-full bg-orange-600/30 blur-3xl" />

        <div className="absolute bottom-6 left-4 right-4 sm:left-6 sm:right-6">
          <p className="text-xs uppercase tracking-[0.22em] text-amber-100/90">Group Heritage Expeditions</p>
          <h1 className="mt-2 font-[Playfair_Display] text-4xl leading-tight text-stone-50 sm:text-6xl">
            Derivative Bharat Runs Group Tour Packages Only.
          </h1>

          <div className="mt-5 grid gap-3 rounded-2xl border border-stone-100/25 bg-stone-50/95 p-3 text-amber-950 shadow-xl md:grid-cols-4">
            <label className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 md:col-span-2">
              <span className="mb-1 block text-xs uppercase tracking-wide text-amber-700">Destination or Theme</span>
              <span className="inline-flex w-full items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 shrink-0" />
                <input
                  type="text"
                  value={destinationQuery}
                  onChange={(event) => setDestinationQuery(event.target.value)}
                  placeholder="Search Hampi, Jaipur, Temples..."
                  className="w-full bg-transparent outline-none"
                />
              </span>
            </label>

            <label className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2">
              <span className="mb-1 block text-xs uppercase tracking-wide text-amber-700">Departure Month</span>
              <span className="inline-flex w-full items-center text-sm">
                <CalendarDays className="mr-2 h-4 w-4 shrink-0" />
                <select
                  value={monthFilter}
                  onChange={(event) => setMonthFilter(event.target.value)}
                  className="w-full bg-transparent outline-none"
                >
                  <option value="all">Any month</option>
                  {departureMonthOptions.slice(1).map((monthValue) => (
                    <option key={monthValue} value={monthValue}>
                      {formatMonthLabel(monthValue)}
                    </option>
                  ))}
                </select>
              </span>
            </label>

            <label className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2">
              <span className="mb-1 block text-xs uppercase tracking-wide text-amber-700">Your Group Size</span>
              <span className="inline-flex w-full items-center text-sm">
                <Users className="mr-2 h-4 w-4 shrink-0" />
                <input
                  type="number"
                  min={1}
                  max={24}
                  value={requestedGroupSize}
                  onChange={(event) => setRequestedGroupSize(Number(event.target.value || 1))}
                  className="w-full bg-transparent outline-none"
                />
              </span>
            </label>

            <button
              type="button"
              onClick={() => setSortFilter("departureSoon")}
              className="md:col-span-4 inline-flex items-center justify-center rounded-xl bg-yellow-600 px-4 py-3 text-sm font-semibold text-stone-50 transition hover:bg-yellow-500"
            >
              <Search className="mr-2 h-4 w-4" />
              Find Nearest Group Departure
            </button>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold">
            <ShieldCheck className="mr-1 h-3.5 w-3.5" />
            Group Tours Only
          </span>
          <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold">
            <UsersRound className="mr-1 h-3.5 w-3.5" />
            Expert-led shared departures
          </span>
          <p className="text-sm">
            Solo and small-party travelers join curated cohorts. Every Derivative Bharat package is batch-based.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-[Playfair_Display] text-3xl text-amber-950">Upcoming Group Departures</h2>
          <span className="text-sm text-amber-800">{upcomingDepartures.length} earliest batches</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingDepartures.map((expedition) => (
            <Link
              key={expedition.id}
              to={`/expeditions/${expedition.id}`}
              className="rounded-2xl border border-stone-200 bg-stone-100 p-3"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-amber-700">{formatDate(expedition.nextDeparture)}</p>
              <h3 className="mt-2 text-sm font-semibold text-amber-950">{expedition.title}</h3>
              <p className="mt-1 text-xs text-amber-800">{expedition.seatsLeft} seats left</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-stone-200 bg-stone-100 p-4">
        <div className="mb-3 flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          <h3 className="font-semibold text-amber-950">Discovery Filters</h3>
        </div>
        <div className="grid gap-3 lg:grid-cols-5">
          <div className="flex flex-wrap gap-2 lg:col-span-2">
            {categories.map((category) => {
              const isActive = category === selectedCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setSearchParams(category === "All" ? {} : { category }, { replace: true })
                  }
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "border-amber-900 bg-amber-950 text-stone-50"
                      : "border-stone-300 bg-stone-50 text-amber-900 hover:bg-stone-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <select
            value={durationFilter}
            onChange={(event) => setDurationFilter(event.target.value)}
            className="rounded-xl border border-stone-300 bg-stone-50 px-3 py-2 text-sm outline-none"
          >
            <option value="all">All durations</option>
            <option value="short">Up to 3 days</option>
            <option value="medium">4-5 days</option>
            <option value="long">6+ days</option>
          </select>
          <select
            value={priceFilter}
            onChange={(event) => setPriceFilter(event.target.value)}
            className="rounded-xl border border-stone-300 bg-stone-50 px-3 py-2 text-sm outline-none"
          >
            <option value="all">All prices</option>
            <option value="under25000">Under INR 25,000</option>
            <option value="25000to32000">INR 25,000 - 32,000</option>
            <option value="above32000">Above INR 32,000</option>
          </select>
          <select
            value={sortFilter}
            onChange={(event) => setSortFilter(event.target.value)}
            className="rounded-xl border border-stone-300 bg-stone-50 px-3 py-2 text-sm outline-none"
          >
            <option value="featured">Featured</option>
            <option value="ratingDesc">Highest rated</option>
            <option value="priceAsc">Price low to high</option>
            <option value="priceDesc">Price high to low</option>
            <option value="departureSoon">Nearest departure</option>
          </select>
        </div>
        <button
          type="button"
          onClick={resetFilters}
          className="mt-3 rounded-full border border-stone-300 px-3 py-1.5 text-xs font-medium text-amber-900 hover:bg-stone-200"
        >
          Reset all filters
        </button>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-[Playfair_Display] text-3xl text-amber-950">Group Expedition Packages</h2>
          <span className="text-sm text-amber-800">{filteredExpeditions.length} matching results</span>
        </div>

        {filteredExpeditions.length === 0 ? (
          <div className="rounded-3xl border border-stone-200 bg-stone-100 p-8 text-center">
            <p className="text-lg font-semibold text-amber-950">No packages match these filters.</p>
            <p className="mt-2 text-sm text-amber-900/85">Try a different destination, budget, or group-size range.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredExpeditions.map((expedition) => (
              <Link
                key={expedition.id}
                to={`/expeditions/${expedition.id}`}
                className="group rounded-3xl border border-stone-200 bg-stone-100 p-3 shadow-heritage transition hover:-translate-y-0.5"
              >
                <div className="relative">
                  <img
                    src={expedition.heroImages[0]}
                    alt={expedition.title}
                    className="h-64 w-full rounded-2xl object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-stone-50/95 px-3 py-1 text-xs font-semibold text-amber-950">
                    {expedition.category}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                    Group only
                  </span>
                </div>

                <div className="mt-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-amber-950">{expedition.title}</h3>
                      <p className="text-sm text-amber-800">{expedition.location}</p>
                    </div>
                    <p className="text-sm font-semibold text-amber-950">{formatINR(expedition.pricePerAdult)}</p>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-amber-800">
                    <span className="inline-flex items-center">
                      <Star className="mr-1 h-3.5 w-3.5 fill-yellow-600 text-yellow-600" />
                      {expedition.rating} ({expedition.reviews})
                    </span>
                    <span>{expedition.duration}</span>
                    <span>
                      Group {expedition.groupSize.min}-{expedition.groupSize.max}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-amber-900">
                    <span>Next: {formatDate(expedition.nextDeparture)}</span>
                    <span>{expedition.seatsLeft} seats left</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
