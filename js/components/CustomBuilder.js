window.AniveComponents = window.AniveComponents || {};
window.AniveComponents.CustomBuilder = function CustomBuilder({
  isOpen,
  onClose,
  formatPrice,
  onAddToCart,
  onShowToast
}) {
  const { useState } = React;
  const builderBoxes = window.AniveData.BUILDER_BOXES || [];
  const builderItems = window.AniveData.BUILDER_ITEMS || [];
  const ribbons = window.AniveData.RIBBONS || [];
  const [step, setStep] = useState(1);
  const [bBox, setBBox] = useState(builderBoxes[0] || {});
  const [bItems, setBItems] = useState([builderItems[0], builderItems[1], builderItems[3]].filter(Boolean));
  const [bRibbon, setBRibbon] = useState(ribbons[0] || {});
  const [bMonogram, setBMonogram] = useState("");
  const [bRecipient, setBRecipient] = useState("Sarah Jenkins");
  const [bNote, setBNote] = useState("Dearest Sarah,\nMay your special day be filled with endless joy and peace.\nWith all my love,\nEmma");
  if (!isOpen) return null;
  const toggleBItem = (item) => {
    if (bItems.some((i) => i.id === item.id)) {
      if (bItems.length <= 1) return onShowToast("Please keep at least 1 gift in your box");
      setBItems(bItems.filter((i) => i.id !== item.id));
    } else {
      if (bItems.length >= 6) return onShowToast("Max box capacity is 6 gifts");
      setBItems([...bItems, item]);
    }
  };
  const totalBuilderPrice = (bBox.price || 0) + bItems.reduce((a, c) => a + (c.price || 0), 0) + (bMonogram ? 12 : 0);
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 bg-mred-950/75 backdrop-blur-md overflow-y-auto" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-mred-100 overflow-hidden my-auto max-h-[92vh] flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "p-5 border-b border-mred-100 flex items-center justify-between bg-mred-50/60" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-2xl font-medium text-mred-950" }, "Custom Gift Box Studio"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-mred-700/80" }, "Step ", step, " of 4: Craft your bespoke gift box with personal touches")), /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "text-mred-400 hover:text-mred-700 text-xl font-bold" }, "\u2715")), /* @__PURE__ */ React.createElement("div", { className: "flex border-b border-mred-100 text-xs font-semibold" }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: s,
      onClick: () => setStep(s),
      className: `flex-1 py-2.5 text-center transition ${step === s ? "border-b-2 border-mred-600 text-mred-950 bg-mred-50/50" : "text-mred-400"}`
    },
    s === 1 ? "1. Box Vessel" : s === 2 ? `2. Gifts (${bItems.length}/6)` : s === 3 ? "3. Ribbon & Foil" : "4. Calligraphy Card"
  ))), /* @__PURE__ */ React.createElement("div", { className: "p-6 flex-1 overflow-y-auto space-y-4" }, step === 1 && /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, builderBoxes.map((box) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: box.id,
      onClick: () => setBBox(box),
      className: `p-4 rounded-2xl border cursor-pointer flex gap-4 items-center transition ${bBox.id === box.id ? "border-mred-600 bg-mred-50 ring-2 ring-mred-600/20 shadow-sm" : "border-mred-100 hover:border-mred-300"}`
    },
    /* @__PURE__ */ React.createElement("img", { src: box.image, alt: box.name, className: "w-16 h-16 rounded-xl object-cover" }),
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-semibold text-xs text-mred-950" }, box.name), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-mred-700" }, formatPrice(box.price)))
  ))), step === 2 && /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" }, builderItems.map((item) => {
    const has = bItems.some((i) => i.id === item.id);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: item.id,
        onClick: () => toggleBItem(item),
        className: `p-3 rounded-2xl border cursor-pointer flex items-center justify-between transition ${has ? "border-mred-600 bg-mred-50" : "border-mred-100 hover:border-mred-300"}`
      },
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-mred-400 uppercase" }, item.cat), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-semibold text-mred-950" }, item.name), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-mred-700" }, formatPrice(item.price))),
      /* @__PURE__ */ React.createElement("span", { className: `w-6 h-6 rounded-full flex items-center justify-center text-xs ${has ? "bg-mred-600 text-white" : "border border-mred-200 text-mred-400"}` }, has ? "\u2713" : "+")
    );
  })), step === 3 && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold text-mred-900 block mb-2" }, "Select Hand-Torn Silk Ribbon"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-2" }, ribbons.map((r) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: r.id,
      onClick: () => setBRibbon(r),
      className: `p-3 rounded-xl border flex flex-col items-center gap-1 text-xs transition ${bRibbon.id === r.id ? "border-mred-600 bg-mred-50 ring-1 ring-mred-600" : "border-mred-100"}`
    },
    /* @__PURE__ */ React.createElement("span", { className: "w-6 h-6 rounded-full border border-black/10", style: { backgroundColor: r.hex } }),
    /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-medium" }, r.name.split(" ")[0])
  )))), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-mred-50/50 rounded-2xl border border-mred-200 space-y-2" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-bold text-mred-900 block" }, "Hot-Foil Monogram (+", formatPrice(12), ")"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      maxLength: "15",
      value: bMonogram,
      onChange: (e) => setBMonogram(e.target.value),
      placeholder: "Initials or Name, e.g. E & J",
      className: "w-full bg-white border border-mred-200 rounded-xl px-3 py-2 text-xs text-mred-950 focus:outline-none focus:border-mred-600"
    }
  ))), step === 4 && /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-start" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: bRecipient,
      onChange: (e) => setBRecipient(e.target.value),
      placeholder: "Recipient Name",
      className: "w-full bg-mred-50/40 border border-mred-200 rounded-xl px-3 py-2 text-xs text-mred-950 focus:outline-none focus:border-mred-600"
    }
  ), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      rows: "4",
      value: bNote,
      onChange: (e) => setBNote(e.target.value),
      className: "w-full bg-mred-50/40 border border-mred-200 rounded-xl p-3 text-xs text-mred-950 focus:outline-none focus:border-mred-600"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "p-6 rounded-2xl bg-[#FCFBF8] border border-amber-900/10 shadow space-y-2 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase font-bold text-amber-800/60 pb-1 border-b border-amber-900/10" }, "Live Calligraphy Note Preview"), /* @__PURE__ */ React.createElement("div", { className: "text-xs uppercase tracking-widest text-mred-900 pt-2" }, "To Dearest ", bRecipient), /* @__PURE__ */ React.createElement("div", { className: "font-editorial text-lg italic text-mred-950 whitespace-pre-line py-2" }, '"', bNote, '"'), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-mred-700 pt-2 border-t border-amber-900/10" }, "\u2713 Wax-Sealed in Calm Crimson Wax")))), /* @__PURE__ */ React.createElement("div", { className: "p-4 border-t border-mred-100 bg-mred-50/60 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "font-editorial text-lg font-bold text-mred-950" }, formatPrice(totalBuilderPrice)), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, step > 1 && /* @__PURE__ */ React.createElement("button", { onClick: () => setStep(step - 1), className: "px-4 py-2 rounded-xl border border-mred-200 text-xs font-semibold text-mred-800 hover:bg-mred-50" }, "Back"), step < 4 ? /* @__PURE__ */ React.createElement("button", { onClick: () => setStep(step + 1), className: "px-6 py-2 rounded-xl bg-mred-600 hover:bg-mred-700 text-white text-xs font-semibold shadow-sm" }, "Next Step \u2192") : /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        onAddToCart({
          id: `custom-${Date.now()}`,
          name: `Custom Box (${bBox.name})`,
          categoryId: "custom",
          categoryName: "Custom Gifting",
          price: totalBuilderPrice,
          image: bBox.image,
          shortDesc: `${bItems.length} gifts in ${bBox.name}`
        }, {
          monogram: bMonogram ? `FOIL: ${bMonogram}` : null,
          ribbon: bRibbon.name,
          cardMessage: bNote
        });
        onClose();
      },
      className: "px-6 py-2 rounded-xl bg-mred-600 hover:bg-mred-700 text-white text-xs font-semibold shadow-luxury"
    },
    "Add Custom Box to Bag (",
    formatPrice(totalBuilderPrice),
    ")"
  )))));
};
