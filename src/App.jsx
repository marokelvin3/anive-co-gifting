import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { CustomBoxBuilder } from './components/CustomBoxBuilder';
import { EmergencyGiftingBanner } from './components/EmergencyGiftingBanner';
import { CorporateConcierge } from './components/CorporateConcierge';
import { BespokeCurationModal } from './components/BespokeCurationModal';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Check, Sparkles } from 'lucide-react';

const MainLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { toastMessage } = useCart();

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
  };

  const handleFilterEmergency = () => {
    setSelectedCategory('emergency');
    const el = document.getElementById('catalog');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    const el = document.getElementById('collections');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FBFA] text-[#243330]">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-sage-900 text-white px-5 py-3 rounded-2xl shadow-luxury border border-sage-700/60 flex items-center gap-3 text-xs font-medium animate-fadeIn">
          <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 15 Categories Showcase */}
        <CategoryShowcase
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Product Catalog with Occasion & Filter Controls */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        {/* Emergency & Last-Minute Gifting Hub */}
        <EmergencyGiftingBanner onFilterEmergency={handleFilterEmergency} />

        {/* Corporate Gifting & Volume Estimator */}
        <CorporateConcierge />

        {/* Client Stories & Testimonials */}
        <TestimonialsSection />

        {/* Contact Us Section */}
        <ContactSection />
      </main>

      {/* Footer with full 15-category directory */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Interactive Modals & Drawers */}
      <CustomBoxBuilder />
      <ProductModal />
      <BespokeCurationModal />
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
