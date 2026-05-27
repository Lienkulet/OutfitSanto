import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
  label: string
}

const BASE =
  'inline-flex items-center justify-center rounded-full font-medium uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-stone-950 text-white hover:bg-stone-700 focus-visible:ring-stone-950',
  secondary:
    'bg-white text-stone-950 border border-stone-950 hover:bg-stone-100 focus-visible:ring-stone-950',
  ghost:
    'text-stone-950 hover:text-stone-500 focus-visible:ring-stone-500',
}

const SIZES: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[10px]',
  md: 'px-7 py-3.5 text-[11px]',
  lg: 'px-9 py-4 text-[12px]',
}

export default function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  label,
  className = '',
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={[BASE, VARIANTS[variant], SIZES[size], className].join(' ')}
      {...rest}
    >
      {label}
    </Link>
  )
}
