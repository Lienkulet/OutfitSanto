'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  href?: string;
  children: ReactNode;
  filled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  href = '#',
  children,
  filled = false,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        `
          group
          relative
          inline-flex
          items-center
          justify-center
          overflow-hidden
          border
          px-10.5
          py-3.5
          font-cinzel
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.32em]
          no-underline
          transition-all
          duration-500
          ease-out
        `,

        filled
          ? `
              border-(--magenta)
              bg-(--magenta)
              text-(--text)

              hover:bg-transparent
            `
          : `
              border-(--border-muted)
              bg-transparent
              text-(--text)

              hover:border-(--magenta)
            `,

        className
      )}
    >
      {/* Inner border */}
      <span
        className={clsx(
          `
            pointer-events-none
            absolute
            inset-0.75
            border
            transition-colors
            duration-500
          border-(--border-light)
          group-hover:border-(--magenta-dim)
          group-hover:text-(--magenta)
            `
        )}
      />

      <span className='relative z-10'>
        {children}
      </span>
    </Link>
  );
}