/*
 * MORIKA HeroSection
 * Asymmetric 2-col layout: text left (1.1fr) · product art right (0.9fr)
 * Colors: cream bg / ink text / forest CTA / wood accent
 */

"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section
      id="top"
      className="container py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center"
    >
      {/* Left: Text content */}
      <div className="animate-fade-up">
        <span
          className="block text-xs font-semibold tracking-[0.18em] uppercase mb-5"
          style={{ color: "var(--color-clay)" }}
        >
          {t("hero.tag")}
        </span>

        <h1
          className="font-['Fraunces'] font-semibold leading-[1.15] mb-6"
          style={{
            fontSize: "clamp(2.4rem, 4.2vw, 3.6rem)",
            color: "var(--color-ink)",
          }}
        >
          {t("hero.title")}
          <br />
          <em
            className="font-light not-italic"
            style={{ color: "var(--color-forest)" }}
          >
            {t("hero.subtitle")}
          </em>
        </h1>

        <p
          className="text-base mb-8 max-w-md leading-relaxed"
          style={{ color: "var(--color-ink-soft)" }}
        >
          {t("hero.description")}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#collection"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.97]"
            style={{
              background: "var(--color-ink)",
              color: "var(--color-cream)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 24px -10px rgba(43,38,32,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 14c-3 0-5.5 2-5.5 4.5S9 21 12 21s5.5-1 5.5-2.5S15 14 12 14Z"/>
              <circle cx="7" cy="9" r="1.6"/>
              <circle cx="11" cy="6.5" r="1.6"/>
              <circle cx="13.5" cy="9.5" r="1.6"/>
              <circle cx="17" cy="11" r="1.6"/>
            </svg>
            {t("hero.viewCollection")}
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium border-[1.5px] transition-all duration-200 active:scale-[0.97]"
            style={{
              borderColor: "var(--color-wood-dark)",
              color: "var(--color-wood-dark)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-wood-dark)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-cream)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "";
              (e.currentTarget as HTMLElement).style.color = "var(--color-wood-dark)";
            }}
          >
            {t("hero.aboutMorika")}
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-5 mt-10">
          {[
            { icon: "🌿", text: t("hero.realOak") },
            { icon: "✋", text: t("hero.handmade") },
            { icon: "🐾", text: t("hero.petSafe") },
          ].map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 text-xs font-medium"
              style={{ color: "var(--color-ink-soft)" }}
            >
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Product art */}
      <div className="relative animate-fade-up animate-fade-up-delay-2">
        {/* Main product card */}
        <div
          className="rounded-3xl p-8 relative overflow-hidden"
          style={{
            background: "var(--color-card-bg)",
            border: "1px solid var(--color-line)",
            boxShadow: "0 30px 60px -30px rgba(124,91,56,0.35)",
          }}
        >
          <img
            src="/manus-storage/morika-hero_eac8a399.jpg"
            alt="Morika โต๊ะวางชามสัตว์เลี้ยงไม้แท้"
            className="w-full h-auto rounded-2xl object-cover"
            style={{ aspectRatio: "4/3" }}
          />

          {/* Floating label */}
          <div
            className="absolute top-5 right-5 morika-tag text-sm"
            style={{ background: "rgba(245,239,227,0.92)", backdropFilter: "blur(4px)" }}
          >
            ✦ {t("hero.realOak")}
          </div>
        </div>

        {/* Floating leaf decoration */}
        <svg
          className="absolute -top-5 -right-5 w-14 h-14 animate-sway"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ color: "var(--color-forest-soft)", opacity: 0.75 }}
        >
          <path d="M12 2C7 2 3 6 3 12c4 0 8-2 9-6 1 4 5 6 9 6 0-6-4-10-9-10Z" />
        </svg>

        {/* Small floating card: price hint */}
        <div
          className="absolute -bottom-4 -left-4 rounded-2xl px-5 py-3 shadow-lg"
          style={{
            background: "var(--color-forest)",
            color: "var(--color-cream)",
          }}
        >
          <div className="text-xs opacity-75 mb-0.5">{t("hero.startingFrom")}</div>
          <div className="font-['Fraunces'] font-semibold text-lg">฿390</div>
        </div>
      </div>
    </section>
  );
}
