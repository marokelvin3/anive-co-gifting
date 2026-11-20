window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.Modals = function Modals({
  selectedProduct,
  onCloseProduct,
  onAddToCart,
  formatPrice,
  isSourcingOpen,
  onCloseSourcing,
  isCartOpen,
  onCloseCart,
  cart,
  onUpdateQty,
  rawSubtotal,
  discount,
  shipping,
  totalUSD,
  appliedPromo,
  setAppliedPromo,
  onOpenCheckout,
  isCheckoutOpen,
  onCloseCheckout,
  onClearCart,
  onShowToast
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, selectedProduct && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 bg-sage-950/75 backdrop-blur-md" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white w-full max-w-2xl rounded-3xl p-6 shadow-2xl border border-sage-200 space-y-4 max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center border-b border-sage-100 pb-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold text-sage-600 uppercase" }, selectedProduct.categoryName), /* @__PURE__ */ React.createElement("button", { onClick: onCloseProduct, className: "text-sage-400 hover:text-sage-700 text-xl font-bold" }, "\u2715")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("img", { src: selectedProduct.image, alt: selectedProduct.name, className: "w-full h-48 sm:h-full object-cover rounded-2xl" }), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-2xl font-medium text-sage-900" }, selectedProduct.name), /* @__PURE__ */ React.createElement("div", { className: "text-xl font-editorial font-bold text-sage-900" }, formatPrice(selectedProduct.price)), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-sage-600" }, selectedProduct.fullDesc), /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-sage-50 rounded-xl text-xs space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "font-semibold text-sage-800" }, "Contents:"), selectedProduct.contents.map((item, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "text-[11px] text-sage-600" }, "\u2022 ", item))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        onAddToCart(selectedProduct);
        onCloseProduct();
      },
      className: "w-full py-3 bg-sage-900 hover:bg-black text-white text-xs font-semibold rounded-xl shadow-luxury transition"
    },
    "Add Box to Bag \u2022 ",
    formatPrice(selectedProduct.price)
  ))))), isSourcingOpen && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 bg-sage-950/75 backdrop-blur-md" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-sage-200 space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center border-b border-sage-100 pb-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-xl font-medium text-sage-900" }, "VIP Gift Sourcing & Curation"), /* @__PURE__ */ React.createElement("button", { onClick: onCloseSourcing, className: "text-sage-400 hover:text-sage-700 text-xl font-bold" }, "\u2715")), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-sage-600" }, "Request our dedicated sourcing concierge to discover rare global items, custom wedding favours, or volume PR gift boxes."), /* @__PURE__ */ React.createElement("form", { onSubmit: (e) => {
    e.preventDefault();
    onShowToast("VIP Brief received! Concierge will reach out in 2 hours.");
    onCloseSourcing();
  }, className: "space-y-3" }, /* @__PURE__ */ React.createElement("input", { type: "text", required: true, placeholder: "Your Name", className: "w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none" }), /* @__PURE__ */ React.createElement("input", { type: "email", required: true, placeholder: "Your Email", className: "w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none" }), /* @__PURE__ */ React.createElement("select", { className: "w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none" }, /* @__PURE__ */ React.createElement("option", null, "Wedding Favours & Guest Boxes"), /* @__PURE__ */ React.createElement("option", null, "Corporate Board & Executive Gifting"), /* @__PURE__ */ React.createElement("option", null, "Rare Luxury Vintage / Artisan Sourcing")), /* @__PURE__ */ React.createElement("textarea", { rows: "3", placeholder: "Tell us about the desired aesthetic or item...", className: "w-full bg-sage-50 border border-sage-200 rounded-xl p-3 text-xs text-sage-900 focus:outline-none" }), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "w-full py-3 bg-sage-900 text-white rounded-xl text-xs font-semibold shadow-luxury" }, "Submit Private Sourcing Brief")))), isCartOpen && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-50 overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { onClick: onCloseCart, className: "absolute inset-0 bg-sage-950/60 backdrop-blur-sm" }), /* @__PURE__ */ React.createElement("div", { className: "fixed inset-y-0 right-0 max-w-full flex pl-10" }, /* @__PURE__ */ React.createElement("div", { className: "w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-sage-200" }, /* @__PURE__ */ React.createElement("div", { className: "p-5 border-b border-sage-100 flex items-center justify-between bg-[#F8FAF9]" }, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-xl font-medium text-sage-950" }, "Your Gifting Bag"), /* @__PURE__ */ React.createElement("button", { onClick: onCloseCart, className: "text-sage-400 hover:text-sage-700 text-xl font-bold" }, "\u2715")), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto p-5 space-y-3" }, cart.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "py-20 text-center space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-4xl" }, "\u{1F6CD}\uFE0F"), /* @__PURE__ */ React.createElement("h4", { className: "font-editorial text-xl text-sage-900" }, "Your bag is empty"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-sage-500" }, "Discover our 15 collections or design a custom box.")) : cart.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.key, className: "p-3 rounded-2xl border border-sage-200 bg-[#FBFBFA] flex gap-3" }, /* @__PURE__ */ React.createElement("img", { src: item.product.image, alt: item.product.name, className: "w-16 h-16 rounded-xl object-cover" }), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0 space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start" }, /* @__PURE__ */ React.createElement("h4", { className: "text-xs font-bold text-sage-900 truncate" }, item.product.name), /* @__PURE__ */ React.createElement("button", { onClick: () => onUpdateQty(item.key, -item.quantity), className: "text-sage-400 hover:text-red-500 text-xs" }, "\u2715")), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-editorial font-bold text-sage-900" }, formatPrice(item.price)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 pt-1" }, /* @__PURE__ */ React.createElement("button", { onClick: () => onUpdateQty(item.key, -1), className: "w-5 h-5 rounded border flex items-center justify-center text-xs" }, "-"), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold" }, item.quantity), /* @__PURE__ */ React.createElement("button", { onClick: () => onUpdateQty(item.key, 1), className: "w-5 h-5 rounded border flex items-center justify-center text-xs" }, "+"), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-sage-600 ml-auto font-semibold" }, formatPrice(item.price * item.quantity))))))), cart.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "p-5 border-t border-sage-200 bg-[#F8FAF9] space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "Promo Code (WELCOME10)",
      id: "drawerPromoInput",
      className: "bg-white border border-sage-300 rounded-xl px-3 py-1.5 text-xs flex-1 uppercase focus:outline-none"
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        const val = document.getElementById("drawerPromoInput")?.value?.toUpperCase();
        if (val === "WELCOME10") {
          setAppliedPromo("WELCOME10");
          onShowToast("10% Welcome discount applied!");
        } else onShowToast("Invalid code. Try WELCOME10");
      },
      className: "px-3 py-1.5 bg-sage-800 text-white rounded-xl text-xs font-medium"
    },
    "Apply"
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-1 text-xs text-sage-600" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Subtotal:"), /* @__PURE__ */ React.createElement("span", null, formatPrice(rawSubtotal))), discount > 0 && /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-emerald-700" }, /* @__PURE__ */ React.createElement("span", null, "Discount:"), /* @__PURE__ */ React.createElement("span", null, "-", formatPrice(discount))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Shipping:"), /* @__PURE__ */ React.createElement("span", null, shipping === 0 ? "FREE" : formatPrice(shipping))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between font-bold text-sage-900 pt-1 border-t text-sm" }, /* @__PURE__ */ React.createElement("span", null, "Total:"), /* @__PURE__ */ React.createElement("span", { className: "font-editorial text-base" }, formatPrice(totalUSD)))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        onCloseCart();
        onOpenCheckout();
      },
      className: "w-full py-3.5 bg-sage-900 hover:bg-black text-white text-xs font-semibold rounded-2xl shadow-luxury transition"
    },
    "Proceed to White-Glove Checkout \u2192"
  ))))), isCheckoutOpen && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 bg-sage-950/75 backdrop-blur-md" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-sage-200 space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center border-b border-sage-100 pb-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-2xl font-medium text-sage-900" }, "White-Glove Order Checkout"), /* @__PURE__ */ React.createElement("button", { onClick: onCloseCheckout, className: "text-sage-400 hover:text-sage-700 text-xl font-bold" }, "\u2715")), /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-sage-50 rounded-2xl flex justify-between items-center text-xs" }, /* @__PURE__ */ React.createElement("span", { className: "text-sage-600 font-medium" }, "Order Total to Pay:"), /* @__PURE__ */ React.createElement("span", { className: "font-editorial text-xl font-bold text-sage-900" }, formatPrice(totalUSD))), /* @__PURE__ */ React.createElement("form", { onSubmit: (e) => {
    e.preventDefault();
    try {
      if (window.confetti) {
        window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ["#6D9087", "#53726A", "#D4AF37"] });
      }
    } catch (err) {
    }
    onShowToast("Order confirmed! Atelier tracking number generated.");
    onClearCart();
    onCloseCheckout();
  }, className: "space-y-3 text-xs" }, /* @__PURE__ */ React.createElement("input", { type: "text", required: true, placeholder: "Recipient Full Name", className: "w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-sage-900 focus:outline-none" }), /* @__PURE__ */ React.createElement("input", { type: "email", required: true, placeholder: "Notification Email", className: "w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-sage-900 focus:outline-none" }), /* @__PURE__ */ React.createElement("input", { type: "text", required: true, placeholder: "Delivery Street Address", className: "w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-sage-900 focus:outline-none" }), /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-white border border-sage-200 rounded-xl space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-sage-400 uppercase" }, "Payment Method (Bank-grade SSL)"), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-sage-700 font-mono" }, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4242 | 12/28")), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "w-full py-3.5 bg-sage-900 hover:bg-black text-white text-xs font-semibold rounded-2xl shadow-luxury transition" }, "Confirm & Place Order (", formatPrice(totalUSD), ")")))));
};
