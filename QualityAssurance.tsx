import { Award, CheckCircle, Star, Shield, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const QualityAssurance = () => {
  const navigate = useNavigate();

    const qualityFeatures = [
    {
      icon: Award,
      title: "استاندارد ملی ایران",
      description: "تمام محصولات ما دارای گواهی استاندارد ملی ایران هستند",
      badge: "گواهی شده"
    },
    {
      icon: Shield,
      title: "تست کیفیت ۱۰۰٪",
      description: "هر پارچه قبل از ارسال تحت بازرسی دقیق قرار می‌گیرد",
      badge: "تضمینی"
    },
    {
      icon: Star,
      title: "مواد اولیه درجه یک",
      description: "استفاده از بهترین مواد اولیه وارداتی و داخلی",
      badge: "پریمیوم"
    },
    {
      icon: Zap,
      title: "دوام و ماندگاری",
      description: "پارچه‌های ما برای سال‌ها استفاده کیفیت خود را حفظ می‌کنند",
      badge: "بادوام"
    }
  ];

  const certificates = [
    { name: "ISO 9001", year: "2023", type: "مدیریت کیفیت" },
    { name: "استاندارد ۱۱۷۱", year: "2023", type: "پارچه‌های نساجی" },
    { name: "CE Mark", year: "2023", type: "استاندارد اروپا" },
    { name: "گواهی سلامت", year: "2023", type: "وزارت بهداشت" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-fabric-navy via-fabric-terracotta to-fabric-gold">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">گواهی کیفیت محصولات</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">تضمین کیفیت، اعتماد شما</p>
          <Button
            onClick={() => navigate('/')}
            variant="secondary"
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30"
          >
            بازگشت به فروشگاه
          </Button>
        </div>
      </div>

            {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Quality Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fabric-navy mb-4">
              ویژگی‌های کیفیت ما
            </h2>
            <p className="text-gray-600 text-lg">
              چرا پارچه‌فروشی مجلسی را انتخاب کنید؟
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-fabric-terracotta to-fabric-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="inline-block bg-fabric-gold/20 text-fabric-navy px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {feature.badge}
                    </div>
                    <CardTitle className="text-fabric-navy">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

       {/* Certificates Section */}
       <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fabric-navy mb-4">
              گواهینامه‌ها و مجوزها
            </h2>
            <p className="text-gray-600 text-lg">
              مجوزها و گواهینامه‌های معتبر ما
            </p>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-fabric-cream/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-fabric-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-fabric-navy mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{cert.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Quality Process */}
        <div className="bg-gradient-to-r from-fabric-navy/5 via-fabric-terracotta/5 to-fabric-gold/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fabric-navy mb-4">
              فرآیند کنترل کیفیت
            </h2>
            <p className="text-gray-600 text-lg">
              ۶ مرحله کنترل کیفیت برای اطمینان از بهترین محصول
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "۱", title: "انتخاب مواد اولیه", desc: "انتخاب دقیق بهترین مواد اولیه" },
              { step: "۲", title: "بازرسی ورودی", desc: "کنترل کیفیت در زمان ورود کالا" },
              { step: "۳", title: "تست کیفیت", desc: "آزمایش‌های مقاومت و دوام" },
              { step: "۴", title: "کنترل رنگ", desc: "بررسی ثبات رنگ و کیفیت چاپ" },
              { step: "۵", title: "بسته‌بندی", desc: "بسته‌بندی استاندارد و مقاوم" },
              { step: "۶", title: "تحویل نهایی", desc: "تحویل با تضمین کیفیت" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-fabric-terracotta to-fabric-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {process.step}
                </div>
