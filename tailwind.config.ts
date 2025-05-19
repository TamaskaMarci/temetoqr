
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
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
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Updated EtherQR colors
				purple: {
					DEFAULT: '#9b87f5', // Primary Purple
					light: '#D6BCFA',   // Light Purple
					dark: '#6E59A5',    // Dark Purple
					deep: '#1A1F2C',    // Very Dark Purple (for backgrounds)
				},
				granite: {
					DEFAULT: '#403E43', // Charcoal Gray
					light: '#8E9196',   // Neutral Gray
					dark: '#221F26',    // Dark Charcoal
					accent: '#9F9EA1',  // Silver Gray Accent
				},
				marble: {
					DEFAULT: '#1A1F2C', // Dark marble base
					light: '#2a3040',
					dark: '#14171f',
					accent: '#333333',
				},
				gold: {
					DEFAULT: '#D6A95B', // Gold color
					light: '#E8C988',   // Light gold
					dark: '#B58B3D',    // Dark gold
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1.5s ease-out',
				'fade-in-up': 'fade-in-up 1s ease-out'
			},
			backgroundImage: {
				'marble-texture': "url('/images/dark-marble-texture.jpg')",
				'purple-gradient': 'linear-gradient(135deg, #9b87f5 0%, #6E59A5 100%)',
				'gold-gradient': 'linear-gradient(135deg, #D6A95B 0%, #B58B3D 100%)',
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
