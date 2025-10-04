import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, Mail, Phone, Lock, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import SocialAuthButtons from './SocialAuthButtons';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.success('ورود موفقیت‌آمیز بود!');
      navigate('/');
    } catch (error) {
      toast.error('خطا در ورود. لطفاً مجدداً تلاش کنید.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    toast.info('لینک بازیابی رمز عبور به ایمیل/شماره شما ارسال شد.');
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      {/* Login Method Selection */}
      <Tabs value={loginMethod} onValueChange={setLoginMethod} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-fabric-sand/20">
          <TabsTrigger 
            value="email" 
            className="data-[state=active]:bg-white data-[state=active]:text-fabric-navy"
          >
            <Mail className="w-4 h-4 ml-2" />
            ایمیل
          </TabsTrigger>
          <TabsTrigger 
            value="phone"
            className="data-[state=active]:bg-white data-[state=active]:text-fabric-navy"
          >
            <Phone className="w-4 h-4 ml-2" />
            موبایل
          </TabsTrigger>
        </TabsList>

        <TabsContent value="email" className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-fabric-navy font-medium">
              آدرس ایمیل
            </Label>
            <div className="relative">
              <Input
                id="email"



























































