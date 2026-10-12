/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rink: {
          dark: '#070d19',
          surface: '#0f172a',
          card: '#131e36',
          border: '#1e2942',
          ice: '#e2f1ff',
          lineRed: '#dc2626',
          lineBlue: '#2563eb',
          goalCrease: '#93c5fd',
        },
        hcd: {
          blue: '#0047ba',
          yellow: '#f5b000',
          dark: '#002561',
        },
        usa: {
          red: '#c8102e',
          navy: '#00205b',
          white: '#ffffff',
        },
        neon: {
          cyan: '#00f2fe',
          amber: '#fbbf24',
          emerald: '#10b981',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
