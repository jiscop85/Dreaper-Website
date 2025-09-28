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
