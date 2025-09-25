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






















