import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { GYM, IMAGES, NAV_LINKS, waLink } from "./data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass-panel border-b border-x-0 border-t-0" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#home" className="focus-sky flex min-w-0 items-center gap-3 rounded-full">
          <img
            src={IMAGES.logo}
            alt="Sky Fitness Gym logo"
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-sky/40 sm:h-10 sm:w-10"
          />
          <span className="text-display truncate text-base tracking-wide sm:text-xl">
            Sky <span className="text-sky">Fitness</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-sky group relative text-[0.78rem] font-semibold tracking-[0.18em] text-soft uppercase transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-sky transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(
              `Hi ${GYM.name}, I would like to join. Please share the details.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-sky hidden bg-sky px-6 py-3 text-[0.75rem] font-bold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-sky-bright sm:inline-block"
          >
            Join Now
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="focus-sky border border-sky/30 p-2.5 text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-ink/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-display text-lg">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="focus-sky border border-sky/30 p-2.5 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6 pb-16">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.08, duration: 0.4 }}
                  className="focus-sky text-display border-b border-white/10 py-4 text-3xl text-white sm:py-5 sm:text-4xl"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={waLink(
                  `Hi ${GYM.name}, I would like to join. Please share the details.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="focus-sky mt-8 bg-sky px-6 py-4 text-center text-sm font-bold tracking-[0.2em] text-ink uppercase"
              >
                Join Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
