
import { RotateCcw, Shield, Clock, CheckCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const MoneyBackGuarantee = () => {
  const navigate = useNavigate();

  const guaranteeFeatures = [
    {
      icon: Clock,
      title: "۷ روز فرصت",
      description: "تا ۷ روز پس از دریافت",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: RotateCcw,
      title: "بازگشت آسان",
      description: "فرآیند ساده و سریع",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "تضمین ۱۰۰٪",
      description: "بازپرداخت کامل وجه",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const returnSteps = [
    {
      step: "۱",
      title: "درخواست بازگشت",
      description: "تماس با پشتیبانی یا فرم آنلاین",
      icon: "📞"
    },
    {
      step: "۲", 
      title: "تأیید درخواست",
      description: "بررسی و تأیید شرایط بازگشت",
      icon: "✅"
    },
    {
      step: "۳",
      title: "ارسال کالا",
      description: "ارسال کالا به آدرس مشخص شده",
      icon: "📦"
    },
    {
      step: "۴",
      title: "بررسی کالا",
      description: "کنترل سلامت و شرایط کالا",
      icon: "🔍"
    },
    {
      step: "۵",
      title: "بازپرداخت",
      description: "واریز وجه به حساب شما",
      icon: "💰"
    }
  ];

return (
    <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <RotateCcw className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">تضمین بازگشت وجه</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">خرید بدون نگرانی</p>
          <Button
            onClick={() => navigate('/')}
            variant="secondary"
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30"
          >
            بازگشت به فروشگاه
          </Button>
        </div>
      </div>

      {/* Guarantee Features */}
      <div className="container mx-auto px-4 -mt-16 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guaranteeFeatures.map((feature, index) => {
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
        {/* Return Conditions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fabric-navy mb-4">
              شرایط بازگشت کالا
            </h2>
            <p className="text-gray-600 text-lg">
              شرایط و ضوابط بازگشت محصولات
            </p>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-green-50 border-green-200 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 ml-2" />
                  موارد قابل بازگشت
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 ml-2" />
                    کالای سالم و دست‌نخورده
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 ml-2" />
                    بسته‌بندی اصلی محصول
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 ml-2" />
                    همراه فاکتور خرید
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 ml-2" />
                    تا ۷ روز پس از دریافت
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 ml-2" />
                    عدم رضایت از کیفیت
                  </li>
                </ul>
              </CardContent>
            </Card>

             <Card className="bg-red-50 border-red-200 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <ArrowLeft className="w-5 h-5 ml-2" />
                  موارد غیرقابل بازگشت
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-center">
                    <ArrowLeft className="w-4 h-4 ml-2" />
                    کالای استفاده شده
                  </li>
                  <li className="flex items-center">
                    <ArrowLeft className="w-4 h-4 ml-2" />
                    آسیب عمدی به محصول
                  </li>
                  <li className="flex items-center">
                    <ArrowLeft className="w-4 h-4 ml-2" />
                    کالای بدون بسته‌بندی
                  </li>
                  <li className="flex items-center">
                    <ArrowLeft className="w-4 h-4 ml-2" />
                    بیش از ۷ روز از خرید
                  </li>
                  <li className="flex items-center">
                    <ArrowLeft className="w-4 h-4 ml-2" />
                    محصولات سفارشی
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Return Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fabric-navy mb-4">
              فرآیند بازگشت کالا
            </h2>
            <p className="text-gray-600 text-lg">
              مراحل ساده بازگشت و دریافت وجه
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {returnSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-fabric-terracotta to-fabric-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-bold text-fabric-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
