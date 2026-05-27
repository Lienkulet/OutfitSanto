import BrandMarquee from '@/components/section/home/BrandMarquee'
import CollectionsSection from '@/components/section/home/CollectionSection'
import HeroSection from '@/components/section/home/hero/HeroSection'
import ManifestoSection from '@/components/section/home/ManifestoSection'
import NewsletterSection from '@/components/section/home/NewsletterSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandMarquee /> 
      <CollectionsSection />
      <ManifestoSection />
      <NewsletterSection /> 
    </> 
  )
}
