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

































































