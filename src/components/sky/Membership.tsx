import { Check } from "lucide-react";
import { GYM, waLink } from "./data";
import { Reveal } from "./Reveal";
import { useLang } from "./i18n";

export function Membership() {
  const { t } = useLang();
  return (
    <section id="membership" className="section-y relative border-y border-white/10 bg-navy/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t("membership.eyebrow")}</p>
          <h2 className="text-display mt-3 text-[2.1rem] sm:mt-4 sm:text-5xl lg:text-6xl">
            {t("membership.title1")} <span className="text-sky">{t("membership.title2")}</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:gap-8">
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col border border-white/12 bg-ink/60 p-6 sm:p-10">
              <h3 className="text-display text-xl tracking-wide sm:text-2xl">{t("membership.oneMonth")}</h3>
              <p className="text-display mt-4 text-5xl sm:mt-5 sm:text-6xl">₹600</p>
              <p className="mt-2 text-[0.72rem] tracking-[0.12em] text-soft uppercase sm:text-sm sm:tracking-[0.14em]">
                {t("membership.monthly")}
              </p>
              <a
                href={waLink(
                  `Hi ${GYM.name}, I am interested in the 1 Month membership for ₹600.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-sky mt-6 border border-sky px-5 py-4 text-center text-[0.8rem] font-bold tracking-[0.14em] text-sky uppercase transition-colors hover:bg-sky hover:text-ink sm:mt-8 sm:px-6 sm:text-sm sm:tracking-[0.18em]"
              >
                {t("membership.join600")}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="sky-glow relative flex h-full flex-col border border-sky/60 bg-gradient-to-b from-sky/12 to-ink/70 p-6 sm:p-10">
              <span className="absolute -top-3 left-6 bg-sky sm:left-8 px-3 py-1 text-[0.65rem] font-bold tracking-[0.2em] text-ink uppercase">
                {t("membership.best")}
              </span>
              <h3 className="text-display text-xl tracking-wide sm:text-2xl">{t("membership.threeMonths")}</h3>
              <p className="text-display mt-4 text-5xl text-sky sm:mt-5 sm:text-6xl">₹1,500</p>
              <p className="mt-2 flex items-center gap-2 text-[0.72rem] tracking-[0.12em] text-white uppercase sm:text-sm sm:tracking-[0.14em]">
                <Check className="h-4 w-4 text-sky" aria-hidden="true" /> {t("membership.save")}
              </p>
              <p className="mt-3 text-[0.85rem] text-soft sm:text-sm">
                {t("membership.saveNote")}
              </p>
              <a
                href={waLink(
                  `Hi ${GYM.name}, I am interested in the 3 Month membership for ₹1,500.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-sky mt-6 bg-sky px-5 py-4 text-center text-[0.8rem] font-bold tracking-[0.14em] text-ink uppercase transition-colors hover:bg-sky-bright sm:mt-8 sm:px-6 sm:text-sm sm:tracking-[0.18em]"
              >
                {t("membership.join1500")}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-7 text-[0.85rem] text-soft sm:mt-9 sm:text-sm">
            {t("membership.footnote")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
