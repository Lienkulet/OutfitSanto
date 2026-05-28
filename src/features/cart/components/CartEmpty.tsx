import Link from 'next/link';

export default function CartEmpty() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-16 text-center">
      <div className="flex flex-col items-center gap-3">
        <span className="font-cinzel text-[9px] uppercase tracking-[0.4em] text-(--magenta)">
          Your Cart
        </span>
        <p className="font-cinzel-decorative text-[22px] font-bold leading-snug tracking-[0.04em] text-(--text)">
          Nothing here yet
        </p>
        <p className="mt-1 font-cormorant text-[15px] italic text-(--text-muted)">
          Add pieces from the collection to begin.
        </p>
      </div>

      <Link
        href="/shop"
        className="mt-2 font-cinzel text-[10px] uppercase tracking-[0.3em] text-(--text-muted) underline underline-offset-4 transition-colors hover:text-(--magenta-bright)"
      >
        Explore the Collection
      </Link>
    </div>
  );
}
