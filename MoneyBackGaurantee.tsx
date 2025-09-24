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
          <RefreshCw className="w-16 h-16 text-fabric-terracotta mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-fabric-navy mb-4">
            نیاز به بازگشت کالا دارید؟
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            تیم پشتیبانی ما آماده کمک به شما برای فرآیند بازگشت کالا است
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-fabric-terracotta to-fabric-gold text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300">
              درخواست بازگشت آنلاین
            </Button>
            <Button
              variant="outline"
              className="border-fabric-navy text-fabric-navy hover:bg-fabric-navy hover:text-white px-8 py-3 rounded-xl transition-all duration-300"
            >
              تماس با پشتیبانی
            </Button>
          </div>
        {/* Guarantee Promise */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <Shield className="w-16 h-16 text-fabric-terracotta mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-fabric-navy mb-4">
              قول ما به شما

            </h3>
            <p className="text-gray-600 mb-6">
              رضایت شما برای ما بسیار مهم است. اگر از خرید خود راضی نیستید، 
              بدون هیچ سوال اضافی وجه شما را بازمی‌گردانیم.
            </p>
            <Button
              onClick={() => navigate('/')}
            >
              خرید با اطمینان
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyBackGuarantee;











































































































