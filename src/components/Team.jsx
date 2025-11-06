import { Mail, Phone, Users } from "lucide-react";

const team = [
  { role: "CEO", name: "Nithin", email: "naitikafoundations@edu.in", phone: "+91 90000 00001" },
  { role: "Technical Lead", name: "Aishwarya", email: "aishwarya@naitika.edu.in", phone: "+91 90000 00002" },
  { role: "Marketing Lead", name: "Sunandha Mohan teja", email: "sunandha@naitika.edu.in", phone: "+91 90000 00003" },
  { role: "Community Manager", name: "Sahith", email: "sahith@naitika.edu.in", phone: "+91 90000 00004" },
  { role: "Operations Manager", name: "Naitika", email: "operations@naitika.edu.in", phone: "+91 90000 00005" },
];

export default function Team() {
  return (
    <section id="team" className="bg-stone-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-amber-700" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-stone-900">Our Team</h2>
        </div>
        <p className="text-stone-700 mb-8">
          Meet the people powering Naitika Foundations and our daily mission across Guntur's mandals.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.email} className="rounded-xl border border-amber-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900">{member.name}</h3>
              <p className="text-amber-800 font-medium">{member.role}</p>
              <div className="mt-4 space-y-2 text-sm">
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-stone-700 hover:text-stone-900">
                  <Mail className="w-4 h-4" aria-hidden="true" /> {member.email}
                </a>
                <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-stone-700 hover:text-stone-900">
                  <Phone className="w-4 h-4" aria-hidden="true" /> {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
