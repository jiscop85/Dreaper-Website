import { RotateCcw, Shield, Clock, CheckCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const MoneyBackGuarantee = () => {
  const navigate = useNavigate();


  const guaranteeFeatures = [
    {
      icon: Clock,
      title: "۷ روز فرصت",
      description: "تا ۷ روز پس از دریافت",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: RotateCcw,
      title: "بازگشت آسان",
      description: "فرآیند ساده و سریع",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "تضمین ۱۰۰٪",
      description: "بازپرداخت کامل وجه",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const returnSteps = [
    {
      step: "۱",
      title: "درخواست بازگشت",
      description: "تماس با پشتیبانی یا فرم آنلاین",
      icon: "📞"
    },
    {
      step: "۲", 
      title: "تأیید درخواست",




























