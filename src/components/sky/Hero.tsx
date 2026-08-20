import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { GYM, IMAGES, waLink } from "./data";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 90]);
  const scale = useTransform(scrollY, [0, 700], [1, 1.08]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={reduced ? {} : { y, scale }}
      >
        <img
          src={IMAGES.inclinePress}
          alt="Training floor with plate-loaded machines at Sky Fitness Gym in Arali, Solapur"
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-24 pb-24 sm:justify-center sm:px-8 sm:pb-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow"
        >
          Sky Fitness Gym • Arali, Solapur
        </motion.p>

        <h1 className="text-display mt-4 max-w-4xl text-[2.6rem] leading-[1.02] sm:mt-5 sm:text-7xl lg:text-8xl">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
            >
              Build Your
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block text-sky"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease }}
            >
              Stronger Self.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-soft sm:mt-7 sm:text-lg"
        >
          Train with purpose. Build strength. Build confidence. Become the best version of
          yourself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={waLink(
              `Hi ${GYM.name}, I want to join. Please share the membership details.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-sky sky-glow bg-sky px-6 py-4 text-center text-[0.8rem] font-bold tracking-[0.16em] text-ink uppercase transition-colors hover:bg-sky-bright sm:px-9 sm:text-sm sm:tracking-[0.2em]"
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
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-5 text-[0.8rem] text-white/70 sm:text-sm"
        >
          Memberships starting at just <span className="font-semibold text-sky">₹600/month</span>
        </motion.p>
      </div>

      <a
        href="#about"
        className="focus-sky absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-2 text-[0.65rem] font-semibold tracking-[0.3em] text-white/60 uppercase sm:flex"
      >
        Scroll to explore
        <motion.span
          animate={reduced ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-sky" />
        </motion.span>
      </a>
    </section>
  );
}
