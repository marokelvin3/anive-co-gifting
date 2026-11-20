import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Gift, 
  FileText,
  RotateCcw
} from 'lucide-react';
import { BUILDER_BOXES, BUILDER_ITEMS, BUILDER_RIBBONS, BUILDER_CARDS } from '../data/builderItems';
import { useCart } from '../context/CartContext';

export const CustomBoxBuilder = () => {
  const { 
    isCustomBuilderOpen, 
    setIsCustomBuilderOpen, 
    formatPrice, 
    addToCart,
    showToast
  } = useCart();

  const [step, setStep] = useState(1);
  const [selectedBox, setSelectedBox] = useState(BUILDER_BOXES[0]);
  const [selectedItems, setSelectedItems] = useState([BUILDER_ITEMS[0], BUILDER_ITEMS[1], BUILDER_ITEMS[3]]);
  const [selectedRibbon, setSelectedRibbon] = useState(BUILDER_RIBBONS[0]);
  const [monogramText, setMonogramText] = useState('');
  const [monogramFoil, setMonogramFoil] = useState('gold');
  const [selectedCard, setSelectedCard] = useState(BUILDER_CARDS[0]);
  const [cardMessage, setCardMessage] = useState('Dearest Sarah,\nMay your special day be filled with endless joy and tranquil peace.\nWith all my love,\nEmma');
  const [recipientName, setRecipientName] = useState('Sarah Jenkins');

  if (!isCustomBuilderOpen) return null;

  const toggleItem = (item) => {
    const exists = selectedItems.find((i) => i.id === item.id);
    if (exists) {
      if (selectedItems.length <= 1) {
        showToast('Please include at least 1 item in your gift box');
        return;
      }
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      if (selectedItems.length >= 6) {
        showToast('Max box capacity is 6 items. Remove one to add this.');
        return;
      }
      setSelectedItems([...selectedItems, item]);
    }
  };

  const totalCustomPrice = 
    selectedBox.price + 
    selectedItems.reduce((acc, i) => acc + i.price, 0) + 
    (monogramText.trim() ? 12 : 0);

  const handleFinishAndAddToCart = () => {
    const customProduct = {
      id: `custom-box-${Date.now()}`,
      name: `Custom Atelier Box (${selectedBox.name})`,
      categoryId: 'custom',
      categoryName: 'Custom Gifting',
      price: totalCustomPrice,
      rating: 5.0,
      reviewsCount: 1,
      badge: 'Bespoke Custom',
      image: selectedBox.image,
      shortDesc: `Custom box with ${selectedItems.length} handpicked artisanal gifts and ${selectedRibbon.name}.`,
      contents: selectedItems.map((i) => i.name),
      isEmergencyReady: false,
      allowsMonogram: true
    };

    addToCart(customProduct, {
      monogram: monogramText ? `${monogramFoil.toUpperCase()} FOIL: ${monogramText}` : null,
      ribbon: selectedRibbon.name,
      cardMessage: cardMessage,
      recipientName: recipientName,
      customItems: selectedItems.map((i) => i.name)
    });

    setIsCustomBuilderOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-sage-950/70 backdrop-blur-md overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-sage-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-sage-100 flex items-center justify-between bg-[#F8FAF9]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sage-800 text-white flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5 text-accent-seafoam" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-editorial font-medium text-sage-950">
                  Custom Gift Box Studio
                </h3>
                <span className="bg-sage-200 text-sage-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Step {step} of 4
                </span>
              </div>
              <p className="text-xs text-sage-500">
                Craft a truly bespoke gifting experience with handpicked vessels, goods, and calligraphy.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCustomBuilderOpen(false)}
            className="p-2 text-sage-400 hover:text-sage-700 hover:bg-sage-100 rounded-full transition"
            aria-label="Close builder"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progression Bar */}
        <div className="grid grid-cols-4 border-b border-sage-100 text-center text-xs font-medium">
          <button
            onClick={() => setStep(1)}
            className={`py-3 px-2 border-b-2 transition ${
              step === 1
                ? 'border-sage-800 text-sage-900 bg-white font-semibold'
                : 'border-transparent text-sage-400 hover:text-sage-700'
            }`}
          >
            1. Box Vessel
          </button>
          <button
            onClick={() => setStep(2)}
            className={`py-3 px-2 border-b-2 transition ${
              step === 2
                ? 'border-sage-800 text-sage-900 bg-white font-semibold'
                : 'border-transparent text-sage-400 hover:text-sage-700'
            }`}
          >
            2. Curated Items ({selectedItems.length}/6)
          </button>
          <button
            onClick={() => setStep(3)}
            className={`py-3 px-2 border-b-2 transition ${
              step === 3
                ? 'border-sage-800 text-sage-900 bg-white font-semibold'
                : 'border-transparent text-sage-400 hover:text-sage-700'
            }`}
          >
            3. Monogram & Ribbon
          </button>
          <button
            onClick={() => setStep(4)}
            className={`py-3 px-2 border-b-2 transition ${
              step === 4
                ? 'border-sage-800 text-sage-900 bg-white font-semibold'
                : 'border-transparent text-sage-400 hover:text-sage-700'
            }`}
          >
            4. Calligraphy Card
          </button>
        </div>

        {/* Main Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          
          {/* STEP 1: SELECT BOX VESSEL */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-center sm:text-left">
                <h4 className="text-base font-semibold text-sage-900">Step 1: Choose Your Luxury Keepsake Vessel</h4>
                <p className="text-xs text-sage-500">Every box is lined with soft oyster tissue and crinkle shreds.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BUILDER_BOXES.map((box) => {
                  const isSelected = selectedBox.id === box.id;
                  return (
                    <div
                      key={box.id}
                      onClick={() => setSelectedBox(box)}
                      className={`relative rounded-2xl p-4 border cursor-pointer transition flex items-start gap-4 ${
                        isSelected
                          ? 'border-sage-700 bg-sage-50/80 ring-2 ring-sage-600/20 shadow-md'
                          : 'border-sage-200 hover:border-sage-400 bg-white'
                      }`}
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-sage-200">
                        <img src={box.image} alt={box.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-semibold text-sage-900 text-sm">{box.name}</h5>
                          <span className="font-bold text-sage-900 text-sm">{formatPrice(box.price)}</span>
                        </div>
                        <p className="text-xs text-sage-600">{box.material}</p>
                        <div className="text-[11px] text-sage-400">Dimensions: {box.dimensions}</div>
                      </div>

                      {isSelected && (
                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-sage-800 text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: SELECT ITEMS */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-semibold text-sage-900">Step 2: Fill Your Box with Artisanal Goods</h4>
                  <p className="text-xs text-sage-500">Select between 1 to 6 items to accompany your presentation.</p>
                </div>
                <div className="text-xs px-3 py-1 bg-sage-100 text-sage-800 rounded-full font-semibold self-start sm:self-auto">
                  Box Capacity: {selectedItems.length} of 6 slots used
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {BUILDER_ITEMS.map((item) => {
                  const isChecked = selectedItems.some((i) => i.id === item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item)}
                      className={`relative rounded-2xl p-3 border cursor-pointer transition flex items-center gap-3 ${
                        isChecked
                          ? 'border-sage-700 bg-sage-50/80 ring-1 ring-sage-600/30 shadow-xs'
                          : 'border-sage-200 hover:border-sage-400 bg-white'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-sage-200">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase font-semibold text-sage-500 tracking-wider">
                          {item.category}
                        </div>
                        <h5 className="font-semibold text-sage-900 text-xs truncate">{item.name}</h5>
                        <div className="text-xs font-bold text-sage-800">{formatPrice(item.price)}</div>
                      </div>

                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition ${
                        isChecked ? 'bg-sage-800 text-white' : 'border border-sage-300 text-sage-400'
                      }`}>
                        {isChecked ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: MONOGRAM & RIBBON */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-sage-900">Step 3: Silk Ribbon & Custom Hot-Foil Monogram</h4>
                <p className="text-xs text-sage-500">Add personal touches that turn an unboxing into an heirloom.</p>
              </div>

              {/* Ribbon Selection */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-sage-800 uppercase tracking-wider block">
                  Select Hand-Torn Silk Ribbon Shade
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {BUILDER_RIBBONS.map((ribbon) => {
                    const isSelected = selectedRibbon.id === ribbon.id;
                    return (
                      <button
                        key={ribbon.id}
                        onClick={() => setSelectedRibbon(ribbon)}
                        className={`p-3 rounded-2xl border text-left transition flex flex-col items-center text-center gap-2 ${
                          isSelected
                            ? 'border-sage-700 bg-sage-50 ring-2 ring-sage-600/20'
                            : 'border-sage-200 hover:border-sage-400'
                        }`}
                      >
                        <div 
                          className="w-8 h-8 rounded-full border border-black/10 shadow-inner" 
                          style={{ backgroundColor: ribbon.hex }}
                        />
                        <span className="text-xs font-medium text-sage-900">{ribbon.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Monogram Section */}
              <div className="p-4 rounded-2xl bg-sage-50 border border-sage-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sage-700" />
                    <span className="text-xs font-bold text-sage-900 uppercase tracking-wider">
                      Hot-Foil Monogram Embossing (+{formatPrice(12)})
                    </span>
                  </div>
                  <span className="text-[10px] text-sage-500 font-medium">Optional</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-sage-700 block mb-1">
                      Embossed Text (Initials or Name, max 15 chars)
                    </label>
                    <input
                      type="text"
                      maxLength={15}
                      value={monogramText}
                      onChange={(e) => setMonogramText(e.target.value)}
                      placeholder="e.g. E & J or SARAH"
                      className="w-full bg-white border border-sage-300 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-sage-700 block mb-1">Foil Color Finish</label>
                    <div className="flex gap-2">
                      {['gold', 'silver', 'blind-deboss'].map((foil) => (
                        <button
                          key={foil}
                          onClick={() => setMonogramFoil(foil)}
                          className={`flex-1 py-2 px-2 rounded-xl text-xs font-medium border capitalize transition ${
                            monogramFoil === foil
                              ? 'bg-sage-800 text-white border-sage-800'
                              : 'bg-white text-sage-700 border-sage-300 hover:bg-sage-50'
                          }`}
                        >
                          {foil.replace('-', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {monogramText.trim() && (
                  <div className="mt-2 p-3 bg-white rounded-xl border border-dashed border-sage-300 text-center">
                    <div className="text-[10px] text-sage-400 uppercase tracking-widest">Live Monogram Preview</div>
                    <div className="text-lg font-editorial tracking-[0.2em] font-bold text-amber-700 mt-1">
                      {monogramText.toUpperCase()}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: CALLIGRAPHY CARD & LIVE PREVIEW */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-sage-900">Step 4: Complimentary Calligraphy Note & Wax Seal</h4>
                <p className="text-xs text-sage-500">Every message is hand-lettered by our in-house calligrapher on thick deckled-edge cotton paper.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Inputs */}
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-sage-800 block mb-1">Recipient Name</label>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-white border border-sage-300 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-sage-800 block mb-1">Stationery Card Style</label>
                    <select
                      value={selectedCard.id}
                      onChange={(e) => setSelectedCard(BUILDER_CARDS.find((c) => c.id === e.target.value) || BUILDER_CARDS[0])}
                      className="w-full bg-white border border-sage-300 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none focus:border-sage-600"
                    >
                      {BUILDER_CARDS.map((c) => (
                        <option key={c.id} value={c.id}>{c.name} — {c.desc}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-sage-800 block mb-1">
                      Your Heartfelt Message
                    </label>
                    <textarea
                      rows={4}
                      value={cardMessage}
                      onChange={(e) => setCardMessage(e.target.value)}
                      placeholder="Write your note here..."
                      className="w-full bg-white border border-sage-300 rounded-xl p-3 text-xs text-sage-900 focus:outline-none focus:border-sage-600 font-sans"
                    ></textarea>
                  </div>
                </div>

                {/* Live Card Render Preview */}
                <div className="p-6 rounded-2xl bg-[#FCFBF8] border border-amber-900/10 shadow-md space-y-3 relative overflow-hidden">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-amber-800/60 pb-2 border-b border-amber-900/10 flex items-center justify-between">
                    <span>{selectedCard.name}</span>
                    <span>Wax-Sealed Atelier Card</span>
                  </div>

                  <div className="text-center py-2 space-y-2">
                    <div className="text-xs tracking-widest uppercase font-serif text-sage-800">
                      To My Cherished {recipientName || 'Recipient'}
                    </div>
                    <div className="font-editorial text-base sm:text-lg italic text-sage-900 leading-relaxed whitespace-pre-line px-2">
                      "{cardMessage || 'Your message will appear here...'}"
                    </div>
                  </div>

                  <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between text-[11px] text-sage-600">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-emerald-700 inline-block"></span>
                      Olive Green Wax Seal Included
                    </span>
                    <span className="font-editorial italic">ANIVE.CO | GIFTING</span>
                  </div>
                </div>
              </div>

              {/* Order Summary Recap */}
              <div className="p-4 bg-sage-50 rounded-2xl border border-sage-200 flex flex-wrap items-center justify-between text-xs text-sage-800 gap-3">
                <div className="space-y-0.5">
                  <div className="font-semibold text-sage-900">Custom Box Summary:</div>
                  <div className="text-sage-600">
                    {selectedBox.name} • {selectedItems.length} Gifts • {selectedRibbon.name} 
                    {monogramText ? ` • Monogram: "${monogramText}"` : ''}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-sage-500 uppercase">Total Atelier Price</div>
                  <div className="text-lg font-editorial font-bold text-sage-950">
                    {formatPrice(totalCustomPrice)}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation Buttons */}
        <div className="p-4 sm:p-5 border-t border-sage-100 bg-[#F8FAF9] flex items-center justify-between">
          <div>
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 rounded-full border border-sage-300 text-sage-700 hover:bg-sage-100 text-xs font-medium flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            ) : (
              <div className="text-xs text-sage-500 font-medium">
                Box: <span className="font-bold text-sage-900">{selectedBox.name}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-sage-500 block uppercase">Subtotal</span>
              <span className="text-base font-editorial font-bold text-sage-900">
                {formatPrice(totalCustomPrice)}
              </span>
            </div>

            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-2.5 rounded-full bg-sage-800 hover:bg-sage-900 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleFinishAndAddToCart}
                className="px-7 py-2.5 rounded-full bg-sage-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-2 shadow-luxury transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Custom Box to Bag ({formatPrice(totalCustomPrice)})</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
