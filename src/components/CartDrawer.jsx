import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Tag, 
  ShieldCheck 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    setIsCheckoutOpen, 
    updateQuantity, 
    removeFromCart, 
    formatPrice, 
    rawSubtotalUSD, 
    discountUSD, 
    shippingUSD, 
    totalUSD, 
    appliedPromo, 
    applyPromoCode,
    setIsCustomBuilderOpen
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const result = applyPromoCode(promoInput);
    if (!result.success) {
      setPromoError(result.message);
    } else {
      setPromoError('');
      setPromoInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-sage-950/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-sage-200">
          
          {/* Header */}
          <div className="p-5 border-b border-sage-100 flex items-center justify-between bg-[#F8FAF9]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-sage-800" />
              <h3 className="font-editorial text-xl font-medium text-sage-950">
                Your Gifting Bag
              </h3>
              <span className="text-xs font-bold bg-sage-200 text-sage-800 px-2 py-0.5 rounded-full">
                {cart.reduce((a, c) => a + c.quantity, 0)}
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-sage-400 hover:text-sage-700 hover:bg-sage-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-sage-50 text-sage-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-editorial text-xl text-sage-900">Your bag is empty</h4>
                <p className="text-xs text-sage-500 max-w-xs mx-auto">
                  Discover our ready-to-ship curations or design a bespoke box in our interactive studio.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsCustomBuilderOpen(true);
                    }}
                    className="px-5 py-2.5 rounded-full bg-sage-800 text-white text-xs font-semibold hover:bg-sage-900 shadow-sm"
                  >
                    Open Custom Box Studio
                  </button>
                </div>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.key}
                  className="p-3.5 rounded-2xl border border-sage-200 bg-[#FBFBFA] flex gap-3 relative group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-sage-200 bg-white">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs font-bold text-sage-900 truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.key)}
                        className="text-sage-400 hover:text-red-500 transition p-0.5"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs font-editorial font-bold text-sage-900">
                      {formatPrice(item.price)}
                    </div>

                    {/* Custom options pill */}
                    <div className="text-[10px] text-sage-600 space-y-0.5 pt-0.5">
                      {item.options.ribbon && (
                        <div>• Ribbon: <span className="font-medium text-sage-800">{item.options.ribbon}</span></div>
                      )}
                      {item.options.monogram && (
                        <div className="text-amber-800 font-semibold">• {item.options.monogram}</div>
                      )}
                      {item.options.rushDelivery && (
                        <div className="text-emerald-700 font-semibold flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" /> Same-Day Priority Dispatch
                        </div>
                      )}
                      {item.options.cardMessage && (
                        <div className="italic text-sage-500 truncate">• Note: "{item.options.cardMessage}"</div>
                      )}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex items-center border border-sage-300 rounded-lg bg-white px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.key, -1)}
                          className="p-0.5 text-sage-600 hover:text-sage-900"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-sage-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, 1)}
                          className="p-0.5 text-sage-600 hover:text-sage-900"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-semibold text-sage-700 ml-auto">
                        Total: {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-sage-200 bg-[#F8FAF9] space-y-3">
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-sage-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Promo code (Try WELCOME10)"
                    className="w-full bg-white border border-sage-300 rounded-xl pl-8 pr-3 py-2 text-xs text-sage-900 uppercase focus:outline-none focus:border-sage-600"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-sage-800 hover:bg-sage-900 text-white rounded-xl text-xs font-medium transition"
                >
                  Apply
                </button>
              </form>
              {promoError && <p className="text-[10px] text-red-500">{promoError}</p>}
              {appliedPromo && (
                <div className="text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 flex justify-between">
                  <span>Code <strong>{appliedPromo}</strong> applied</span>
                  <span>-{(appliedPromo === 'WELCOME10' ? 10 : 15)}%</span>
                </div>
              )}

              {/* Price breakdown */}
              <div className="space-y-1.5 text-xs text-sage-600 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-sage-900">{formatPrice(rawSubtotalUSD)}</span>
                </div>
                {discountUSD > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span>-{formatPrice(discountUSD)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>White-Glove Shipping</span>
                  <span>{shippingUSD === 0 ? <strong className="text-emerald-700">FREE ($150+ order)</strong> : formatPrice(shippingUSD)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-sage-950 pt-2 border-t border-sage-200">
                  <span>Estimated Total</span>
                  <span className="font-editorial text-lg">{formatPrice(totalUSD)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 rounded-2xl bg-sage-900 hover:bg-black text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-luxury transition"
              >
                <span>Proceed to White-Glove Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-sage-500">
                <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
                <span>Bank-Grade 256-Bit Encryption • Express Concierge</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
