'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { NavItem } from '@/lib/nav-config'
import CloseIcon from '@/components/icons/CloseIcon'
import ChevronDownIcon from '@/components/icons/ChevronDownIcon'

interface NavMobileDrawerProps {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

export default function NavMobileDrawer({ items, isOpen, onClose }: NavMobileDrawerProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setExpandedItem(null)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          'lg:hidden fixed inset-0 z-40 bg-black/30 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          'lg:hidden fixed inset-y-0 left-0 z-50 w-[320px] bg-white flex flex-col',
          'transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-stone-100">
          <span className="text-[13px] font-semibold tracking-[0.15em] uppercase">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 -mr-2 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav items */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto py-4">
          {items.map((item) => {
            const hasDropdown = !!item.collections?.length
            const isExpanded = expandedItem === item.label

            return (
              <div key={item.label}>
                {hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpandedItem(isExpanded ? null : item.label)}
                      aria-expanded={isExpanded}
                      className="flex w-full items-center justify-between px-6 py-3.5 text-[11px] font-medium tracking-[0.12em] uppercase text-stone-900 hover:text-stone-500 transition-colors cursor-pointer focus-visible:outline-none focus-visible:bg-stone-50"
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <div
                      className={[
                        'overflow-hidden transition-all duration-200 ease-out',
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                      ].join(' ')}
                    >
                      {item.collections?.map((col) => (
                        <Link
                          key={col.href}
                          href={col.href}
                          onClick={onClose}
                          className="block px-8 py-2.5 text-[11px] tracking-[0.08em] uppercase text-stone-500 hover:text-stone-900 transition-colors focus-visible:outline-none focus-visible:bg-stone-50"
                        >
                          {col.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.12em] uppercase text-stone-900 hover:text-stone-500 transition-colors focus-visible:outline-none focus-visible:bg-stone-50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="px-6 py-6 border-t border-stone-100">
          <p className="text-[10px] tracking-[0.1em] uppercase text-stone-400">Rawblox © 2026</p>
        </div>
      </div>
    </>
  )
}
