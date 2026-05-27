import ProductCard from '@/components/cards/ProductCard';
import { products } from '@/data/products';

const NewArrivalsSection = () => {
  return (
    <section
      className="
        bg-[oklch(0.08_0.024_305)]
        px-6
        py-25
        md:px-15
      "
    >
      {/* Header */}
      <div
        className="
          mb-15
          text-center
        "
      >
        <div
          className="
            mb-3.5
            flex
            items-center
            justify-center
            gap-4.5
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.42em]
            text-(--magenta)
            font-cinzel
          "
        >
          <span className="h-px w-8 bg-(--magenta-dim)" />

          <span>
            Just Dropped
          </span>

          <span className="h-px w-8 bg-(--magenta-dim)" />
        </div>

        <h2
          className="
            text-[clamp(24px,3.2vw,44px)]
            font-bold
            tracking-[0.08em]
            text-(--text)
            font-cinzel-decorative
          "
        >
          New Arrivals
        </h2>
      </div>

      {/* Grid */}
      <div
        className="
          mx-auto
          grid
          max-w-330
          grid-cols-2
          gap-3.5
          lg:grid-cols-4
          lg:gap-7
        "
      >
        {products.map((product) => (
         <ProductCard
            key={product.name}
            name={product.name}
            sub={product.sub}
            price={product.price}
            badge={product.badge}
            img={product.img}
          />
        ))}
      </div>
    </section>
  );
}

export default NewArrivalsSection;