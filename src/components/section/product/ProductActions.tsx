'use client';

export default function ProductActions() {
  return (
    <div className="flex flex-col gap-3">
      {/* Add to Cart */}
      <button
        className="
          group
          relative
          flex
          w-full
          items-center
          justify-center
          overflow-hidden
          border
          border-(--magenta)
          bg-(--magenta)
          py-4
          text-[10.5px]
          font-semibold
          uppercase
          tracking-[0.32em]
          text-(--text)
          transition-all
          duration-500
          hover:bg-transparent
          font-cinzel
          cursor-pointer
        "
      >
        <span
          className="
            pointer-events-none
            absolute
            inset-0.75
            border
            border-(--border-light)
            transition-colors
            duration-500
            group-hover:border-(--magenta-dim)
          "
        />
        <span className="relative z-10">Add to Cart</span>
      </button>

      {/* Wishlist */}
      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2.5
          border
          border-[oklch(1_0_0/0.14)]
          py-3.5
          text-[10.5px]
          font-semibold
          uppercase
          tracking-[0.28em]
          text-(--text-muted)
          transition-all
          duration-300
          hover:border-(--magenta-dim)
          hover:text-(--text)
          font-cinzel
          cursor-pointer
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        Save to Wishlist
      </button>
    </div>
  );
}
