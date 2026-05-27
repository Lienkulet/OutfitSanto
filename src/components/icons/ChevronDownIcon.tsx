import { ChevronDown } from 'lucide-react'

interface ChevronDownIconProps {
  className?: string
  size?: number
}

export default function ChevronDownIcon({ className, size = 14 }: ChevronDownIconProps) {
  return <ChevronDown size={size} strokeWidth={1.5} className={className} />
}
