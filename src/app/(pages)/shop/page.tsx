import { products } from '@/data/products';
import ShopClient from '@/components/section/shop/ShopClient';
import ShopHeader from '@/components/section/shop/ShopHeader';

export const metadata = {
  title: 'Shop — Outfit Santo',
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-(--bg) pt-20">
      <ShopHeader />
      <ShopClient products={products} />
    </main>
  );
}
