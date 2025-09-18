
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























