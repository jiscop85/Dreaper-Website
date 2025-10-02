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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">پشتیبانی ۲۴/۷</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">همیشه در کنار شما هستیم</p>
          <Button
            onClick={() => navigate('/')}
            variant="secondary"
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30"
          >
            بازگشت به فروشگاه
          </Button>
        </div>
      </div>

      {/* Support Channels */}
      <div className="container mx-auto px-4 -mt-16 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportChannels.map((channel, index) => {
            const IconComponent = channel.icon;
            return (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-fabric-navy mb-2">{channel.title}</h3>
                  <p className="text-gray-700 mb-2">{channel.description}</p>
                  <div className="flex items-center justify-center text-sm text-fabric-terracotta">
                    <Clock className="w-4 h-4 ml-1" />
                    {channel.available}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

