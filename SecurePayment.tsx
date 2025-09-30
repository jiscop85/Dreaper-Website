
import { Shield, CreditCard, Lock, CheckCircle, Zap, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SecurePayment = () => {
  const navigate = useNavigate();

    const paymentMethods = [
    {
      icon: "💳",
      title: "کارت‌های بانکی",
      description: "تمام کارت‌های عضو شتاب",
      features: ["ویزا", "مسترکارت", "شتاب"]
    },
    {
      icon: "📱",
      title: "کیف پول دیجیتال",
      description: "پرداخت سریع موبایلی",
      features: ["زرین‌پال", "پی", "ایده‌پرداخت"]
    },
    {
      icon: "🏦",
      title: "درگاه بانکی",
      description: "مستقیم از حساب بانکی",
      features: ["ملی", "پارسیان", "پاسارگاد"]
    }
  ];

    const securityFeatures = [
    {
      
      icon: Shield,
      title: "رمزنگاری SSL ۲۵۶ بیتی",
      description: "حفاظت کامل از اطلاعات شما",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Lock,
      title: "تایید دو مرحله‌ای",
      description: "امنیت اضافی برای تراکنش‌ها",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: CheckCircle,
      title: "تضمین بازپرداخت",
      description: "حفاظت ۱۰۰٪ خریدهای شما",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <CreditCard className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">پرداخت امن</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">خرید با اطمینان خاطر</p>
          <Button
            onClick={() => navigate('/')}
            variant="secondary"
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30"
          >
            بازگشت به فروشگاه
          </Button>
        </div>
      </div>

      {/* Security Features */}
      <div className="container mx-auto px-4 -mt-16 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                 </div>
                  <h3 className="font-bold text-fabric-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        {/* Payment Methods */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fabric-navy mb-4">
              روش‌های پرداخت
            </h2>
            <p className="text-gray-600 text-lg">
              انتخاب روش پرداخت مناسب شما
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <CardTitle className="text-fabric-navy">{method.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {method.features.map((feature, idx) => (
