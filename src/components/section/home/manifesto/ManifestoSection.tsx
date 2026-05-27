import React from 'react'

const ManifestoSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-(--bg)
        px-6
        py-32.5
        text-center
        md:px-15
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          select-none
          whitespace-nowrap
          text-[clamp(80px,18vw,240px)]
          font-black
          leading-none
          tracking-[0.12em]
          text-[oklch(0.11_0.035_310)]
          font-cinzel-decorative
        "
      >
        SANTO
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-200
        "
      >
        <div
          className="
            mb-13
            flex
            items-center
            justify-center
            gap-3.5
            opacity-45
          "
        >
          <div className="h-px w-15 bg-(--magenta-dim)" />

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <rect x="7" y="0" width="2" height="16" fill="oklch(0.70 0.22 330)" />
            <rect x="0" y="7" width="16" height="2" fill="oklch(0.70 0.22 330)" />
            <rect x="6" y="6" width="4" height="4" fill="oklch(0.06 0.032 305)" />
            <rect x="7" y="7" width="2" height="2" fill="oklch(0.52 0.27 325)" />
          </svg>

          <div className="h-px w-15 bg-(--magenta-dim)" />
        </div>

        <p
          className="
            mb-11
            text-[clamp(22px,3.6vw,50px)]
            font-light
            italic
            leading-[1.45]
            tracking-[0.02em]
            text-(--text)
            font-cormorant
          "
        >
          Dressed in darkness. Built for the streets.
          <br />
          <em className="text-(--magenta-bright)">
            Born sacred.
          </em>
        </p>

        <div
          className="
            text-[10.5px]
            uppercase
            tracking-[0.35em]
            text-(--text-muted)
            font-cinzel
          "
        >
          — Outfit Santo
        </div>
      </div>
    </section>
  );
}
export default ManifestoSection