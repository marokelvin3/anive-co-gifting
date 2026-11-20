import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Star, 
  Clock, 
  Check, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Feather,
  Plus,
  Minus
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUILDER_RIBBONS } from '../data/builderItems';

export const ProductModal = () => {
  const { 
    selectedProductForModal, 
    setSelectedProductForModal, 
    formatPrice, 
    addToCart,
    wishlist,
    toggleWishlist
  } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [monogramText, setMonogramText] = useState('');
  const [selectedRibbon, setSelectedRibbon] = useState(BUILDER_RIBBONS[0].name);
  const [cardMessage, setCardMessage] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [rushDelivery, setRushDelivery] = useState(false);

  if (!selectedProductForModal) return null;

  const product = selectedProductForModal;
  const isWishlisted = wishlist.includes(product.id);
  const allImages = [product.image, ...(product.secondaryImages || [])];

  const handleAddToCart = () => {
    addToCart(product, {
      quantity,
      monogram: monogramText ? `MONOGRAM: ${monogramText}` : null,
      ribbon: selectedRibbon,
      cardMessage,
      recipientName,
      rush: rushDelivery,
    });
    setSelectedProductForModal(null);
  };

  const calculatedUnitPrice = product.price + (monogramText.trim() ? 10 : 0) + (rushDelivery ? 20 : 0);
  const calculatedTotal = calculatedUnitPrice * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-sage-950/70 backdrop-blur-md overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-sage-200 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-fadeIn">
        
        {/* Top bar */}
        <div className="p-4 sm:p-5 border-b border-sage-100 flex items-center justify-between bg-[#F8FAF9]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-600">
            <span>{product.categoryName}</span>
            <span>•</span>
            <span className="text-sage-800">{product.badge}</span>
          </div>

          <button
            onClick={() => setSelectedProductForModal(null)}
            className="p-1.5 text-sage-400 hover:text-sage-800 hover:bg-sage-100 rounded-full transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 2 Columns */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Gallery & Highlights */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sage-50 border border-sage-200 shadow-sm">
              <img
                src={allImages[activeImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover transition duration-300"
              />
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition ${
                  isWishlisted ? 'bg-rose-50 text-rose-500' : 'bg-white/90 text-sage-600 hover:text-rose-500'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Row */}
            {allImages.length > 1 && (
              <div className="flex gap-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition ${
                      activeImage === idx ? 'border-sage-800 scale-95' : 'border-sage-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Contents Included List */}
            <div className="p-4 bg-sage-50/70 rounded-2xl border border-sage-200/80 space-y-2">
              <div className="text-xs font-bold text-sage-900 uppercase tracking-wider flex items-center gap-1.5">
                <Feather className="w-3.5 h-3.5 text-sage-600" />
                Contents Carefully Nestled Inside:
              </div>
              <ul className="space-y-1.5 text-xs text-sage-700">
                {product.contents.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Customization Controls & Add to Cart */}
          <div className="md:col-span-6 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-sage-500">({product.reviewsCount} verified reviews)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-editorial font-medium text-sage-950">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-editorial font-bold text-sage-900">
                  {formatPrice(calculatedUnitPrice)}
                </span>
                <span className="text-xs text-sage-500 font-medium">
                  {product.dispatchTime}
                </span>
              </div>

              <p className="text-xs text-sage-600 mt-2 leading-relaxed">
                {product.fullDesc}
              </p>
            </div>

            {/* Customization Options */}
            <div className="space-y-4 pt-3 border-t border-sage-100">
              
              {/* Ribbon Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-sage-800 block">
                  Select Hand-Torn Silk Ribbon:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {BUILDER_RIBBONS.map((rib) => (
                    <button
                      key={rib.id}
                      onClick={() => setSelectedRibbon(rib.name)}
                      className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-medium flex items-center gap-2 transition ${
                        selectedRibbon === rib.name
                          ? 'border-sage-800 bg-sage-50 text-sage-900 font-semibold'
                          : 'border-sage-200 text-sage-700 hover:bg-sage-50'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: rib.hex }} />
                      <span className="truncate">{rib.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monogram Foil Input */}
              {product.allowsMonogram && (
                <div className="space-y-1.5 p-3 rounded-2xl bg-[#FBFBFA] border border-sage-200">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-sage-800">Hot-Foil Lid Monogram (+{formatPrice(10)})</span>
                    <span className="text-[10px] text-sage-400">Optional</span>
                  </div>
                  <input
                    type="text"
                    maxLength={15}
                    value={monogramText}
                    onChange={(e) => setMonogramText(e.target.value)}
                    placeholder="e.g. S.M. or EMMA & NOAH"
                    className="w-full bg-white border border-sage-300 rounded-xl px-3 py-1.5 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                  />
                </div>
              )}

              {/* Handwritten Card Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-sage-800 block">
                  Complimentary Calligraphy Note (Wax-Sealed):
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Recipient Name (e.g. Eleanor)"
                  className="w-full bg-white border border-sage-200 rounded-xl px-3 py-1.5 text-xs text-sage-900 mb-1 focus:outline-none focus:border-sage-600"
                />
                <textarea
                  rows={2}
                  value={cardMessage}
                  onChange={(e) => setCardMessage(e.target.value)}
                  placeholder="Write your personal card message..."
                  className="w-full bg-white border border-sage-200 rounded-xl p-2.5 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                ></textarea>
              </div>

              {/* Emergency Same-Day Rush Checkbox */}
              <label className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50/60 border border-emerald-200 cursor-pointer">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rushDelivery}
                    onChange={(e) => setRushDelivery(e.target.checked)}
                    className="accent-emerald-700 w-4 h-4 rounded"
                  />
                  <div>
                    <div className="text-xs font-semibold text-emerald-900 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      Priority Same-Day Dispatch Handling
                    </div>
                    <div className="text-[10px] text-emerald-700">Guaranteed dispatch in the next outbound courier wave</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-900">+{formatPrice(20)}</span>
              </label>

              {/* Quantity and Add to Cart Row */}
              <div className="pt-2 flex items-center gap-3">
                <div className="flex items-center border border-sage-300 rounded-xl bg-white px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-sage-600 hover:text-sage-900"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-sage-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-sage-600 hover:text-sage-900"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-5 rounded-2xl bg-sage-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-luxury transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Gifting Bag • {formatPrice(calculatedTotal)}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-sage-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage-600" /> Discreet Eco-Packaging
                </span>
                <span>•</span>
                <span>White-Glove Tracking Included</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
