export type Category = 'hoodie' | 'tee' | 'jacket' | 'bottom';

export type InterfaceProduct = {
  slug: string;
  name: string;
  sub: string;
  price: string;
  badge?: string;
  img: string;
  gallery: string[];
  description: string;
  sizes: string[];
  details: string[];
  category: Category;
};

export const products: InterfaceProduct[] = [
  {
    slug: 'martyr-hoodie',
    name: 'Martyr Hoodie',
    sub: 'Limited Edition',
    price: '80$',
    badge: 'New',
    img: '/products/hoodie.png',
    gallery: ['/products/hoodie.png'],
    description:
      'Heavy. Distressed. A hoodie that looks like it has already been through something. The Martyr comes out of wash with an aged patina — intentional from the start.',
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      '450gsm enzyme-washed fleece',
      'Oversized fit with raw edges',
      'Distressed drawcord and eyelets',
      'Limited run — 60 pieces',
      'Do not tumble dry',
    ],
    category: 'hoodie',
  },
  {
    slug: 'benediction-tee',
    name: 'Benediction Tee',
    sub: 'Core Collection',
    price: '50$',
    img: '/products/tshirt.png',
    gallery: ['/products/tshirt.png'],
    description:
      'The Benediction is an oversized silhouette with a dropped shoulder seam and subtle chest placement. Understated. Essential. Worn as an act of intention.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    details: [
      '220gsm combed cotton',
      'Oversized fit',
      'Front chest placement print',
      'Seamless ribbed neck',
      'Made in Portugal',
    ],
    category: 'tee',
    badge: 'New',
  },
  {
    slug: 'relic-denim',
    name: 'Relic Denim',
    sub: 'SS 2026',
    price: '100$',
    badge: 'New',
    img: '/products/pants.png',
    gallery: ['/products/pants.png'],
    description:
      'Washed, worn, and blessed. The Relic Denim is a straight-cut jean with hand-sanded details and tonal stitching throughout. Looks like it was earned.',
    sizes: ['28', '30', '32', '34', '36'],
    details: [
      '12oz selvedge denim',
      'Straight regular fit',
      'Hand-sanded wash',
      'Tonal stitching throughout',
      'Made in Italy',
    ],
    category: 'bottom',
  },
];
