window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.CategoryPage = function CategoryPage({
  category,
  categories,
  products,
  onNavigateHome,
  onNavigateCategory,
  onSelectProduct,
  onAddToCart,
  onOpenBuilder,
  onOpenSourcing,
  wishlist,
  onToggleWishlist,
  formatPrice,
  // Corporate calculator props for corporate page
  corpQty,
  setCorpQty,
  corpTier,
  setCorpTier,
  corpDeboss,
  setCorpDeboss,
  corpRibbon,
  setCorpRibbon,
  corpTotal,
  corpUnitDiscounted,
  corpDiscountRate,
  onShowToast
}) {
  if (!category) return null;
  const categoryProducts = products.filter((p) => p.categoryId === category.id);
  const currentIndex = categories.findIndex((c) => c.id === category.id);
  const prevCategory = categories[currentIndex > 0 ? currentIndex - 1 : categories.length - 1];
  const nextCategory = categories[currentIndex < categories.length - 1 ? currentIndex + 1 : 0];
  const CorporateSection = window.AniveComponents.CorporateSection;
  const EmergencyBanner = window.AniveComponents.EmergencyBanner;
  return /* @__PURE__ */ React.createElement("div", { className: "py-8 page-transition" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" }, /* @__PURE__ */ React.createElement("nav", { className: "flex items-center gap-2 text-xs text-mred-600 font-medium" }, /* @__PURE__ */ React.createElement("button", { onClick: onNavigateHome, className: "hover:text-[#59171B] transition" }, "Home"), /* @__PURE__ */ React.createElement("span", { className: "text-mred-300" }, "/"), /* @__PURE__ */ React.createElement("button", { onClick: onNavigateHome, className: "hover:text-[#59171B] transition" }, "Departments"), /* @__PURE__ */ React.createElement("span", { className: "text-mred-300" }, "/"), /* @__PURE__ */ React.createElement("span", { className: "text-[#59171B] font-bold" }, category.name)), /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl bg-white border border-mred-100 shadow-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-7 p-8 sm:p-12 space-y-5 flex flex-col justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "px-3 py-1 rounded-full bg-[#FED7B8]/50 text-[#59171B] text-[10px] font-bold uppercase tracking-wider border border-[#FED7B8]" }, category.badge), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-mred-500 font-medium" }, "Department #", currentIndex + 1, " of 15")), /* @__PURE__ */ React.createElement("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-mred-950 leading-tight" }, category.name), /* @__PURE__ */ React.createElement("p", { className: "text-sm sm:text-base text-mred-800/80 font-light leading-relaxed" }, category.heroSubtitle || category.description), category.features && /* @__PURE__ */ React.createElement("div", { className: "pt-4 border-t border-mred-100 space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-[#59171B] uppercase tracking-wider" }, "Bespoke Atelier Touches:"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-1.5 text-xs text-mred-700" }, category.features.map((feat, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-[#59171B] shrink-0" }), /* @__PURE__ */ React.createElement("span", null, feat)))))), /* @__PURE__ */ React.createElement("div", { className: "pt-6 flex flex-wrap items-center gap-3" }, category.id === "custom" ? /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onOpenBuilder,
      className: "px-6 py-3 rounded-full bg-[#59171B] hover:bg-[#471015] text-[#FED7B8] text-xs font-semibold shadow-luxury transition"
    },
    "\u2728 Launch Custom Box Studio"
  ) : category.id === "sourcing" ? /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onOpenSourcing,
      className: "px-6 py-3 rounded-full bg-[#59171B] hover:bg-[#471015] text-[#FED7B8] text-xs font-semibold shadow-luxury transition"
    },
    "Request Private Concierge Brief \u2192"
  ) : /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onOpenBuilder,
      className: "px-6 py-3 rounded-full bg-[#59171B] hover:bg-[#471015] text-[#FED7B8] text-xs font-semibold shadow-luxury transition"
    },
    "Design Custom Box for this Occasion \u2192"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onNavigateHome,
      className: "px-5 py-3 rounded-full bg-white text-mred-800 border border-mred-200 hover:bg-mred-50 text-xs font-semibold transition"
    },
    "\u2190 Back to Boutique Home"
  ))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-5 relative aspect-[4/3] lg:aspect-auto bg-mred-100 min-h-[300px]" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: category.image,
      alt: category.name,
      className: "w-full h-full object-cover"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-[#210507]/60 via-transparent to-transparent" }), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-6 left-6 right-6 text-white" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] tracking-widest uppercase text-[#FED7B8] font-bold block" }, "Exclusive Department"), /* @__PURE__ */ React.createElement("div", { className: "text-xl font-editorial" }, category.tagline)))), category.id === "corporate" && CorporateSection && /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl overflow-hidden border border-mred-200 shadow-sm" }, /* @__PURE__ */ React.createElement(
    CorporateSection,
    {
      corpQty,
      setCorpQty,
      corpTier,
      setCorpTier,
      corpDeboss,
      setCorpDeboss,
      corpRibbon,
      setCorpRibbon,
      corpTotal,
      corpUnitDiscounted,
      corpDiscountRate,
      formatPrice,
      onShowToast
    }
  )), category.id === "emergency" && EmergencyBanner && /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl overflow-hidden border border-mred-200 shadow-sm" }, /* @__PURE__ */ React.createElement(
    EmergencyBanner,
    {
      onFilterEmergency: () => {
      },
      onShowToast
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-end border-b border-mred-100 pb-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-xs uppercase tracking-wider font-semibold text-[#59171B]" }, "Department Offerings"), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl sm:text-3xl font-editorial font-light text-mred-950" }, "Curated Boxes for ", category.shortName)), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-mred-500 font-medium" }, categoryProducts.length, " signature designs available")), categoryProducts.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "py-16 text-center bg-white rounded-3xl border border-mred-100 p-8 space-y-4" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-editorial text-mred-900" }, "Custom Order Only"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-600 max-w-md mx-auto" }, "This department specializes in bespoke client curations. Use our interactive builder or concierge brief to commission your order."), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: category.id === "sourcing" ? onOpenSourcing : onOpenBuilder,
      className: "px-6 py-2.5 rounded-full bg-[#59171B] text-[#FED7B8] text-xs font-semibold shadow-sm"
    },
    "Commission Bespoke Order \u2192"
  )) : /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" }, categoryProducts.map((p) => {
    const isSaved = wishlist.includes(p.id);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: p.id,
        className: "bg-white rounded-3xl overflow-hidden border border-mred-100 shadow-sm hover:shadow-luxury transition flex flex-col justify-between"
      },
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "relative aspect-[4/3] bg-mred-50 overflow-hidden" }, /* @__PURE__ */ React.createElement(
        "img",
        {
          src: p.image,
          alt: p.name,
          className: "w-full h-full object-cover hover:scale-105 transition duration-500"
        }
      ), /* @__PURE__ */ React.createElement("span", { className: "absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-semibold text-[#59171B] uppercase tracking-wider shadow-sm" }, p.badge), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onToggleWishlist(p.id),
          className: `absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition ${isSaved ? "bg-rose-50 text-rose-500" : "bg-white/90 text-mred-600"}`
        },
        "\u2665"
      )), /* @__PURE__ */ React.createElement("div", { className: "p-5 space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-editorial font-medium text-mred-950" }, p.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-700/80 line-clamp-2" }, p.shortDesc), /* @__PURE__ */ React.createElement("div", { className: "pt-2 border-t border-mred-50 space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase font-bold text-mred-400" }, "Included:"), p.contents.slice(0, 3).map((item, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "text-[11px] text-mred-800/80 truncate" }, "\u2022 ", item))))),
      /* @__PURE__ */ React.createElement("div", { className: "p-5 pt-0 border-t border-mred-100 mt-2 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-mred-400 uppercase" }, "Complete Box"), /* @__PURE__ */ React.createElement("div", { className: "text-lg font-editorial font-bold text-[#59171B]" }, formatPrice(p.price))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onSelectProduct(p),
          className: "px-3 py-2 rounded-xl border border-mred-200 text-mred-800 text-xs hover:bg-mred-50 transition"
        },
        "Customise"
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onAddToCart(p),
          className: "px-3.5 py-2 rounded-xl bg-[#59171B] hover:bg-[#471015] text-[#FED7B8] text-xs font-semibold shadow-sm transition"
        },
        "Add to Bag"
      )))
    );
  }))), /* @__PURE__ */ React.createElement("div", { className: "pt-10 border-t border-mred-200 flex flex-col sm:flex-row items-center justify-between gap-4" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onNavigateCategory(prevCategory.id),
      className: "w-full sm:w-auto p-4 rounded-2xl bg-white border border-mred-100 hover:border-[#59171B] transition text-left flex items-center gap-3 shadow-sm group"
    },
    /* @__PURE__ */ React.createElement("span", { className: "text-lg text-[#59171B] group-hover:-translate-x-1 transition-transform" }, "\u2190"),
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase text-mred-400 font-bold" }, "Previous Department"), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-mred-950" }, prevCategory.name))
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onNavigateCategory(nextCategory.id),
      className: "w-full sm:w-auto p-4 rounded-2xl bg-white border border-mred-100 hover:border-[#59171B] transition text-right flex items-center gap-3 justify-end shadow-sm group"
    },
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase text-mred-400 font-bold" }, "Next Department"), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-mred-950" }, nextCategory.name)),
    /* @__PURE__ */ React.createElement("span", { className: "text-lg text-[#59171B] group-hover:translate-x-1 transition-transform" }, "\u2192")
  ))));
};
