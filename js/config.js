// ANIVE.CO | GIFTING Configuration & Material Design Color System (Calm Red)
window.AniveConfig = {
  theme: {
    colors: {
      // Material Design 3 Calm Red Palette
      mred: {
        50: '#FCF7F7',
        100: '#F8E9EA',
        200: '#F2D5D7',
        300: '#E5ACB0',
        400: '#CE747B',
        500: '#B04A53',
        600: '#8E2A33',  // Primary calm luxury red
        700: '#782129',
        800: '#621A20',
        900: '#4A1218',
        950: '#2E0A0E',
      },
      surface: {
        50: '#FFFFFF',
        100: '#FCF9F9',
        200: '#F7F2F2',
        300: '#F2EAEA',
      },
      accent: {
        champagne: '#D4AF37',
        silver: '#D7C1C2',
        rosewater: '#F4DDDE',
      }
    },
    fontFamily: {
      serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      sans: ['"Plus Jakarta Sans"', 'sans-serif'],
    },
    boxShadow: {
      'soft': '0 8px 30px rgba(74, 18, 24, 0.05)',
      'luxury': '0 20px 40px -15px rgba(46, 10, 14, 0.08)',
      'float': '0 30px 60px -12px rgba(66, 16, 22, 0.14)',
    }
  },
  currencies: {
    USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
    GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
    EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
    AUD: { symbol: 'A$', rate: 1.52, label: 'AUD (A$)' },
    NGN: { symbol: '₦', rate: 1550, label: 'NGN (₦)' },
  }
};

// Initialize Tailwind config with Material Design Red palette
if (window.tailwind) {
  window.tailwind.config = {
    theme: {
      extend: window.AniveConfig.theme
    }
  };
}
