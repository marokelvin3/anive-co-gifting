window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.AtelierStory = function AtelierStory() {
  return /* @__PURE__ */ React.createElement("section", { className: "py-12 bg-white border-t border-b border-mred-100/80" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-3xl mx-auto text-center space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mred-50 border border-mred-200 text-[#59171B] text-[11px] font-semibold tracking-wider uppercase" }, /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-[#59171B]" }), "The ANIVE.CO Philosophy"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-mred-950" }, "Gifting as an Intentional Art Form"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-mred-800/80 font-light leading-relaxed" }, "At ANIVE.CO | GIFTING, we reject the impersonal. Every gesture should carry the quiet weight of care. Our curations are housed in reusable rigid chests wrapped in custom textured linen, hand-torn raw silk ribbons, and accompanied by deckled-edge correspondence hand-sealed in wax.")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-10" }, /* @__PURE__ */ React.createElement("div", { className: "p-6 rounded-2xl bg-mred-50/50 border border-mred-100 space-y-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-soft" }, /* @__PURE__ */ React.createElement("div", { className: "w-10 h-10 mx-auto rounded-full bg-[#59171B] text-[#FED7B8] flex items-center justify-center font-bold text-sm" }, "I"), /* @__PURE__ */ React.createElement("h3", { className: "text-base font-editorial font-medium text-mred-950" }, "The Palette & Finishes"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-800/75 leading-relaxed" }, "Our signature deep burgundy (#59171b) and warm beige (#fed7b8) palette evokes tranquil refinement, stepping away from loud commercial wrapping.")), /* @__PURE__ */ React.createElement("div", { className: "p-6 rounded-2xl bg-mred-50/50 border border-mred-100 space-y-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-soft" }, /* @__PURE__ */ React.createElement("div", { className: "w-10 h-10 mx-auto rounded-full bg-[#59171B] text-[#FED7B8] flex items-center justify-center font-bold text-sm" }, "II"), /* @__PURE__ */ React.createElement("h3", { className: "text-base font-editorial font-medium text-mred-950" }, "Individualized Foil Stamping"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-800/75 leading-relaxed" }, "Every lid can be blind-debossed or stamped with individual recipient initials or corporate crests in bespoke matte champagne foil.")), /* @__PURE__ */ React.createElement("div", { className: "p-6 rounded-2xl bg-mred-50/50 border border-mred-100 space-y-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-soft" }, /* @__PURE__ */ React.createElement("div", { className: "w-10 h-10 mx-auto rounded-full bg-[#59171B] text-[#FED7B8] flex items-center justify-center font-bold text-sm" }, "III"), /* @__PURE__ */ React.createElement("h3", { className: "text-base font-editorial font-medium text-mred-950" }, "Wax-Sealed Calligraphy"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-800/75 leading-relaxed" }, "No printed cards. Your custom sentiments are penned by hand in archival ink and sealed with an authentic wax seal on heavy cotton paper.")))));
};
window.AniveComponents.CustomStudioHighlight = function CustomStudioHighlight({ onOpenBuilder }) {
  return /* @__PURE__ */ React.createElement("section", { className: "py-12 bg-gradient-to-r from-[#59171B] via-[#711E24] to-[#59171B] text-[#FED7B8]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl p-8 sm:p-12 border border-[#FED7B8]/30 flex flex-col lg:flex-row items-center justify-between gap-8 bg-black/10" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-3 text-center lg:text-left max-w-2xl" }, /* @__PURE__ */ React.createElement("span", { className: "px-3 py-1 rounded-full bg-[#FED7B8]/20 text-[#FED7B8] text-[10px] font-bold tracking-widest uppercase border border-[#FED7B8]/30 inline-block" }, "Interactive 4-Step Studio"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-white" }, "Create Your Own Bespoke Keepsake Box"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-[#fed7b8]/85 font-light leading-relaxed" }, "Step into our interactive custom studio. Select your keepsake chest, hand-pick artisanal treasures from our ethical makers library, pick your silk ribbon, and write your wax-sealed calligraphy card note.")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onOpenBuilder,
      className: "w-full sm:w-auto px-8 py-4 rounded-full bg-[#FED7B8] hover:bg-white text-[#59171B] text-xs font-bold uppercase tracking-wider transition shadow-2xl shrink-0 active:scale-95"
    },
    "Launch Custom Studio \u2192"
  ))));
};
window.AniveComponents.ConciergeInfo = function ConciergeInfo({ onShowToast }) {
  const { useState } = React;
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast("Thank you! Your inquiry has been sent to our atelier concierge.");
  };
  return /* @__PURE__ */ React.createElement("section", { id: "contact", className: "py-14 bg-[#FFF9F5] border-t border-mred-100" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto text-center space-y-3 mb-8" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold tracking-widest uppercase text-[#59171B]" }, "Atelier Direct Inquiry"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-mred-950" }, "Have a Question or Custom Project?"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-mred-800/80 font-light" }, "Whether you are planning bridal party suites, an urgent last-minute curation, or a custom corporate project, submit your note below and our team will be in touch.")), /* @__PURE__ */ React.createElement("div", { className: "max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-mred-200/80 shadow-soft" }, submitted ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-8 space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 mx-auto rounded-full bg-[#FED7B8] text-[#59171B] flex items-center justify-center text-xl font-bold" }, "\u2713"), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-editorial text-mred-950" }, "Inquiry Delivered"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-700" }, "Our concierge has received your note and will review your specifications with care."), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setSubmitted(false),
      className: "mt-2 text-xs font-semibold text-[#59171B] underline hover:text-[#471015]"
    },
    "Send another message"
  )) : /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4 text-xs" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      required: true,
      placeholder: "Your Name",
      className: "w-full bg-[#FFF9F5] border border-mred-200 rounded-xl px-3.5 py-2.5 text-mred-950 placeholder:text-mred-400 focus:outline-none focus:border-[#59171B] transition"
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      required: true,
      placeholder: "Your Email Address",
      className: "w-full bg-[#FFF9F5] border border-mred-200 rounded-xl px-3.5 py-2.5 text-mred-950 placeholder:text-mred-400 focus:outline-none focus:border-[#59171B] transition"
    }
  )), /* @__PURE__ */ React.createElement("select", { className: "w-full bg-[#FFF9F5] border border-mred-200 rounded-xl px-3.5 py-2.5 text-mred-950 focus:outline-none focus:border-[#59171B] transition" }, /* @__PURE__ */ React.createElement("option", null, "General Gifting Inquiry"), /* @__PURE__ */ React.createElement("option", null, "Bridesmaids Gift Boxes & Bags"), /* @__PURE__ */ React.createElement("option", null, "Personalised Gift Boxes"), /* @__PURE__ */ React.createElement("option", null, "Emergency & Last-Minute Gifting"), /* @__PURE__ */ React.createElement("option", null, "Corporate Gifting"), /* @__PURE__ */ React.createElement("option", null, "Custom Box Studio Question"), /* @__PURE__ */ React.createElement("option", null, "Private Gift Sourcing")), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      rows: "4",
      required: true,
      placeholder: "Share your timeline, occasion, or specific gift wishes...",
      className: "w-full bg-[#FFF9F5] border border-mred-200 rounded-xl p-3.5 text-mred-950 placeholder:text-mred-400 focus:outline-none focus:border-[#59171B] transition"
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      className: "w-full py-3.5 rounded-xl bg-[#59171B] hover:bg-[#471015] text-[#FED7B8] font-semibold text-xs tracking-wide shadow-md transition active:scale-95"
    },
    "Send Message to Atelier Concierge \u2192"
  )))));
};
