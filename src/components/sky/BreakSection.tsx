import { GYM, IMAGES, waLink } from "./data";
import { Reveal } from "./Reveal";

export function BreakSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={IMAGES.machineFloor}
        alt="Weight machines lined across the main hall of Sky Fitness Gym in Solapur"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-36">
        <Reveal>
          <h2 className="text-display max-w-3xl text-[2.5rem] leading-[0.95] sm:text-7xl lg:text-8xl">
            No excuses.
            <br />
            <span className="text-sky">Just progress.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-[0.95rem] text-soft sm:mt-6 sm:text-base">Show up. Train hard. Keep going.</p>
          <a
            href={waLink(`Hi ${GYM.name}, I want to join Sky Fitness. Please share the details.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-sky mt-6 block w-full border border-sky px-6 py-4 text-center text-[0.8rem] font-bold tracking-[0.16em] text-sky uppercase transition-colors hover:bg-sky hover:text-ink sm:mt-8 sm:inline-block sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.2em]"
          >
            Join Sky Fitness
          </a>
        </Reveal>
      </div>
    </section>
  );
}
