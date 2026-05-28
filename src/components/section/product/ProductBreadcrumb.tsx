import Link from 'next/link';

interface ProductBreadcrumbProps {
  productName: string;
}

export default function ProductBreadcrumb({ productName }: ProductBreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 font-cinzel text-[9.5px] uppercase tracking-[0.28em] text-(--text-muted)">
      <Link href="/" className="transition-colors duration-200 hover:text-(--text)">Home</Link>
      <span className="text-(--magenta-dim)">/</span>
      <Link href="/shop" className="transition-colors duration-200 hover:text-(--text)">Shop</Link>
      <span className="text-(--magenta-dim)">/</span>
      <span className="text-(--text)">{productName}</span>
    </nav>
  );
}
