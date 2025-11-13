
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

export const useFilteredProducts = (params: FilterParams) => {
  return useQuery({
    queryKey: ['products', 'filtered', params],
    queryFn: async (): Promise<Product[]> => {
      try {
        let query = supabase
          .from('products')
          .select('*')
          .eq('is_active', true);

        // فیلتر بر اساس دسته‌بندی
        if (params.categorySlug) {
          if (params.categorySlug === 'new-arrivals') {
            query = query.order('created_at', { ascending: false });
          } else if (params.categorySlug === 'bestsellers') {
            query = query.order('created_at', { ascending: false });
          } else if (params.categorySlug === 'on-sale') {
            query = query.not('discount_percentage', 'is', null);
          } else {
            const { data: category } = await supabase
              .from('categories')
              .select('id')
              .eq('slug', params.categorySlug)
              .single();
