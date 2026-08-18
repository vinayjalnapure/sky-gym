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
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 md:gap-8 md:py-16">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} className="flex items-start gap-4">
            <item.icon className="mt-1 h-6 w-6 shrink-0 text-sky" aria-hidden="true" />
            <div className="min-w-0">
              <h3 className="text-display text-xl tracking-wide">{item.title}</h3>
              <p className="mt-1.5 text-sm text-soft">{item.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
