import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';

export default function BrandStory() {
  return (
    <section className="grid grid-cols-1 items-start gap-12 border-t border-[oklch(0.16_0.05_310)] px-6 py-25 md:gap-20 md:px-15 lg:grid-cols-2 lg:gap-[80px]">
      {/* Visual */}
      <FadeIn>
        <div className="relative aspect-4/5 overflow-hidden bg-[oklch(0.09_0.024_305)]">
          <Image
            src="/images/bgimg.png"
            alt="Outfit Santo atelier — Buenos Aires, 2022"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 border border-[oklch(0.16_0.05_310)] bg-(--bg) px-3.5 py-1.5 font-cinzel text-[9px] font-semibold uppercase tracking-[0.3em] text-(--text-muted)">
            Buenos Aires, 2022
          </div>
        </div>
      </FadeIn>

      {/* Body */}
      <FadeIn delay={120} className="pt-3">
        <p className="mb-6 font-cinzel text-[10px] font-semibold uppercase tracking-[0.4em] text-(--magenta)">
          Our Story
        </p>

        <h2 className="mb-8 font-cinzel-decorative text-[clamp(20px,2.5vw,34px)] font-bold leading-[1.3] tracking-[0.04em] text-(--text)">
          Born on the Corner of<br />Heaven &amp; the Street
        </h2>

        <p className="mb-6 font-cormorant text-[18px] font-light leading-[1.8] text-(--text-muted)">
          Outfit Santo began as a single idea in a Buenos Aires workshop: that{' '}
          <strong className="font-semibold text-(--text)">streetwear and the sacred aren&apos;t opposites</strong>{' '}
          — they&apos;re two expressions of the same hunger. The hunger to be seen. To be felt. To matter.
        </p>

        <p className="mb-6 font-cormorant text-[18px] font-light leading-[1.8] text-(--text-muted)">
          We take the iconography of the divine — angels, crosses, relics, baroque ornament — and we break it open against the raw energy of urban culture.{' '}
          <strong className="font-semibold text-(--text)">The result is clothing that carries weight.</strong>{' '}
          Every stitch is intentional. Every drop is limited.
        </p>

        <p className="font-cormorant text-[18px] font-light leading-[1.8] text-(--text-muted)">
          No fast fashion. No compromise. Just pieces built to last longer than the season that spawned them.
        </p>
      </FadeIn>
    </section>
  );
}
