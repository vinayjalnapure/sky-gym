import { Target, TrendingUp, IndianRupee } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang, type TKey } from "./i18n";

const ITEMS: { icon: typeof Target; title: TKey; copy: TKey }[] = [
  { icon: Target, title: "value.1.title", copy: "value.1.copy" },
  { icon: TrendingUp, title: "value.2.title", copy: "value.2.copy" },
  { icon: IndianRupee, title: "value.3.title", copy: "value.3.copy" },
];

export function ValueStrip() {
  const { t } = useLang();
  return (
    <section className="border-y border-white/10 bg-navy/60">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:gap-10 sm:px-8 sm:py-14 md:grid-cols-3 md:gap-8 md:py-16">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} className="flex items-start gap-3.5 sm:gap-4">
            <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-sky sm:mt-1 sm:h-6 sm:w-6" aria-hidden="true" />
            <div className="min-w-0">
              <h3 className="text-display text-lg tracking-wide sm:text-xl">{t(item.title)}</h3>
              <p className="mt-1 text-[0.85rem] text-soft sm:mt-1.5 sm:text-sm">{t(item.copy)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
