import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  Clock, 
  Star, 
  SlidersHorizontal, 
  Check, 
  Eye, 
  Search, 
  X,
  Layers
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { useCart } from '../context/CartContext';

export const ProductCatalog = ({ selectedCategory, onSelectCategory, searchQuery, onClearSearch }) => {
  const { 
    formatPrice, 
    addToCart, 
    wishlist, 
    toggleWishlist, 
    setSelectedProductForModal,
    setIsCustomBuilderOpen
  } = useCart();

  const [sortBy, setSortBy] = useState('featured');
  const [filterEmergencyOnly, setFilterEmergencyOnly] = useState(false);
  const [filterMonogramOnly, setFilterMonogramOnly] = useState(false);
  const [priceRange, setPriceRange] = useState('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.categoryId !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchCategory = product.categoryName.toLowerCase().includes(query);
        const matchDesc = product.shortDesc.toLowerCase().includes(query);
        const matchTags = product.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchName && !matchCategory && !matchDesc && !matchTags) return false;
      }

      // Emergency filter
      if (filterEmergencyOnly && !product.isEmergencyReady) {
        return false;
      }

      // Monogram filter
      if (filterMonogramOnly && !product.allowsMonogram) {
        return false;
      }

      // Price filter
      if (priceRange === 'under100' && product.price >= 100) return false;
      if (priceRange === '100to200' && (product.price < 100 || product.price > 200)) return false;
      if (priceRange === 'over200' && product.price <= 200) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [selectedCategory, searchQuery, filterEmergencyOnly, filterMonogramOnly, priceRange, sortBy]);

  return (
    <section id="catalog" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Title & Category Quick Navigation Header */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-sage-600 mb-1">
              Curated Catalog & Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-light text-sage-950">
              {selectedCategory === 'all' 
                ? 'All Bespoke Curations' 
                : CATEGORIES.find((c) => c.id === selectedCategory)?.name || 'Curated Boxes'}
            </h2>
          </div>

          <div className="text-xs text-sage-500">
            Showing <span className="font-semibold text-sage-900">{filteredProducts.length}</span> curated gift boxes
          </div>
        </div>

        {/* Horizontal Category Pill Scrollbar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition border ${
              selectedCategory === 'all'
                ? 'bg-sage-800 text-white border-sage-800 shadow-sm'
                : 'bg-white text-sage-700 border-sage-200 hover:border-sage-400'
            }`}
          >
            All Collections (15)
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition border ${
                selectedCategory === cat.id
                  ? 'bg-sage-800 text-white border-sage-800 shadow-sm'
                  : 'bg-white text-sage-700 border-sage-200 hover:border-sage-400'
              }`}
            >
              {cat.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="bg-white rounded-2xl p-4 border border-sage-200/80 shadow-soft mb-8 flex flex-wrap items-center justify-between gap-4">
        
        {/* Left Filter Switches */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <button
            onClick={() => setFilterEmergencyOnly(!filterEmergencyOnly)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition ${
              filterEmergencyOnly
                ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold'
                : 'border-sage-200 text-sage-700 hover:bg-sage-50'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            Same-Day Dispatch Only
          </button>

          <button
            onClick={() => setFilterMonogramOnly(!filterMonogramOnly)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition ${
              filterMonogramOnly
                ? 'bg-sage-100 border-sage-500 text-sage-900 font-semibold'
                : 'border-sage-200 text-sage-700 hover:bg-sage-50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sage-600" />
            Personalised Foil Available
          </button>

          {/* Price dropdown */}
          <div className="flex items-center gap-1.5 pl-2 border-l border-sage-200">
            <span className="text-sage-500 text-[11px]">Price:</span>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="bg-transparent text-sage-800 font-medium text-xs cursor-pointer focus:outline-none"
            >
              <option value="all">Any Price</option>
              <option value="under100">Under $100</option>
              <option value="100to200">$100 - $200</option>
              <option value="over200">Over $200 (Luxury)</option>
            </select>
          </div>
        </div>

        {/* Right Sort Dropdown & Search Reset */}
        <div className="flex items-center gap-3 text-xs">
          {searchQuery && (
            <div className="flex items-center gap-1.5 bg-sage-50 text-sage-800 px-3 py-1 rounded-full border border-sage-200 text-xs">
              <span>Searching: "{searchQuery}"</span>
              <button onClick={onClearSearch} className="hover:text-red-500">
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          <div className="flex items-center gap-1.5 text-sage-500">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sage-900 font-semibold text-xs cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated (5.0★)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-sage-200 p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto text-sage-500">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-editorial text-sage-900">No curations match your criteria</h3>
          <p className="text-xs text-sage-600 max-w-md mx-auto">
            Try resetting your price filters or search terms. Alternatively, build your own bespoke box from scratch!
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => {
                onSelectCategory('all');
                onClearSearch();
                setFilterEmergencyOnly(false);
                setFilterMonogramOnly(false);
                setPriceRange('all');
              }}
              className="px-5 py-2.5 rounded-full border border-sage-300 text-sage-800 text-xs font-medium hover:bg-sage-50"
            >
              Reset All Filters
            </button>
            <button
              onClick={() => setIsCustomBuilderOpen(true)}
              className="px-5 py-2.5 rounded-full bg-sage-800 text-white text-xs font-medium hover:bg-sage-900 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> Build Custom Box
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-sage-200/90 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[4/3] bg-sage-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Top Left Badge */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-semibold text-sage-900 uppercase tracking-wider shadow-sm">
                      {product.badge}
                    </span>
                    {product.isEmergencyReady && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-semibold tracking-wide flex items-center gap-1 shadow-sm">
                        <Clock className="w-2.5 h-2.5" /> Same-Day
                      </span>
                    )}
                  </div>

                  {/* Top Right Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition shadow-sm ${
                      isWishlisted
                        ? 'bg-rose-50 text-rose-500'
                        : 'bg-white/90 text-sage-600 hover:text-rose-500'
                    }`}
                    aria-label="Save to wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                  </button>

                  {/* Quick View Button on Hover */}
                  <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProductForModal(product)}
                      className="w-full py-2 bg-white/95 backdrop-blur-md hover:bg-white text-sage-900 rounded-xl text-xs font-semibold shadow-md flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-sage-600" />
                      Quick View & Customise
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Category & Rating */}
                    <div className="flex items-center justify-between text-xs text-sage-500">
                      <span className="font-medium tracking-wide uppercase text-[10px] text-sage-600">
                        {product.categoryName}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-semibold text-[11px]">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-sage-400 text-[10px]">({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 
                      onClick={() => setSelectedProductForModal(product)}
                      className="text-lg font-editorial font-medium text-sage-950 group-hover:text-sage-700 cursor-pointer transition line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-sage-600 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Contents Preview Tags */}
                    <div className="pt-1 flex flex-wrap gap-1">
                      {product.contents.slice(0, 2).map((item, i) => (
                        <span key={i} className="text-[10px] bg-sage-50 text-sage-700 px-2 py-0.5 rounded border border-sage-100 truncate max-w-[200px]">
                          • {item.split('(')[0]}
                        </span>
                      ))}
                      {product.contents.length > 2 && (
                        <span className="text-[10px] text-sage-400 font-medium py-0.5">
                          +{product.contents.length - 2} more items
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-3 border-t border-sage-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] text-sage-500 uppercase tracking-wider">Complete Box</div>
                      <div className="text-lg font-editorial font-semibold text-sage-900">
                        {formatPrice(product.price)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProductForModal(product)}
                        className="p-2 rounded-xl border border-sage-200 text-sage-700 hover:bg-sage-50 transition"
                        title="Personalise box note & ribbon"
                      >
                        <Sparkles className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => addToCart(product)}
                        className="px-3.5 py-2 rounded-xl bg-sage-800 hover:bg-sage-900 text-white text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Custom Box Banner Callout at bottom of catalog */}
      <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-sage-900 via-sage-800 to-slatecool-900 text-white relative overflow-hidden shadow-luxury">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-sage-700 text-sage-200 text-[10px] uppercase tracking-wider font-semibold">
              Interactive Atelier Studio
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial font-light">
              Prefer to create a one-of-a-kind box?
            </h3>
            <p className="text-xs sm:text-sm text-sage-300 max-w-xl font-light">
              Choose your keepsake box vessel, pick artisanal spa items, add personal hot-foil monograms, and draft a handwritten wax-sealed calligraphy card.
            </p>
          </div>

          <button
            onClick={() => setIsCustomBuilderOpen(true)}
            className="shrink-0 px-6 py-3.5 rounded-full bg-white text-sage-900 hover:bg-sage-100 transition font-medium text-xs sm:text-sm flex items-center gap-2 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-sage-600" />
            <span>Launch Box Studio</span>
          </button>
        </div>
      </div>

    </section>
  );
};
