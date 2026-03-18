import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-stone-200 bg-stone-100/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-[Playfair_Display] text-xl text-amber-950">Derivative Bharat</h3>
          <p className="mt-2 text-sm text-amber-900/85">
            Group tour packages only. Expert-guided Indian heritage expeditions across forts, temples,
            culinary corridors, and historic battlefronts.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-800">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/?category=Forts" className="text-amber-900 hover:text-amber-700">
                Fort Expeditions
              </Link>
            </li>
            <li>
              <Link to="/?category=Temples" className="text-amber-900 hover:text-amber-700">
                Temple Circuits
              </Link>
            </li>
            <li>
              <Link to="/?category=Culinary" className="text-amber-900 hover:text-amber-700">
                Culinary Trails
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-800">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-amber-900">
            <li>Partner With Us</li>
            <li>Guide Fellowship</li>
            <li>Responsible Tourism Charter</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-800">Support</p>
          <ul className="mt-3 space-y-2 text-sm text-amber-900">
            <li>help@derivativebharat.in</li>
            <li>9699369117</li>
            <li>Mon-Sat | 9:00 AM - 8:00 PM IST</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
