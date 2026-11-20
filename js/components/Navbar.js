window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.Navbar = function Navbar({
  currency,
  setCurrency,
  cartCount,
  wishlistCount,
  searchQuery,
  setSearchQuery,
  onOpenCart,
  onOpenBuilder,
  onOpenSourcing,
  onToggleMenu,
  onNavigateHome,
  onNavigateCategory
}) {
  const currencies = window.AniveConfig.currencies;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "bg-mred-800 text-mred-100 text-xs py-2 px-4 border-b border-mred-700/60" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mx-auto sm:mx-0" }, /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-mred-700 text-[10px] font-semibold uppercase tracking-wider text-mred-100" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-accent-champagne" }), " Atelier Curations"), /* @__PURE__ */ React.createElement("span", { className: "text-mred-100 hidden md:inline" }, "ANIVE.CO | GIFTING Atelier \u2022 Complimentary wax-sealed calligraphy card with every order \u2022 Worldwide Courier"), /* @__PURE__ */ React.createElement("span", { className: "text-mred-100 inline md:hidden" }, "Complimentary wax-sealed calligraphy card with every order")), /* @__PURE__ */ React.createElement("div", { className: "hidden sm:flex items-center gap-4 text-xs text-mred-200" }, /* @__PURE__ */ React.createElement("button", { onClick: onOpenSourcing, className: "hover:text-white transition" }, "Corporate & Sourcing Concierge"), /* @__PURE__ */ React.createElement("span", null, "|"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: currency,
      onChange: (e) => setCurrency(e.target.value),
      className: "bg-transparent text-mred-100 text-xs font-medium cursor-pointer focus:outline-none"
    },
    Object.keys(currencies).map((c) => /* @__PURE__ */ React.createElement("option", { key: c, value: c, className: "bg-mred-900 text-white" }, currencies[c].label))
  )))), /* @__PURE__ */ React.createElement("header", { className: "sticky top-0 z-40 glass-nav border-b border-mred-100 shadow-soft py-3.5 px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto flex items-center justify-between gap-4" }, /* @__PURE__ */ React.createElement("button", { onClick: onNavigateHome, className: "flex flex-col group text-left" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center tracking-[0.25em] font-light text-xl sm:text-2xl text-mred-950 font-editorial" }, "ANIVE.CO", /* @__PURE__ */ React.createElement("span", { className: "mx-2 text-xs tracking-widest font-sans font-medium text-mred-400" }, "|"), /* @__PURE__ */ React.createElement("span", { className: "text-xs sm:text-sm tracking-[0.2em] font-sans font-semibold text-mred-600 uppercase" }, "GIFTING")), /* @__PURE__ */ React.createElement("span", { className: "text-[9px] tracking-[0.3em] uppercase text-mred-500 font-sans hidden sm:block" }, "Atelier of Calm Luxury & Curation")), /* @__PURE__ */ React.createElement("nav", { className: "hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-mred-900" }, /* @__PURE__ */ React.createElement("button", { onClick: onNavigateHome, className: "hover:text-mred-600 transition" }, "Home"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggleMenu,
      className: "flex items-center gap-1.5 hover:text-mred-600 transition text-mred-900 font-semibold"
    },
    /* @__PURE__ */ React.createElement("span", null, "All 15 Departments"),
    /* @__PURE__ */ React.createElement("span", { className: "bg-mred-100 text-mred-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold" }, "15 Pages")
  ), /* @__PURE__ */ React.createElement("button", { onClick: onOpenBuilder, className: "flex items-center gap-1.5 hover:text-mred-600 transition text-mred-900" }, /* @__PURE__ */ React.createElement("span", null, "Custom Box Studio"), /* @__PURE__ */ React.createElement("span", { className: "bg-mred-100 text-mred-700 text-[10px] px-1.5 py-0.2 rounded font-semibold uppercase" }, "Interactive")), /* @__PURE__ */ React.createElement("button", { onClick: () => onNavigateCategory("emergency"), className: "hover:text-mred-600 transition" }, "Emergency Gifting"), /* @__PURE__ */ React.createElement("button", { onClick: () => onNavigateCategory("corporate"), className: "hover:text-mred-600 transition" }, "Corporate & Volume"), /* @__PURE__ */ React.createElement("a", { href: "#contact", className: "hover:text-mred-600 transition" }, "Contact Us")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "relative hidden sm:block" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: searchQuery,
      onChange: (e) => setSearchQuery(e.target.value),
      placeholder: "Search departments...",
      className: "w-36 md:w-52 bg-white border border-mred-200 rounded-full px-3 py-1.5 text-xs text-mred-950 focus:outline-none focus:border-mred-600"
    }
  ), searchQuery && /* @__PURE__ */ React.createElement("button", { onClick: () => setSearchQuery(""), className: "absolute right-2.5 top-2 text-mred-400 hover:text-mred-700 text-xs" }, "\u2715")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggleMenu,
      className: "p-2 text-mred-700 hover:text-mred-950 hover:bg-mred-50 rounded-full transition flex items-center gap-1 text-xs font-semibold",
      title: "Open Categories Menu"
    },
    /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5 text-mred-600", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" })),
    /* @__PURE__ */ React.createElement("span", { className: "hidden sm:inline" }, "Menu")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        const el = document.getElementById("catalog");
        el?.scrollIntoView({ behavior: "smooth" });
      },
      className: "p-2 text-mred-700 hover:text-mred-900 hover:bg-mred-50 rounded-full transition relative",
      title: `${wishlistCount} saved items`
    },
    /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5", fill: wishlistCount > 0 ? "#C62828" : "none", stroke: "currentColor", strokeWidth: "1.75", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" })),
    wishlistCount > 0 && /* @__PURE__ */ React.createElement("span", { className: "absolute -top-0.5 -right-0.5 bg-mred-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" }, wishlistCount)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onOpenCart,
      className: "flex items-center gap-2 bg-mred-600 hover:bg-mred-700 text-white px-3.5 py-2 rounded-full text-xs font-medium transition shadow-sm"
    },
    /* @__PURE__ */ React.createElement("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" })),
    /* @__PURE__ */ React.createElement("span", { className: "hidden sm:inline" }, "Bag"),
    /* @__PURE__ */ React.createElement("span", { className: "bg-mred-700 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold" }, cartCount)
  )))));
};
