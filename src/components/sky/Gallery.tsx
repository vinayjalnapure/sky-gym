import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "./data";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, next, prev]);

  const active = index === null ? null : GALLERY[index];

  return (
    <section id="gallery" className="section-y">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Gallery</p>
          <h2 className="text-display mt-3 text-[2.1rem] sm:mt-4 sm:text-5xl lg:text-6xl">
            Inside <span className="text-sky">Sky Fitness</span>
          </h2>
          <p className="mt-3 text-[0.9rem] text-soft sm:mt-4 sm:text-base">See the environment. Feel the energy.</p>
        </Reveal>

        <div className="mt-8 grid auto-rows-[130px] grid-cols-2 gap-2.5 sm:mt-12 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4">
          {GALLERY.map((img, i) => {
            const span =
              i === 0
                ? "col-span-2 row-span-2"
                : i === 3
                  ? "col-span-2"
                  : i === 6
                    ? "col-span-2 lg:col-span-2"
                    : "";
            return (
              <Reveal key={img.src} delay={Math.min(i, 5) * 0.05} className={span}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Open image: ${img.alt}`}
                  className="focus-sky group relative block h-full w-full overflow-hidden border border-white/10"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30" />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
            onClick={close}
            onTouchStart={(e) => {
              touchX.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              const start = touchX.current;
              const end = e.changedTouches[0]?.clientX ?? null;
              if (start !== null && end !== null && Math.abs(end - start) > 50) {
                if (end < start) next();
                else prev();
              }
              touchX.current = null;
            }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="focus-sky absolute top-5 right-5 border border-white/20 p-2.5 text-white hover:border-sky hover:text-sky"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="focus-sky absolute left-3 border border-white/20 p-2.5 text-white hover:border-sky hover:text-sky sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="focus-sky absolute right-3 border border-white/20 p-2.5 text-white hover:border-sky hover:text-sky sm:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.img
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={active.src}
              alt={active.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[76svh] w-auto max-w-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
