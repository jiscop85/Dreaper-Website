import { Award, CheckCircle, Star, Shield, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const QualityAssurance = () => {
  const navigate = useNavigate();

    const qualityFeatures = [
    {
      icon: Award,
      title: "استاندارد ملی ایران",
      description: "تمام محصولات ما دارای گواهی استاندارد ملی ایران هستند",
      badge: "گواهی شده"
    },
