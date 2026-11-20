window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.CategoriesMenu = function CategoriesMenu({
  isOpen,
  onToggle,
  categories,
  activeCategoryId,
  onSelectCategoryPage,
  onOpenBuilder,
  onOpenSourcing
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "fixed right-0 top-1/2 -translate-y-1/2 z-40" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggle,
      className: "bg-[#59171B] hover:bg-[#471015] text-[#FED7B8] py-3.5 px-3 rounded-l-2xl shadow-float flex flex-col items-center gap-2 transition duration-300 group border-l-2 border-t-2 border-b-2 border-[#FED7B8]/50 active:scale-95",
      title: "Open Navigation Menu & 15 Department Pages",
      "aria-label": "Open Menu and 15 Departments"
    },
    /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-[#FED7B8] animate-pulse" }),
    /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-semibold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 text-[#FED7B8]" }, "Menu \u2022 Departments (15)"),
    /* @__PURE__ */ React.createElement("svg", { className: "w-4 h-4 text-[#FED7B8]/80 group-hover:scale-110 transition", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }))
  )), isOpen && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-50 overflow-hidden" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: onToggle,
      className: "absolute inset-0 bg-[#210507]/60 backdrop-blur-sm transition-opacity duration-300"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10" }, /* @__PURE__ */ React.createElement("div", { className: "w-screen max-w-md sm:max-w-lg bg-white shadow-2xl flex flex-col border-l border-[#FED7B8]/60 menu-drawer-shadow animate-drawer-in" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 sm:p-5 border-b border-mred-100 flex items-center justify-between bg-[#FFF9F5]" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-8 h-8 rounded-full bg-[#59171B] text-[#FED7B8] flex items-center justify-center font-bold text-xs border border-[#FED7B8]" }, "15"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-xl font-medium text-[#210507]" }, "ANIVE.CO Atelier Menu"), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-[#59171B] font-medium" }, "Navigation & 15 Dedicated Department Pages"))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggle,
      className: "p-2 text-mred-400 hover:text-[#59171B] hover:bg-[#FED7B8]/30 rounded-full transition text-lg font-bold",
      "aria-label": "Close menu"
    },
    "\u2715"
  )), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto p-4 sm:p-5 space-y-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold uppercase tracking-widest text-[#8F2830] mb-2.5" }, "Main Navigation"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        onSelectCategoryPage("home");
        onToggle();
      },
      className: "flex items-center justify-between p-3 rounded-xl bg-mred-50/70 hover:bg-[#FED7B8]/30 border border-mred-100 text-left transition group active:scale-[0.99]"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-base" }, "\u{1F3E1}"), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-mred-950 group-hover:text-[#59171B]" }, "Home")),
    /* @__PURE__ */ React.createElement("span", { className: "text-xs text-mred-400 group-hover:translate-x-0.5 transition" }, "\u2192")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        onSelectCategoryPage("home");
        setTimeout(() => {
          const el = document.getElementById("departments");
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        onToggle();
      },
      className: "flex items-center justify-between p-3 rounded-xl bg-mred-50/70 hover:bg-[#FED7B8]/30 border border-mred-100 text-left transition group active:scale-[0.99]"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-base" }, "\u2728"), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-mred-950 group-hover:text-[#59171B]" }, "All Departments")),
    /* @__PURE__ */ React.createElement("span", { className: "bg-[#59171B] text-[#FED7B8] text-[9px] px-1.5 py-0.5 rounded-full font-bold" }, "15 Pages")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        if (onOpenBuilder) onOpenBuilder();
        onToggle();
      },
      className: "flex items-center justify-between p-3 rounded-xl bg-mred-50/70 hover:bg-[#FED7B8]/30 border border-mred-100 text-left transition group active:scale-[0.99]"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-base" }, "\u{1F381}"), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-mred-950 group-hover:text-[#59171B]" }, "Custom Box Studio")),
    /* @__PURE__ */ React.createElement("span", { className: "bg-[#FED7B8] text-[#59171B] text-[9px] px-1.5 py-0.5 rounded font-semibold uppercase" }, "Interactive")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        onSelectCategoryPage("emergency");
        onToggle();
      },
      className: "flex items-center justify-between p-3 rounded-xl bg-mred-50/70 hover:bg-[#FED7B8]/30 border border-mred-100 text-left transition group active:scale-[0.99]"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-base" }, "\u26A1"), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-mred-950 group-hover:text-[#59171B]" }, "Emergency Gifting")),
    /* @__PURE__ */ React.createElement("span", { className: "text-xs text-mred-400 group-hover:translate-x-0.5 transition" }, "\u2192")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        onSelectCategoryPage("corporate");
        onToggle();
      },
      className: "flex items-center justify-between p-3 rounded-xl bg-mred-50/70 hover:bg-[#FED7B8]/30 border border-mred-100 text-left transition group active:scale-[0.99]"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-base" }, "\u{1F3E2}"), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-mred-950 group-hover:text-[#59171B]" }, "Corporate Gifting")),
    /* @__PURE__ */ React.createElement("span", { className: "text-xs text-mred-400 group-hover:translate-x-0.5 transition" }, "\u2192")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        const el = document.getElementById("contact");
        el?.scrollIntoView({ behavior: "smooth" });
        onToggle();
      },
      className: "flex items-center justify-between p-3 rounded-xl bg-mred-50/70 hover:bg-[#FED7B8]/30 border border-mred-100 text-left transition group active:scale-[0.99]"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-base" }, "\u{1F48C}"), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-mred-950 group-hover:text-[#59171B]" }, "Contact Us")),
    /* @__PURE__ */ React.createElement("span", { className: "text-xs text-mred-400 group-hover:translate-x-0.5 transition" }, "\u2192")
  ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] font-bold uppercase tracking-widest text-[#8F2830]" }, "The 15 Gifting Departments (Dedicated Pages)"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] font-semibold text-[#59171B] bg-[#FED7B8]/40 px-2 py-0.5 rounded-full border border-[#FED7B8]" }, "15 Standalone Pages")), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, categories.map((cat, idx) => {
    const isActive = activeCategoryId === cat.id;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: cat.id,
        onClick: () => {
          onSelectCategoryPage(cat.id);
          onToggle();
        },
        className: `w-full text-left p-3 rounded-2xl transition flex items-center gap-3.5 border active:scale-[0.99] ${isActive ? "bg-[#FFF9F5] border-[#59171B] shadow-sm ring-1 ring-[#59171B]/30" : "bg-white hover:bg-mred-50/50 border-mred-100 hover:border-mred-300"}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-mred-200 relative bg-mred-50" }, /* @__PURE__ */ React.createElement(
        "img",
        {
          src: cat.image,
          alt: cat.name,
          className: "w-full h-full object-cover",
          loading: "lazy"
        }
      ), /* @__PURE__ */ React.createElement("span", { className: "absolute bottom-0 right-0 bg-[#210507]/80 text-[#FED7B8] text-[8px] font-mono px-1 rounded-tl" }, "#", idx + 1)),
      /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] tracking-wider uppercase font-semibold text-mred-500" }, cat.itemCount || "Curated Suite"), isActive && /* @__PURE__ */ React.createElement("span", { className: "px-2 py-0.5 rounded-full bg-[#59171B] text-[#FED7B8] text-[9px] font-bold" }, "Viewing Page")), /* @__PURE__ */ React.createElement("h4", { className: "text-xs font-bold text-mred-950 truncate mt-0.5" }, cat.name), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-mred-700/70 line-clamp-1" }, cat.tagline)),
      /* @__PURE__ */ React.createElement("span", { className: "text-mred-400 group-hover:text-[#59171B] text-xs font-semibold" }, "\u2192")
    );
  })))), /* @__PURE__ */ React.createElement("div", { className: "p-4 border-t border-mred-100 bg-[#FFF9F5] text-xs text-mred-800 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Looking for boutique home?"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        onSelectCategoryPage("home");
        onToggle();
      },
      className: "font-semibold text-[#59171B] hover:underline"
    },
    "View Boutique Home \u2192"
  ))))));
};
