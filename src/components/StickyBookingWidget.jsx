import { AlertTriangle, CalendarClock, UsersRound } from "lucide-react";
import { useBooking } from "../context/BookingContext";

function Stepper({ label, value, onDecrease, onIncrease, minValue = 0 }) {
  const decreaseDisabled = value <= minValue;

  return (
    <div className="flex items-center justify-between rounded-xl border border-stone-200 bg-stone-100 px-3 py-2">
      <span className="text-sm font-medium text-amber-950">{label}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onDecrease}
          disabled={decreaseDisabled}
          className="h-8 w-8 rounded-full border border-stone-300 text-lg leading-none text-amber-950 disabled:cursor-not-allowed disabled:opacity-35"
        >
          -
        </button>
        <span className="w-6 text-center text-sm font-semibold">{value}</span>
        <button
          type="button"
          onClick={onIncrease}
          className="h-8 w-8 rounded-full border border-stone-300 text-lg leading-none text-amber-950"
        >
          +
        </button>
      </div>
    </div>
  );
}

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

export default function StickyBookingWidget({
  duration,
  pricePerAdult,
  groupSize,
  seatsLeft,
  nextDeparture,
}) {
  const {
    selectedDate,
    setSelectedDate,
    adults,
    setAdults,
    childrenCount,
    setChildrenCount,
    totalPrice,
  } = useBooking();

  const totalGuests = adults + childrenCount;
  const seatsExceeded = totalGuests > seatsLeft;
  const canBook = Boolean(selectedDate) && totalGuests > 0 && !seatsExceeded;

  return (
    <aside className="rounded-3xl border border-stone-200 bg-stone-50 p-5 shadow-[0_12px_40px_-24px_rgba(59,37,25,0.45)] lg:sticky lg:top-24">
      <div className="mb-3 inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
        <UsersRound className="mr-1 h-3.5 w-3.5" />
        Group Tour Package
      </div>

      <div className="border-b border-stone-200 pb-4">
        <p className="text-sm text-amber-800">Total Price</p>
        <p className="mt-1 font-[Playfair_Display] text-3xl leading-tight text-amber-950">
          {formatINR(totalPrice)}
        </p>
        <p className="text-xs text-amber-800/80">{duration} | Taxes included</p>
      </div>

      <div className="mt-4 rounded-xl bg-stone-100 p-3 text-xs text-amber-900">
        <p className="inline-flex items-center">
          <CalendarClock className="mr-1 h-3.5 w-3.5" />
          Next departure: {formatDate(nextDeparture)}
        </p>
        <p>
          Batch size: {groupSize.min} to {groupSize.max} guests
        </p>
        <p>{seatsLeft} seats currently available</p>
      </div>

      <div className="mt-4 space-y-3">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-amber-950">Preferred Date</span>
          <input
            type="date"
            value={selectedDate}
            min={nextDeparture}
            onChange={(event) => setSelectedDate(event.target.value)}
            className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-amber-950 outline-none ring-yellow-600 transition focus:ring-2"
          />
        </label>

        <Stepper
          label="Adults"
          value={adults}
          minValue={1}
          onDecrease={() => setAdults((prev) => Math.max(1, prev - 1))}
          onIncrease={() => setAdults((prev) => prev + 1)}
        />
        <Stepper
          label="Children"
          value={childrenCount}
          onDecrease={() => setChildrenCount((prev) => Math.max(0, prev - 1))}
          onIncrease={() => setChildrenCount((prev) => prev + 1)}
        />
      </div>

      <div className="mt-4 rounded-xl bg-stone-100 p-3 text-xs text-amber-900">
        <p>{formatINR(pricePerAdult)} per adult</p>
        <p>Children billed at 65% of adult fare</p>
      </div>

      {seatsExceeded ? (
        <p className="mt-3 inline-flex items-center text-xs font-medium text-red-700">
          <AlertTriangle className="mr-1 h-3.5 w-3.5" />
          Guest count exceeds remaining seats for this batch.
        </p>
      ) : null}

      <button
        type="button"
        disabled={!canBook}
        className="mt-5 w-full rounded-xl bg-yellow-600 px-4 py-3 text-sm font-semibold text-stone-50 shadow-sm transition hover:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-yellow-700/40"
      >
        Book Expedition
      </button>
    </aside>
  );
}
