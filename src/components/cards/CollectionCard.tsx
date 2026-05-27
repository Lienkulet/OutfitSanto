import React from 'react'
import Image from 'next/image'

const CollectionCard = ({  season, name, ph, img }: {
    season: string;
    name: string;
    ph: string;
    img: string;
 }) => {
    return (
        <div
            key={name}
            className="
              group
              relative
              aspect-2/3
              cursor-pointer
              overflow-hidden
              bg-[oklch(0.08_0.028_305)]
            "
        >
            {img ? (
                <Image
                    src={img}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center whitespace-pre-line px-6 text-center font-mono text-[11px] leading-[1.6] tracking-[0.08em] text-[oklch(0.35_0.08_315)]">
                    {ph}
                </div>
            )}

            <div
                className="
                absolute
                inset-0
                flex
                flex-col
                justify-end
                bg-[linear-gradient(to_top,oklch(0.04_0.03_305/0.96)_0%,oklch(0.04_0.03_305/0.35)_55%,transparent_100%)]
                px-7
                py-8
                transition-all
                duration-400
                group-hover:bg-[linear-gradient(to_top,oklch(0.04_0.03_305/0.98)_0%,oklch(0.04_0.03_305/0.65)_65%,oklch(0.04_0.03_305/0.15)_100%)]
              "
            >
                <div
                    className="
                  mb-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-(--magenta)
                  font-cinzel
                "
                >
                    {season}
                </div>

                <div
                    className="
                  mb-4.5
                  text-[clamp(17px,1.8vw,24px)]
                  font-bold
                  leading-[1.2]
                  text-(--text)
                  font-cinzel-decorative
                "
                >
                    {name}
                </div>

                <a
                    href="#"
                    className="
                  inline-flex
                  items-center
                  gap-2.5
                  text-[9.5px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-(--text-muted)
                  transition-all
                  duration-300
                  group-hover:text-(--magenta-bright)
                  font-cinzel
                "
                >
                    Shop Now

                    <span
                        className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1.25
                  "
                    >
                        →
                    </span>
                </a>
            </div>
        </div>
    )
}

export default CollectionCard