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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "bg-[#59171B] text-[#FED7B8] text-xs py-2 px-4 border-b border-[#471015]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mx-auto sm:mx-0" }, /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#711E24] text-[10px] font-semibold uppercase tracking-wider text-[#FED7B8] border border-[#FED7B8]/30" }, /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-[#FED7B8] animate-pulse" }), " Atelier Curations"), /* @__PURE__ */ React.createElement("span", { className: "text-[#FED7B8] hidden md:inline font-light" }, "ANIVE.CO | GIFTING Atelier \u2022 Complimentary wax-sealed calligraphy card with every order \u2022 Worldwide Courier"), /* @__PURE__ */ React.createElement("span", { className: "text-[#FED7B8] inline md:hidden font-light" }, "Complimentary wax-sealed calligraphy card with every order")), /* @__PURE__ */ React.createElement("div", { className: "hidden sm:flex items-center gap-4 text-xs text-[#FED7B8]/80" }, /* @__PURE__ */ React.createElement("button", { onClick: onOpenSourcing, className: "hover:text-white transition" }, "Corporate & Sourcing Concierge"), /* @__PURE__ */ React.createElement("span", { className: "text-[#FED7B8]/40" }, "|"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: currency,
      onChange: (e) => setCurrency(e.target.value),
      className: "bg-transparent text-[#FED7B8] text-xs font-medium cursor-pointer focus:outline-none"
    },
    Object.keys(currencies).map((c) => /* @__PURE__ */ React.createElement("option", { key: c, value: c, className: "bg-[#340A0E] text-white" }, currencies[c].label))
  )))), /* @__PURE__ */ React.createElement("header", { className: "sticky top-0 z-40 glass-nav border-b border-mred-100 shadow-soft py-3 px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto flex items-center justify-between gap-4" }, /* @__PURE__ */ React.createElement("button", { onClick: onNavigateHome, className: "flex flex-col group text-left" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center tracking-[0.25em] font-light text-xl sm:text-2xl text-[#210507] font-editorial" }, "ANIVE.CO", /* @__PURE__ */ React.createElement("span", { className: "mx-2 text-xs tracking-widest font-sans font-medium text-[#8F2830]" }, "|"), /* @__PURE__ */ React.createElement("span", { className: "text-xs sm:text-sm tracking-[0.2em] font-sans font-semibold text-[#59171B] uppercase" }, "GIFTING")), /* @__PURE__ */ React.createElement("span", { className: "text-[9px] tracking-[0.3em] uppercase text-[#8F2830] font-sans hidden sm:block" }, "Atelier of Calm Luxury & Curation")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "relative hidden sm:block" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: searchQuery,
      onChange: (e) => setSearchQuery(e.target.value),
      placeholder: "Search departments...",
      className: "w-36 md:w-52 bg-white border border-mred-200 rounded-full px-3.5 py-1.5 text-xs text-mred-950 focus:outline-none focus:border-[#59171B] transition placeholder:text-mred-300"
    }
  ), searchQuery && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setSearchQuery(""),
      className: "absolute right-2.5 top-2 text-mred-400 hover:text-mred-700 text-xs"
    },
    "\u2715"
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        const el = document.getElementById("departments") || document.getElementById("catalog");
        el?.scrollIntoView({ behavior: "smooth" });
      },
      className: "p-2 text-mred-700 hover:text-[#59171B] hover:bg-mred-50 rounded-full transition relative",
      title: `${wishlistCount} saved items`
    },
    /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5", fill: wishlistCount > 0 ? "#59171B" : "none", stroke: "currentColor", strokeWidth: "1.75", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" })),
    wishlistCount > 0 && /* @__PURE__ */ React.createElement("span", { className: "absolute -top-0.5 -right-0.5 bg-[#59171B] text-[#FED7B8] text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" }, wishlistCount)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onOpenCart,
      className: "flex items-center gap-2 bg-[#59171B] hover:bg-[#471015] text-[#FED7B8] px-3.5 py-2 rounded-full text-xs font-medium transition shadow-sm"
    },
    /* @__PURE__ */ React.createElement("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" })),
    /* @__PURE__ */ React.createElement("span", { className: "hidden sm:inline" }, "Bag"),
    /* @__PURE__ */ React.createElement("span", { className: "bg-[#471015] text-[#FED7B8] text-[10px] px-1.5 py-0.5 rounded-full font-bold" }, cartCount)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggleMenu,
      className: "flex items-center gap-2 bg-[#FED7B8]/40 hover:bg-[#FED7B8]/70 border border-[#FED7B8] text-[#59171B] px-3.5 py-2 rounded-full text-xs font-semibold transition shadow-sm",
      title: "Open Navigation Menu & 15 Department Pages"
    },
    /* @__PURE__ */ React.createElement("svg", { className: "w-4 h-4 text-[#59171B]", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" })),
    /* @__PURE__ */ React.createElement("span", null, "Menu"),
    /* @__PURE__ */ React.createElement("span", { className: "bg-[#59171B] text-[#FED7B8] text-[10px] px-1.5 py-0.5 rounded-full font-bold" }, "15")
  )))));
};
