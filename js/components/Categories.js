window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.Categories = function Categories({
  categories,
  onSelectCategoryPage,
  onOpenBuilder,
  onOpenSourcing
}) {
  return /* @__PURE__ */ React.createElement("section", { id: "collections", className: "py-16 bg-mred-50/40 border-t border-b border-mred-100" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-2xl mx-auto space-y-2 mb-10" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold tracking-widest uppercase text-mred-600" }, "The 15 Gifting Departments"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-mred-950" }, "Thoughtfully Designed for Every Chapter"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-mred-800/80 font-light" }, "Every department features its own dedicated collection page with tailored curation details and bespoke offerings.")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, categories.map((cat, idx) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: cat.id,
      onClick: () => onSelectCategoryPage(cat.id),
      className: "group bg-white rounded-2xl overflow-hidden border border-mred-100/90 hover:border-mred-400 cursor-pointer transition shadow-sm hover:shadow-soft"
    },
    /* @__PURE__ */ React.createElement("div", { className: "relative aspect-[16/10] overflow-hidden bg-mred-50" }, /* @__PURE__ */ React.createElement("img", { src: cat.image, alt: cat.name, className: "w-full h-full object-cover group-hover:scale-105 transition duration-500" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-mred-950/70 via-transparent to-transparent" }), /* @__PURE__ */ React.createElement("span", { className: "absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-semibold text-mred-900 uppercase tracking-wider shadow-sm" }, cat.badge), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-3 left-3 right-3 text-white" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] tracking-wider uppercase text-mred-200" }, "Department #", idx + 1), /* @__PURE__ */ React.createElement("h3", { className: "text-base sm:text-lg font-editorial font-medium leading-snug" }, cat.name))),
    /* @__PURE__ */ React.createElement("div", { className: "p-4 space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-800/80 line-clamp-2 leading-relaxed" }, cat.description), /* @__PURE__ */ React.createElement("div", { className: "pt-2 border-t border-mred-50 flex items-center justify-between text-[11px]" }, /* @__PURE__ */ React.createElement("span", { className: "text-mred-500 font-medium" }, cat.itemCount), /* @__PURE__ */ React.createElement("span", { className: "text-mred-700 font-semibold group-hover:underline flex items-center gap-1" }, "Open Department Page \u2192")))
  )))));
};
