export interface NavCollection {
  label: string
  href: string
  description?: string
}

export interface NavItem {
  label: string
  href: string
  collections?: NavCollection[]
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Shop', href: '/shop' },
  {
    label: 'Collections',
    href: '/collections',
    collections: [
      { label: 'New Arrivals', href: '/collections/new-arrivals', description: 'Latest drops' },
      { label: 'Best Sellers', href: '/collections/best-sellers', description: 'Fan favourites' },
      { label: 'Summer Edit', href: '/collections/summer', description: 'Seasonal essentials' },
      { label: 'Archive', href: '/collections/archive', description: 'Limited reissues' },
    ],
  },
  { label: 'Men', href: '/men' },
  { label: 'Women', href: '/women' },
  { label: 'Our Story', href: '/our-story' },
]
