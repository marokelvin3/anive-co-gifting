window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.CategoriesMenu = function CategoriesMenu({
  isOpen,
  onToggle,
  categories,
  activeCategoryId,
  onSelectCategoryPage
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "fixed right-0 top-1/2 -translate-y-1/2 z-40" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggle,
      className: "bg-mred-600 hover:bg-mred-700 text-white py-3.5 px-3 rounded-l-2xl shadow-float flex flex-col items-center gap-2 transition duration-300 group border-l-2 border-t-2 border-b-2 border-mred-400/40",
      title: "Open Collections Menu",
      "aria-label": "Open 15 Categories Menu"
    },
    /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-accent-champagne animate-pulse" }),
    /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-semibold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 text-white/95" }, "Departments (15)"),
    /* @__PURE__ */ React.createElement("svg", { className: "w-4 h-4 text-white/80 group-hover:scale-110 transition", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }))
  )), isOpen && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-50 overflow-hidden" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: onToggle,
      className: "absolute inset-0 bg-mred-950/60 backdrop-blur-sm transition-opacity"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "fixed inset-y-0 right-0 max-w-full flex pl-10" }, /* @__PURE__ */ React.createElement("div", { className: "w-screen max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col border-l border-mred-100 menu-drawer-shadow" }, /* @__PURE__ */ React.createElement("div", { className: "p-5 border-b border-mred-100 flex items-center justify-between bg-mred-50/70" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "w-3 h-3 rounded-full bg-mred-600" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-xl font-medium text-mred-950" }, "The 15 Collections"), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-mred-700/80 font-medium" }, "Select a department to view its dedicated page"))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggle,
      className: "p-1.5 text-mred-400 hover:text-mred-800 hover:bg-mred-100 rounded-full transition text-lg font-bold",
      "aria-label": "Close menu"
    },
    "\u2715"
  )), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto p-4 space-y-2" }, categories.map((cat, idx) => {
    const isActive = activeCategoryId === cat.id;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: cat.id,
        onClick: () => {
          onSelectCategoryPage(cat.id);
          onToggle();
        },
        className: `w-full text-left p-3 rounded-2xl transition flex items-center gap-3.5 border ${isActive ? "bg-mred-50 border-mred-600 shadow-sm" : "bg-white hover:bg-mred-50/50 border-mred-100/70"}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-mred-200" }, /* @__PURE__ */ React.createElement("img", { src: cat.image, alt: cat.name, className: "w-full h-full object-cover" })),
      /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] tracking-wider uppercase font-semibold text-mred-500" }, "#", idx + 1, " \u2022 ", cat.itemCount), isActive && /* @__PURE__ */ React.createElement("span", { className: "px-2 py-0.5 rounded-full bg-mred-600 text-white text-[9px] font-bold" }, "Viewing")), /* @__PURE__ */ React.createElement("h4", { className: "text-xs font-bold text-mred-950 truncate mt-0.5" }, cat.name), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-mred-700/70 line-clamp-1" }, cat.tagline)),
      /* @__PURE__ */ React.createElement("span", { className: "text-mred-400 text-xs font-semibold" }, "\u2192")
    );
  })), /* @__PURE__ */ React.createElement("div", { className: "p-4 border-t border-mred-100 bg-mred-50/50 text-xs text-mred-800 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Looking for all collections?"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        onSelectCategoryPage("home");
        onToggle();
      },
      className: "font-semibold text-mred-700 hover:text-mred-950 underline"
    },
    "View Boutique Home \u2192"
  ))))));
};
