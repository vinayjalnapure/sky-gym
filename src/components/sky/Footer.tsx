import { GYM, IMAGES, NAV_LINKS } from "./data";

export function Footer() {
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
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-5 pt-6 sm:mt-10 sm:px-8">
        <p className="text-xs text-soft">© 2026 Sky Fitness Gym. All rights reserved.</p>
      </div>
    </footer>
  );
}
