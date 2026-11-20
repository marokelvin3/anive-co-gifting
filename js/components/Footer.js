window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.Footer = function Footer({ onShowToast }) {
  return /* @__PURE__ */ React.createElement("footer", { className: "bg-[#210507] text-[#FED7B8] pt-14 pb-12 border-t border-[#340A0E]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-7 space-y-2 text-center lg:text-left" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-editorial tracking-[0.2em] font-light text-white" }, "ANIVE.CO ", /* @__PURE__ */ React.createElement("span", { className: "text-sm font-sans font-medium text-[#FED7B8]/60" }, "|"), " ", /* @__PURE__ */ React.createElement("span", { className: "text-sm font-sans font-semibold text-[#FED7B8]" }, "GIFTING")), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#FED7B8]/75 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed" }, "Curating moments of tranquil beauty through bespoke keepsakes, custom hot-foil monograms, and authentic wax-sealed calligraphy correspondence.")), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-5 flex flex-col sm:flex-row gap-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      placeholder: "Join Atelier Journal for 10% off...",
      className: "bg-[#340A0E] border border-[#59171B] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-[#FED7B8]/40 flex-1 focus:outline-none focus:border-[#FED7B8] transition"
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onShowToast("Subscribed! Welcome code: WELCOME10"),
      className: "px-6 py-2.5 rounded-xl bg-[#FED7B8] text-[#59171B] text-xs font-bold hover:bg-white transition shrink-0 active:scale-95"
    },
    "Join Atelier"
  ))), /* @__PURE__ */ React.createElement("div", { className: "pt-6 border-t border-[#340A0E] text-[11px] text-[#FED7B8]/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left" }, /* @__PURE__ */ React.createElement("div", null, "\xA9 2026 ANIVE.CO | GIFTING. All Rights Reserved. Crafted in Burgundy & Warm Beige."), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 text-[#FED7B8]/70 text-xs" }, /* @__PURE__ */ React.createElement("span", { className: "hover:text-white cursor-pointer transition" }, "Privacy Policy"), /* @__PURE__ */ React.createElement("span", { className: "hover:text-white cursor-pointer transition" }, "Terms of Service"), /* @__PURE__ */ React.createElement("span", { className: "hover:text-white cursor-pointer transition" }, "White-Glove Guarantee")))));
};
