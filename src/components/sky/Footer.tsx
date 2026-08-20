import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GYM, IMAGES, NAV_LINKS } from "./data";

export function Footer() {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <footer className="border-t border-white/10 bg-ink py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-7 px-5 sm:gap-10 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex min-w-0 items-start gap-4">
          <img
            src={IMAGES.logo}
            alt="Sky Fitness Gym logo"
            loading="lazy"
            className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-sky/40"
          />
          <div className="min-w-0">
            <p className="text-display text-xl sm:text-2xl">
              Sky <span className="text-sky">Fitness Gym</span>
            </p>
            <p className="mt-1 text-sm text-soft">{GYM.area}</p>
            <a href={GYM.tel} className="focus-sky mt-1 block text-sm font-semibold text-sky">
              {GYM.phoneDisplay}
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-sky text-xs font-semibold tracking-[0.18em] text-soft uppercase hover:text-sky"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="relative mx-auto mt-8 max-w-7xl border-t border-white/10 px-5 pt-6 sm:mt-10 sm:px-8">
        <div className="flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            <AnimatePresence>
              {showCredits && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-full mb-3 w-64 rounded-xl border border-sky/25 bg-navy/95 p-4 text-center shadow-2xl backdrop-blur-md"
                >
                  <p className="text-display text-sm text-sky">Credits</p>
                  <p className="mt-2 text-sm leading-snug text-white/90">
                    Created by{" "}
                    <span className="font-semibold text-sky">Vinay Jalnapure</span>
                  </p>
                  <p className="mt-1 text-xs tracking-wider text-white/60">Show it up</p>
                  <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-sky/25 bg-navy/95" />
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setShowCredits((prev) => !prev)}
              aria-label={showCredits ? "Hide credits" : "Show credits"}
              aria-expanded={showCredits}
              className="focus-sky flex h-8 w-8 items-center justify-center rounded-full border border-sky/40 bg-sky/10 text-sky transition-colors hover:bg-sky hover:text-ink"
            >
              <span className="text-display text-sm leading-none">v</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
