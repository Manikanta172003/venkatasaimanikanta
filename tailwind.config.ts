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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Futuristic neon colors
				'neon-blue': 'hsl(var(--glow-primary))',
				'neon-violet': 'hsl(var(--glow-secondary))',
				'neon-cyan': 'hsl(var(--glow-accent))',
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			backdropBlur: {
				'glass': '24px',
				'strong': '32px',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-rainbow': 'var(--gradient-rainbow)',
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow-primary': 'var(--shadow-glow-primary)',
				'glow-secondary': 'var(--shadow-glow-secondary)',
				'glow-accent': 'var(--shadow-glow-accent)',
				'glow-hover': 'var(--shadow-glow-hover)',
				'card': 'var(--shadow-card)',
				'card-hover': 'var(--shadow-card-hover)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'floatGentle': {
					'0%, 100%': {
						transform: 'translateY(0px) scale(1)'
					},
					'50%': {
						transform: 'translateY(-12px) scale(1.02)'
					}
				},
				'floatSlow': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-15px) rotate(2deg)'
					}
				},
				'gradientShift': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'pulseGlow': {
					'0%': {
						boxShadow: '0 0 20px hsl(189 100% 56% / 0.4)'
					},
					'100%': {
						boxShadow: '0 0 40px hsl(189 100% 56% / 0.8)'
					}
				},
				'slideInBlur': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)',
						filter: 'blur(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
						filter: 'blur(0)'
					}
				},
				'scaleInGlow': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8)',
						filter: 'blur(5px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
						filter: 'blur(0)'
					}
				},
				'slideInLeft': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slideInRight': {
					'0%': {
						opacity: '0',
						transform: 'translateX(100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'bounceIn': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3) translateY(50px)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05) translateY(-10px)'
					},
					'70%': {
						transform: 'scale(0.98) translateY(0px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-gentle': 'floatGentle 6s ease-in-out infinite',
				'float-slow': 'floatSlow 8s ease-in-out infinite',
				'gradient-shift': 'gradientShift 3s ease infinite',
				'shimmer': 'shimmer 2s infinite',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
				'slide-in-blur': 'slideInBlur 0.8s ease-out',
				'scale-in-glow': 'scaleInGlow 0.6s ease-out',
				'slide-in-left': 'slideInLeft 0.6s ease-out',
				'slide-in-right': 'slideInRight 0.6s ease-out',
				'bounce-in': 'bounceIn 0.8s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
