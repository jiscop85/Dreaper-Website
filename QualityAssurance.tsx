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
