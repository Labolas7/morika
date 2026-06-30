/*
 * MORIKA ContactSection
 * CTA card with LINE + Facebook buttons
 * Colors: card-bg / forest / line-green / fb-blue
 */

"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div
          className="max-w-3xl mx-auto rounded-3xl text-center px-8 py-16 md:px-16"
          style={{
            background: "var(--color-card-bg)",
            border: "1px solid var(--color-line)",
            boxShadow: "0 30px 60px -36px rgba(124,91,56,0.3)",
          }}
        >
          <span className="morika-tag mb-6 inline-flex">
            {t("contact.tag")}
          </span>

          <h2
            className="font-['Fraunces'] font-semibold mb-4 mt-4"
            style={{
              fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
              color: "var(--color-ink)",
            }}
          >
            {t("contact.title")}
          </h2>

          <p
            className="max-w-md mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {t("contact.description")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* LINE button */}
            <a
              href="https://line.me/R/ti/p/@morika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
              style={{ background: "#06C755", color: "#fff" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#05a948";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px -8px rgba(6,199,85,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#06C755";
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 5.8 2 10.5c0 3 2 5.7 5 7.3-.2.8-.7 2.4-.8 2.8 0 .3.2.4.4.3.2 0 2.8-1.9 3.9-2.6.8.1 1.6.2 2.5.2 5.5 0 10-3.8 10-8.5S17.5 2 12 2Z"/>
              </svg>
              {t("contact.line")}
            </a>

            {/* Facebook button */}
            <a
              href="https://www.facebook.com/morika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
              style={{ background: "#1877F2", color: "#fff" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#1463d4";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px -8px rgba(24,119,242,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#1877F2";
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/>
              </svg>
              {t("contact.facebook")}
            </a>
          </div>

          {/* Additional info */}
          <div
            className="flex flex-wrap justify-center gap-6 mt-10 pt-8 text-sm"
            style={{
              borderTop: "1px solid var(--color-line)",
              color: "var(--color-ink-soft)",
            }}
          >
            <span>{t("contact.shipping")}</span>
            <span>{t("contact.days")}</span>
            <span>{t("contact.gift")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
