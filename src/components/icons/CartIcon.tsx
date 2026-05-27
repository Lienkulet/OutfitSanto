import { ShoppingBag } from 'lucide-react'

interface CartIconProps {
  count?: number
  className?: string
}

export default function CartIcon({ count = 0, className }: CartIconProps) {
  return (
    <span className={`relative inline-flex ${className ?? ''}`}>
      <ShoppingBag strokeWidth={1.5} size={20} />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[10px] font-medium text-background leading-none">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </span>
  )
}
