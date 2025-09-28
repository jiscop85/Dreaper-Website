
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
