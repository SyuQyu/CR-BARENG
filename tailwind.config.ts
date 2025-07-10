import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		fontSize: {
    			'desktop-heading-1': [
    				'56px',
    				'120%'
    			],
    			'desktop-heading-2': [
    				'48px',
    				'120%'
    			],
    			'desktop-heading-3': [
    				'40px',
    				'140%'
    			],
    			'desktop-heading-4': [
    				'36px',
    				'140%'
    			],
    			'desktop-heading-5': [
    				'32px',
    				'140%'
    			],
    			'desktop-heading-6': [
    				'24px',
    				'140%'
    			],
    			'desktop-body-1': [
    				'20px',
    				'155%'
    			],
    			'desktop-body-2': [
    				'16px',
    				'155%'
    			],
    			'desktop-body-3': [
    				'12px',
    				'155%'
    			],
    			'desktop-caption-l': [
    				'14px',
    				'157%'
    			],
    			'desktop-caption-s': [
    				'12px',
    				'157%'
    			],
    			'desktop-label-l': [
    				'14px',
    				'157%'
    			],
    			'desktop-label-s': [
    				'12px',
    				'157%'
    			],
    			'mobile-heading-1': [
    				'40px',
    				'120%'
    			],
    			'mobile-heading-2': [
    				'32px',
    				'120%'
    			],
    			'mobile-heading-3': [
    				'24px',
    				'140%'
    			],
    			'mobile-heading-4': [
    				'20px',
    				'140%'
    			],
    			'mobile-heading-5': [
    				'16px',
    				'140%'
    			],
    			'mobile-heading-6': [
    				'12px',
    				'140%'
    			],
    			'mobile-body-1': [
    				'16px',
    				'155%'
    			],
    			'mobile-body-2': [
    				'14px',
    				'155%'
    			],
    			'mobile-body-3': [
    				'12px',
    				'155%'
    			],
    			'mobile-caption-l': [
    				'12px',
    				'157%'
    			],
    			'mobile-caption-s': [
    				'8px',
    				'157%'
    			],
    			'mobile-label-l': [
    				'12px',
    				'157%'
    			],
    			'mobile-label-s': [
    				'8px',
    				'157%'
    			]
    		},
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			'navy-blue': {
    				'50': '#f1f3ff',
    				'100': '#e5e7ff',
    				'200': '#ced3ff',
    				'300': '#a7adff',
    				'400': '#7678ff',
    				'500': '#463fff',
    				'600': '#2d18ff',
    				'700': '#1c07fa',
    				'800': '#1705d2',
    				'900': '#1506ac',
    				'950': '#060077'
    			},
    			'primary-cr': {
    				'50': '#ebf1ff',
    				'100': '#dbe4ff',
    				'200': '#beceff',
    				'300': '#97acff',
    				'400': '#6e7eff',
    				'500': '#4c52ff',
    				'600': '#453cff',
    				'700': '#2d20e2',
    				'800': '#241db6',
    				'900': '#23208f',
    				'950': '#161353'
    			},
    			info: {
    				'50': '#EFF5FF',
    				'100': '#d0ebff',
    				'200': '#a1d8ff',
    				'300': '#6cbaff',
    				'400': '#3e9aff',
    				'500': '#1f7aff',
    				'600': '#0f6aff',
    				'700': '#0b5ae6',
    				'800': '#0847b3',
    				'900': '#073a8c',
    				'950': '#172E54'
    			},
    			'custom-blue': '#3E2FD6',
    			'salt-egg': '#F7F5EC',
    			'custom-white-cr': '#FAF9FA',
    			'custom-purple-cr': '#7F56D9',
    			'custom-gray-cr': '#667085',
    			'custom-gray-cr-2': '#475467',
    			'custom-gray-cr-3': '#E0E0E0',
    			'custom-blue-cr': '#060377eb'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
