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



















































