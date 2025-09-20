
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

##It is my new eddition



import React, { useState } from 'react';
import { useParams, useSearchParams } from 
'react-router-dom';
import { useFilteredProducts } from '@/hooks/useFilteredProducts';
import ProductCard from 
'@/components/ProductCard';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Filter, Grid, List, SortAsc, SortDesc, X } from 'lucide-react';

const CategoryPage = () => {
const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = 
useState<'grid' | 'list'>('grid');
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
    return categoryNames[slug || ''] || 
  'محصولات';
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
      <div className="container mx-auto px-4 py-8">
        {/* Title + Sort/Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">{getCategoryName(categorySlug)}</h1>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
            >
              <List className="w-5 h-5" />
            </button>

            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
              className="border rounded px-2 py-1"
            >
              <option value="newest">جدیدترین</option>
              <option value="popular">محبوب‌ترین</option>
              <option value="price-low">ارزان‌ترین</option>
              <option value="price-high">گران‌ترین</option>
              <option value="discount">بیشترین تخفیف</option>
            </select>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 border rounded flex items-center gap-1"
            >
              <Filter className="w-5 h-5" />
              فیلترها
            </button>
          </div>
        </div>

        {/* Active Filters */}
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedFilters.map((f) => (
              <span key={f} className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                {f}
                <button
                  onClick={() => removeFilter(f)}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600">در حال بارگذاری...</p>
          </div>
        )}

        {/* Products List */}
        {!isLoading && products?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600">محصولی یافت نشد.</p>
          </div>
        )}

        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'
              : 'flex flex-col gap-6'
          }
        >
         





  














































