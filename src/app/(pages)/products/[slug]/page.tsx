import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductGallery from '@/components/section/product/ProductGallery';
import ProductInfo from '@/components/section/product/ProductInfo';
import SizeSelector from '@/components/section/product/SizeSelector';
import ProductActions from '@/components/section/product/ProductActions';
import ProductAccordion from '@/components/section/product/ProductAccordion';
import ProductBreadcrumb from '@/components/section/product/ProductBreadcrumb';
import ProductTrustSignals from '@/components/section/product/ProductTrustSignals';
import RelatedProducts from '@/components/section/product/RelatedProducts';
import Divider from '@/components/ui/Divider';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <main className="bg-(--bg) pt-24">
      <div className="px-6 pb-8 md:px-15">
        <ProductBreadcrumb productName={product.name} />
      </div>

      <div className="mx-auto grid max-w-330 grid-cols-1 gap-10 px-6 pb-20 md:px-15 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <ProductGallery name={product.name} images={product.gallery} />

        <div className="flex flex-col gap-7">
          <ProductInfo
            name={product.name}
            sub={product.sub}
            price={product.price}
            badge={product.badge}
          />

          <Divider />
          <SizeSelector sizes={product.sizes} />
          <ProductActions />
          <Divider />

          <ProductAccordion
            description={product.description}
            details={product.details}
          />

          <ProductTrustSignals />
        </div>
      </div>

      <RelatedProducts products={related} />
    </main>
  );
}
