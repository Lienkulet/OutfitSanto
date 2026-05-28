import FadeIn from '@/components/animations/FadeIn';
import { STATS } from '@/features/about/data/stats';

export default function NumbersStrip() {
  return (
    <div className="grid grid-cols-2 gap-0.5 border-t border-[oklch(0.16_0.05_310)] bg-[oklch(0.04_0.025_305)] p-0.5 lg:grid-cols-4">
      {STATS.map((stat, i) => (
        <FadeIn key={stat.label} delay={i * 60}>
          <div className="bg-[oklch(0.08_0.024_305)] px-9 py-12 text-center">
            <div className="mb-2.5 font-cinzel-decorative font-black leading-none text-(--magenta-bright)" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
              {stat.value}
            </div>
            <div className="font-cinzel text-[9.5px] font-semibold uppercase tracking-[0.3em] text-(--text-muted)">
              {stat.label}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
