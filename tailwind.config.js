/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F6',
          100: '#E5ECE9',
          200: '#CDDAD5',
          300: '#AFC3BD',
          400: '#8DAAA2',
          500: '#6D9087',
          600: '#53726A',
          700: '#405852',
          800: '#30423D',
          900: '#222F2C',
        },
        slatecool: {
          50: '#F5F7FA',
          100: '#E7ECF2',
          200: '#D1DBE5',
          300: '#B0C2D4',
          400: '#85A2BE',
          500: '#6485A5',
          600: '#4E6B87',
          700: '#3D536A',
          800: '#2F3F50',
          900: '#1E2935',
        },
        frost: {
          50: '#FAFCFD',
          100: '#F2F6F9',
          200: '#E5EDF2',
          300: '#D2DFE8',
        },
        sand: {
          50: '#FAF9F6',
          100: '#F3F1EC',
          200: '#E6E3DB',
          300: '#D6D1C5',
          400: '#BDB6A5',
        },
        accent: {
          champagne: '#D4AF37',
          silver: '#C5CAD1',
          rosewater: '#EAD7D7',
          seafoam: '#9BB8AF',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(78, 107, 135, 0.07)',
        'luxury': '0 20px 40px -15px rgba(34, 47, 44, 0.08)',
        'float': '0 30px 60px -12px rgba(47, 63, 80, 0.12)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
