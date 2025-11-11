port { Product } from '@/types/database';

export const newFabricProducts: Product[] = [
  {
  id: 'fabric-1-embroidery-colorful',
    name: 'پارچه سوزندوزی رنگارنگ - طرح هندسی',
    slug: 'embroidery-colorful-geometric',
    description: 'پارچه سوزندوزی با طرح‌های هندسی زیبا و رنگ‌های متنوع، مناسب برای انواع لباس‌های مجلسی و روزمره',
    price: 450000,
    original_price: 520000,
    discount_percentage: 15,
    image_url: '/lovable-uploads/51be9dcf-bbd1-4739-8437-1c34c7a38be6.png',
    images: [
      '/lovable-uploads/51be9dcf-bbd1-4739-8437-1c34c7a38be6.png',
      '/lovable-uploads/f78abb12-a7da-42b8-be99-bce00c0ee1ed.png'
    ],
    category_id: 'formal-evening-fabrics',
    stock_quantity: 115,
    is_featured: true,
    is_active: true,
    tags: ['سوزندوزی', 'مجلسی', 'هندسی', 'رنگارنگ'],
    meta_title: 'پارچه سوزندوزی رنگارنگ با طرح هندسی',
    meta_description: 'پارچه سوزندوزی با کیفیت عالی، عرض ۱.۳۵ متر، مناسب برای مانتو، کت، دامن و خرجکار',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
{
    id: 'fabric-2-embroidery-colorful-2',
    name: 'پارچه سوزندوزی گل‌دار - طرح سنتی',
    slug: 'embroidery-floral-traditional',
    description: 'پارچه سوزندوزی با طرح‌های گل‌دار سنتی و دوخت دستی، ایده‌آل برای لباس‌های خاص',
    price: 480000,
    original_price: 550000,
    discount_percentage: 12,
    image_url: '/lovable-uploads/f78abb12-a7da-42b8-be99-bce00c0ee1ed.png',
  
