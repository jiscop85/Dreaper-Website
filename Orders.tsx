import React, { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useOrders, useCreateOrder } from '@/hooks/useOrders';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatPrice } from '@/utils/priceFormatter';
import { toast } from 'sonner';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Orders = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<string>('');
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: orders, isLoading: ordersLoading } = useOrders();
  const createOrderMutation = useCreateOrder();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedProductId) {
      alert('لطفاً محصول را انتخاب کنید');
      return;
    }

    if (!price || isNaN(Number(price))) {
      alert('لطفاً قیمت معتبر وارد کنید');
      return;
    }

    const priceNumber = parseFloat(price);

    if (priceNumber <= 0) {
      alert('قیمت باید بیشتر از صفر باشد');
      return;
    }

    if (priceNumber > 99999999) {
      alert('قیمت نمی‌تواند بیشتر از 99,999,999 تومان باشد');
      return;
    }

    try {
      await createOrderMutation.mutateAsync({
        product_id: selectedProductId,
        description: description.trim() || undefined,
        price: priceNumber,
        order_type: orderType,
      });

      // Reset form
      setSelectedProductId('');
      setDescription('');
      setPrice('');
      setOrderType('buy');
    } catch (error) {
      console.error('Error creating order:', error);
      // Error is handled by the mutation's onError callback
    }
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);

    try {
      const analysisData = {
        product_id: selectedProductId,
        description: description.trim(),
        price: price ? parseFloat(price) : null,
        order_type: orderType,
        timestamp: new Date().toISOString()
      };

      console.log('Sending analysis request with data:', analysisData);

      // تغییر method به GET و ارسال داده‌ها به عنوان query parameters
      const params = new URLSearchParams({
        product_id: selectedProductId || '',
        description: description.trim() || '',
        price: price || '',
        order_type: orderType,
        timestamp: new Date().toISOString()
      });

      const response = await fetch(`https://arashjavadifar.app.n8n.cloud/webhook-test/49ff43b9-40d4-4127-aa25-3993b1c3486e?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Analysis response:', result);

      toast.success('آنالیز با موفقیت انجام شد');
    } catch (error) {
      console.error('Error during analysis:', error);
      toast.error('خطا در انجام آنالیز');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getProductName = (productId: string) => {
    const product = products?.find(p => p.id === productId);
    return product ? product.name : 'محصول نامشخص';
};

  return (
    <div className="min-h-screen bg-white font-vazir">
      <TopBar />
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">ثبت سفارش خرید/فروش</h1>

          {/* Order Form */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Selection */}
              <div>
                <Label htmlFor="product-select" className="text-sm font-medium text-gray-700 mb-2 block">
                  انتخاب محصول *
                </Label>
                {productsLoading ? (
                  <div className="text-gray-500">در حال بارگذاری محصولات...</div>
                ) : (
                  <Select value={selectedProductId} onValueChange={setSelectedProductId}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="محصول مورد نظر را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      {products?.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2 block">
                  توضیحات
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="توضیحات درباره محصول را وارد کنید..."
                  className="w-full"
                  maxLength={500}
                />





























































































































