import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  AUD: { symbol: 'A$', rate: 1.52, label: 'AUD (A$)' },
  NGN: { symbol: '₦', rate: 1550, label: 'NGN (₦)' },
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('anive_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('anive_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currency, setCurrency] = useState('USD');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCustomBuilderOpen, setIsCustomBuilderOpen] = useState(false);
  const [isBespokeInquiryOpen, setIsBespokeInquiryOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('anive_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('anive_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product, options = {}) => {
    const itemKey = `${product.id}-${options.monogram || 'none'}-${options.ribbon || 'default'}-${options.rush ? 'rush' : 'std'}`;
    
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.key === itemKey);
      if (existing) {
        return prevCart.map((item) =>
          item.key === itemKey ? { ...item, quantity: item.quantity + (options.quantity || 1) } : item
        );
      } else {
        return [
          ...prevCart,
          {
            key: itemKey,
            product,
            quantity: options.quantity || 1,
            options: {
              monogram: options.monogram || null,
              ribbon: options.ribbon || 'Classic Sage Silk',
              cardMessage: options.cardMessage || '',
              recipientName: options.recipientName || '',
              rushDelivery: !!options.rush,
              customItems: options.customItems || null,
            },
            price: (product.price + (options.rush ? 20 : 0) + (options.monogram ? 10 : 0)),
          },
        ];
      }
    });

    showToast(`Added "${product.name}" to your gifting bag`);
    setIsCartOpen(true);
  };

  const updateQuantity = (key, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.key === key) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (key) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
    showToast('Item removed from gifting bag');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from saved wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to your wishlist');
        return [...prev, productId];
      }
    });
  };

  const formatPrice = (usdAmount) => {
    const curr = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = usdAmount * curr.rate;
    if (currency === 'NGN') {
      return `${curr.symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    }
    return `${curr.symbol}${converted.toFixed(0)}`;
  };

  const rawSubtotalUSD = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const discountRate = appliedPromo === 'WELCOME10' ? 0.10 : appliedPromo === 'VIP15' ? 0.15 : 0;
  const discountUSD = rawSubtotalUSD * discountRate;
  const shippingUSD = rawSubtotalUSD > 150 ? 0 : (cart.length > 0 ? 12 : 0);
  const totalUSD = Math.max(0, rawSubtotalUSD - discountUSD + shippingUSD);

  const applyPromoCode = (code) => {
    const upper = code.trim().toUpperCase();
    if (upper === 'WELCOME10') {
      setAppliedPromo('WELCOME10');
      showToast('10% Welcome gift discount applied!');
      return { success: true, message: '10% discount applied!' };
    } else if (upper === 'VIP15') {
      setAppliedPromo('VIP15');
      showToast('15% VIP Concierge discount applied!');
      return { success: true, message: '15% VIP discount applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try WELCOME10' };
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        currency,
        setCurrency,
        currencies: CURRENCIES,
        formatPrice,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toggleWishlist,
        rawSubtotalUSD,
        discountUSD,
        shippingUSD,
        totalUSD,
        appliedPromo,
        applyPromoCode,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isCustomBuilderOpen,
        setIsCustomBuilderOpen,
        isBespokeInquiryOpen,
        setIsBespokeInquiryOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
