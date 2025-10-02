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
