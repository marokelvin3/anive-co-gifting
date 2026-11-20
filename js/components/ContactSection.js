window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.ContactSection = function ContactSection({ onShowToast }) {
  const { useState } = React;
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast("Thank you! Your note has been delivered to the ANIVE.CO Concierge.");
  };
  return /* @__PURE__ */ React.createElement("section", { id: "contact", className: "py-14 bg-white border-t border-mred-100" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-2xl mx-auto space-y-2 mb-10" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold tracking-widest uppercase text-[#59171B]" }, "Concierge Consultation"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl font-editorial font-light text-mred-950" }, "Let Us Curate Something Extraordinary"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-mred-800/80 font-light" }, "Whether you need bridesmaid party boxes or emergency priority shipping, our concierge is at your service.")), /* @__PURE__ */ React.createElement("div", { className: "max-w-xl mx-auto bg-[#FFF9F5] p-6 sm:p-8 rounded-3xl border border-mred-200 shadow-soft" }, submitted ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-8 space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 mx-auto rounded-full bg-[#FED7B8] text-[#59171B] flex items-center justify-center text-xl font-bold" }, "\u2713"), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-editorial text-mred-950" }, "Message Delivered"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-700" }, "Our concierge will review your inquiry with intention.")) : /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "space-y-3 text-xs" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      required: true,
      placeholder: "Your Name",
      className: "w-full bg-white border border-mred-200 rounded-xl px-3.5 py-2.5 text-mred-950 focus:outline-none focus:border-[#59171B] transition"
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      required: true,
      placeholder: "Your Email",
      className: "w-full bg-white border border-mred-200 rounded-xl px-3.5 py-2.5 text-mred-950 focus:outline-none focus:border-[#59171B] transition"
    }
  )), /* @__PURE__ */ React.createElement("select", { className: "w-full bg-white border border-mred-200 rounded-xl px-3.5 py-2.5 text-mred-950 focus:outline-none focus:border-[#59171B] transition" }, /* @__PURE__ */ React.createElement("option", null, "Bridesmaids Gift Boxes & Bags"), /* @__PURE__ */ React.createElement("option", null, "Personalised Gift Boxes"), /* @__PURE__ */ React.createElement("option", null, "Emergency & Last-Minute Gifting"), /* @__PURE__ */ React.createElement("option", null, "Corporate Gifting"), /* @__PURE__ */ React.createElement("option", null, "Wedding & Event Gifting"), /* @__PURE__ */ React.createElement("option", null, "Gift Sourcing & Bespoke Curation"), /* @__PURE__ */ React.createElement("option", null, "General Atelier Inquiry")), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      rows: "4",
      required: true,
      placeholder: "Write your message or project requirements...",
      className: "w-full bg-white border border-mred-200 rounded-xl p-3 text-mred-950 focus:outline-none focus:border-[#59171B] transition"
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      className: "w-full py-3.5 rounded-xl bg-[#59171B] hover:bg-[#471015] text-[#FED7B8] font-semibold text-xs shadow-md transition active:scale-95"
    },
    "Send Message to Atelier Concierge \u2192"
  )))));
};
