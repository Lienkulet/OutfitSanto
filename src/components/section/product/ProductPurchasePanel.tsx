'use client';

import { useState } from 'react';
import SizeSelector from './SizeSelector';
import ProductActions from './ProductActions';
import { useCart } from '@/features/cart/hooks/useCart';

interface ProductPurchasePanelProps {
  slug: string;
  name: string;
  img: string;
  price: string;
  sizes: string[];
}

export default function ProductPurchasePanel({
  slug,
  name,
  img,
  price,
  sizes,
}: ProductPurchasePanelProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addItem } = useCart();

  function handleAddToCart() {
    if (!selectedSize) return;
    addItem({ slug, name, img, price, size: selectedSize });
  }

  return (
    <div className="flex flex-col gap-7">
      <SizeSelector sizes={sizes} value={selectedSize} onChange={setSelectedSize} />
      <ProductActions onAddToCart={handleAddToCart} disabled={!selectedSize} />
    </div>
  );
}
