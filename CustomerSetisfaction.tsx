
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
    { icon: TrendingUp, number: "۹۵٪", label: "خرید مجدد", color: "from-green-500 to-emerald-500" }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">رضایت مشتریان</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">خوشحالی شما، افتخار ماست</p>
          <Button
            onClick={() => navigate('/')}
            variant="secondary"
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30"
          >
            بازگشت به فروشگاه
          </Button>
        </div>
      </div>

     {/* Statistics Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {satisfactionStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-fabric-navy mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
       <div className="container mx-auto px-4 pb-16">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fabric-navy mb-4">
              چرا مشتریان ما راضی هستند؟
            </h2>
            <p className="text-gray-600 text-lg">
              ویژگی‌هایی که ما را متمایز می‌کند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "کیفیت بی‌نظیر",
                description: "بهترین مواد اولیه و فرآیند تولید استاندارد"
              },
              {
