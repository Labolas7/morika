/*
 * MORIKA CollectionSection
 * 3-column product grid with hover lift effect
 * Colors: card-bg / wood accent / clay price / ink text
 */

"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function CollectionSection() {
  const { t } = useLanguage();

  const products = [
    {
      id: "solo",
      name: t("collection.solo.name"),
      desc: t("collection.solo.desc"),
      price: "฿390",
      image: "/manus-storage/morika-solo_9b18441d.jpg",
      tag: t("collection.solo.tag"),
      tagColor: "var(--color-forest)",
      detail: t("collection.solo.detail"),
    },
    {
      id: "duo",
      name: t("collection.duo.name"),
      desc: t("collection.duo.desc"),
      price: "฿490",
      image: "/manus-storage/morika-duo_a1220e38.jpg",
      tag: t("collection.duo.tag"),
      tagColor: "var(--color-clay)",
      detail: t("collection.duo.detail"),
    },
    {
      id: "engraved",
      name: t("collection.engraved.name"),
      desc: t("collection.engraved.desc"),
      price: "฿590",
      image: "/manus-storage/morika-engraved_7ac64d19.jpg",
      tag: t("collection.engraved.tag"),
      tagColor: "var(--color-wood-dark)",
      detail: t("collection.engraved.detail"),
    },
  ];
  return (
    <section id="collection" className="py-20 md:py-28">
      {/* Section header */}
      <div className="container text-center mb-14">
        <span className="morika-tag mb-5 inline-flex">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 14c-3 0-5.5 2-5.5 4.5S9 21 12 21s5.5-1 5.5-2.5S15 14 12 14Z"/>
            <circle cx="7" cy="9" r="1.4"/>
            <circle cx="11" cy="6.5" r="1.4"/>
            <circle cx="13.5" cy="9.5" r="1.4"/>
            <circle cx="17" cy="11" r="1.4"/>
          </svg>
          {t("collection.tag")}
        </span>
        <h2
          className="font-['Fraunces'] font-semibold mb-4"
          style={{ fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "var(--color-ink)" }}
        >
          {t("collection.title")}
        </h2>
        <p className="max-w-md mx-auto whitespace-nowrap" style={{ color: "var(--color-ink-soft)" }}>
          {t("collection.description")}
        </p>
      </div>

      {/* Product grid */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-7">
        {products.map((product, i) => (
          <article
            key={product.id}
            className="rounded-2xl overflow-hidden group transition-all duration-300 animate-fade-up flex flex-col"
            style={{
              background: "var(--color-card-bg)",
              border: "1px solid var(--color-line)",
              animationDelay: `${i * 0.1}s`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 40px -24px rgba(124,91,56,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            {/* Product image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Tag badge */}
              <span
                className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: product.tagColor,
                  color: "var(--color-cream)",
                }}
              >
                {product.tag}
              </span>
            </div>

            {/* Product info */}
            <div className="p-6 flex flex-col">
              <h3
                className="font-['Fraunces'] font-semibold text-xl mb-1"
                style={{ color: "var(--color-ink)" }}
              >
                {product.name}
              </h3>
              <p className="text-sm mb-1" style={{ color: "var(--color-ink-soft)" }}>
                {product.desc}
              </p>
              <p className="text-xs mb-5" style={{ color: "var(--color-wood-dark)", opacity: 0.8 }}>
                {product.detail}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span
                  className="font-['Fraunces'] font-semibold text-xl"
                  style={{ color: "var(--color-clay)" }}
                >
                  {product.price}
                </span>
                <a
                  href="#contact"
                  className="text-sm font-medium px-4 py-2 rounded-lg border-[1.5px] transition-all duration-200 active:scale-[0.97]"
                  style={{
                    borderColor: "var(--color-ink)",
                    color: "var(--color-ink)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--color-ink)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-cream)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
                  }}
                >
                  {t("collection.inquire")}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
