import { Rocket, MapPin, Video, Heart } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-amber-50 text-stone-800">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-stone-900 px-3 py-2 rounded shadow">
        Skip to content
      </a>
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">
            <Heart className="w-4 h-4" aria-hidden="true" />
            Ethics • Human Values • Community
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-stone-900">
            Naitika Foundations Education Mission
          </h1>
          <p className="mt-4 text-lg text-stone-700">
            We visit 5 villages daily across Guntur to teach ethics, human values, and life skills to children and elders. Explore our curriculum, watch lesson videos, and follow live team progress.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#videos" className="inline-flex items-center gap-2 bg-stone-900 text-amber-50 px-5 py-3 rounded-lg shadow hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600">
              <Video className="w-5 h-5" aria-hidden="true" /> Watch Lessons
            </a>
            <a href="#dashboard" className="inline-flex items-center gap-2 bg-amber-200 text-stone-900 px-5 py-3 rounded-lg shadow hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600">
              <MapPin className="w-5 h-5" aria-hidden="true" /> Live Dashboard
            </a>
          </div>
          <p className="mt-6 text-sm text-stone-600">
            Operating in Guntur • Offices in every mandal • Daily community classes in nearby government schools
          </p>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-amber-200 via-amber-100 to-stone-200 shadow-inner"></div>
          <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur rounded-xl px-4 py-3 shadow flex items-center gap-3">
            <Rocket className="w-5 h-5 text-amber-700" aria-hidden="true" />
            <span className="text-stone-800 font-medium">5 villages a day • Value-based learning</span>
          </div>
        </div>
      </div>
    </header>
  );
}
