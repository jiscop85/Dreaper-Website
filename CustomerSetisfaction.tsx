
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
