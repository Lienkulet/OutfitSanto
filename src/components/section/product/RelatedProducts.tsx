import ProductCard from '@/components/cards/ProductCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { InterfaceProduct } from '@/data/products';

interface RelatedProductsProps {
  products: InterfaceProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-[oklch(1_0_0/0.07)] px-6 py-20 md:px-15">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-3.5">
          <SectionEyebrow label="You May Also Like" />
        </div>

        <h2
          className="
            text-[clamp(20px,2.6vw,36px)]
            font-bold
            tracking-[0.08em]
            text-(--text)
            font-cinzel-decorative
          "
        >
          Related Pieces
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
            key={product.slug}
            slug={product.slug}
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
