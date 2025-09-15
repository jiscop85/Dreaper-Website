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
          items: state.items.filter(item => item.id !== id)
        }));
        get().calculateTotals();
      },

      updateQuantity: (id, quantity) => {
        const roundedQuantity = Math.round(quantity * 100) / 100;
        
        if (roundedQuantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        
        set(state => ({
          items: state.items.map(item => 
            item.id === id 
              ? { 
                  ...item, 
                  quantity: roundedQuantity,
                  totalPrice: Math.round(roundedQuantity * item.price * 100) / 100
                }
              : item
          )
        }));
        get().calculateTotals();
      },
      
           clearCart: () => {
             set({ items: [], totalAmount: 0, totalItems: 0 });
       },

       calculateTotals: () => {
        const { items } = get();
        const totalAmount = Math.round(items.reduce((sum, item) => sum + item.totalPrice, 0) * 100) / 100;
        const totalItems = Math.round(items.reduce((sum, item) => sum + item.quantity, 0) * 100) / 100;
        set({ totalAmount, totalItems });
      }
    }),

