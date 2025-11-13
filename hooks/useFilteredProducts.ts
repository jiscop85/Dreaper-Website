
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Product } from '@/types/database';
import { newFabricProducts } from '@/data/fabricProducts';

// Helper function to transform database row to Product type
const transformProduct = (row: any): Product => ({
  ...row,
  images: Array.isArray(row.images) ? row.images : [],
  tags: Array.isArray(row.tags) ? row.tags : [],
});

interface FilterParams {
  categorySlug?: string;
  filters?: string[];
  sortBy?: 'newest' | 'popular' | 'price-low' | 'price-high' | 'discount';
  limit?: number;
}
