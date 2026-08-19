import { MessageCircle, Phone } from "lucide-react";
import { GYM, waLink } from "./data";

export function FloatingCTA() {
  const wa = waLink(`Hi ${GYM.name}, I would like to know more about the gym.`);

  return (
    <>
      {/* Mobile bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-sky/25 bg-ink/90 backdrop-blur-lg sm:hidden">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-sky flex items-center justify-center gap-2 bg-sky py-4 text-sm font-bold tracking-[0.16em] text-ink uppercase"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a
          href={GYM.tel}
          className="focus-sky flex items-center justify-center gap-2 py-4 text-sm font-bold tracking-[0.16em] text-white uppercase"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
      </div>

      {/* Desktop bubble */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sky Fitness Gym on WhatsApp"
        className="focus-sky sky-glow fixed right-6 bottom-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-sky text-ink transition-transform duration-300 hover:scale-110 sm:grid"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
