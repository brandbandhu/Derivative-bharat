import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import {
  Handshake,
  Leaf,
  Mountain,
  PawPrint,
  Route as RouteIcon,
  Sailboat,
  User,
  Waves,
} from "lucide-react";
import Footer from "./components/Footer";
import ExpeditionDetail from "./pages/ExpeditionDetail";
import HomeFeed from "./pages/HomeFeed";
import NotFound from "./pages/NotFound";

function Header() {
  const { pathname } = useLocation();

  const categories = [
    { icon: Mountain, label: "Hill Stations" },
    { icon: Waves, label: "Coastal" },
    { icon: PawPrint, label: "Wildlife" },
    { icon: RouteIcon, label: "Road Trips" },
    { icon: Leaf, label: "Rainforests" },
    { icon: Sailboat, label: "Backwaters" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="leading-tight">
          <span className="block text-lg font-semibold tracking-tight text-amber-950">Derivative Bharat</span>
          <span className="block text-[11px] uppercase tracking-[0.14em] text-amber-700">
            Group Tour Packages Only
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {categories.map((category) => (
            <Link
              key={category.label}
              to={`/?category=${category.label}`}
              className="rounded-full border border-stone-200 bg-stone-100 px-3 py-2 text-sm font-medium text-amber-950 transition hover:bg-stone-200"
            >
              <category.icon className="mr-1.5 inline-flex h-4 w-4" />
              {category.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-sm">
          <button
            type="button"
            className="hidden rounded-full px-3 py-2 font-medium text-amber-950 hover:bg-stone-100 sm:inline-flex sm:items-center"
          >
            <Handshake className="mr-1 inline-flex h-4 w-4" />
            Partner With Us
          </button>
          <button
            type="button"
            className="rounded-full border border-stone-300 px-3 py-2 font-medium text-amber-950 hover:bg-stone-100"
          >
            <User className="mr-1 inline-flex h-4 w-4" />
            Profile
          </button>
        </div>
      </div>

      <nav className="flex gap-2 overflow-x-auto border-t border-stone-200 px-4 py-2 md:hidden">
        {categories.map((category) => (
          <Link
            key={category.label}
            to={`/?category=${category.label}`}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium ${
              pathname === "/"
                ? "border-stone-300 bg-stone-100 text-amber-950"
                : "border-stone-200 bg-stone-50 text-amber-800"
            }`}
          >
            <category.icon className="mr-1 inline-flex h-3.5 w-3.5" />
            {category.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-[Inter] text-amber-950">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomeFeed />} />
        <Route path="/expeditions/:expeditionId" element={<ExpeditionDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
