import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ContactSection = () => {
  const { showToast } = useCart();
  const [topic, setTopic] = useState('Bridesmaids & Bridal Party Gifting');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      showToast('Thank you for reaching out! The ANIVE.CO Concierge will reply within 4 hours.');
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-sage-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-sage-600" />
            Concierge Consultation & Inquiries
          </div>

          <h2 className="text-3xl sm:text-4xl font-editorial font-light text-sage-950">
            Let Us Curate Something Extraordinary
          </h2>

          <p className="text-xs sm:text-sm text-sage-600 leading-relaxed font-light">
            Whether you are coordinating bridesmaid boxes, organizing high-volume corporate gifts, or requesting same-day emergency dispatch, our atelier concierge is at your service.
          </p>
        </div>

        {/* 2 Columns: Contact Channels on Left, Inquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Channels & Atelier Information */}
          <div className="lg:col-span-5 space-y-6 bg-[#F8FAF9] p-8 rounded-3xl border border-sage-200">
            <div>
              <h3 className="font-editorial text-2xl font-medium text-sage-900 mb-2">
                ANIVE.CO | GIFTING Atelier
              </h3>
              <p className="text-xs text-sage-600 leading-relaxed">
                Connect directly with our dedicated gift designers and corporate consultants.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email Slot */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-700 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-sage-900">Email Concierge</div>
                  <div className="text-xs text-sage-600 mt-0.5 font-medium">concierge@anive.co</div>
                  <div className="text-[10px] text-sage-400">Guaranteed reply within 4 business hours</div>
                </div>
              </div>

              {/* Phone / WhatsApp Slot */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-700 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-sage-900">Direct Line & WhatsApp Concierge</div>
                  <div className="text-xs text-sage-600 mt-0.5 font-medium">+1 (800) 264-8326 (ANIVE)</div>
                  <div className="text-[10px] text-sage-400">Monday – Saturday: 9:00 AM – 7:00 PM EST</div>
                </div>
              </div>

              {/* Atelier Studio Address Slot */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-sage-900">Atelier & Curation Showroom</div>
                  <div className="text-xs text-sage-600 mt-0.5">ANIVE.CO Gifting House</div>
                  <div className="text-[11px] text-sage-500">445 Mercer Street, Studio 6B, New York, NY 10013</div>
                  <div className="text-[10px] text-sage-400 mt-0.5">Private consultations by appointment</div>
                </div>
              </div>

              {/* Emergency Same-Day Hours Slot */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <Clock className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-sage-900">Emergency Dispatch Desk</div>
                  <div className="text-xs text-emerald-700 font-semibold mt-0.5">Cutoff: 2:00 PM Daily for Same-Day Handover</div>
                  <div className="text-[10px] text-sage-400">Rapid messenger available for metropolitan zones</div>
                </div>
              </div>
            </div>

            {/* Note badge */}
            <div className="p-3 bg-white rounded-2xl border border-sage-200/80 text-[11px] text-sage-600 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-seafoam shrink-0" />
              <span>Have specific company details to update? Simply send them over and they'll be reflected seamlessly.</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-sage-200 shadow-soft">
            <h3 className="font-editorial text-2xl font-medium text-sage-900 mb-1">
              Send An Inquiry
            </h3>
            <p className="text-xs text-sage-500 mb-6">
              Fill in your details below and a gifting specialist will connect with you.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-editorial text-xl text-sage-900">Message Delivered</h4>
                <p className="text-xs text-sage-600 max-w-sm mx-auto">
                  Thank you! Our concierge team has received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-sage-800 block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-sage-50/70 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-sage-800 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="eleanor@domain.com"
                      className="w-full bg-sage-50/70 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-sage-800 block mb-1">Department / Inquiry Topic</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-sage-50/70 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                  >
                    <option value="Bridesmaids & Bridal Party Gifting">Bridesmaids Gift Boxes & Bags</option>
                    <option value="Personalised Gift Boxes">Personalised Gift Boxes</option>
                    <option value="Emergency & Last-Minute Gifting">Emergency & Last-Minute Gifting</option>
                    <option value="Corporate Gifting & Volume Orders">Corporate Gifting & Volume Orders</option>
                    <option value="Proposal & Will You Be My Gifts">Proposal & "Will You Be My..." Gifts</option>
                    <option value="Wedding & Event Gifting">Wedding & Event Gifting</option>
                    <option value="Gift Sourcing & Bespoke Curation">Gift Sourcing & Bespoke Curation</option>
                    <option value="General Atelier Inquiry">General Atelier Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-sage-800 block mb-1">Your Message or Project Details</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the recipients, estimated quantities, preferred colors, or required delivery dates..."
                    className="w-full bg-sage-50/70 border border-sage-200 rounded-xl p-3 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-sage-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-luxury transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Atelier Concierge</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
