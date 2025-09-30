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
