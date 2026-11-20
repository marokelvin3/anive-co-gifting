import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Calendar, 
  MapPin, 
  Lock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export const CheckoutModal = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cart, 
    clearCart, 
    formatPrice, 
    totalUSD 
  } = useCart();

  const [step, setStep] = useState('form'); // 'form' or 'confirmed'
  const [shippingMethod, setShippingMethod] = useState('express');
  const [deliveryDate, setDeliveryDate] = useState('2026-11-24');
  const [fullName, setFullName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('United States');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedOrderNum = `ANV-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrderNum);
    setStep('confirmed');

    // Trigger luxury celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6D9087', '#53726A', '#D4AF37', '#FAF9F6']
      });
    } catch (err) {
      console.log('Confetti triggered', err);
    }

    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-sage-950/75 backdrop-blur-md overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-sage-200 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-fadeIn">
        
        {/* Header */}
        <div className="p-5 border-b border-sage-100 flex items-center justify-between bg-[#F8FAF9]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-sage-600" />
            <h3 className="font-editorial text-xl font-medium text-sage-950">
              {step === 'form' ? 'Secure White-Glove Checkout' : 'Order Placed & Confirmed'}
            </h3>
          </div>

          <button
            onClick={() => {
              setIsCheckoutOpen(false);
              setStep('form');
            }}
            className="p-1.5 text-sage-400 hover:text-sage-700 hover:bg-sage-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {step === 'form' ? (
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Order Amount Banner */}
              <div className="p-4 rounded-2xl bg-sage-50 border border-sage-200 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-sage-500 uppercase tracking-wider font-semibold">Total to Pay</div>
                  <div className="text-2xl font-editorial font-bold text-sage-950">
                    {formatPrice(totalUSD)}
                  </div>
                </div>
                <div className="text-xs text-sage-600 text-right">
                  <span>{cart.length} unique gift curations</span> <br />
                  <span className="text-[10px] text-emerald-700 font-medium">Complimentary handwritten note included</span>
                </div>
              </div>

              {/* Delivery Information */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sage-600" />
                  1. Recipient Delivery Address
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-sage-700 block mb-1">Recipient Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Jessica Montgomery"
                      className="w-full bg-sage-50/70 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-sage-700 block mb-1">Recipient Email / Notifications</label>
                    <input
                      type="email"
                      required
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      placeholder="jessica@domain.com"
                      className="w-full bg-sage-50/70 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs text-sage-700 block mb-1">Delivery Street Address</label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Apartment, suite, street address"
                      className="w-full bg-sage-50/70 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-sage-700 block mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City or Town"
                      className="w-full bg-sage-50/70 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-sage-700 block mb-1">Postal / ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="ZIP or Postcode"
                      className="w-full bg-sage-50/70 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Speed / Date Selection */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sage-600" />
                  2. Preferred Delivery Arrival Date
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="p-3 rounded-xl border border-sage-200 bg-[#FBFBFA] flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="ship"
                        value="express"
                        checked={shippingMethod === 'express'}
                        onChange={() => setShippingMethod('express')}
                        className="accent-sage-800"
                      />
                      <div>
                        <div className="text-xs font-semibold text-sage-900">Earliest Next-Day Courier</div>
                        <div className="text-[10px] text-sage-500">Dispatched priority in next cycle</div>
                      </div>
                    </div>
                  </label>

                  <label className="p-3 rounded-xl border border-sage-200 bg-[#FBFBFA] flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="ship"
                        value="scheduled"
                        checked={shippingMethod === 'scheduled'}
                        onChange={() => setShippingMethod('scheduled')}
                        className="accent-sage-800"
                      />
                      <div>
                        <div className="text-xs font-semibold text-sage-900">Scheduled Milestone Arrival</div>
                        <div className="text-[10px] text-sage-500">Arrives exactly on birthday/anniversary</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Payment Method Simulator */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-sage-600" />
                  3. Payment Method (Secure Demo Mode)
                </h4>

                <div className="p-4 rounded-2xl bg-white border border-sage-300 space-y-3">
                  <div className="flex items-center justify-between text-xs text-sage-700">
                    <span className="font-semibold flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" /> Card Information
                    </span>
                    <span className="text-[10px] text-sage-400">256-bit SSL Encrypted</span>
                  </div>

                  <input
                    type="text"
                    defaultValue="•••• •••• •••• 4242"
                    disabled
                    className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-700"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      defaultValue="MM / YY: 12/28"
                      disabled
                      className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-700"
                    />
                    <input
                      type="text"
                      defaultValue="CVC: •••"
                      disabled
                      className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-700"
                    />
                  </div>
                </div>
              </div>

              {/* Complete Order Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-sage-900 hover:bg-black text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-luxury transition"
              >
                <Sparkles className="w-4 h-4 text-accent-seafoam" />
                <span>Confirm & Place Order ({formatPrice(totalUSD)})</span>
              </button>
            </form>
          ) : (
            /* Order Confirmed Screen */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Payment Confirmed • In Atelier Assembly
                </span>
                <h3 className="text-3xl font-editorial font-medium text-sage-950">
                  Thank You For Trusting ANIVE.CO
                </h3>
                <p className="text-xs sm:text-sm text-sage-600 max-w-md mx-auto">
                  Your order reference is <strong className="text-sage-900">{orderNumber}</strong>. Our atelier artisans have begun hand-lettering your calligraphy note and tying your silk bow.
                </p>
              </div>

              <div className="max-w-md mx-auto bg-sage-50/80 rounded-2xl p-5 border border-sage-200 text-left text-xs space-y-2 text-sage-800">
                <div className="flex justify-between font-semibold border-b border-sage-200 pb-2">
                  <span>Recipient:</span>
                  <span>{fullName || 'Jessica Montgomery'}</span>
                </div>
                <div className="flex justify-between border-b border-sage-200 pb-2">
                  <span>Shipping Address:</span>
                  <span className="truncate max-w-[200px]">{address || '742 Evergreen Terrace'}, {city || 'Springfield'}</span>
                </div>
                <div className="flex justify-between border-b border-sage-200 pb-2">
                  <span>Dispatch Window:</span>
                  <span className="text-emerald-700 font-semibold">Priority Outbound Wave</span>
                </div>
                <div className="flex justify-between pt-1 font-bold text-sage-950">
                  <span>Total Paid:</span>
                  <span className="font-editorial text-base">{formatPrice(totalUSD)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setStep('form');
                }}
                className="px-8 py-3 rounded-full bg-sage-800 hover:bg-sage-900 text-white text-xs font-semibold shadow-sm transition"
              >
                Back to Boutique
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
