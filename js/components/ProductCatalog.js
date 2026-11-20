window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.ProductCatalog = function ProductCatalog({
  products,
  categories,
  selectedCategory,
  onSelectCategory,
  wishlist,
  onToggleWishlist,
  onSelectProduct,
  onAddToCart,
  formatPrice
}) {
  return /* @__PURE__ */ React.createElement("section", { id: "catalog", className: "py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-4 mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-xs font-semibold tracking-widest uppercase text-sage-600" }, "Curated Catalog"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl font-editorial font-light text-sage-950" }, selectedCategory === "all" ? "All Bespoke Curations" : categories.find((c) => c.id === selectedCategory)?.name)), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-sage-500" }, "Showing ", /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-sage-900" }, products.length), " luxury gift curations")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onSelectCategory("all"),
      className: `px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition border ${selectedCategory === "all" ? "bg-sage-800 text-white border-sage-800" : "bg-white text-sage-700 border-sage-200"}`
    },
    "All (15 Collections)"
  ), categories.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c.id,
      onClick: () => onSelectCategory(c.id),
      className: `px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition border ${selectedCategory === c.id ? "bg-sage-800 text-white border-sage-800" : "bg-white text-sage-700 border-sage-200"}`
    },
    c.shortName
  )))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" }, products.map((p) => {
    const isSaved = wishlist.includes(p.id);
    return /* @__PURE__ */ React.createElement("div", { key: p.id, className: "bg-white rounded-3xl overflow-hidden border border-sage-200/90 shadow-sm hover:shadow-luxury transition flex flex-col justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "relative aspect-[4/3] bg-sage-50 overflow-hidden" }, /* @__PURE__ */ React.createElement("img", { src: p.image, alt: p.name, className: "w-full h-full object-cover hover:scale-105 transition duration-500" }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-3 left-3 flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("span", { className: "px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-semibold text-sage-900 uppercase tracking-wider" }, p.badge), p.isEmergencyReady && /* @__PURE__ */ React.createElement("span", { className: "px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-semibold" }, "\u26A1 Same-Day")), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => onToggleWishlist(p.id),
        className: `absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition ${isSaved ? "bg-rose-50 text-rose-500" : "bg-white/90 text-sage-600"}`
      },
      "\u2665"
    )), /* @__PURE__ */ React.createElement("div", { className: "p-5 space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between text-xs text-sage-500" }, /* @__PURE__ */ React.createElement("span", { className: "uppercase text-[10px] font-semibold text-sage-600" }, p.categoryName), /* @__PURE__ */ React.createElement("span", { className: "text-amber-500 font-bold" }, "\u2605 ", p.rating, " (", p.reviewsCount, ")")), /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-editorial font-medium text-sage-950" }, p.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-sage-600 line-clamp-2" }, p.shortDesc))), /* @__PURE__ */ React.createElement("div", { className: "p-5 pt-0 border-t border-sage-100 mt-2 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-sage-400 uppercase" }, "Complete Box"), /* @__PURE__ */ React.createElement("div", { className: "text-lg font-editorial font-bold text-sage-900" }, formatPrice(p.price))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => onSelectProduct(p),
        className: "px-3 py-2 rounded-xl border border-sage-200 text-sage-700 text-xs hover:bg-sage-50 transition"
      },
      "Customise"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => onAddToCart(p),
        className: "px-3.5 py-2 rounded-xl bg-sage-800 hover:bg-sage-900 text-white text-xs font-semibold shadow-sm transition"
      },
      "Add to Bag"
    ))));
  })));
};
