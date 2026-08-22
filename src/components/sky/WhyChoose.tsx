import { Dumbbell, CalendarCheck, Flame, Repeat, Apple, ClipboardList } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang, type TKey } from "./i18n";

const BLOCKS: { icon: typeof Dumbbell; num: string; title: TKey; copy: TKey }[] = [
  { icon: Dumbbell, num: "01", title: "why.1.title", copy: "why.1.copy" },
  { icon: CalendarCheck, num: "02", title: "why.2.title", copy: "why.2.copy" },
  { icon: Flame, num: "03", title: "why.3.title", copy: "why.3.copy" },
  { icon: Repeat, num: "04", title: "why.4.title", copy: "why.4.copy" },
  { icon: Apple, num: "05", title: "why.5.title", copy: "why.5.copy" },
  { icon: ClipboardList, num: "06", title: "why.6.title", copy: "why.6.copy" },
];

export function WhyChoose() {
  const { t } = useLang();
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t("why.eyebrow")}</p>
          <h2 className="text-display mt-3 text-[2.1rem] sm:mt-4 sm:text-6xl lg:text-7xl">
            {t("why.title1")} <span className="text-sky">{t("why.title2")}</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-14 sm:grid-cols-1 sm:gap-0 sm:divide-y sm:divide-white/10 sm:border-t sm:border-white/10">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 border border-white/10 bg-navy/40 p-5 transition-colors sm:grid-cols-[4rem_auto_minmax(0,1fr)] sm:gap-8 sm:border-0 sm:bg-transparent sm:p-0 sm:py-9">
                <b.icon
                  className="mt-0.5 h-7 w-7 shrink-0 text-sky transition-transform duration-300 group-hover:scale-110 sm:order-2 sm:mt-1 sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
                <div className="min-w-0 sm:order-3">
                  <h3 className="text-display text-2xl leading-tight sm:text-4xl">{t(b.title)}</h3>
                  <p className="mt-1.5 text-[0.9rem] text-soft sm:mt-2 sm:text-base">{t(b.copy)}</p>
                </div>
                <span className="text-display hidden text-2xl text-sky/70 sm:order-1 sm:block sm:text-3xl">
                  {b.num}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
