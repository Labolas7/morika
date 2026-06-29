/*
 * MORIKA Footer
 * Brand info + links + copyright
 * Colors: cream bg / ink text / wood accent
 */

"use client";

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-10"
      style={{ borderTop: "1px solid var(--color-line)" }}
    >
      <div className="container">
        <div className="flex flex-wrap justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <a
              href="#top"
              className="flex items-center gap-2.5 font-['Fraunces'] font-semibold text-xl mb-3"
              style={{ color: "var(--color-ink)" }}
            >
              <img
                src="/manus-storage/morika-logo_89713c14.png"
                alt="Morika"
                className="w-7 h-7 object-contain"
              />
              Morika
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
              Real wooden pet bowl stands, designed to make every meal warm and cozy like home
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 flex-wrap">
            <div>
              <h5
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-ink-soft)" }}
              >
                Explore
              </h5>
              {[
                { href: "#collection", label: "Collection" },
                { href: "#story", label: "Our Story" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm mb-2.5 transition-colors duration-150"
                  style={{ color: "var(--color-ink)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--color-clay)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--color-ink)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div>
              <h5
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-ink-soft)" }}
              >
                Contact
              </h5>
              <a
                href="https://line.me/R/ti/p/@morika"
                className="block text-sm mb-2.5 transition-colors duration-150"
                style={{ color: "var(--color-ink)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-clay)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-ink)")
                }
              >
                LINE: @morika
              </a>
              <a
                href="https://www.facebook.com/morika"
                className="block text-sm mb-2.5 transition-colors duration-150"
                style={{ color: "var(--color-ink)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-clay)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-ink)")
                }
              >
                Facebook: Morika Petshop
              </a>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="morika-divider mb-5">
          <span className="divider-line" />
          <span className="morika-tag" style={{ fontSize: "0.95rem" }}>
            Morika
          </span>
          <span className="divider-line" />
        </div>

        <p
          className="text-center font-['Caveat'] text-lg"
          style={{ color: "var(--color-ink-soft)" }}
        >
          made with love, for every fur baby — © 2026
        </p>
      </div>
    </footer>
  );
}
