import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, Mail, Phone, Lock, Loader2, User, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import SocialAuthButtons from './SocialAuthButtons';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signupMethod, setSignupMethod] = useState('email');
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    otp: '',
    agreedToTerms: false
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (field === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 25) return 'bg-red-500';
    if (passwordStrength < 50) return 'bg-orange-500';
    if (passwordStrength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return 'ضعیف';
    if (passwordStrength < 50) return 'متوسط';
    if (passwordStrength < 75) return 'خوب';
    return 'عالی';
  };

  const handleSendOtp = async () => {
    if (!formData.phone) {
      toast.error('لطفاً شماره موبایل را وارد کنید.');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setOtpSent(true);
      setOtpTimer(60);
      toast.success('کد تأیید به شماره شما ارسال شد.');

      // Start countdown
      const interval = setInterval(() => {
        setOtpTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      toast.error('خطا در ارسال کد تأیید.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      toast.error('لطفاً شرایط و قوانین را پذیرفته و سپس ادامه دهید.');
      return;
    }

    if (signupMethod === 'email' && formData.password !== formData.confirmPassword) {
      toast.error('رمز عبور و تکرار آن یکسان نیستند.');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.success('حساب کاربری با موفقیت ایجاد شد!');
      navigate('/');
    } catch (error) {
      toast.error('خطا در ایجاد حساب کاربری.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-fabric-navy font-medium">
            نام
          </Label>
          <div className="relative">
            <Input
              id="firstName"
              type="text"
              placeholder="نام"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="pr-10 border-fabric-sand/30 focus:border-fabric-terracotta"
              required
            />
            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-fabric-navy font-medium">
            نام خانوادگی
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="نام خانوادگی"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="border-fabric-sand/30 focus:border-fabric-terracotta"
            required
          />
        </div>
      </div>

      {/* Signup Method Selection */}
      <Tabs value={signupMethod} onValueChange={setSignupMethod} className="w-full">
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
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="pr-10 border-fabric-sand/30 focus:border-fabric-terracotta"
                required
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Password Fields */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-fabric-navy font-medium">
              رمز عبور
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="رمز عبور خود را وارد کنید"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="pr-10 pl-10 border-fabric-sand/30 focus:border-fabric-terracotta"
                required
              />
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute left-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-400" />
                )}
              </Button>
            </div>

            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">قدرت رمز عبور:</span>
                  <span className={`font-medium ${passwordStrength >= 75 ? 'text-green-600' : passwordStrength >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {getPasswordStrengthText()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                    style={{ width: `${passwordStrength}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-fabric-navy font-medium">










































































































































































































