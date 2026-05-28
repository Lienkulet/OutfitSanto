import BrandMarquee from '@/components/section/home/BrandMarquee'
import CollectionsSection from '@/components/section/home/CollectionSection'
import HeroSection from '@/components/section/home/hero/HeroSection'
import ManifestoSection from '@/components/section/home/ManifestoSection'
import NewArrivalsSection from '@/components/section/home/NewArrivals'

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <NewArrivalsSection />
      <CollectionsSection />
      <ManifestoSection />
    </>
  )
}
