export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_name: string | null
          content: string
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          id: string
          is_published: boolean | null
          published_at: string | null
          slug: string
          title: string
          updated_at: string | null
        }
 Insert: {
          author_name?: string | null
          content: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          slug: string
          title: string
          updated_at?: string | null
        }
 Update: {
          author_name?: string | null
          content?: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
 }
      categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          name: string
          parent_id: string | null
          slug: string
          sort_order: number | null
          updated_at: string | null
        }
Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name: string
          parent_id?: string | null
          slug: string
          sort_order?: number | null
          updated_at?: string | null
        }
  Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name?: string
          parent_id?: string | null
          slug?: string
          sort_order?: number | null
          updated_at?: string | null
        }
 Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
  orders: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          order_type: string
          price: number
          product_id: string
          updated_at: string | null
        }
  Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          order_type: string
          price: number
          product_id: string
          updated_at?: string | null
        }
  Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          order_type?: string
          price?: number
          product_id?: string
          updated_at?: string | null
        }
 Relationships: [
          {
            foreignKeyName: "orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
 products: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          discount_percentage: number | null
          id: string
          image_url: string
          images: Json | null
          is_active: boolean | null
          is_featured: boolean | null
          meta_description: string | null
          meta_title: string | null
          name: string
          original_price: number | null
          price: number
          slug: string
          stock_quantity: number | null
          tags: string[] | null
          updated_at: string | null
        }
 Insert: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          discount_percentage?: number | null
          id?: string
          image_url: string
          images?: Json | null
          is_active?: boolean | null
          is_featured?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name: string
          original_price?: number | null
          price: number
          slug: string
          stock_quantity?: number | null
          tags?: string[] | null
          updated_at?: string | null
        }
 Update: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          discount_percentage?: number | null
          id?: string
          image_url?: string
          images?: Json | null
          is_active?: boolean | null
          is_featured?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          original_price?: number | null
          price?: number
          slug?: string
          stock_quantity?: number | null
          tags?: string[] | null
          updated_at?: string | null
        }
 Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
  Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
