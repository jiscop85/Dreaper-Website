
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













































