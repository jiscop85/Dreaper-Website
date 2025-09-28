
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

