/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#05060a',
          900: '#0a0c14',
          800: '#0f1220',
          700: '#161a2c',
        },
        accent: {
          DEFAULT: '#7c5cff',
          pink: '#ff5cc8',
          cyan: '#3cf0ff',
          gold: '#ffb454',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"Sora"', 'sans-serif'],
        sans: ['"Sora"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        cursive: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(124,92,255,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(60,240,255,0.12), transparent 35%), radial-gradient(circle at 50% 100%, rgba(255,92,200,0.12), transparent 40%)',
        'card-sheen':
          'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)',
      },
      boxShadow: {
        glow: '0 0 40px -5px rgba(124,92,255,0.45)',
        'glow-cyan': '0 0 40px -5px rgba(60,240,255,0.4)',
        'glow-pink': '0 0 40px -5px rgba(255,92,200,0.4)',
        card: '0 8px 32px 0 rgba(0,0,0,0.45)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        blob: 'blob 12s ease-in-out infinite',
        gradient: 'gradient 8s ease infinite',
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
