import { Headphones, MessageCircle, Phone, Mail, Clock, HelpCircle }from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();

   const supportChannels = [
    {
      icon: Phone,
      title: "تماس تلفنی",
      description: "۰۲۱-۵۵۵۸۶۷۹۶",
      available: "۹:۰۰ - ۲۱:۰۰",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MessageCircle,
      title: "چت آنلاین",
      description: "پاسخ فوری سوالات",
      available: "۲۴/۷ فعال",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Mail,
      title: "ایمیل پشتیبانی",
      description: "info@parche-majlesi.com",
      available: "پاسخ تا ۲ ساعت",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const faqItems = [
    {
      question: "چگونه سفارش دهم؟",
      answer: "شما می‌توانید از طریق سایت یا تماس تلفنی سفارش خود را ثبت کنید."
    },
    {
      question: "زمان ارسال چقدر است؟",
      answer: "ارسال به تهران ۱-۲ روز و به سایر شهرها ۲-۵ روز کاری می‌باشد."
    },
    {
      question: "آیا امکان بازگشت کالا وجود دارد؟",
      answer: "بله، تا ۷ روز پس از دریافت کالا امکان بازگشت وجود دارد."
    },
    {
      question: "نحوه پرداخت چگونه است؟",
      answer: "پرداخت آنلاین، کارت به کارت و پرداخت در محل امکان‌پذیر است."
    }
  ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Headphones className="w-10 h-10 text-white" />
          </div>
