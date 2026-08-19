import { MessageCircle, Phone } from "lucide-react";
import { GYM, waLink } from "./data";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 bg-navy py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/18 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-display text-4xl sm:text-6xl">
            Ready to <span className="text-sky">get started?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-soft">
            Your next workout can be the beginning of something better.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={waLink(
                `Hi ${GYM.name}, I want to join. Please share the membership details.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-sky sky-glow bg-sky px-9 py-4 text-sm font-bold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-sky-bright"
            >
              Join Now
            </a>
            <a
              href={waLink(`Hi ${GYM.name}, I have a question about the gym.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-sky flex items-center justify-center gap-2 border border-white/25 px-9 py-4 text-sm font-bold tracking-[0.2em] text-white uppercase transition-colors hover:border-sky hover:text-sky"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={GYM.tel}
              className="focus-sky flex items-center justify-center gap-2 border border-white/25 px-9 py-4 text-sm font-bold tracking-[0.2em] text-white uppercase transition-colors hover:border-sky hover:text-sky"
            >
              <Phone className="h-4 w-4" /> Call {GYM.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
