
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
        className="w-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 py-3 rounded-xl transition-all duration-300"
      >
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 ml-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
