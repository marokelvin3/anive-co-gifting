window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.EmergencyBanner = function EmergencyBanner({
  onFilterEmergency,
  onShowToast
}) {
  return /* @__PURE__ */ React.createElement("section", { id: "emergency", className: "py-12 bg-gradient-to-b from-[#FFF9F5] to-mred-50/50" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl bg-white border border-mred-100 p-8 sm:p-10 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-8 space-y-4" }, /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FED7B8]/40 text-[#59171B] text-xs font-semibold uppercase tracking-wider border border-[#FED7B8]" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-[#59171B] animate-pulse" }), " Emergency & Last-Minute Concierge"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-mred-950" }, "Need Something Extraordinary Fast? ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "italic font-normal text-[#59171B]" }, "Priority Atelier Dispatch.")), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-mred-800/80 leading-relaxed font-light max-w-2xl" }, "Forgotten an anniversary, proposal, bridesmaid milestone or birthday? Our ready-to-dispatch luxury gift curations are pre-assembled in our atelier, sealed in velvet and raw silk ribbons, and dispatched with priority tracking."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-3 pt-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onShowToast("Digital Gift Reveal generated! Link ready to send to recipient."),
      className: "px-5 py-3 rounded-full bg-[#59171B] text-[#FED7B8] hover:bg-[#471015] text-xs font-semibold shadow-sm transition"
    },
    "Send Instant Digital Reveal Link"
  ))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-4 flex justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-sm rounded-2xl bg-gradient-to-br from-[#59171B] to-[#210507] text-[#FED7B8] p-6 shadow-2xl text-center space-y-3 border border-[#FED7B8]/30" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-[#FED7B8] font-semibold uppercase tracking-wider" }, "Priority Handover Privileges"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#FED7B8]/80 leading-relaxed" }, "Pre-assembled signature hampers with hand-lettered calligraphy card and premium courier tracking."), /* @__PURE__ */ React.createElement("div", { className: "pt-3 border-t border-[#FED7B8]/20 space-y-2 text-left text-xs text-[#FED7B8]/90" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-[#FED7B8]" }), /* @__PURE__ */ React.createElement("span", null, "Pre-assembled in Atelier")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-[#FED7B8]" }), /* @__PURE__ */ React.createElement("span", null, "Interactive digital unboxing link")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-[#FED7B8]" }), /* @__PURE__ */ React.createElement("span", null, "Dedicated priority tracking"))))))));
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
  return /* @__PURE__ */ React.createElement("section", { id: "corporate", className: "py-14 bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-2 mb-10" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold tracking-widest uppercase text-[#59171B]" }, "Corporate & Volume Concierge"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-mred-950" }, "Elevate Client Loyalty & Team Milestones"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-mred-800/80 font-light" }, "Depart from generic corporate swag. ANIVE.CO curates understated, luxury executive gifts featuring subtle company debossing, artisan craftsmanship, and multi-address direct drop shipping.")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-7 bg-[#FFF9F5] rounded-3xl p-6 sm:p-8 border border-mred-100 space-y-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center pb-3 border-b border-mred-100" }, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-xl font-medium text-mred-950" }, "Interactive Volume & Tier Estimator"), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] bg-[#FED7B8] text-[#59171B] px-2.5 py-1 rounded-full font-bold" }, "Save ", (corpDiscountRate * 100).toFixed(0), "% at ", corpQty, " units")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs mb-1" }, /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-mred-800" }, "Order Volume:"), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-mred-950 bg-white px-2.5 py-0.5 rounded border border-mred-200" }, corpQty, " Boxes")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "10",
      max: "300",
      step: "5",
      value: corpQty,
      onChange: (e) => setCorpQty(Number(e.target.value)),
      className: "w-full h-2 bg-mred-200 rounded-lg accent-[#59171B] cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold text-mred-900 block" }, "Select Hamper Tier:"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2" }, [
    { id: "associate", name: "Associate", price: 85 },
    { id: "partner", name: "Partner", price: 130 },
    { id: "executive", name: "Executive", price: 185 }
  ].map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t.id,
      onClick: () => setCorpTier(t.id),
      className: `p-3 rounded-xl border text-left transition ${corpTier === t.id ? "border-[#59171B] bg-white shadow-sm ring-1 ring-[#59171B]" : "border-mred-200 bg-white/60"}`
    },
    /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-mred-950" }, t.name),
    /* @__PURE__ */ React.createElement("div", { className: "text-xs text-[#59171B]" }, formatPrice(t.price), "/ea")
  )))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 text-xs" }, /* @__PURE__ */ React.createElement("label", { className: "flex items-center justify-between p-3 bg-white rounded-xl border border-mred-200 cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      checked: corpDeboss,
      onChange: (e) => setCorpDeboss(e.target.checked),
      className: "accent-[#59171B]"
    }
  ), /* @__PURE__ */ React.createElement("span", null, "Blind Debossed Corporate Logo on Box Lid")), /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-[#59171B]" }, "+", formatPrice(6), "/ea")), /* @__PURE__ */ React.createElement("label", { className: "flex items-center justify-between p-3 bg-white rounded-xl border border-mred-200 cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      checked: corpRibbon,
      onChange: (e) => setCorpRibbon(e.target.checked),
      className: "accent-[#59171B]"
    }
  ), /* @__PURE__ */ React.createElement("span", null, "Custom Dyed Ribbon in Brand Pantone Color")), /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-[#59171B]" }, "+", formatPrice(4), "/ea"))), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-[#59171B] text-[#FED7B8] rounded-2xl flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-[#FED7B8]/70 uppercase" }, "Estimated Investment"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-editorial font-bold text-white" }, formatPrice(corpTotal)), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-[#FED7B8]/80" }, "\u2248 ", formatPrice(corpUnitDiscounted), " per recipient box")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onShowToast("Corporate estimate saved! Lookbook sent to email."),
      className: "px-4 py-2 bg-[#FED7B8] text-[#59171B] rounded-xl text-xs font-bold hover:bg-white transition"
    },
    "Lock In Estimate \u2192"
  ))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-mred-100 shadow-soft space-y-4" }, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-xl font-medium text-mred-950" }, "Request Corporate Lookbook & Sample"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-700/80" }, "Receive our 2026 corporate gifting lookbook and request a physical sample box to your office."), /* @__PURE__ */ React.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        onShowToast("Proposal request received! Our concierge will email you shortly.");
      },
      className: "space-y-3"
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        required: true,
        placeholder: "Company Name",
        className: "w-full bg-mred-50/50 border border-mred-200 rounded-xl px-3 py-2 text-xs text-mred-950 focus:outline-none focus:border-[#59171B]"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        required: true,
        placeholder: "Contact Name & Title",
        className: "w-full bg-mred-50/50 border border-mred-200 rounded-xl px-3 py-2 text-xs text-mred-950 focus:outline-none focus:border-[#59171B]"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        required: true,
        placeholder: "Corporate Work Email",
        className: "w-full bg-mred-50/50 border border-mred-200 rounded-xl px-3 py-2 text-xs text-mred-950 focus:outline-none focus:border-[#59171B]"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        className: "w-full py-3 rounded-xl bg-[#59171B] hover:bg-[#471015] text-[#FED7B8] text-xs font-semibold shadow-md transition"
      },
      "Request Lookbook & Dedicated Quote"
    )
  )))));
};
