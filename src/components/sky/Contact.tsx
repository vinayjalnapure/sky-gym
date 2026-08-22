import { useState } from "react";
import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { GYM, waLink } from "./data";
import { Reveal } from "./Reveal";
import { useLang } from "./i18n";

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = waLink(
      `Hi ${GYM.name}!\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`,
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const field =
    "focus-sky w-full border border-white/15 bg-ink/70 px-4 py-3.5 text-base text-white placeholder:text-soft/70 focus:border-sky";

  return (
    <section id="contact" className="section-y">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h2 className="text-display mt-3 text-[2.1rem] sm:mt-4 sm:text-5xl lg:text-6xl">
            {t("contact.title1")} <span className="text-sky">{t("contact.title2")}</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
              <address className="min-w-0 text-base leading-relaxed not-italic sm:text-lg">
                <span className="text-display block text-xl sm:text-2xl">{GYM.name}</span>
                <span className="text-soft">{t("area")}</span>
                <a
                  href={GYM.tel}
                  className="focus-sky mt-2 block font-semibold text-sky hover:underline"
                >
                  {GYM.phoneDisplay}
                </a>
              </address>
            </div>

            <div className="mt-6 grid gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
              <a
                href={GYM.tel}
                className="focus-sky flex items-center justify-center gap-2 bg-sky px-5 py-3.5 text-[0.78rem] font-bold tracking-[0.14em] text-ink uppercase transition-colors hover:bg-sky-bright sm:px-6 sm:text-sm sm:tracking-[0.16em]"
              >
                <Phone className="h-4 w-4" /> {t("contact.call")}
              </a>
              <a
                href={waLink(`Hi ${GYM.name}, I would like to know more about the gym.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-sky flex items-center justify-center gap-2 border border-white/25 px-5 py-3.5 text-[0.78rem] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:border-sky hover:text-sky sm:px-6 sm:text-sm sm:tracking-[0.16em]"
              >
                <MessageCircle className="h-4 w-4" /> {t("contact.wa")}
              </a>
              <a
                href={GYM.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-sky flex items-center justify-center gap-2 border border-white/25 px-5 py-3.5 text-[0.78rem] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:border-sky hover:text-sky sm:px-6 sm:text-sm sm:tracking-[0.16em]"
              >
                <Navigation className="h-4 w-4" /> {t("contact.directions")}
              </a>
            </div>

            {/* Map area: swap this iframe src for the gym's verified Google Maps embed when available. */}
            <div className="mt-6 overflow-hidden border border-white/12 sm:mt-8">
              <iframe
                title="Map of Arali, Solapur — Sky Fitness Gym area"
                src="https://www.google.com/maps?q=Arali%2C%20Solapur%2C%20Maharashtra&output=embed"
                loading="lazy"
                className="h-56 w-full grayscale-[35%] sm:h-64"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass-panel p-5 sm:p-8">
              <h3 className="text-display text-xl sm:text-2xl">{t("contact.formTitle")}</h3>
              <p className="mt-2 text-sm text-soft">
                {t("contact.formSub")}
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs tracking-[0.18em] text-soft uppercase">
                    {t("contact.name")}
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                    placeholder={t("contact.namePh")}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs tracking-[0.18em] text-soft uppercase">
                    {t("contact.phone")}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={field}
                    placeholder={t("contact.phonePh")}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs tracking-[0.18em] text-soft uppercase">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={field}
                    placeholder={t("contact.messagePh")}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="focus-sky mt-6 w-full bg-sky px-6 py-4 text-[0.8rem] font-bold tracking-[0.16em] text-ink uppercase transition-colors hover:bg-sky-bright sm:text-sm sm:tracking-[0.2em]"
              >
                {t("contact.submit")}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
