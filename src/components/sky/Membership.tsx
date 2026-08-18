import { Check } from "lucide-react";
import { GYM, waLink } from "./data";
import { Reveal } from "./Reveal";

export function Membership() {
  return (
    <section id="membership" className="relative border-y border-white/10 bg-navy/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Simple membership. Serious results.</p>
          <h2 className="text-display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Choose your <span className="text-sky">commitment</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col border border-white/12 bg-ink/60 p-8 sm:p-10">
              <h3 className="text-display text-2xl tracking-wide">1 Month</h3>
              <p className="text-display mt-5 text-6xl">₹600</p>
              <p className="mt-2 text-sm tracking-[0.14em] text-soft uppercase">
                Monthly Membership
              </p>
              <a
                href={waLink(
                  `Hi ${GYM.name}, I am interested in the 1 Month membership for ₹600.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-sky mt-8 border border-sky px-6 py-4 text-center text-sm font-bold tracking-[0.18em] text-sky uppercase transition-colors hover:bg-sky hover:text-ink"
              >
                Join for ₹600
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="sky-glow relative flex h-full flex-col border border-sky/60 bg-gradient-to-b from-sky/12 to-ink/70 p-8 sm:p-10">
              <span className="absolute -top-3 left-8 bg-sky px-3 py-1 text-[0.65rem] font-bold tracking-[0.2em] text-ink uppercase">
                Best Value
              </span>
              <h3 className="text-display text-2xl tracking-wide">3 Months</h3>
              <p className="text-display mt-5 text-6xl text-sky">₹1,500</p>
              <p className="mt-2 flex items-center gap-2 text-sm tracking-[0.14em] text-white uppercase">
                <Check className="h-4 w-4 text-sky" aria-hidden="true" /> Save ₹300
              </p>
              <p className="mt-3 text-sm text-soft">
                Three months paid monthly costs ₹1,800. This plan is ₹1,500.
              </p>
              <a
                href={waLink(
                  `Hi ${GYM.name}, I am interested in the 3 Month membership for ₹1,500.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-sky mt-8 bg-sky px-6 py-4 text-center text-sm font-bold tracking-[0.18em] text-ink uppercase transition-colors hover:bg-sky-bright"
              >
                Join for ₹1,500
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-9 text-sm text-soft">
            No complicated plans. Just choose the membership that works for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
