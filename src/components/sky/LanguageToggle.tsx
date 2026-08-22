import { useLang, type Lang } from "./i18n";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "mr", label: "मराठी" },
];

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className={`inline-flex items-center border border-sky/30 bg-ink/50 p-0.5 ${className}`}
    >
      {OPTIONS.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={`focus-sky px-2.5 py-1.5 text-[0.7rem] font-bold tracking-[0.12em] uppercase transition-colors ${
            lang === o.code ? "bg-sky text-ink" : "text-soft hover:text-white"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
