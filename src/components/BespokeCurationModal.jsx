import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Globe, HeartHandshake } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const BespokeCurationModal = () => {
  const { isBespokeInquiryOpen, setIsBespokeInquiryOpen, showToast } = useCart();

  const [occasion, setOccasion] = useState('Luxury Wedding & Favours');
  const [recipientCount, setRecipientCount] = useState('50 - 150 guests');
  const [budgetPerBox, setBudgetPerBox] = useState('$150 - $250');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [notes, setNotes] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isBespokeInquiryOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsBespokeInquiryOpen(false);
      showToast('VIP Bespoke Curation request dispatched to our Private Sourcing Director.');
      setNotes('');
      setClientName('');
      setClientEmail('');
      setClientPhone('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sage-950/70 backdrop-blur-md overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-sage-200 overflow-hidden my-auto animate-fadeIn">
        
        {/* Header */}
        <div className="p-6 border-b border-sage-100 flex items-center justify-between bg-[#F8FAF9]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sage-800 text-white flex items-center justify-center shadow-sm">
              <Globe className="w-5 h-5 text-accent-seafoam" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-editorial font-medium text-sage-950">
                Gift Sourcing & VIP Curation
              </h3>
              <p className="text-xs text-sage-500">
                Private bespoke curation for luxury weddings, brand galas, and rare global sourcing.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsBespokeInquiryOpen(false)}
            className="p-2 text-sage-400 hover:text-sage-700 hover:bg-sage-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-12 text-center space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
            <h4 className="text-2xl font-editorial font-medium text-sage-900">
              Brief Confirmed & Received
            </h4>
            <p className="text-xs text-sage-600 max-w-md mx-auto leading-relaxed">
              Our lead sourcing curator will prepare a private mood board with physical prototype samples and contact you via your preferred communication method.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-sage-800 block mb-1">Occasion / Scope</label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                >
                  <option value="Luxury Wedding & Favours">Luxury Wedding & Guest Favours</option>
                  <option value="Bridesmaids & Bridal Party Suites">Bridesmaids & Bridal Party Suites</option>
                  <option value="Corporate Executive & Board">Corporate Executive & Board Gifting</option>
                  <option value="Influencer & VIP Brand PR Box">Influencer & VIP Brand PR Box</option>
                  <option value="Private Rare Goods Sourcing">Private Rare Goods & Vintage Sourcing</option>
                  <option value="Other Bespoke Celebration">Other Bespoke Celebration</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-sage-800 block mb-1">Estimated Quantity</label>
                <select
                  value={recipientCount}
                  onChange={(e) => setRecipientCount(e.target.value)}
                  className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                >
                  <option value="1 - 10 VIP boxes">1 - 10 VIP boxes</option>
                  <option value="11 - 50 boxes">11 - 50 boxes</option>
                  <option value="50 - 150 guests">50 - 150 guests</option>
                  <option value="150 - 500+ attendees">150 - 500+ attendees</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-sage-800 block mb-1">Target Budget Per Box</label>
                <select
                  value={budgetPerBox}
                  onChange={(e) => setBudgetPerBox(e.target.value)}
                  className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                >
                  <option value="$75 - $120">$75 - $120 per recipient</option>
                  <option value="$120 - $200">$120 - $200 per recipient</option>
                  <option value="$200 - $350">$200 - $350 per recipient</option>
                  <option value="$350+ Ultra Luxury">$350+ Ultra Luxury / Heirloom</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-sage-800 block mb-1">Project Deadline / Date</label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                >
                  <option value="Rush (Within 1-2 Weeks)">Rush (Within 1-2 Weeks)</option>
                  <option value="Within 1 Month">Within 1 Month</option>
                  <option value="1 - 3 Months">1 - 3 Months</option>
                  <option value="More than 3 Months">More than 3 Months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-sage-800 block mb-1">
                Tell Us About Your Vision & Brand Aesthetic
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Include details about color preferences (e.g. sage greens, slate mist), specific items you wish to source, or custom branding requirements..."
                className="w-full bg-sage-50 border border-sage-200 rounded-xl p-3 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-sage-100">
              <div>
                <label className="text-xs font-semibold text-sage-800 block mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Claire Sinclair"
                  className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-sage-800 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="claire@domain.com"
                  className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-sage-800 block mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                />
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-sage-50 border border-sage-200 flex items-center justify-between text-xs text-sage-700">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-sage-600" />
                Includes dedicated curation director & bespoke sample box
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-sage-900 hover:bg-black text-white text-xs font-semibold transition flex items-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Curation Brief</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
