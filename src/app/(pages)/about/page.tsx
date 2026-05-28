import AboutHero from '@/features/about/components/AboutHero';
import BrandStory from '@/features/about/components/BrandStory';
import AboutPillars from '@/features/about/components/AboutPillars';
import NumbersStrip from '@/features/about/components/NumbersStrip';
import AboutCTA from '@/features/about/components/AboutCTA';

export const metadata = {
  title: 'About — Outfit Santo',
};

export default function AboutPage() {
  return (
    <main className="bg-(--bg) pt-20">
      <AboutHero />
      <BrandStory />
      <AboutPillars />
      <NumbersStrip />
      <AboutCTA />
    </main>
  );
}
