import Button from '@/components/ui/Button';

export default function AboutCTA() {
  return (
    <section className="border-t border-[oklch(0.16_0.05_310)] bg-[oklch(0.055_0.030_305)] px-6 py-[120px] text-center md:px-15">
      <p className="mx-auto mb-10 max-w-[640px] font-cormorant text-[clamp(24px,4vw,52px)] font-light italic leading-[1.4] text-(--text)">
        You&apos;ve read the story.<br />
        Now{' '}
        <em className="not-italic text-(--magenta-bright)">wear it.</em>
      </p>

      <Button href="/shop" filled>
        Shop the Collection
      </Button>
    </section>
  );
}
