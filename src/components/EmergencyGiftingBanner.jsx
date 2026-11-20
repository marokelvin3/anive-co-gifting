import React, { useState, useEffect } from 'react';
import { Clock, Zap, Send, ShieldCheck, ArrowRight, Gift, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const EmergencyGiftingBanner = ({ onFilterEmergency }) => {
  const { formatPrice, showToast } = useCart();
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 18 });
  const [digitalVoucherModal, setDigitalVoucherModal] = useState(false);
  const [digitalRecipient, setDigitalRecipient] = useState('');
  const [digitalEmail, setDigitalEmail] = useState('');
  const [digitalSent, setDigitalSent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 30, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendDigitalReveal = (e) => {
    e.preventDefault();
    if (!digitalEmail || !digitalRecipient) {
      showToast('Please fill in recipient details');
      return;
    }
    setDigitalSent(true);
    setTimeout(() => {
      setDigitalSent(false);
      setDigitalVoucherModal(false);
      showToast(`Digital Gifting Reveal preview sent to ${digitalEmail}!`);
      setDigitalEmail('');
      setDigitalRecipient('');
    }, 2000);
  };

  return (
    <section id="emergency" className="py-16 bg-gradient-to-b from-[#FAFBFB] to-[#F1F6F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="rounded-3xl bg-white border border-emerald-200/80 p-8 sm:p-10 shadow-luxury relative overflow-hidden">
          
          {/* Subtle emergency aura accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Emergency & Last-Minute Concierge
              </div>

              <h2 className="text-3xl sm:text-4xl font-editorial font-light text-sage-950">
                Left It Till The Last Minute? <br />
                <span className="italic font-normal text-emerald-800">We Have You Covered.</span>
              </h2>

              <p className="text-xs sm:text-sm text-sage-600 leading-relaxed font-light">
                Forgotten an anniversary, proposal, bridesmaid milestone or birthday? Our ready-to-dispatch luxury gift curations are pre-assembled in our atelier, sealed with raw silk and sent via express priority courier.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-sage-700">
                <div className="flex items-center gap-2 bg-sage-50/80 p-2.5 rounded-xl border border-sage-100">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Same-Day Dispatch</strong> for orders placed before 2:00 PM</span>
                </div>
                <div className="flex items-center gap-2 bg-sage-50/80 p-2.5 rounded-xl border border-sage-100">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Instant Digital Reveal:</strong> Send an interactive reveal link now while the box travels!</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={onFilterEmergency}
                  className="px-6 py-3 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
                >
                  <span>View Same-Day Ready Boxes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setDigitalVoucherModal(true)}
                  className="px-5 py-3 rounded-full bg-white text-emerald-900 border border-emerald-300 hover:bg-emerald-50 font-medium text-xs sm:text-sm flex items-center gap-2 transition"
                >
                  <Send className="w-4 h-4 text-emerald-700" />
                  <span>Send Instant Digital Gift Reveal</span>
                </button>
              </div>
            </div>

            {/* Right: Live Cutoff Ticker */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-emerald-900 to-sage-950 text-white p-6 shadow-2xl border border-emerald-700/40 text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-xs text-emerald-300 font-semibold tracking-wider uppercase">
                  <Clock className="w-4 h-4 animate-spin text-accent-seafoam" style={{ animationDuration: '6s' }} />
                  Same-Day Dispatch Cutoff Timer
                </div>

                <div className="text-xs text-emerald-200/80">
                  Order within the next window to guarantee delivery tomorrow morning:
                </div>

                {/* Clock Digits */}
                <div className="grid grid-cols-3 gap-2 py-2">
                  <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">
                      0{timeLeft.hours}
                    </div>
                    <div className="text-[10px] text-emerald-300 uppercase tracking-widest mt-1">Hours</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">
                      {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
                    </div>
                    <div className="text-[10px] text-emerald-300 uppercase tracking-widest mt-1">Mins</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">
                      {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                    </div>
                    <div className="text-[10px] text-emerald-300 uppercase tracking-widest mt-1">Secs</div>
                  </div>
                </div>

                <div className="text-[11px] text-emerald-200/70 border-t border-emerald-800/80 pt-3 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-seafoam" />
                  <span>100% On-Time Atelier Guarantee or shipping is refunded</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Digital Reveal Modal */}
      {digitalVoucherModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sage-950/70 backdrop-blur-md">
          <div className="bg-white max-w-md w-full rounded-3xl p-6 shadow-2xl border border-sage-200 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                <Send className="w-4 h-4 text-emerald-600" /> Instant Digital Reveal
              </div>
              <button 
                onClick={() => setDigitalVoucherModal(false)}
                className="text-sage-400 hover:text-sage-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-editorial font-medium text-sage-900">
                Can't Wait For The Courier?
              </h4>
              <p className="text-xs text-sage-600">
                Send an immediate digital unboxing experience to your recipient's inbox. When opened, it reveals that a luxury ANIVE.CO box is already en route to their door!
              </p>
            </div>

            {digitalSent ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <div className="font-editorial text-lg text-sage-900">Digital Gift Reveal Dispatched!</div>
                <p className="text-xs text-sage-500">Your recipient is receiving the animated reveal now.</p>
              </div>
            ) : (
              <form onSubmit={handleSendDigitalReveal} className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-sage-700 block mb-1">Recipient Name</label>
                  <input
                    type="text"
                    required
                    value={digitalRecipient}
                    onChange={(e) => setDigitalRecipient(e.target.value)}
                    placeholder="e.g. Olivia Vance"
                    className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-sage-700 block mb-1">Recipient Email Address</label>
                  <input
                    type="email"
                    required
                    value={digitalEmail}
                    onChange={(e) => setDigitalEmail(e.target.value)}
                    placeholder="olivia@domain.com"
                    className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                  />
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-[11px] text-emerald-800">
                  ✓ Instant personalized digital envelope <br />
                  ✓ Custom handwritten note preview <br />
                  ✓ Live courier GPS tracking link included
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setDigitalVoucherModal(false)}
                    className="w-1/2 py-2.5 rounded-xl border border-sage-200 text-xs font-medium text-sage-700 hover:bg-sage-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shadow-sm"
                  >
                    Send Reveal Now
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
