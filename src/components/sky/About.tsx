import { GYM, IMAGES, waLink } from "./data";
import { Reveal, RevealImage } from "./Reveal";

const STEPS = [
  { num: "01", label: "Training" },
  { num: "02", label: "Consistency" },
  { num: "03", label: "Progress" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <RevealImage
          className="relative aspect-4/5 w-full overflow-hidden sm:aspect-3/2 lg:aspect-4/5"
          src={IMAGES.benchTraining}
          alt="A member training on a bench beside the dumbbell rack at Sky Fitness Gym, Arali"
          imgClassName="h-full w-full object-cover"
        />

        <div>
          <Reveal>
            <p className="eyebrow">About Sky Fitness</p>
            <h2 className="text-display mt-4 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
              Your training.
              <br />
              Your goals.
              <br />
              <span className="text-sky">Your journey.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl leading-relaxed text-soft">
              Sky Fitness Gym is a place to focus on yourself, push your limits and build
              consistency. Whether you're starting your fitness journey or looking to become
              stronger, every workout is a step forward.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
              {STEPS.map((s) => (
                <div key={s.num}>
                  <span className="text-display block text-2xl text-sky sm:text-3xl">
                    {s.num}
                  </span>
                  <span className="mt-1 block text-xs font-semibold tracking-[0.18em] text-soft uppercase">
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
              className="focus-sky mt-9 inline-block bg-sky px-8 py-4 text-sm font-bold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-sky-bright"
            >
              Start Your Journey
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
