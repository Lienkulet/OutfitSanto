export type InterfaceProduct = {
  name: string;
  sub: string;
  price: string;
  badge?: string;
  img: string;
};

export const products: InterfaceProduct[] = [
  {
    name: 'Fallen Grace Hoodie',
    sub: 'Sacred Drop',
    price: '500 MDL',
    badge: 'New',
    img: '/products/pants.png',
  },
  {
    name: 'Blind Faith Tee',
    sub: 'Core Collection',
    price: '500 MDL',
    badge: 'New',
    img: '/products/pants.png',
  },
  {
    name: 'Reliquary Jacket',
    sub: 'Limited Edition',
    price: '500 MDL',
    badge: 'New',
    img: '/products/hoodie.png',
  },
  {
    name: "Saint's Cargo",
    sub: 'Core Collection',
    price: '500 MDL',
    badge: 'New',
    img: '/products/pants.png',
  },
];