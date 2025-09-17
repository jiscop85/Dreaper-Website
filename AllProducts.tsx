import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AllProducts = () => {
  const { data: products, isLoading } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products?.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || product.category_id === selectedCategory;

    return matchesSearch && matchesCategory;
  }) || [];

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'discount':
        return (b.discount_percentage || 0) - (a.discount_percentage || 0);
      case 'featured':
        return b.is_featured ? 1 : -1;
      case 'newest':
      default:
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-fabric-navy border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-lg text-gray-600 font-vazir">در حال بارگذاری محصولات...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl font-vazir">
      <TopBar />
      <Header />
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fabric-navy via-fabric-terracotta to-fabric-gold text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-fabric-navy/90 via-fabric-terracotta/80 to-fabric-gold/90"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full animate-float-slow"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                ✨ همه محصولات ✨
              </span>
            </h1>
            <p className="text-xl text-fabric-cream max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              کالکشن کاملی از بهترین پارچه‌های ایرانی با کیفیت بالا و قیمت مناسب
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm">🧵 پارچه‌های ژاکارد</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm">🧵 پارچه‌های ژاکارد</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm">✨ سوزندوزی و نگین‌کاری</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm">🎨 طرح‌های متنوع</span>
              </div>
            </div>
          </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-fabric-pearl/30">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="جستجو در محصولات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 bg-white/50 border-fabric-pearl/50 focus:border-fabric-navy"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-white/50 border-fabric-pearl/50">
                <SelectValue placeholder="انتخاب دسته‌بندی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه دسته‌ها</SelectItem>
                <SelectItem value="formal-evening-fabrics">پارچه‌های مجلسی</SelectItem>
                <SelectItem value="autumn-winter-fabrics">پارچه‌های پاییز و زمستان</SelectItem>
                <SelectItem value="spring-summer-fabrics">پارچه‌های بهار و تابستان</SelectItem>
                <SelectItem value="casual-home-fabrics">پارچه‌های روزمره</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 bg-white/50 border-fabric-pearl/50">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">جدیدترین</SelectItem>
                <SelectItem value="featured">ویژه</SelectItem>
                <SelectItem value="price-low">ارزان‌ترین</SelectItem>
                <SelectItem value="price-high">گران‌ترین</SelectItem>
                <SelectItem value="discount">بیشترین تخفیف</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="bg-fabric-navy hover:bg-fabric-terracotta"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="bg-fabric-navy hover:bg-fabric-terracotta"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Stats */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-gradient-to-r from-fabric-navy to-fabric-terracotta text-white px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold">{sortedProducts.length}</span> محصول یافت شد
            </div>
            <div className="bg-gradient-to-r from-fabric-terracotta to-fabric-gold text-white px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold">{sortedProducts.filter(p => p.is_featured).length}</span> محصول ویژه
            </div>
            <div className="bg-gradient-to-r from-fabric-gold to-fabric-emerald text-white px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold">{sortedProducts.filter(p => p.discount_percentage).length}</span> محصول تخفیف‌دار
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' 
            : 'flex flex-col gap-6'
          }
        `}>
          {sortedProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard 
                product={product} 
                className={viewMode === 'list' ? 'flex flex-row h-48' : ''}
              />
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto shadow-lg">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">محصولی یافت نشد</h3>
              <p className="text-gray-500 mb-4">لطفاً کلمات کلیدی دیگری امتحان کنید</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-fabric-navy hover:bg-fabric-terracotta"
              >
                نمایش همه محصولات
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>





























































































































































































