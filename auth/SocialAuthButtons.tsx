
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const SocialAuthButtons = () => {
  const handleGoogleAuth = () => {
    toast.info('ورود با گوگل در حال پیاده‌سازی است.');
  };

    const handleAppleAuth = () => {
    toast.info('ورود با اپل در حال پیاده‌سازی است.');
  };

    return (
    <div className="space-y-3">
      <Button
        type="button"
        variant="outline"
        onClick={handleGoogleAuth}
