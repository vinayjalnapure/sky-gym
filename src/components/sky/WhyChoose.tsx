import { Dumbbell, CalendarCheck, Flame, Repeat, Apple, ClipboardList } from "lucide-react";
import { Reveal } from "./Reveal";

const BLOCKS = [
  {
    icon: Dumbbell,
    num: "01",
    title: "Build Strength",
    copy: "Push yourself beyond yesterday.",
  },
  {
    icon: CalendarCheck,
    num: "02",
    title: "Build Consistency",
    copy: "Small sessions become big results.",
  },
  {
    icon: Flame,
    num: "03",
    title: "Build Confidence",
    copy: "Feel stronger inside and out.",
  },
  {
    icon: Repeat,
    num: "04",
    title: "Build Your Routine",
    copy: "Make fitness part of your lifestyle.",
  },
  {
    icon: Apple,
    num: "05",
    title: "Personal Diet Plan",
    copy: "Nutrition guidance that fuels your progress.",
  },
  {
    icon: ClipboardList,
    num: "06",
    title: "Proper Workout Plan",
    copy: "Structured training built around your goals.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Why choose Sky Fitness</p>
          <h2 className="text-display mt-4 text-4xl sm:text-6xl lg:text-7xl">
            More than a <span className="text-sky">workout.</span>
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 py-9 transition-colors sm:grid-cols-[5rem_auto_minmax(0,1fr)] sm:gap-8">
                <span className="text-display text-2xl text-sky/70 sm:text-3xl">{b.num}</span>
                <b.icon
                  className="mt-1 hidden h-8 w-8 shrink-0 text-sky transition-transform duration-300 group-hover:scale-110 sm:block"
                  aria-hidden="true"
                />
                <div className="col-span-2 min-w-0 sm:col-span-1">
                  <h3 className="text-display text-3xl sm:text-4xl">{b.title}</h3>
                  <p className="mt-2 text-soft">{b.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
