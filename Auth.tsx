
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-fabric-cream via-white to-fabric-pearl relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fabric-terracotta/5 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-fabric-gold/5 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-fabric-emerald/5 rounded-full animate-float-slow opacity-60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="absolute top-4 right-4 text-fabric-navy hover:text-fabric-terracotta"
          >
            <ArrowLeft className="w-4 h-4 ml-2" />
            بازگشت به فروشگاه
          </Button>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-fabric-navy via-fabric-terracotta to-fabric-gold bg-clip-text text-transparent">
                پارچه‌فروشی مجلسی
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-fabric-terracotta to-fabric-gold mx-auto rounded-full"></div>
          </div>

          <h2 className="text-2xl font-semibold text-fabric-navy mb-2">
            {isLogin ? 'ورود به حساب کاربری' : 'ساخت حساب جدید'}
          </h2>
          <p className="text-gray-600">
            {isLogin 
              ? 'به پارچه‌فروشی مجلسی خوش آمدید' 
              : 'عضو خانواده بزرگ ما شوید'
            }
          </p>
        </div>

        {/* Main Auth Card */}
        <div className="max-w-md mx-auto">
          <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-fabric-terracotta to-fabric-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-fabric-terracotta to-fabric-gold rounded-full"></div>
                </div>
              </div>
              <CardTitle className="text-xl text-fabric-navy">
                {isLogin ? 'ورود' : 'عضویت'}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {isLogin 
                  ? 'لطفاً اطلاعات خود را وارد کنید'
                  : 'برای ایجاد حساب کاربری فرم زیر را تکمیل کنید'
                }
              </CardDescription>
            </CardHeader>

            <CardContent>
              {isLogin ? <LoginForm /> : <SignupForm />}

              {/* Toggle between login and signup */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">






























































