import { X } from 'lucide-react'

interface CloseIconProps {
  className?: string
  size?: number
}

export default function CloseIcon({ className, size = 22 }: CloseIconProps) {
  return <X size={size} strokeWidth={1.5} className={className} />
}
