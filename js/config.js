// ANIVE.CO | GIFTING Configuration & Material Design Color System
// Palette derived directly from brand asset: #59171b (Burgundy) & #fed7b8 (Beige)
window.AniveConfig = {
  theme: {
    colors: {
      // Elegant Burgundy & Beige Palette
      mred: {
        50: '#FFF9F5',
        100: '#FED7B8', // Exact palette beige (#fed7b8)
        200: '#F7C6A3',
        300: '#E8A37C',
        400: '#C25B57',
        500: '#8F2830',
        600: '#711E24',
        700: '#59171B', // Exact palette burgundy (#59171b)
        800: '#471015',
        900: '#340A0E',
        950: '#210507',
      },
      beige: {
        50: '#FFFAF6',
        100: '#FED7B8', // Exact palette beige (#fed7b8)
        200: '#F8C8A3',
        300: '#EEAD82',
        400: '#DF9262',
        500: '#C67545',
      },
      surface: {
        50: '#FFFFFF',
        100: '#FFF9F5',
        200: '#FDF2E9',
        300: '#F9E5D6',
      },
      accent: {
        champagne: '#FED7B8',
        burgundy: '#59171B',
        gold: '#D4AF37',
        rosewood: '#8F2830',
      }
    },
    fontFamily: {
      serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      sans: ['"Plus Jakarta Sans"', 'sans-serif'],
    },
    boxShadow: {
      'soft': '0 8px 30px rgba(89, 23, 27, 0.06)',
      'luxury': '0 20px 40px -15px rgba(89, 23, 27, 0.12)',
      'float': '0 30px 60px -12px rgba(89, 23, 27, 0.18)',
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

// Initialize Tailwind config with Burgundy & Beige palette
if (window.tailwind) {
  window.tailwind.config = {
    theme: {
      extend: window.AniveConfig.theme
    }
  };
}
