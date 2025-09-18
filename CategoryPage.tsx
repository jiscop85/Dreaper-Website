
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



















