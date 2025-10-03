
import { Heart, Star, Users, MessageCircle, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CustomerSatisfaction = () => {
  const navigate = useNavigate();

    const testimonials = [
    {
      name: "فاطمه احمدی",
      rating: 5,
      comment: "کیفیت پارچه‌ها فوق‌العاده است! خدمات پس از فروش هم عالی. حتماً دوباره خرید می‌کنم.",
      product: "پارچه کرپ چاپی",
      date: "۱۵ آذر ۱۴۰۳"
    },
    {
      name: "محمد رضایی",
      rating: 5,
      comment: "ارسال سریع و بسته‌بندی عالی. دقیقاً همان چیزی بود که انتظار داشتم.",
      product: "پارچه ابریشمی",
      date: "۱۰ آذر ۱۴۰۳"
    },
    {
      name: "زهرا کریمی",
      rating: 5,
      comment: "قیمت‌ها منصفانه و کیفیت بی‌نظیر. از خدمات مشاوره رایگان هم بسیار راضی هستم.",
      product: "پارچه مجلسی",
      date: "۸ آذر ۱۴۰۳"
    }
  ];

  const satisfactionStats = [
    { icon: Heart, number: "۹۸٪", label: "رضایت مشتریان", color: "from-red-500 to-pink-500" },
    { icon: Users, number: "+۱۰,۰۰۰", label: "مشتری راضی", color: "from-blue-500 to-purple-500" },
    { icon: Star, number: "۴.۹", label: "امتیاز کیفیت", color: "from-yellow-500 to-orange-500" },
