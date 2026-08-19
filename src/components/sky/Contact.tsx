import { useState } from "react";
import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { GYM, waLink } from "./data";
import { Reveal } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = waLink(
      `Hi ${GYM.name}!\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`,
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const field =
    "focus-sky w-full border border-white/15 bg-ink/70 px-4 py-3.5 text-white placeholder:text-soft/70 focus:border-sky";

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h2 className="text-display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Find <span className="text-sky">Sky Fitness</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
              <address className="min-w-0 text-lg leading-relaxed not-italic">
                <span className="text-display block text-2xl">{GYM.name}</span>
                <span className="text-soft">{GYM.area}</span>
                <a
                  href={GYM.tel}
                  className="focus-sky mt-2 block font-semibold text-sky hover:underline"
                >
                  {GYM.phoneDisplay}
                </a>
              </address>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={GYM.tel}
                className="focus-sky flex items-center gap-2 bg-sky px-6 py-3.5 text-sm font-bold tracking-[0.16em] text-ink uppercase transition-colors hover:bg-sky-bright"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={waLink(`Hi ${GYM.name}, I would like to know more about the gym.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-sky flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-bold tracking-[0.16em] text-white uppercase transition-colors hover:border-sky hover:text-sky"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={GYM.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-sky flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-bold tracking-[0.16em] text-white uppercase transition-colors hover:border-sky hover:text-sky"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>

            {/* Map area: swap this iframe src for the gym's verified Google Maps embed when available. */}
            <div className="mt-8 overflow-hidden border border-white/12">
              <iframe
                title="Map of Arali, Solapur — Sky Fitness Gym area"
                src="https://www.google.com/maps?q=Arali%2C%20Solapur%2C%20Maharashtra&output=embed"
                loading="lazy"
                className="h-64 w-full grayscale-[35%]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass-panel p-6 sm:p-8">
              <h3 className="text-display text-2xl">Send an enquiry</h3>
              <p className="mt-2 text-sm text-soft">
                Your details open in WhatsApp so we can reply quickly.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs tracking-[0.18em] text-soft uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs tracking-[0.18em] text-soft uppercase">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={field}
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs tracking-[0.18em] text-soft uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={field}
                    placeholder="What would you like to know?"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="focus-sky mt-6 w-full bg-sky px-6 py-4 text-sm font-bold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-sky-bright"
              >
                Send Enquiry
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
