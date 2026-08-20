import { Target, TrendingUp, IndianRupee } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  { icon: Target, title: "Smart Training", copy: "Train with purpose." },
  {
    icon: TrendingUp,
    title: "Real Results",
    copy: "Consistency creates transformation.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Membership",
    copy: "Premium training experience at an accessible price.",
  },
];

export function ValueStrip() {
  return (
    <section className="border-y border-white/10 bg-navy/60">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:gap-10 sm:px-8 sm:py-14 md:grid-cols-3 md:gap-8 md:py-16">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} className="flex items-start gap-3.5 sm:gap-4">
            <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-sky sm:mt-1 sm:h-6 sm:w-6" aria-hidden="true" />
            <div className="min-w-0">
              <h3 className="text-display text-lg tracking-wide sm:text-xl">{item.title}</h3>
              <p className="mt-1 text-[0.85rem] text-soft sm:mt-1.5 sm:text-sm">{item.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
