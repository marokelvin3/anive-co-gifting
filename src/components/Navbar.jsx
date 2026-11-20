import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  Menu, 
  X, 
  Sparkles, 
  Clock, 
  ChevronDown, 
  Gift, 
  Briefcase, 
  PhoneCall, 
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/categories';

export const Navbar = ({ onSearch, searchQuery, onSelectCategory }) => {
  const { 
    cart, 
    wishlist, 
    setIsCartOpen, 
    setIsCustomBuilderOpen, 
    setIsBespokeInquiryOpen,
    currency, 
    setCurrency, 
    currencies 
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Top Announcement Bar - Calm, high-urgency luxury announcement */}
      <div className="bg-sage-800 text-sage-100 text-xs py-2 px-4 border-b border-sage-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-center sm:text-left w-full sm:w-auto justify-center">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sage-700 text-[10px] font-semibold uppercase tracking-wider text-sage-200">
              <Clock className="w-3 h-3 text-accent-seafoam animate-pulse" /> Same-Day Dispatch
            </span>
            <span className="hidden md:inline text-sage-200">
              Order before 2:00 PM for guaranteed rush dispatch | Complimentary wax-sealed calligraphy card
            </span>
            <span className="inline md:hidden text-sage-200">
              Same-day dispatch on emergency orders before 2 PM
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs text-sage-300">
            <button 
              onClick={() => setIsBespokeInquiryOpen(true)}
              className="hover:text-white transition flex items-center gap-1 text-[11px]"
            >
              <Briefcase className="w-3 h-3 text-sage-400" /> Corporate & Bespoke Concierge
            </button>
            <span className="text-sage-600">|</span>
            {/* Currency selector */}
            <div className="relative group">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-sage-200 text-xs font-medium cursor-pointer focus:outline-none hover:text-white"
              >
                {Object.keys(currencies).map((c) => (
                  <option key={c} value={c} className="bg-sage-900 text-white">
                    {currencies[c].label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-soft py-3'
            : 'bg-[#F9FBFA]/95 backdrop-blur-md py-4 border-b border-sage-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-sage-800 hover:text-sage-600 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Identity / Logo */}
          <a href="#" className="flex flex-col group text-left">
            <div className="flex items-center tracking-[0.25em] font-light text-xl sm:text-2xl text-sage-950 font-editorial">
              ANIVE.CO
              <span className="mx-2 text-xs tracking-widest font-sans font-medium text-sage-500">|</span>
              <span className="text-xs sm:text-sm tracking-[0.2em] font-sans font-semibold text-sage-600 uppercase">
                GIFTING
              </span>
            </div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-sage-500 font-sans hidden sm:block">
              Atelier of Calm Luxury & Curation
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-sage-800">
            {/* Categories Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-sage-600 py-2 transition"
                onClick={() => {
                  const el = document.getElementById('collections');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Collections (15)</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180 text-sage-600' : 'text-sage-400'}`} />
              </button>

              {/* Dropdown Menu */}
              {categoryDropdownOpen && (
                <div className="absolute top-full -left-12 w-[620px] bg-white/98 backdrop-blur-xl rounded-2xl shadow-luxury border border-sage-100 p-5 grid grid-cols-2 gap-2 z-50 animate-fadeIn">
                  <div className="col-span-2 pb-2 mb-1 border-b border-sage-100 flex items-center justify-between text-xs text-sage-500">
                    <span className="font-semibold text-sage-900 tracking-wider uppercase text-[11px]">All Gifting Offerings</span>
                    <span>15 Curated Departments</span>
                  </div>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onSelectCategory(cat.id);
                        setCategoryDropdownOpen(false);
                        const el = document.getElementById('catalog');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sage-50 transition text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 mt-0.5 border border-sage-200">
                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold text-sage-900 group-hover:text-sage-600 transition">
                          {cat.name}
                        </div>
                        <p className="text-[10px] text-sage-500 line-clamp-1">{cat.tagline}</p>
                      </div>
                    </button>
                  ))}
                  <div className="col-span-2 pt-2 mt-1 border-t border-sage-100 flex justify-between items-center text-xs">
                    <span className="text-sage-500 text-[11px]">Looking for something custom?</span>
                    <button
                      onClick={() => {
                        setIsCustomBuilderOpen(true);
                        setCategoryDropdownOpen(false);
                      }}
                      className="text-sage-700 hover:text-sage-900 font-semibold text-[11px] flex items-center gap-1"
                    >
                      Open Custom Box Studio <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsCustomBuilderOpen(true)}
              className="flex items-center gap-1.5 hover:text-sage-600 transition group text-sage-800"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-seafoam group-hover:rotate-12 transition-transform" />
              <span>Custom Box Studio</span>
              <span className="bg-sage-100 text-sage-700 text-[10px] px-1.5 py-0.2 rounded font-semibold uppercase">
                Interactive
              </span>
            </button>

            <a
              href="#emergency"
              className="hover:text-sage-600 transition text-sage-800 flex items-center gap-1 text-[13px]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-0.5"></span>
              Emergency Gifting
            </a>

            <a
              href="#corporate"
              className="hover:text-sage-600 transition text-sage-800"
            >
              Corporate & Volume
            </a>

            <button
              onClick={() => setIsBespokeInquiryOpen(true)}
              className="hover:text-sage-600 transition text-sage-800"
            >
              Gift Sourcing Concierge
            </button>

            <a
              href="#contact"
              className="hover:text-sage-600 transition text-sage-800"
            >
              Contact Us
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Search Input / Button */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-white border border-sage-300 rounded-full px-3 py-1 text-xs shadow-sm">
                  <Search className="w-3.5 h-3.5 text-sage-400 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="Search boxes, bridesmaids, gifts..."
                    className="w-36 sm:w-52 text-xs focus:outline-none text-sage-900 bg-transparent"
                    autoFocus
                  />
                  <button 
                    onClick={() => {
                      onSearch('');
                      setSearchOpen(false);
                    }}
                    className="text-sage-400 hover:text-sage-600 ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-sage-700 hover:text-sage-900 hover:bg-sage-100 rounded-full transition"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Wishlist Icon */}
            <button
              onClick={() => {
                const el = document.getElementById('catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-2 text-sage-700 hover:text-sage-900 hover:bg-sage-100 rounded-full transition relative"
              aria-label="Wishlist"
              title={`${wishlist.length} saved gifts`}
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-400 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-sage-800 hover:bg-sage-900 text-white px-3.5 py-2 rounded-full text-xs font-medium transition shadow-sm hover:shadow group"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-105 transition" />
              <span className="hidden sm:inline">Gifting Bag</span>
              <span className="bg-sage-700 text-sage-100 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                {totalCartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-sage-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 shadow-lg animate-fadeIn">
            {/* Currency selector on mobile */}
            <div className="flex items-center justify-between py-2 border-b border-sage-100 text-xs">
              <span className="text-sage-500 font-medium">Select Currency</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-sage-50 border border-sage-200 rounded px-2 py-1 text-xs text-sage-800 font-medium"
              >
                {Object.keys(currencies).map((c) => (
                  <option key={c} value={c}>
                    {currencies[c].label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <div className="font-semibold text-xs tracking-wider uppercase text-sage-400 px-2 py-1">
                Explore Departments
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-56 overflow-y-auto pr-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      setMobileMenuOpen(false);
                      const el = document.getElementById('catalog');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-sage-50 text-left text-xs text-sage-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-400"></span>
                    <span className="font-medium">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-sage-100 pt-3 space-y-2">
              <button
                onClick={() => {
                  setIsCustomBuilderOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-sage-100 text-sage-900 py-2.5 rounded-xl font-medium text-xs hover:bg-sage-200 transition"
              >
                <Sparkles className="w-4 h-4 text-sage-600" />
                Build Custom Gift Box
              </button>
              <button
                onClick={() => {
                  setIsBespokeInquiryOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 border border-sage-300 text-sage-800 py-2.5 rounded-xl font-medium text-xs hover:bg-sage-50 transition"
              >
                <Briefcase className="w-4 h-4 text-sage-600" />
                Corporate & Sourcing Concierge
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
