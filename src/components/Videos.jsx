import { Youtube } from "lucide-react";

const videoLinks = [
  "https://youtu.be/zPsoFhUDLuU?si=68awzlUi5kGZcO_H",
  "https://youtu.be/yDGdpWkGmFU?si=FHNWvO9hRhdXE2rz",
  "https://youtu.be/wWYpj9aqTr0?si=sjx9UuzusNmHM8t2",
  "https://youtu.be/1E39jpNN9eQ?si=ZK4SHR-KMFjTtu7v",
  "https://youtu.be/1f0eSejlzLo?si=jBOMC8hKLuoKaQzx",
  "https://youtu.be/YNOnFsnjYhY?si=mYJjH7Vzczz5MP73",
];

function toEmbed(url) {
  try {
    const id = new URL(url).pathname.split("/").pop();
    return `https://www.youtube.com/embed/${id}`;
  } catch (e) {
    // Fallback for youtu.be short links
    const parts = url.split("/");
    const id = parts[parts.length - 1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
}

export default function Videos() {
  return (
    <section id="videos" className="py-16 bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <Youtube className="w-6 h-6 text-amber-700" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-stone-900">Lesson Videos</h2>
        </div>
        <p className="text-stone-700 mb-8">
          Our curriculum blends ethics, human values, and practical life skills. Explore the categories we teach and watch selected lessons.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {videoLinks.map((link) => (
            <div key={link} className="rounded-xl overflow-hidden border border-amber-200 bg-white shadow">
              <div className="aspect-video">
                <iframe
                  title={link}
                  className="w-full h-full"
                  src={toEmbed(link)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 text-sm text-stone-700">
                Source: <a className="text-amber-800 underline" href={link} target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
