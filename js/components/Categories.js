window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.Categories = function Categories({
  categories,
  onSelectCategoryPage
}) {
  return /* @__PURE__ */ React.createElement("section", { id: "departments", className: "py-14 bg-mred-50/40 border-t border-b border-mred-100" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-2xl mx-auto space-y-2.5 mb-10" }, /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mred-100 text-[#59171B] text-[10px] font-bold tracking-widest uppercase border border-mred-200" }, "The 15 Gifting Departments"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-mred-950" }, "Dedicated Curations for Every Occasion"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-mred-800/80 font-light" }, "Select any department below or use the Menu tab on the right to enter its dedicated page with complete unboxing details and offerings.")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, categories.map((cat, idx) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: cat.id,
      onClick: () => onSelectCategoryPage(cat.id),
      className: "group bg-white rounded-2xl overflow-hidden border border-mred-100/90 hover:border-[#59171B] cursor-pointer transition duration-300 shadow-sm hover:shadow-luxury flex flex-col justify-between"
    },
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "relative aspect-[16/10] overflow-hidden bg-mred-50" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: cat.image,
        alt: cat.name,
        className: "w-full h-full object-cover group-hover:scale-105 transition duration-500",
        loading: "lazy"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-[#210507]/75 via-transparent to-transparent" }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-3 left-3 flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-semibold text-[#59171B] uppercase tracking-wider shadow-sm" }, cat.badge)), /* @__PURE__ */ React.createElement("span", { className: "absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#59171B] text-[#FED7B8] text-[9px] font-mono font-bold shadow-sm" }, "#", idx + 1), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-3 left-3 right-3 text-white" }, /* @__PURE__ */ React.createElement("h3", { className: "text-base sm:text-lg font-editorial font-medium leading-snug" }, cat.name))), /* @__PURE__ */ React.createElement("div", { className: "p-4 space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-800/80 line-clamp-2 leading-relaxed" }, cat.tagline || cat.description))),
    /* @__PURE__ */ React.createElement("div", { className: "p-4 pt-0" }, /* @__PURE__ */ React.createElement("div", { className: "pt-2 border-t border-mred-50 flex items-center justify-between text-[11px]" }, /* @__PURE__ */ React.createElement("span", { className: "text-mred-500 font-semibold" }, cat.itemCount || "Curated Suite"), /* @__PURE__ */ React.createElement("span", { className: "text-[#59171B] font-bold group-hover:underline flex items-center gap-1" }, "Open Department Page \u2192")))
  )))));
};
