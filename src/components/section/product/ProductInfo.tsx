interface ProductInfoProps {
  name: string;
  sub: string;
  price: string;
  badge?: string;
}

export default function ProductInfo({ name, sub, price, badge }: ProductInfoProps) {
  return (
    <div>
      {/* Eyebrow row */}
      <div className="mb-4 flex items-center gap-3">
        <span
          className="
            text-[9.5px]
            font-semibold
            uppercase
            tracking-[0.38em]
            text-(--magenta)
            font-cinzel
          "
        >
          {sub}
        </span>

        {badge && (
          <span
            className="
              bg-(--magenta)
              px-2
              py-0.5
              text-[7.5px]
              font-semibold
              uppercase
              tracking-[0.26em]
              text-(--text)
              font-cinzel
            "
          >
            {badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h1
        className="
          mb-5
          text-[clamp(26px,3.6vw,48px)]
          font-bold
          leading-[1.08]
          tracking-[0.04em]
          text-(--text)
          font-cinzel-decorative
        "
      >
        {name}
      </h1>

      {/* Price */}
      <div
        className="
          text-[22px]
          font-semibold
          tracking-[0.06em]
          text-(--magenta-bright)
          font-cinzel
        "
      >
        {price}
      </div>
    </div>
  );
}
