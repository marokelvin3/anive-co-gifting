import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Camilla & David Thorne',
    role: 'Destination Wedding, Lake Como',
    category: 'Bridesmaids & Guest Hospitality Bags',
    rating: 5,
    quote: 'Our bridesmaids broke into tears upon opening their custom sage linen boxes. The embroidery on the mulberry silk robes and the wax-sealed calligraphy card set the tone for the entire wedding weekend. Absolutely sublime.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Julian Vance',
    role: 'Chief People Officer, Horizon Ventures',
    category: 'Executive Corporate Gifting',
    rating: 5,
    quote: 'ANIVE.CO transformed our end-of-year executive partner gifting. The debossed logos on pebble leather and single-estate coffee bean jars felt intentional, calm, and exquisitely high-end without tacky corporate branding.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Serena Sterling',
    role: 'Private Collector & Gala Host',
    category: 'Gift Sourcing & Event Favours',
    rating: 5,
    quote: 'When we needed 180 hand-poured botanical votives with plantable seed tags for our conservation benefit, ANIVE.CO delivered flawless perfection with two weeks notice. Our patrons are still raving about the scent.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#F5F8F7] border-t border-sage-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-sage-600">
            <Heart className="w-3.5 h-3.5 text-sage-500 fill-sage-500" />
            Atelier Stories & Moments
          </div>

          <h2 className="text-3xl sm:text-4xl font-editorial font-light text-sage-950">
            Unboxings Cherished Across The Globe
          </h2>

          <p className="text-xs sm:text-sm text-sage-600 leading-relaxed font-light">
            Read how our calm luxury presentations create lasting impressions for bridal parties, corporate leaders, and milestone anniversaries.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-7 border border-sage-200/80 shadow-soft flex flex-col justify-between space-y-6 hover:shadow-luxury transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                {/* Star rating & quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-sage-300 group-hover:text-sage-500 transition" />
                </div>

                {/* Quote text */}
                <p className="font-editorial text-base sm:text-lg italic text-sage-900 leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-sage-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-sage-200 shrink-0">
                  <img src={rev.image} alt={rev.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-xs text-sage-900">{rev.name}</div>
                  <div className="text-[11px] text-sage-500">{rev.role}</div>
                  <div className="text-[10px] text-sage-400 font-medium">{rev.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
