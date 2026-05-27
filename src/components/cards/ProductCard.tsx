import Image from 'next/image'

const ProductCard = ({ name, sub, price, badge, img }:
    {
        name: string;
        sub: string;
        price: string;
        badge?: string;
        img: string;
    }
) => {
    return (
        <div
            key={name}
            className="group cursor-pointer"
        >
            <div
                className="
                relative
                mb-4.5
                aspect-3/4
                overflow-hidden
                bg-[oklch(0.09_0.024_305)]
              "
            >
                <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {badge && (
                    <div
                        className="
                    absolute
                    left-3
                    top-3
                    bg-(--magenta)
                    px-2.5
                    py-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-(--text)
                    font-cinzel
                  "
                    >
                        {badge}
                    </div>
                )}

                <div
                    className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-[oklch(0.04_0.03_305/0.72)]
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
                >
                    <button
                        className="
                    border
                    border-[oklch(0.93_0.012_50/0.55)]
                    px-6.5
                    py-3
                    text-[9.5px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-(--text)
                    transition-all
                    duration-200
                    hover:border-(--magenta)
                    hover:text-(--magenta-bright)
                    font-cinzel
                  "
                    >
                        Quick Add
                    </button>
                </div>
            </div>

            <div
                className="
                mb-1.5
                text-[11.5px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-(--text)
                font-cinzel
              "
            >
                {name}
            </div>

            <div
                className="
                mb-1.75
                text-[13px]
                italic
                text-(--text-muted)
                font-cormorant
              "
            >
                {sub}
            </div>

            <div
                className="
                text-[13px]
                font-semibold
                tracking-[0.06em]
                text-(--magenta-bright)
                font-cinzel
              "
            >
                {price}
            </div>
        </div>
    )
}

export default ProductCard