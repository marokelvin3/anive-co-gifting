import React, { useState } from 'react';
import { Briefcase, Building2, Check, Download, Send, ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CorporateConcierge = () => {
  const { formatPrice, showToast, setIsBespokeInquiryOpen } = useCart();

  const [quantity, setQuantity] = useState(25);
  const [tier, setTier] = useState('partner'); // executive, partner, associate
  const [includeDeboss, setIncludeDeboss] = useState(true);
  const [includeRibbon, setIncludeRibbon] = useState(true);
  const [multiAddress, setMultiAddress] = useState(true);

  // Corporate inquiry form state
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const tierBasePrices = {
    executive: 185,
    partner: 130,
    associate: 85,
  };

  const discountPercent = quantity >= 100 ? 0.20 : quantity >= 50 ? 0.15 : quantity >= 20 ? 0.10 : 0.05;

  const baseUnit = tierBasePrices[tier];
  const extrasPerUnit = (includeDeboss ? 6 : 0) + (includeRibbon ? 4 : 0);
  const unitBeforeDiscount = baseUnit + extrasPerUnit;
  const discountedUnit = unitBeforeDiscount * (1 - discountPercent);
  const estimatedTotal = discountedUnit * quantity;

  const handleCorporateSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      showToast('Corporate inquiry received! A senior gifting concierge will contact you within 2 business hours.');
      setCompanyName('');
      setContactName('');
      setWorkEmail('');
    }, 2000);
  };

  return (
    <section id="corporate" className="py-20 bg-white border-t border-b border-sage-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slatecool-100 text-slatecool-800 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-slatecool-600" />
            Executive & Corporate Gifting Solutions
          </div>

          <h2 className="text-3xl sm:text-4xl font-editorial font-light text-sage-950">
            Elevate Client Loyalty & Team Appreciation
          </h2>

          <p className="text-xs sm:text-sm text-sage-600 leading-relaxed font-light">
            Depart from standard impersonal corporate swag. ANIVE.CO curates understated, luxury executive gifts featuring subtle company debossing, artisan craftsmanship, and multi-address direct drop shipping.
          </p>
        </div>

        {/* 2-Column: Left Interactive Volume Calculator, Right Corporate Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Estimator */}
          <div className="lg:col-span-7 bg-[#F7FAF9] rounded-3xl p-6 sm:p-8 border border-sage-200/80 shadow-soft space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-sage-200/60">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-sage-700" />
                <h3 className="font-editorial text-xl font-medium text-sage-900">
                  Interactive Volume & Tier Estimator
                </h3>
              </div>
              <span className="text-[11px] bg-sage-200 text-sage-800 px-2.5 py-1 rounded-full font-bold">
                Save {(discountPercent * 100).toFixed(0)}% at {quantity} units
              </span>
            </div>

            {/* Quantity Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-sage-700 uppercase tracking-wider">Order Volume</span>
                <span className="text-sm font-bold text-sage-900 bg-white px-3 py-1 rounded-lg border border-sage-300">
                  {quantity} Gift Boxes
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                step="5"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-sage-200 rounded-lg appearance-none cursor-pointer accent-sage-800"
              />
              <div className="flex justify-between text-[10px] text-sage-400">
                <span>10 boxes</span>
                <span>50 (15% off)</span>
                <span>100+ (20% off)</span>
                <span>300+ (25% VIP)</span>
              </div>
            </div>

            {/* Tier Select Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-sage-800 uppercase tracking-wider block">
                Select Hamper Tier
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'associate', name: 'Associate / Welcome', price: 85, desc: 'Notebook, ceramic mug, artisanal tea' },
                  { id: 'partner', name: 'Partner / Client', price: 130, desc: 'Leather padfolio, tumbler, truffles, candle' },
                  { id: 'executive', name: 'Executive / Board', price: 185, desc: 'Cashmere throw, crystal, single-estate brew' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTier(t.id)}
                    className={`p-3 rounded-2xl border text-left transition ${
                      tier === t.id
                        ? 'border-sage-800 bg-white shadow-sm ring-1 ring-sage-800'
                        : 'border-sage-200 bg-white/50 hover:bg-white'
                    }`}
                  >
                    <div className="text-xs font-bold text-sage-900">{t.name}</div>
                    <div className="text-xs font-semibold text-sage-700 mt-0.5">{formatPrice(t.price)}/ea</div>
                    <div className="text-[10px] text-sage-500 line-clamp-1 mt-1">{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Branding Add-ons */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-sage-800 uppercase tracking-wider block">
                Bespoke Branding & Logistics
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 bg-white rounded-xl border border-sage-200 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includeDeboss}
                      onChange={(e) => setIncludeDeboss(e.target.checked)}
                      className="accent-sage-800 w-4 h-4 rounded"
                    />
                    <span className="text-xs text-sage-800 font-medium">Blind Debossed Corporate Logo on Box Lid</span>
                  </div>
                  <span className="text-xs text-sage-600 font-semibold">+{formatPrice(6)}/ea</span>
                </label>

                <label className="flex items-center justify-between p-3 bg-white rounded-xl border border-sage-200 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includeRibbon}
                      onChange={(e) => setIncludeRibbon(e.target.checked)}
                      className="accent-sage-800 w-4 h-4 rounded"
                    />
                    <span className="text-xs text-sage-800 font-medium">Custom Dyed Ribbon in Brand Pantone Color</span>
                  </div>
                  <span className="text-xs text-sage-600 font-semibold">+{formatPrice(4)}/ea</span>
                </label>

                <label className="flex items-center justify-between p-3 bg-white rounded-xl border border-sage-200 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={multiAddress}
                      onChange={(e) => setMultiAddress(e.target.checked)}
                      className="accent-sage-800 w-4 h-4 rounded"
                    />
                    <span className="text-xs text-sage-800 font-medium">Multi-Address Drop Shipping (Worldwide CSV Upload)</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-semibold">Included</span>
                </label>
              </div>
            </div>

            {/* Live Pricing Breakdown */}
            <div className="p-4 bg-sage-800 text-white rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-[10px] text-sage-300 uppercase tracking-wider">Estimated Investment</div>
                <div className="text-xl sm:text-2xl font-editorial font-bold">
                  {formatPrice(estimatedTotal)}
                </div>
                <div className="text-[11px] text-sage-300">
                  ≈ {formatPrice(discountedUnit)} per recipient box
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('corporate-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-white text-sage-900 text-xs font-semibold hover:bg-sage-100 transition flex items-center gap-1.5"
              >
                <span>Lock In Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Inquiry & Lookbook Form */}
          <div id="corporate-form" className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sage-200 shadow-soft space-y-4">
            <div className="space-y-1">
              <h3 className="font-editorial text-xl font-medium text-sage-900">
                Request Corporate Proposal & Sample
              </h3>
              <p className="text-xs text-sage-500">
                Receive our comprehensive corporate lookbook PDF and a personalized quote tailored to your deadline.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-editorial font-semibold text-sage-900">
                  Proposal Request Dispatched
                </h4>
                <p className="text-xs text-sage-600">
                  Our Corporate Concierge team will email your customized estimate and digital catalogue.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCorporateSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-sage-700 block mb-1">Company / Organization</label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Partners LLC"
                    className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-sage-700 block mb-1">Contact Name & Title</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Marcus Cole, Head of People"
                    className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-sage-700 block mb-1">Corporate Email Address</label>
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="marcus@apexpartners.com"
                    className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                  />
                </div>

                <div className="p-3 bg-slatecool-50 rounded-xl border border-slatecool-100 text-[11px] text-slatecool-800 space-y-1">
                  <div className="font-semibold">Corporate Client Privileges:</div>
                  <div className="text-slatecool-600">
                    • Complimentary sample box sent to your office <br />
                    • Dedicated single point of contact concierge <br />
                    • Flexible net-30 invoicing available
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-sage-900 hover:bg-black text-white text-xs font-semibold shadow-md transition flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Lookbook & Dedicated Quote</span>
                </button>
              </form>
            )}

            <div className="pt-3 border-t border-sage-100 flex items-center justify-between text-[11px] text-sage-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sage-600" /> NDA & Privacy Assured
              </span>
              <button 
                onClick={() => setIsBespokeInquiryOpen(true)}
                className="text-sage-700 font-semibold hover:underline"
              >
                Or Book A Video Call →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
