export type CartItem = {
  slug: string;
  name: string;
  img: string;
  price: string;
  size: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

export type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: { slug: string; size: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { slug: string; size: string; quantity: number } }
  | { type: 'RESTORE_CART'; payload: CartItem[] }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'CLEAR_CART' };
