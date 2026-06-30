/*
 * MORIKA Navbar
 * Sticky top nav with blur backdrop, logo + links + CTA
 * Colors: cream bg / ink text / forest CTA
 */

"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#collection", label: t("nav.products") },
    { href: "#story", label: t("nav.story") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(245,239,227,0.95)"
          : "rgba(245,239,227,0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid oklch(0.880 0.025 75)",
        boxShadow: scrolled ? "0 2px 20px -8px rgba(43,38,32,0.15)" : "none",
      }}
    >
      <nav className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center"
          style={{ color: "var(--color-ink)" }}
        >
          <img
            src="/manus-storage/morika-logo-cropped.png"
            alt="Morika Logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-base font-medium transition-colors duration-200 group"
              style={{ color: "var(--color-ink-soft)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-ink)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "var(--color-ink-soft)")
              }
            >
              {link.label}
              <span
                className="absolute left-0 -bottom-1.5 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "var(--color-wood-dark)" }}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLanguage(language === "th" ? "en" : "th")}
            className="hidden md:flex items-center gap-1.5 text-base font-medium px-3.5 py-2.5 rounded-lg transition-all duration-200"
            style={{
              color: "var(--color-ink-soft)",
              border: "1px solid var(--color-line)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--color-cream)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "")
            }
          >
            <span>{language === "th" ? "TH" : "EN"}</span>
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-base font-medium px-6 py-3 rounded-full transition-all duration-200"
            style={{
              background: "var(--color-forest)",
              color: "var(--color-cream)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--color-ink)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--color-forest)")
            }
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.5 2 2 5.8 2 10.5c0 3 2 5.7 5 7.3-.2.8-.7 2.4-.8 2.8 0 .3.2.4.4.3.2 0 2.8-1.9 3.9-2.6.8.1 1.6.2 2.5.2 5.5 0 10-3.8 10-8.5S17.5 2 12 2Z" />
            </svg>
            {t("nav.orderLine")}
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: "var(--color-ink)" }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t py-4 px-6 flex flex-col gap-4"
          style={{ borderColor: "var(--color-line)", background: "rgba(245,239,227,0.98)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium py-1"
              style={{ color: "var(--color-ink)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setLanguage(language === "th" ? "en" : "th")}
            className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg"
            style={{
              color: "var(--color-ink-soft)",
              border: "1px solid var(--color-line)",
            }}
          >
            <span>{language === "th" ? "TH" : "EN"}</span>
          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium px-5 py-3 rounded-full mt-2"
            style={{ background: "var(--color-forest)", color: "var(--color-cream)" }}
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.orderLine")}
          </a>
        </div>
      )}
    </header>
  );
}