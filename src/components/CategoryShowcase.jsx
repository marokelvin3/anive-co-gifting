import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, Check } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { useCart } from '../context/CartContext';

export const CategoryShowcase = ({ selectedCategory, onSelectCategory }) => {
  const { setIsCustomBuilderOpen, setIsBespokeInquiryOpen } = useCart();
  const [filterMode, setFilterMode] = useState('all');

  const filteredCategories = CATEGORIES.filter((cat) => {
    if (filterMode === 'all') return true;
    if (filterMode === 'bridal') {
      return ['bridesmaids', 'proposal', 'wedding', 'favours'].includes(cat.id);
    }
    if (filterMode === 'celebration') {
      return ['birthday', 'anniversary', 'thankyou', 'holiday', 'baby'].includes(cat.id);
    }
    if (filterMode === 'bespoke') {
      return ['custom', 'sourcing', 'corporate', 'personalised', 'emergency', 'luxury'].includes(cat.id);
    }
    return true;
  });

  return (
    <section id="collections" className="py-16 bg-[#F4F7F6]/60 border-t border-b border-sage-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-sage-600">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500"></span>
              The 15 Curated Departments
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-light text-sage-950">
              Thoughtfully Designed for Every Chapter
            </h2>
            <p className="text-sm text-sage-600 max-w-xl font-light">
              Explore all 15 specialized gifting collections curated with calming colorways, tactile textures, and unforgettable personal gestures.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white/80 p-1.5 rounded-full border border-sage-200 shadow-sm text-xs">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3.5 py-1.5 rounded-full transition font-medium ${
                filterMode === 'all'
                  ? 'bg-sage-800 text-white shadow-xs'
                  : 'text-sage-700 hover:bg-sage-100'
              }`}
            >
              All 15 Departments
            </button>
            <button
              onClick={() => setFilterMode('bridal')}
              className={`px-3.5 py-1.5 rounded-full transition font-medium ${
                filterMode === 'bridal'
                  ? 'bg-sage-800 text-white shadow-xs'
                  : 'text-sage-700 hover:bg-sage-100'
              }`}
            >
              Bridal & Events
            </button>
            <button
              onClick={() => setFilterMode('celebration')}
              className={`px-3.5 py-1.5 rounded-full transition font-medium ${
                filterMode === 'celebration'
                  ? 'bg-sage-800 text-white shadow-xs'
                  : 'text-sage-700 hover:bg-sage-100'
              }`}
            >
              Celebration & Life
            </button>
            <button
              onClick={() => setFilterMode('bespoke')}
              className={`px-3.5 py-1.5 rounded-full transition font-medium ${
                filterMode === 'bespoke'
                  ? 'bg-sage-800 text-white shadow-xs'
                  : 'text-sage-700 hover:bg-sage-100'
              }`}
            >
              Bespoke & Corporate
            </button>
          </div>
        </div>

        {/* 15 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, index) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
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
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'border-sage-600 ring-2 ring-sage-500/30 shadow-luxury'
                    : 'border-sage-200/80 hover:border-sage-400 bg-white shadow-sm hover:shadow-soft'
                }`}
              >
                {/* Category Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-sage-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-sage-800 uppercase tracking-wider">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Category Number / Quick CTA */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-sage-800 group-hover:bg-sage-800 group-hover:text-white transition">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>

                  {/* Title overlay on bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] tracking-wider uppercase text-sage-200 font-medium block">
                      Category #{CATEGORIES.findIndex((c) => c.id === cat.id) + 1}
                    </span>
                    <h3 className="text-lg font-editorial font-medium leading-snug">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-4 space-y-2.5">
                  <p className="text-xs text-sage-600 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-2 border-t border-sage-100 flex items-center justify-between text-[11px]">
                    <span className="text-sage-500 font-medium">{cat.itemCount}</span>
                    <span className="text-sage-700 font-semibold group-hover:text-sage-900 group-hover:underline flex items-center gap-1">
                      {cat.id === 'custom' ? (
                        <>
                          <Sparkles className="w-3 h-3 text-sage-600" /> Open Studio
                        </>
                      ) : cat.id === 'sourcing' ? (
                        'Request Concierge'
                      ) : (
                        'View Curations →'
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
