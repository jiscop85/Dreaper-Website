export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parent_id?: string;
  image_url?: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    description?: string;
    price: number;
    original_price?: number;
    discount_percentage?: number;
    image_url: string;
    images: string[];
    category_id?: string;
    stock_quantity: number;
    is_featured: boolean;
    is_active: boolean;
    tags: string[];
    meta_title?: string;
    meta_description?: string;
    created_at: string;
    updated_at: string;
}

  export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;


