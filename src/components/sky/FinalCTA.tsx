import { MessageCircle, Phone } from "lucide-react";
import { GYM, waLink } from "./data";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="section-y relative isolate overflow-hidden border-y border-white/10 bg-navy">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/18 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-display text-[2.2rem] sm:text-6xl">
            Ready to <span className="text-sky">get started?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] text-soft sm:mt-5 sm:text-base">
            Your next workout can be the beginning of something better.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row">
            <a
              href={waLink(
                `Hi ${GYM.name}, I want to join. Please share the membership details.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-sky sky-glow bg-sky px-6 py-4 text-[0.8rem] font-bold tracking-[0.16em] text-ink uppercase transition-colors hover:bg-sky-bright sm:px-9 sm:text-sm sm:tracking-[0.2em]"
            >
              Join Now
            </a>
            <a
              href={waLink(`Hi ${GYM.name}, I have a question about the gym.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-sky flex items-center justify-center gap-2 border border-white/25 px-6 py-4 text-[0.8rem] font-bold tracking-[0.16em] text-white uppercase transition-colors hover:border-sky hover:text-sky sm:px-9 sm:text-sm sm:tracking-[0.2em]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={GYM.tel}
              className="focus-sky flex items-center justify-center gap-2 border border-white/25 px-6 py-4 text-[0.8rem] font-bold tracking-[0.16em] text-white uppercase transition-colors hover:border-sky hover:text-sky sm:px-9 sm:text-sm sm:tracking-[0.2em]"
            >
              <Phone className="h-4 w-4" /> Call {GYM.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
