import { BRANDS } from '@/data/brands';

const BrandMarquee = () => {
  const items = [...BRANDS, ...BRANDS];

  return (
    <section
      className="
        flex
        items-center
        justify-center
        overflow-hidden
        border-y
        py-8
       border-y-solid border-y-(--magenta)
      "
    >
      <div
        className="
          flex
          w-max
          animate-marquee
          items-center
          justify-center
          whitespace-nowrap
        "
      >
        {items.map((brand, index) => {
          const outlined = index % 2 === 1;
          return (
            <div key={`${brand}-${index}`} className="flex items-center">
              <span
                className="px-8 text-3xl font-black uppercase tracking-[0.26em] font-cinzel"
                style={
                  outlined
                    ? {
                        color: 'transparent',
                        WebkitTextStroke: '1px oklch(0.52 0.27 325)',
                      }
                    : { color: 'var(--text)' }
                }
              >
                {brand}
              </span>

              <span
                className="size-1.5 rounded-full shrink-0"
                style={{ background: 'var(--magenta)' }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}


export default BrandMarquee;