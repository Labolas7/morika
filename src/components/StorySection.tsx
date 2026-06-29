/*
 * MORIKA StorySection
 * Dark forest green section — brand story + process steps
 * Colors: forest bg / cream text / wood-light accents
 */

const steps = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2C7 2 3 6 3 12c4 0 8-2 9-6 1 4 5 6 9 6 0-6-4-10-9-10Z"/>
      </svg>
    ),
    title: "Oak from sustainable plantations",
    desc: "Only flawless boards selected, natural wood grain patterns"
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Non-toxic clear finish",
    desc: "Safe even if your pet licks or chews on it"
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Hand-engraved names",
    desc: "Each stand has your pet's name, truly one-of-a-kind"
  },
];

export default function StorySection() {
  return (
    <section
      id="story"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "var(--color-forest)" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 85% 20%, rgba(255,255,255,0.05), transparent 55%)",
        }}
      />

      {/* Decorative leaf SVG top-right */}
      <svg
        className="absolute top-8 right-12 w-32 h-32 opacity-10 animate-sway"
        viewBox="0 0 100 100"
        fill="currentColor"
        style={{ color: "#fff" }}
      >
        <path d="M50 5C25 5 5 25 5 50c20 0 40-10 45-30 5 20 25 30 45 30C95 25 75 5 50 5Z"/>
      </svg>

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* Left: Story text */}
        <div>
          <span
            className="morika-tag mb-6 inline-flex"
            style={{ color: "#E8DFC4", borderColor: "#E8DFC4" }}
          >
            From Forest to Your Home
          </span>
          <h2
            className="font-['Fraunces'] font-semibold leading-tight mb-5"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              color: "#F5EFE3",
              marginTop: "18px",
            }}
          >
            The best love
            <br />
            is simplicity
          </h2>
          <p className="mb-3 leading-relaxed" style={{ color: "#D9D2BD", maxWidth: "440px" }}>
            We source wood from sustainable plantations, hand-polish and finish each piece, believing that good things don't need to be loud
          </p>
          <p className="leading-relaxed" style={{ color: "#D9D2BD", maxWidth: "440px" }}>
            Just doing its job perfectly — letting your pet eat comfortably, and making your home a little warmer
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            {[
              { num: "500+", label: "Families trust us" },
              { num: "100%", label: "Real Oak" },
              { num: "3", label: "Models to choose" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-['Fraunces'] font-semibold text-2xl"
                  style={{ color: "#F5EFE3" }}
                >
                  {stat.num}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#C9C0A8" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Process steps */}
        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-4 items-start animate-fade-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div
                className="flex-none w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#E8DFC4",
                }}
              >
                {step.icon}
              </div>
              <div>
                <h4
                  className="font-['Fraunces'] font-medium text-base mb-1"
                  style={{ color: "#F5EFE3" }}
                >
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#C9C0A8" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
