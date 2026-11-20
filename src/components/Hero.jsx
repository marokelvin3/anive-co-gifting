import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck, Feather, Gift, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Hero = ({ onExploreClick }) => {
  const { setIsCustomBuilderOpen, setIsBespokeInquiryOpen } = useCart();

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Subtle calm ambient background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none -z-10">
        <div className="absolute top-8 left-10 w-96 h-96 bg-sage-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-24 right-10 w-96 h-96 bg-slatecool-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-frost-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-100/80 border border-sage-200/80 text-sage-800 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-sage-600"></span>
              <span>ANIVE.CO Atelier of Calm Luxury</span>
              <span className="text-sage-400">·</span>
              <span className="text-sage-600 font-semibold">15 Curated Departments</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-sage-950 font-editorial leading-[1.12] tracking-tight">
              Intentionally Curated. <br />
              <span className="italic font-normal text-sage-700">Artfully Given.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-sage-700 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From bespoke bridesmaids keepsakes and executive corporate hampers to same-day emergency rescues. Experience gifting wrapped in soothing eucalyptus, slate mist, and tactile linen finishes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-sage-800 text-white font-medium text-sm hover:bg-sage-900 transition shadow-luxury hover:shadow-float flex items-center justify-center gap-2 group"
              >
                <span>Explore The Collections</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsCustomBuilderOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-sage-900 border border-sage-300 font-medium text-sm hover:bg-sage-50 transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-sage-600" />
                <span>Build A Custom Box</span>
              </button>
            </div>

            {/* Emergency & Corporate Quick Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-sage-600">
              <a href="#emergency" className="flex items-center gap-1.5 hover:text-sage-900 font-medium underline underline-offset-4 decoration-sage-300">
                <Clock className="w-3.5 h-3.5 text-emerald-600" /> Same-Day Emergency Gifting
              </a>
              <span className="text-sage-300">•</span>
              <a href="#corporate" className="flex items-center gap-1.5 hover:text-sage-900 font-medium underline underline-offset-4 decoration-sage-300">
                <Briefcase className="w-3.5 h-3.5 text-sage-600" /> Corporate Volume Concierge
              </a>
            </div>

            {/* Key Atelier Value Pillars */}
            <div className="pt-6 border-t border-sage-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-sage-800 text-xs font-semibold">
                  <Feather className="w-3.5 h-3.5 text-sage-600" /> Artisanal Quality
                </div>
                <p className="text-[11px] text-sage-500">Handcrafted, ethical items sourced globally.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-sage-800 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-sage-600" /> Bespoke Foil
                </div>
                <p className="text-[11px] text-sage-500">Debossed monograms & silk ribbons.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-sage-800 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-sage-600" /> Rapid Dispatch
                </div>
                <p className="text-[11px] text-sage-500">Emergency same-day priority handling.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-sage-800 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage-600" /> White-Glove
                </div>
                <p className="text-[11px] text-sage-500">Calligraphy note & wax seal included.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-sage-100 group">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop"
                  alt="ANIVE.CO Luxury Curated Gifting Box in Calm Sage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-950/70 via-transparent to-transparent"></div>

                {/* Overlaid Card Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] tracking-wider uppercase font-semibold text-white">
                    Signature Bridal & Celebration Hamper
                  </div>
                  <h3 className="text-xl font-editorial tracking-wide">
                    The Ethereal Linen Keepsake
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2">
                    Wrapped in textured sage linen, pure mulberry silk, and hand-poured botanical essences.
                  </p>
                </div>
              </div>

              {/* Floating Highlight Badge 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-luxury border border-sage-100 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-700">
                  <Gift className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-sage-900">Wax-Sealed Note</div>
                  <div className="text-[10px] text-sage-500">Hand-written calligraphy</div>
                </div>
              </div>

              {/* Floating Highlight Badge 2 */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-luxury border border-sage-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slatecool-100 flex items-center justify-center text-slatecool-700">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-sage-900">Emergency Dispatch</div>
                  <div className="text-[10px] text-emerald-700 font-medium">Cutoff: 2:00 PM Daily</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
