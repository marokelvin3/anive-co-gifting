window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.Categories = function Categories({
  selectedCategory,
  onSelectCategory,
  onOpenBuilder,
  onOpenSourcing
}) {
  const categories = window.AniveData.CATEGORIES || [];
  return /* @__PURE__ */ React.createElement("section", { id: "collections", className: "py-16 bg-[#F4F7F6]/60 border-t border-b border-sage-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-2xl mx-auto space-y-2 mb-10" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold tracking-widest uppercase text-sage-600" }, "The 15 Gifting Offerings"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-sage-950" }, "Thoughtfully Designed for Every Chapter"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-sage-600 font-light" }, "Explore each of our 15 specialized collections, styled in calm eucalyptus, oyster, and cool slate palettes.")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, categories.map((cat, idx) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: cat.id,
      onClick: () => {
        if (cat.id === "custom") onOpenBuilder();
        else if (cat.id === "sourcing") onOpenSourcing();
        else {
          onSelectCategory(cat.id);
          const el = document.getElementById("catalog");
          el?.scrollIntoView({ behavior: "smooth" });
        }
      },
      className: `group bg-white rounded-2xl overflow-hidden border cursor-pointer transition shadow-sm hover:shadow-soft ${selectedCategory === cat.id ? "border-sage-700 ring-2 ring-sage-600/30" : "border-sage-200/80 hover:border-sage-400"}`
    },
    /* @__PURE__ */ React.createElement("div", { className: "relative aspect-[16/10] overflow-hidden bg-sage-100" }, /* @__PURE__ */ React.createElement("img", { src: cat.image, alt: cat.name, className: "w-full h-full object-cover group-hover:scale-105 transition duration-500" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }), /* @__PURE__ */ React.createElement("span", { className: "absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-semibold text-sage-800 uppercase tracking-wider" }, cat.badge), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-3 left-3 right-3 text-white" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] tracking-wider uppercase text-sage-200" }, "Department #", idx + 1), /* @__PURE__ */ React.createElement("h3", { className: "text-base sm:text-lg font-editorial font-medium leading-snug" }, cat.name))),
    /* @__PURE__ */ React.createElement("div", { className: "p-4 space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-sage-600 line-clamp-2 leading-relaxed" }, cat.description), /* @__PURE__ */ React.createElement("div", { className: "pt-2 border-t border-sage-100 flex items-center justify-between text-[11px]" }, /* @__PURE__ */ React.createElement("span", { className: "text-sage-500 font-medium" }, cat.itemCount), /* @__PURE__ */ React.createElement("span", { className: "text-sage-700 font-semibold group-hover:underline" }, cat.id === "custom" ? "\u2728 Open Studio" : cat.id === "sourcing" ? "Request Concierge" : "View Curations \u2192")))
  )))));
};
