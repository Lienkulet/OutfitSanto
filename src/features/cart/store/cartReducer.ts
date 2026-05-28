import { CartState, CartAction } from '../types';

export const initialState: CartState = {
  items: [],
  isOpen: false,
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.slug === action.payload.slug && i.size === action.payload.size
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.slug === action.payload.slug && i.size === action.payload.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.slug === action.payload.slug && i.size === action.payload.size)
        ),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((i) =>
          i.slug === action.payload.slug && i.size === action.payload.size
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'RESTORE_CART':
      return { ...state, items: action.payload };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
}
