window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.EmergencyBanner = function EmergencyBanner({
  timeLeft,
  onFilterEmergency,
  onShowToast
}) {
  return /* @__PURE__ */ React.createElement("section", { id: "emergency", className: "py-16 bg-gradient-to-b from-[#FAFBFB] to-[#F1F6F4] border-t border-b border-emerald-100" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl bg-white border border-emerald-200/80 p-8 sm:p-10 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-7 space-y-4" }, /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }), " Emergency & Last-Minute Concierge"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-sage-950" }, "Left It Till The Last Minute? ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "italic font-normal text-emerald-800" }, "We Have You Covered.")), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-sage-600 leading-relaxed font-light" }, "Forgotten an anniversary, proposal, bridesmaid milestone or birthday? Our ready-to-dispatch luxury gift curations are pre-assembled in our atelier, sealed with raw silk and sent via express priority courier."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-3 pt-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onFilterEmergency,
      className: "px-6 py-3 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shadow-sm transition"
    },
    "View Same-Day Ready Boxes \u2192"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onShowToast("Digital Gift Reveal simulated: link generated and ready to send!"),
      className: "px-5 py-3 rounded-full bg-white text-emerald-900 border border-emerald-300 hover:bg-emerald-50 text-xs font-medium"
    },
    "Send Instant Digital Reveal Link"
  ))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-5 flex justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-sm rounded-2xl bg-gradient-to-br from-emerald-900 to-sage-950 text-white p-6 shadow-2xl text-center space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-emerald-300 font-semibold uppercase tracking-wider" }, "Same-Day Dispatch Cutoff Timer"), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-emerald-200/80" }, "Order before countdown reaches zero for delivery tomorrow:"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2 py-2" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white/10 rounded-xl p-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl sm:text-3xl font-editorial font-bold" }, "0", timeLeft.h), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-emerald-300 uppercase" }, "Hours")), /* @__PURE__ */ React.createElement("div", { className: "bg-white/10 rounded-xl p-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl sm:text-3xl font-editorial font-bold" }, timeLeft.m < 10 ? `0${timeLeft.m}` : timeLeft.m), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-emerald-300 uppercase" }, "Mins")), /* @__PURE__ */ React.createElement("div", { className: "bg-white/10 rounded-xl p-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl sm:text-3xl font-editorial font-bold" }, timeLeft.s < 10 ? `0${timeLeft.s}` : timeLeft.s), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-emerald-300 uppercase" }, "Secs"))), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-emerald-200/70 border-t border-emerald-800/80 pt-2" }, "\u2713 100% On-Time Atelier Courier Guarantee"))))));
};
window.AniveComponents.CorporateSection = function CorporateSection({
  corpQty,
  setCorpQty,
  corpTier,
  setCorpTier,
  corpDeboss,
  setCorpDeboss,
  corpRibbon,
  setCorpRibbon,
  corpTotal,
  corpUnitDiscounted,
  corpDiscountRate,
  formatPrice,
  onShowToast
}) {
  return /* @__PURE__ */ React.createElement("section", { id: "corporate", className: "py-20 bg-white border-t border-b border-sage-200/60" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-2 mb-12" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold tracking-widest uppercase text-slatecool-700" }, "Corporate & Volume Concierge"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-sage-950" }, "Elevate Client Loyalty & Team Appreciation"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-sage-600 font-light" }, "Depart from generic corporate swag. ANIVE.CO curates understated, luxury executive gifts featuring subtle company debossing, artisan craftsmanship, and multi-address direct drop shipping.")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-7 bg-[#F7FAF9] rounded-3xl p-6 sm:p-8 border border-sage-200 space-y-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center pb-3 border-b border-sage-200" }, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-xl font-medium text-sage-900" }, "Interactive Volume & Tier Estimator"), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] bg-sage-200 text-sage-800 px-2.5 py-1 rounded-full font-bold" }, "Save ", (corpDiscountRate * 100).toFixed(0), "% at ", corpQty, " units")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs mb-1" }, /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-sage-700" }, "Order Volume:"), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-sage-900 bg-white px-2.5 py-0.5 rounded border border-sage-300" }, corpQty, " Boxes")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "10",
      max: "300",
      step: "5",
      value: corpQty,
      onChange: (e) => setCorpQty(Number(e.target.value)),
      className: "w-full h-2 bg-sage-200 rounded-lg accent-sage-800 cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold text-sage-800 block" }, "Select Hamper Tier:"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2" }, [
    { id: "associate", name: "Associate", price: 85 },
    { id: "partner", name: "Partner", price: 130 },
    { id: "executive", name: "Executive", price: 185 }
  ].map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t.id,
      onClick: () => setCorpTier(t.id),
      className: `p-3 rounded-xl border text-left transition ${corpTier === t.id ? "border-sage-800 bg-white shadow-sm ring-1 ring-sage-800" : "border-sage-200 bg-white/50"}`
    },
    /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-sage-900" }, t.name),
    /* @__PURE__ */ React.createElement("div", { className: "text-xs text-sage-600" }, formatPrice(t.price), "/ea")
  )))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 text-xs" }, /* @__PURE__ */ React.createElement("label", { className: "flex items-center justify-between p-3 bg-white rounded-xl border border-sage-200 cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: corpDeboss, onChange: (e) => setCorpDeboss(e.target.checked), className: "accent-sage-800" }), /* @__PURE__ */ React.createElement("span", null, "Blind Debossed Corporate Logo on Box Lid")), /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-sage-700" }, "+", formatPrice(6), "/ea")), /* @__PURE__ */ React.createElement("label", { className: "flex items-center justify-between p-3 bg-white rounded-xl border border-sage-200 cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: corpRibbon, onChange: (e) => setCorpRibbon(e.target.checked), className: "accent-sage-800" }), /* @__PURE__ */ React.createElement("span", null, "Custom Dyed Ribbon in Brand Pantone Color")), /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-sage-700" }, "+", formatPrice(4), "/ea"))), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-sage-800 text-white rounded-2xl flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-sage-300 uppercase" }, "Estimated Investment"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-editorial font-bold" }, formatPrice(corpTotal)), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-sage-300" }, "\u2248 ", formatPrice(corpUnitDiscounted), " per recipient box")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onShowToast("Corporate estimate saved! Lookbook sent to email."),
      className: "px-4 py-2 bg-white text-sage-900 rounded-xl text-xs font-semibold hover:bg-sage-100 transition"
    },
    "Lock In Estimate \u2192"
  ))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sage-200 shadow-soft space-y-4" }, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-xl font-medium text-sage-900" }, "Request Corporate Lookbook & Sample"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-sage-500" }, "Receive our 2026 corporate gifting lookbook and request a physical sample box to your office."), /* @__PURE__ */ React.createElement("form", { onSubmit: (e) => {
    e.preventDefault();
    onShowToast("Proposal request received! Our concierge will email you shortly.");
  }, className: "space-y-3" }, /* @__PURE__ */ React.createElement("input", { type: "text", required: true, placeholder: "Company Name", className: "w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none" }), /* @__PURE__ */ React.createElement("input", { type: "text", required: true, placeholder: "Contact Name & Title", className: "w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none" }), /* @__PURE__ */ React.createElement("input", { type: "email", required: true, placeholder: "Corporate Work Email", className: "w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none" }), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "w-full py-3 rounded-xl bg-sage-900 hover:bg-black text-white text-xs font-semibold shadow-md transition" }, "Request Lookbook & Dedicated Quote"))))));
};
