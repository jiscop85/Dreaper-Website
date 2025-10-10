
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
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          ادامه با گوگل
        </div>
      </Button>

            <Button
        type="button"
        variant="outline"
        onClick={handleAppleAuth}
        className="w-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 py-3 rounded-xl transition-all duration-300"
      >
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 ml-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
          </svg>
          ادامه با اپل
        </div>
      </Button>
    </div>
  );
};
