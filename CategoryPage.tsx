
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFilteredProducts } from '@/hooks/useFilteredProducts';
import ProductCard from '@/components/ProductCard';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Filter, Grid, List, SortAsc, SortDesc, X } from 'lucide-react';

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'price-low' | 'price-high' | 'discount'>('newest');
  const [showFilters, setShowFilters] = useState(false);

  // دریافت فیلترهای انتخاب شده از URL
  const selectedFilters = searchParams.get('filters')?.split(',') || [];
  
  const { data: products, isLoading, error } = useFilteredProducts({
    categorySlug,
    filters: selectedFilters,
    sortBy
  });

  // نام دسته‌بندی برای نمایش
  const getCategoryName = (slug?: string) => {
    const categoryNames: Record<string, string> = {
      'spring-summer-fabrics': 'پارچه‌های بهاره و تابستانه',
      'autumn-winter-fabrics': 'پارچه‌های پاییزی و زمستانه',
      'formal-evening-fabrics': 'پارچه‌های مجلسی و شب',
      'casual-home-fabrics': 'پارچه‌های روزمره و خانگی',
      'children-baby-fabrics': 'پارچه‌های کودک و نوزاد',
      'furniture-decor-fabrics': 'پارچه‌های مبلی و دکوراسیون',
      'sewing-supplies': 'لوازم خیاطی',
      'new-arrivals': 'جدیدترین محصولات',
      'bestsellers': 'پرطرفدارترین محصولات',
      'on-sale': 'محصولات تخفیف‌دار'
    };
    return categoryNames[slug || ''] || 'محصولات';
  };

  const handleSortChange = (newSort: typeof sortBy) => {
    setSortBy(newSort);
  };

  const removeFilter = (filterToRemove: string) => {
    const newFilters = selectedFilters.filter(f => f !== filterToRemove);
    if (newFilters.length > 0) {
      setSearchParams({ filters: newFilters.join(',') });
    } else {
      setSearchParams({});
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl font-vazir">
        <TopBar />
        <Header />
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">خطا در بارگذاری محصولات</h1>
          <p className="text-gray-600">لطفاً دوباره تلاش کنید.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl font-vazir">
      <TopBar />
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* هدر صفحه */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-fabric-navy mb-2">
                {getCategoryName(categorySlug)}
              </h1>
              <p className="text-gray-600">
                {isLoading ? 'در حال بارگذاری...' : `${products?.length || 0} محصول یافت شد`}
              </p>
            </div>
            {/* کنترل‌های نمایش */}
            <div className="flex items-center gap-4">
              {/* انتخاب نوع نمایش */}
              <div className="flex items-center border border-gray-300 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-fabric-terracotta text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button

                    onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-fabric-terracotta text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-fabric-terracotta text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* مرتب‌سازی */}
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-fabric-terracotta"
              >
                <option value="newest">جدیدترین</option>
                <option value="popular">محبوب‌ترین</option>
                <option value="price-low">ارزان‌ترین</option>
                <option value="price-high">گران‌ترین</option>
                <option value="discount">بیشترین تخفیف</option>
              </select>

              {/* دکمه فیلتر موبایل */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 bg-fabric-terracotta text-white px-4 py-2 rounded-lg hover:bg-fabric-navy transition-colors duration-300"
              >












































































































