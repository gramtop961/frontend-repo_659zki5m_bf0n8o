import { HelpCircle, Mail, Phone } from "lucide-react";

export default function HelpDesk() {
  return (
    <section id="help" className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-6 h-6 text-amber-700" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-stone-900">Help Desk & Accessibility</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl bg-white p-6 border border-amber-200 shadow">
            <h3 className="text-xl font-semibold text-stone-900 mb-2">Get Support</h3>
            <p className="text-stone-700 mb-4">We’re here to help with scheduling, resources, and accessibility needs.</p>
            <ul className="space-y-2 text-stone-800">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a href="mailto:naitikafoundations@edu.in" className="underline">naitikafoundations@edu.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <a href="tel:+919000000000" className="underline">+91 90000 00000</a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-white p-6 border border-amber-200 shadow">
            <h3 className="text-xl font-semibold text-stone-900 mb-2">Accessible Interfaces</h3>
            <ul className="list-disc pl-5 space-y-2 text-stone-700">
              <li>High-contrast beige and brown theme with large, readable typography.</li>
              <li>Keyboard navigable sections and visible focus states.</li>
              <li>Descriptive labels, icons, and alt text across interactive elements.</li>
              <li>Mobile-friendly layout for use in the field by teams.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
