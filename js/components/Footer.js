window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.Footer = function Footer({
  categories,
  onSelectCategoryPage,
  onShowToast
}) {
  return /* @__PURE__ */ React.createElement("footer", { className: "bg-[#210507] text-[#FED7B8] pt-16 pb-12 border-t border-[#340A0E]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" }, /* @__PURE__ */ React.createElement("div", { className: "pb-8 border-b border-[#340A0E] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-6 space-y-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-editorial tracking-[0.2em] font-light text-white" }, "ANIVE.CO ", /* @__PURE__ */ React.createElement("span", { className: "text-sm font-sans font-medium text-[#FED7B8]/60" }, "|"), " ", /* @__PURE__ */ React.createElement("span", { className: "text-sm font-sans font-semibold text-[#FED7B8]" }, "GIFTING")), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#FED7B8]/75 font-light" }, "Curating moments of tranquil beauty through thoughtful objects, custom hot-foil monograms, and handwritten calligraphy.")), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-6 flex gap-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      placeholder: "Join Atelier Journal for 10% off...",
      className: "bg-[#340A0E] border border-[#59171B] rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-[#FED7B8]/40 flex-1 focus:outline-none focus:border-[#FED7B8]"
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onShowToast("Subscribed! Welcome code: WELCOME10"),
      className: "px-5 py-2 rounded-xl bg-[#FED7B8] text-[#59171B] text-xs font-bold hover:bg-white transition"
    },
    "Join"
  ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-xs font-semibold uppercase tracking-widest text-[#FED7B8] mb-3" }, "All 15 Specialized Department Pages"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-xs" }, categories.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c.id,
      onClick: () => onSelectCategoryPage(c.id),
      className: "text-left text-[#FED7B8]/70 hover:text-white transition py-1 text-[11px] truncate hover:underline"
    },
    "\u2022 ",
    c.name
  )))), /* @__PURE__ */ React.createElement("div", { className: "pt-6 border-t border-[#340A0E] text-[11px] text-[#FED7B8]/50 flex flex-col sm:flex-row justify-between items-center gap-4" }, /* @__PURE__ */ React.createElement("div", null, "\xA9 2026 ANIVE.CO | GIFTING. All Rights Reserved. Crafted in Burgundy & Warm Beige."), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 text-[#FED7B8]/70" }, /* @__PURE__ */ React.createElement("span", null, "Privacy Policy"), /* @__PURE__ */ React.createElement("span", null, "Terms of Service"), /* @__PURE__ */ React.createElement("span", null, "White-Glove Guarantee")))));
};
