import { Menu } from 'lucide-react'

interface MenuIconProps {
  className?: string
}

export default function MenuIcon({ className }: MenuIconProps) {
  return <Menu size={22} strokeWidth={1.5} className={className} />
}
