
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
