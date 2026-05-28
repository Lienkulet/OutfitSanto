import FadeIn from '@/components/animations/FadeIn';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { PILLARS } from '@/features/about/data/pillars';

export default function AboutPillars() {
  return (
    <section className="border-t border-[oklch(0.16_0.05_310)] px-6 py-25 md:px-15">
      <div className="mb-18 text-center">
        <div className="mb-3.5">
          <SectionEyebrow label="What We Stand For" />
        </div>
        <h2 className="font-cinzel-decorative text-[clamp(22px,3vw,40px)] font-bold text-(--text)">
          The Three Pillars
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-0.5 lg:grid-cols-3">
        {PILLARS.map((pillar, i) => (
          <FadeIn key={pillar.num} delay={i * 80}>
            <div className="group border-t-2 border-transparent bg-[oklch(0.08_0.024_305)] px-11 pb-14 pt-13 transition-colors duration-300 hover:border-t-(--magenta)">
              <div
                className="mb-6 font-cinzel-decorative font-black leading-none text-[oklch(0.14_0.04_310)]"
                style={{ fontSize: 48 }}
              >
                {pillar.num}
              </div>
              <h3 className="mb-4.5 font-cinzel-decorative text-[clamp(16px,1.6vw,22px)] font-bold leading-[1.2] tracking-[0.04em] text-(--text)">
                {pillar.name}
              </h3>
              <p className="font-cormorant text-[17px] font-light leading-[1.75] text-(--text-muted)">
                {pillar.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
