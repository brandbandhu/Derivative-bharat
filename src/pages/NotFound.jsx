import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-stone-200 bg-stone-100 p-8 shadow-heritage">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-700">404</p>
        <h1 className="mt-2 font-[Playfair_Display] text-4xl text-amber-950">Page not found</h1>
        <p className="mt-3 max-w-md text-sm text-amber-900/85">
          The route you requested does not exist in Derivative Bharat. Return to discovery and continue
          exploring expeditions.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-yellow-600 px-4 py-2 text-sm font-semibold text-stone-50 transition hover:bg-yellow-500"
        >
          Go to Homepage
        </Link>
      </div>
    </main>
  );
}
