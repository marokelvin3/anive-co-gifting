import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Mail, Check } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { useCart } from '../context/CartContext';

export const Footer = ({ onSelectCategory }) => {
  const { showToast, setIsCustomBuilderOpen, setIsBespokeInquiryOpen } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    showToast('Welcome to the ANIVE.CO Circle! 10% welcome code: WELCOME10');
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-sage-950 text-sage-200 pt-16 pb-12 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter & Brand Statement Bar */}
        <div className="pb-12 border-b border-sage-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="text-xl sm:text-2xl font-editorial tracking-[0.2em] font-light text-white flex items-center gap-2">
              <span>ANIVE.CO</span>
              <span className="text-xs tracking-widest text-sage-500 font-sans">|</span>
              <span className="text-xs sm:text-sm tracking-[0.2em] font-sans font-semibold text-sage-400">GIFTING</span>
            </div>
            <p className="text-xs sm:text-sm text-sage-400 max-w-md font-light leading-relaxed">
              Curating moments of tranquil beauty through thoughtful objects, custom hot-foil monograms, and handwritten calligraphy.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-sage-900/60 p-5 rounded-2xl border border-sage-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white tracking-wide uppercase text-[11px]">The Atelier Journal</span>
                <span className="text-sage-400 text-[11px]">Receive 10% off your inaugural order</span>
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-sage-950 border border-sage-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-sage-500 flex-1 focus:outline-none focus:border-sage-400"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-sage-200 text-sage-950 text-xs font-semibold hover:bg-white transition shrink-0 flex items-center gap-1.5"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <span>Join</span>}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Directory of ALL 15 Categories (User Requirement) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold tracking-widest uppercase text-sage-400 pb-2 border-b border-sage-800/60">
            <span>The 15 Gifting Collections</span>
            <span className="text-sage-500 hidden sm:inline">Click to filter boutique</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-3 gap-x-4 text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'custom') {
                    setIsCustomBuilderOpen(true);
                  } else if (cat.id === 'sourcing') {
                    setIsBespokeInquiryOpen(true);
                  } else {
                    onSelectCategory(cat.id);
                    const el = document.getElementById('catalog');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-left text-sage-300 hover:text-white transition py-1 text-[12px] truncate hover:underline underline-offset-4 decoration-sage-500"
                title={cat.name}
              >
                • {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Links & Commitments */}
        <div className="pt-8 border-t border-sage-800/60 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-sage-400">
          
          <div className="space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">Atelier Services</div>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => setIsCustomBuilderOpen(true)} className="hover:text-white transition">
                  Interactive Box Studio
                </button>
              </li>
              <li>
                <a href="#emergency" className="hover:text-white transition">
                  Same-Day Emergency Dispatch
                </a>
              </li>
              <li>
                <a href="#corporate" className="hover:text-white transition">
                  Executive Corporate Volume
                </a>
              </li>
              <li>
                <button onClick={() => setIsBespokeInquiryOpen(true)} className="hover:text-white transition">
                  Gift Sourcing & Global Curation
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">Client Care</div>
            <ul className="space-y-1.5">
              <li><a href="#contact" className="hover:text-white transition">Contact Concierge</a></li>
              <li><a href="#contact" className="hover:text-white transition">Book Showroom Appointment</a></li>
              <li><span className="text-sage-500">Track Gifting Consignment</span></li>
              <li><span className="text-sage-500">Multi-Drop Address Guide</span></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">Sustainability & Ethics</div>
            <p className="text-[11px] leading-relaxed text-sage-400">
              Every ANIVE.CO box is crafted from 100% recycled FSC-certified rigid board. We use zero single-use plastics, hand-dyed organic silk ribbons, and 100% soy and coconut wax.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">Concierge Hours</div>
            <p className="text-[11px] leading-relaxed text-sage-400">
              Monday – Saturday: 9:00 AM – 7:00 PM EST <br />
              Emergency Dispatch Cutoff: 2:00 PM Daily <br />
              Atelier: concierge@anive.co
            </p>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-sage-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-sage-500 gap-4">
          <div>
            © 2026 ANIVE.CO | GIFTING. All Rights Reserved. Crafted with calm intention.
          </div>
          <div className="flex items-center gap-4 text-sage-400">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>White-Glove Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
