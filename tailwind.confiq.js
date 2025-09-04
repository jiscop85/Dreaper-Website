	v
import type { Config } from "tailwindcss";


export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}"
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
				'2xl': '1400px'
	}
		},
		extend: {
			fontFamily: {
				'vazir': ['Vazirmatn', 'Tahoma', 'Arial', 'sans-serif'],
				'display': ['Vazirmatn', 'Tahoma', 'Arial', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
	},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
	},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
	},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
	},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
	},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
	},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
},
				// پالت رنگی مدرن و هماهنگ
				fabric: {
					// رنگ‌های اصلی بهبود یافته
					'primary': '#1B365D',      // آبی تیره اصلی
					'secondary': '#E2725B',     // نارنجی گرم
					'accent': '#FFD700',        // طلایی درخشان

					// رنگ‌های خنثی مدرن
					'cream': '#FEFDF8',         // کرم روشن
					'sand': '#F7F3E9',          // شنی ملایم
					'pearl': '#F8F6F0',         // مرواریدی
					'ivory': '#FFFBF0',         // عاجی

					// رنگ‌های طبیعی
					'emerald': '#50C878',       // سبز زمردی
					'sage': '#9CAF88',          // سبز خاکستری
					'lavender': '#B19CD9',      // بنفش ملایم
					'rose': '#E8B4B8',          // صورتی ملایم

					// رنگ‌های کنتراست
					'navy': '#1B365D',          // آبی تیره
					'charcoal': '#2C3E50',      // خاکستری تیره
					'bronze': '#CD7F32',        // برنزی
					'copper': '#B87333',        // مسی

					// رنگ‌های ترکیبی
					'terracotta': '#E2725B',    // خاکی
					'gold': '#FFD700',          // طلایی
					'mint': '#B8E6B8',          // نعنایی
					'coral': '#FF7F7F',         // مرجانی
				}
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '3rem',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// انیمیشن‌های کلاسیک بهبود یافته
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-down': {
					'0%': { opacity: '0', transform: 'translateY(-30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-left': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-right': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				// انیمیشن‌های اسلاید بهبود یافته
				'slide-in': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-out': {
					'0%': { transform: 'translateX(0)', opacity: '1' },
					'100%': { transform: 'translateX(-100%)', opacity: '0' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				// انیمیشن‌های اسکیل و چرخش
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(0.9)', opacity: '0' }
				},
				'rotate-in': {
					'0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: '0' },
					'100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'50%': { transform: 'scale(1.05)', opacity: '1' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				// انیمیشن‌های شناوری
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'float-delayed': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-15px)' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%
				},
				// انیمیشن‌های ویژه
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(226, 114, 91, 0.5)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 25px rgba(226, 114, 91, 0.8)',
						transform: 'scale(1.02)'
					}
			    },
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
				},
					'50%': {
						transform: 'translateY(-5px)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'scale-pulse': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					























































































































































