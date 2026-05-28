import { ChevronDown } from 'lucide-react'

interface ChevronDownIconProps {
  className?: string
  size?: number
  style?: React.CSSProperties
}

export default function ChevronDownIcon({ className, size = 14, style }: ChevronDownIconProps) {
  return <ChevronDown size={size} strokeWidth={1.5} className={className} style={style} />
}
