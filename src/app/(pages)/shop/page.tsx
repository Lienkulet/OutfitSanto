import { products } from '@/data/products';
import ShopClient from '@/components/section/shop/ShopClient';

export const metadata = {
  title: 'Shop — Outfit Santo',
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-(--bg) pt-20">
      {/* Static header — server rendered, no client JS needed */}
      <div className="flex items-end justify-between border-b border-[oklch(0.16_0.05_310)] px-6 pb-13 pt-18 md:px-15">
        <div>
          <div className="mb-2.5 font-cinzel text-[10px] font-semibold uppercase tracking-[0.4em] text-(--magenta)">
            SS 2026
          </div>
          <h1 className="font-cinzel-decorative text-[clamp(28px,4vw,56px)] font-bold leading-none tracking-[0.06em] text-(--text)">
            The Collection
          </h1>
        </div>
      </div>

      {/* Interactive section — client boundary starts here */}
      <ShopClient products={products} />
    </main>
  );
}
