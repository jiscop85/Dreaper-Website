
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
