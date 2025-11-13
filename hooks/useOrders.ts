
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Order } from '@/types/database';
import { toast } from 'sonner';

interface CreateOrderData {
  product_id: string;
  description?: string;
  price: number;
  order_type: 'buy' | 'sell';
}

// Helper function to transform database row to Order type
const transformOrder = (row: any): Order => ({
  ...row,
  order_type: row.order_type as 'buy' | 'sell'
});

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: async (): Promise<Order[]> => {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.warn('Database error for orders:', error.message);
          return [];
        }

        return (data || []).map(transformOrder);
      } catch (error) {
        console.warn('Connection error for orders:', error);
        return [];
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (orderData: CreateOrderData): Promise<Order> => {
      // Validate price range
      if (orderData.price <= 0) {
        throw new Error('قیمت باید بیشتر از صفر باشد');
      }

      if (orderData.price > 99999999) {
        throw new Error('قیمت نمی‌تواند بیشتر از 99,999,999 تومان باشد');
      }

      try {
        const { data, error } = await supabase
          .from('orders')
          .insert([orderData])
          .select()
          .single();

        if (error) throw error;
        return transformOrder(data);
      } catch (error: any) {
        console.error('Database error creating order:', error);
        throw new Error(error.message || 'خطا در ثبت سفارش');
      }
    },
