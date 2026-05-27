import React from 'react'

const HeroContent = () => {
  return (
          <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          px-6
          pb-18
          text-center
          max-[700px]:px-5
          max-[700px]:pb-20
        "
      >
        {/* Eyebrow */}
        <div
          className="
            mb-4.5
            flex
            items-center
            gap-4.5
            font-cinzel
            text-[10.5px]
            font-semibold
            uppercase
            tracking-[0.42em]
            text-(--magenta)
          "
        >
          <span className="block h-px w-11 bg-(--magenta-dim)" />

          <span>
            The Sacred Collection &nbsp;·&nbsp; SS 2026
          </span>

          <span className="block h-px w-11 bg-(--magenta-dim)" />
        </div>

        {/* Tagline */}
        <p
          className="
            mb-9
            font-cormorant
            text-[clamp(22px,3.2vw,38px)]
            font-light
            italic
            tracking-[0.06em]
            text-(--text)
          "
          style={{
            lineHeight: 1.35,
            textShadow: '0 2px 24px oklch(0.04 0.03 305 / 0.8)',
          }}
        >
          For the Sacred &amp; the Damned.
        </p>

        {/* Divider */}
        <div
          className="
            mb-9
            flex
            items-center
            gap-3.5
          "
        >
          <div
            className="h-px w-18"
            style={{
              background:
                'linear-gradient(to right, transparent, var(--magenta-dim))',
            }}
          />

          <div className="flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="7"
                y="0"
                width="2"
                height="16"
                fill="oklch(0.70 0.22 330)"
              />
              <rect
                x="0"
                y="7"
                width="16"
                height="2"
                fill="oklch(0.70 0.22 330)"
              />
              <rect
                x="6"
                y="6"
                width="4"
                height="4"
                fill="oklch(0.06 0.03 305)"
              />
              <rect
                x="7"
                y="7"
                width="2"
                height="2"
                fill="oklch(0.52 0.27 325)"
              />
            </svg>
          </div>

          <div
            className="h-px w-18"
            style={{
              background:
                'linear-gradient(to left, transparent, var(--magenta-dim))',
            }}
          />
        </div>

        {/* CTA Buttons */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-4.5
          "
        >
          <a
            href="#"
            className="
              relative
              border
              border-(--magenta)
              bg-(--magenta)
              px-10.5
              py-3.75
              font-cinzel
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-(--text)
              no-underline
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-(--magenta-bright)
              hover:bg-(--magenta-bright)
              hover:shadow-[0_10px_36px_var(--shadow-magenta)]
            "
          >
            <span
              className="
                pointer-events-none
                absolute
                inset-0.75
                border
                border-(--border-light)
              "
            />

            <span className="relative z-10">
              Shop Collection
            </span>
          </a>

          <a
            href="#"
            className="
              border
              border-(--border-muted)
              px-10.5
              py-3.75
              font-cinzel
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-(--text)
              no-underline
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-(--magenta)
              hover:text-(--magenta-bright)
            "
          >
            Explore Lookbook
          </a>
        </div>
      </div>
  )
}

export default HeroContent