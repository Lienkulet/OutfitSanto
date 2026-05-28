'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  href?: string;
  children: ReactNode;
  filled?: boolean;
  active?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const innerBorder = (active?: boolean) =>
  clsx(
    'pointer-events-none absolute inset-0.75 border transition-colors duration-500',
    active
      ? 'border-(--magenta-dim)'
      : 'border-(--border-light) group-hover:border-(--magenta-dim)',
  );

const baseClass = (filled: boolean, active: boolean, className?: string) =>
  clsx(
    `group relative inline-flex items-center justify-center overflow-hidden border
     font-cinzel text-[11px] font-semibold uppercase tracking-[0.32em] no-underline
     transition-all duration-500 ease-out px-10.5 py-3.5 cursor-pointer`,
    filled
      ? 'border-(--magenta) bg-(--magenta) text-(--text) hover:bg-transparent'
      : active
        ? 'border-(--magenta) bg-[oklch(0.52_0.27_325/0.08)] text-(--text)'
        : 'border-(--border-muted) bg-transparent text-(--text) hover:border-(--magenta)',
    className,
  );

export default function Button({
  href,
  children,
  onClick,
  filled = false,
  active = false,
  className,
  type = 'button',
}: ButtonProps) {
  const inner = (
    <>
      <span className={innerBorder(active)} />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (onClick || !href) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={baseClass(filled, active, className)}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className={baseClass(filled, active, className)}>
      {inner}
    </Link>
  );
}
