
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
                <Filter className="w-4 h-4" />
                فیلتر
              </button>
            </div>
          </div>
          
          {/* فیلترهای فعال */}
          {selectedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm text-gray-600 ml-4">فیلترهای فعال:</span>
              {selectedFilters.map((filter) => (
                <div
                  key={filter}
                  className="flex items-center gap-2 bg-fabric-terracotta/10 text-fabric-terracotta px-3 py-1 rounded-full text-sm border border-fabric-terracotta/20"
                >
                  <span>{filter}</span>
                  <button
                    onClick={() => removeFilter(filter)}
                    className="hover:bg-fabric-terracotta hover:text-white rounded-full p-0.5 transition-colors duration-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => setSearchParams({})}
                className="text-sm text-gray-500 hover:text-fabric-terracotta transition-colors duration-200 underline"
              >
                پاک کردن همه فیلترها
__ باری دیگر
import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFilteredProducts } from '@/hooks/useFilteredProducts';
import ProductCard from '@/components/ProductCard';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Filter, Grid, List, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'price-low' | 'price-high' | 'discount'>('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 12;

  // دریافت فیلترهای انتخاب شده از URL
  const selectedFilters = searchParams.get('filters')?.split(',') || [];

  const { data: products, isLoading, error } = useFilteredProducts({
    categorySlug,
    filters: selectedFilters,
    sortBy,
    page,
    pageSize,
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

  const clearAllFilters = () => {
    setSearchParams({});
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

      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* پنل فیلتر دسکتاپ */}
        <aside className="hidden md:block col-span-1">
          <div className="bg-white shadow rounded-2xl p-4 sticky top-24">
            <h2 className="text-lg font-semibold mb-4">فیلترها</h2>
            {/* مثال فیلتر */}
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">رنگ</h3>
                <div className="flex flex-wrap gap-2">
                  {['قرمز', 'آبی', 'سبز', 'مشکی'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSearchParams({ filters: [...selectedFilters, color].join(',') })}
                      className={`px-3 py-1 rounded-full border text-sm ${
                        selectedFilters.includes(color)
                          ? 'bg-fabric-terracotta text-white border-fabric-terracotta'
                          : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              {/* فیلترهای بیشتر... */}
            </div>
          </div>
        </aside>

        {/* محتوای اصلی */}
        <section className="col-span-3">
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
                  onClick={() => setShowFilters(true)}
                  className="md:hidden flex items-center gap-2 bg-fabric-terracotta text-white px-4 py-2 rounded-lg hover:bg-fabric-navy transition-colors duration-300"
                >
                  <Filter className="w-4 h-4" />
                  فیلتر
                </button>
              </div>
            </div>

            {/* فیلترهای فعال */}
            {selectedFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-gray-600 ml-4">فیلترهای فعال:</span>
                {selectedFilters.map((filter) => (
                  <div
                    key={filter}
                    className="flex items-center gap-2 bg-fabric-terracotta/10 text-fabric-terracotta px-3 py-1 rounded-full text-sm border border-fabric-terracotta/20"
                  >
                    <span>{filter}</span>
                    <button
                      onClick={() => removeFilter(filter)}
                      className="hover:bg-fabric-terracotta hover:text-white rounded-full p-0.5 transition-colors duration-200"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-gray-500 hover:text-fabric-terracotta transition-colors duration-200 underline"
                >
                  پاک کردن همه
                </button>
              </div>
            )}
          </div>

          {/* نمایش محصولات */}
          <div
            className={`grid gap-6 ${
viewMode === 'grid'
                ? 'grid-cols-1          
sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1'
            }`}
          >
            {isLoading ? (
              <div className="col-span-full text-center py-16 text-gray-600">

                در حال بارگذاری محصولات...
              </div>
            ) : products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-gray-600">
                محصولی یافت نشد. شاید موارد زیر برای شما جالب باشد:
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* پیشنهاد محصولات جایگزین */}
                  {[1,2,3,4].map((i) => (
                                  <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-4 py-2 rounded-lg border ${
                  p === page
                    ? 'bg-fabric-terracotta text-white border-fabric-terracotta'
                    : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </section>
      </main>
{/* فیلتر موبایل */}
    
  <AnimatePresence>



      
































































































































