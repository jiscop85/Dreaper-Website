import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FabricCategoriesSlider from '@/components/FabricCategoriesSlider';
import FabricGallerySection from '@/components/FabricGallerySection';
import ProductSection from '@/components/ProductSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import { useFeaturedProducts, useProductsByCategory } from '@/hooks/useProducts';

const Index = () => {
  const { data: featuredProducts, isLoading: featuredLoading } = useFeaturedProducts();
 const { data: embroideryFabrics, isLoading: embroideryLoading } = useProductsByCategory('formal-evening-fabrics');
const { data: jacquardFabrics, isLoading: jacquardLoading } = useProductsByCategory('autumn-winter-fabrics');
 const { data: springFabrics, isLoading: springLoading } = useProductsByCategory('spring-summer-fabrics');

return (
  <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl font-vazir relative overflow-hidden">
 {/* المان‌های پس‌زمینه انیمیشن */}
<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fabric-terracotta/5 rounded-full animate-float opacity-60"></div>
<div className="absolute top-3/4 right-1/4 w-48 h-48 bg-fabric-gold/5 rounded-full animate-float-delayed opacity-60"></div>
 <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-fabric-emerald/5 rounded-full animate-float-slow opacity-60"></div>
</div>

 <div className="relative z-10">
 <Header />
  <HeroSection />
        <main className="space-y-16 py-8">
          <FabricCategoriesSlider />
          <FabricGallerySection />
          <ProductSection 
            title="✨ پارچه‌های ویژه و منحصر به فرد" 
            products={featuredProducts || []} 
            isLoading={featuredLoading}
 />
          <ProductSection 
title="🎨 پارچه‌های سوزندوزی و مجلسی"








