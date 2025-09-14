import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  image: string;
  totalPrice: number;
}

interface CartStore {
  items: CartItem[];
  totalAmount: number;
  totalItems: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  calculateTotals: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalAmount: 0,

      addToCart: (item) => {
        const { items } = get();
        const existingItem = items.find(i => i.id === item.id);

        if (existingItem) {

        if (existingItem) {
          set(state => ({
            items: state.items.map(i => 
              i.id === item.id 
                ? { 
                    ...i, 
                    quantity: Math.round((i.quantity + item.quantity) * 100) / 100,
                    totalPrice: Math.round((i.quantity + item.quantity) * i.price * 100) / 100
                  }
                : i
            )
          }));
        } else {
          set(state => ({
            items: state.items.map(i => 
                 ...item,
              quantity: Math.round(item.quantity * 100) / 100,
              totalPrice: Math.round(item.totalPrice * 100) / 100
            }]
          }));
        }
        get().calculateTotals();
      },

      removeFromCart: (id) => {
        set(state => ({
