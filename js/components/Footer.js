window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.Footer = function Footer({
  categories,
  onSelectCategory,
  onShowToast
}) {
  return /* @__PURE__ */ React.createElement("footer", { className: "bg-sage-950 text-sage-200 pt-16 pb-12 border-t border-sage-800" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" }, /* @__PURE__ */ React.createElement("div", { className: "pb-8 border-b border-sage-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-6 space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "text-xl font-editorial tracking-[0.2em] font-light text-white" }, "ANIVE.CO | ", /* @__PURE__ */ React.createElement("span", { className: "text-sm font-sans font-semibold text-sage-400" }, "GIFTING")), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-sage-400 font-light" }, "Curating moments of tranquil beauty through thoughtful objects, custom hot-foil monograms, and handwritten calligraphy.")), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-6 flex gap-2" }, /* @__PURE__ */ React.createElement("input", { type: "email", placeholder: "Join Atelier Journal for 10% off...", className: "bg-sage-900 border border-sage-700 rounded-xl px-3 py-2 text-xs text-white flex-1 focus:outline-none" }), /* @__PURE__ */ React.createElement("button", { onClick: () => onShowToast("Subscribed! Welcome code: WELCOME10"), className: "px-5 py-2 rounded-xl bg-sage-200 text-sage-950 text-xs font-semibold" }, "Join"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-xs font-semibold uppercase tracking-widest text-sage-400 mb-3" }, "All 15 Specialized Collections"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-xs" }, categories.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c.id,
      onClick: () => {
        onSelectCategory(c.id);
        const el = document.getElementById("catalog");
        el?.scrollIntoView({ behavior: "smooth" });
      },
      className: "text-left text-sage-300 hover:text-white transition py-1 text-[11px] truncate"
    },
    "\u2022 ",
    c.name
  )))), /* @__PURE__ */ React.createElement("div", { className: "pt-6 border-t border-sage-800 text-[11px] text-sage-500 flex flex-col sm:flex-row justify-between items-center gap-4" }, /* @__PURE__ */ React.createElement("div", null, "\xA9 2026 ANIVE.CO | GIFTING. All Rights Reserved. Crafted with calm intention."), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 text-sage-400" }, /* @__PURE__ */ React.createElement("span", null, "Privacy Policy"), /* @__PURE__ */ React.createElement("span", null, "Terms"), /* @__PURE__ */ React.createElement("span", null, "White-Glove Guarantee")))));
};
