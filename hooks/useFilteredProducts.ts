
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

            if(category) {
              query = query.eq('category_id', category.id);
            }
          }
        }

        // فیلتر بر اساس تگ‌ها
        if (params.filters && params.filters.length > 0) {
          for (const filter of params.filters) {
            query = query.contains('tags', [filter]);
          }
        }

       // مرتب‌سازی
        switch (params.sortBy) {
          case 'newest':
            query = query.order('created_at', { ascending: false });
            break;
          case 'price-low':
            query = query.order('price', { ascending: true });
            break;
          case 'price-high':
            query = query.order('price', { ascending: false });
            break;
          case 'discount':
            query = query.not('discount_percentage', 'is', null)
                         .order('discount_percentage', { ascending: false });
            break;
          default:
            query = query.order('created_at', { ascending: false });
        }

        // محدودیت تعداد
        if (params.limit) {
          query = query.limit(params.limit);
        }

        const { data, error } = await query;

        if (error) {
          console.warn('Database error for filtered products:', error.message);
          return newFabricProducts.slice(0, params.limit || 20);
        }

       return (data || []).map(transformProduct);
      } catch (error) {
        console.warn('Connection error for filtered products:', error);
        return newFabricProducts.slice(0, params.limit || 20);
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};

// Hook برای دریافت محصولات براساس فیلتر موردی
export const useProductsByFilter = (filterType: string, filterValue: string) => {
  return useQuery({
    queryKey: ['products', 'filter', filterType, filterValue],
    queryFn: async (): Promise<Product[]> => {
      try {
        let query = supabase
          .from('products')
          .select('*')
          .eq('is_active', true);

// فیلتر بر اساس نوع فیلتر
        switch (filterType) {
          case 'material':
          case 'season':
          case 'pattern':
          case 'usage':
          case 'color':
          case 'special':
            query = query.contains('tags', [filterValue]);
            break;
          default:
            query = query.or(`name.ilike.%${filterValue}%, description.ilike.%${filterValue}%`);
        }

 query = query.order('created_at', { ascending: false }).limit(20);

        const { data, error } = await query;

        if (error) {
          console.warn('Database error for filtered products by type:', error.message);
          return newFabricProducts.slice(0, 20);
        }
        
        return (data || []).map(transformProduct);
      } catch (error) {
        console.warn('Connection error for filtered products by type:', error);
        return newFabricProducts.slice(0, 20);
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};

// Hook برای جستجوی پیشرفته
export const useAdvancedProductSearch = (searchParams: {
  query?: string;
  materials?: string[];
  seasons?: string[];
  patterns?: string[];
  usages?: string[];
  colors?: string[];
  specials?: string[];
  priceRange?: { min: number; max: number };
  discountOnly?: boolean;
}) => {
  return useQuery({
    queryKey: ['products', 'advanced-search', searchParams],
    queryFn: async (): Promise<Product[]> => {
      try {
        let query = supabase
          .from('products')
          .select('*')
          .eq('is_active', true);

        // جستجو در نام و توضیحات
        if (searchParams.query) {
          query = query.or(`name.ilike.%${searchParams.query}%, description.ilike.%${searchParams.query}%`);
        }

        // فیلتر بر اساس محدوده قیمت
        if (searchParams.priceRange) {
          query = query.gte('price', searchParams.priceRange.min)
                       .lte('price', searchParams.priceRange.max);
        }

        // فیلتر محصولات تخفیف‌دار
        if (searchParams.discountOnly) {
          query = query.not('discount_percentage', 'is', null);
        }

        // فیلتر بر اساس تگ‌ها
        const allTags = [
          ...(searchParams.materials || []),
          ...(searchParams.seasons || []),
          ...(searchParams.patterns || []),
          ...(searchParams.usages || []),
          ...(searchParams.colors || []),
          ...(searchParams.specials || [])
        ];

        if (allTags.length > 0) {
          for (const tag of allTags) {
            query = query.contains('tags', [tag]);
          }
        }

        query = query.order('created_at', { ascending: false });

        const { data, error } = await query;

        if (error) {
          console.warn('Database error for advanced search:', error.message);
          return newFabricProducts;
        }
