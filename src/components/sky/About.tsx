import { GYM, IMAGES, waLink } from "./data";
import { Reveal, RevealImage } from "./Reveal";

const STEPS = [
  { num: "01", label: "Training" },
  { num: "02", label: "Consistency" },
  { num: "03", label: "Progress" },
];

export function About() {
  return (
    <section id="about" className="section-y relative">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:gap-12 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <RevealImage
          className="relative aspect-4/3 w-full overflow-hidden sm:aspect-3/2 lg:aspect-4/5"
          src={IMAGES.benchTraining}
          alt="A member training on a bench beside the dumbbell rack at Sky Fitness Gym, Arali"
          imgClassName="h-full w-full object-cover"
        />

        <div>
          <Reveal>
            <p className="eyebrow">About Sky Fitness</p>
            <h2 className="text-display mt-3 text-[2.1rem] leading-[0.98] sm:mt-4 sm:text-5xl lg:text-6xl">
              Your training.
              <br />
              Your goals.
              <br />
              <span className="text-sky">Your journey.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-soft sm:mt-6 sm:text-base">
              Sky Fitness Gym is a place to focus on yourself, push your limits and build
              consistency. Whether you're starting your fitness journey or looking to become
              stronger, every workout is a step forward.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:mt-9 sm:gap-4 sm:pt-7">
              {STEPS.map((s) => (
                <div key={s.num}>
                  <span className="text-display block text-2xl text-sky sm:text-3xl">
                    {s.num}
                  </span>
                  <span className="mt-1 block text-[0.62rem] font-semibold tracking-[0.12em] text-soft uppercase sm:text-xs sm:tracking-[0.18em]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <a
              href={waLink(
                `Hi ${GYM.name}, I want to start my fitness journey. Please guide me.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-sky mt-7 block w-full bg-sky px-6 py-4 text-center text-[0.8rem] font-bold tracking-[0.16em] text-ink uppercase transition-colors hover:bg-sky-bright sm:mt-9 sm:inline-block sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.2em]"
            >
              Start Your Journey
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
