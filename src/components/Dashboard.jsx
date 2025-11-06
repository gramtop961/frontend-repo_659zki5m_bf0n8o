import { useEffect, useState } from "react";
import { MapPin, Target, School, Building2 } from "lucide-react";

const offices = [
  { name: "Guntur HQ", lat: 16.3067, lng: 80.4365, mandal: "Guntur Urban" },
  { name: "Amaravathi Mandal Office", lat: 16.5403, lng: 80.5160, mandal: "Amaravathi" },
  { name: "Mangalagiri Mandal Office", lat: 16.4360, lng: 80.5680, mandal: "Mangalagiri" },
];

function useLiveStats() {
  const [stats, setStats] = useState({ villagesToday: 5, peopleReached: 0, sessions: 0 });

  useEffect(() => {
    const id = setInterval(() => {
      setStats((s) => ({
        villagesToday: 5,
        peopleReached: s.peopleReached + Math.floor(Math.random() * 7 + 3),
        sessions: Math.min(5, s.sessions + (Math.random() > 0.7 ? 1 : 0)),
      }));
    }, 1200);
    return () => clearInterval(id);
  }, []);

  return stats;
}

export default function Dashboard() {
  const stats = useLiveStats();

  return (
    <section id="dashboard" className="py-16 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-6 h-6 text-amber-700" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-stone-900">Live Dashboard & Map</h2>
        </div>
        <p className="text-stone-700 mb-8">Real-time overview of teams, sessions, and offices across Guntur.</p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-white p-5 shadow border border-amber-200 flex items-center gap-4">
            <Target className="w-6 h-6 text-amber-700" aria-hidden="true" />
            <div>
              <p className="text-stone-600 text-sm">Villages Today</p>
              <p className="text-2xl font-bold text-stone-900">{stats.villagesToday}</p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-5 shadow border border-amber-200 flex items-center gap-4">
            <School className="w-6 h-6 text-amber-700" aria-hidden="true" />
            <div>
              <p className="text-stone-600 text-sm">People Reached</p>
              <p className="text-2xl font-bold text-stone-900">{stats.peopleReached}</p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-5 shadow border border-amber-200 flex items-center gap-4">
            <Building2 className="w-6 h-6 text-amber-700" aria-hidden="true" />
            <div>
              <p className="text-stone-600 text-sm">Sessions Completed</p>
              <p className="text-2xl font-bold text-stone-900">{stats.sessions}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-amber-200 bg-white">
          <div className="h-80 w-full">
            <iframe
              title="Guntur Map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.19493881306!2d80.42956097586663!3d16.306652884391343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb9e67f652e3%3A0x7a1e12f3b8829c68!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            />
          </div>
          <div className="p-4 border-t border-amber-200 grid sm:grid-cols-3 gap-4">
            {offices.map((o) => (
              <div key={o.name} className="text-sm">
                <p className="font-semibold text-stone-900">{o.name}</p>
                <p className="text-stone-700">Mandal: {o.mandal}</p>
                <a
                  className="text-amber-800 underline"
                  href={`https://www.google.com/maps?q=${o.lat},${o.lng}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
