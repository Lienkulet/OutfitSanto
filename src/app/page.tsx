import Footer from '@/components/layout/Footer'
import BrandMarquee from '@/components/section/home/BrandMarquee'
import CollectionsSection from '@/components/section/home/CollectionSection'
import HeroSection from '@/components/section/home/hero/HeroSection'
import ManifestoSection from '@/components/section/home/ManifestoSection'
import NewArrivalsSection from '@/components/section/home/NewArrivals'
import NewsletterSection from '@/components/section/home/NewsletterSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <NewArrivalsSection />
      <CollectionsSection />
      <ManifestoSection />

      <div style={{
        backgroundImage: 'url(/images/bgimg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
      }}>
        <NewsletterSection />
        <Footer />
      </div>
    </>
  )
}
