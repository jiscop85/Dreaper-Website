
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
