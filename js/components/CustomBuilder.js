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
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 bg-sage-950/75 backdrop-blur-md overflow-y-auto" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-sage-200 overflow-hidden my-auto max-h-[92vh] flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "p-5 border-b border-sage-100 flex items-center justify-between bg-[#F8FAF9]" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-editorial text-2xl font-medium text-sage-950" }, "Custom Gift Box Studio"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-sage-500" }, "Step ", step, " of 4: Craft your bespoke gift box with personal touches")), /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "text-sage-400 hover:text-sage-700 text-xl font-bold" }, "\u2715")), /* @__PURE__ */ React.createElement("div", { className: "flex border-b border-sage-100 text-xs font-semibold" }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: s,
      onClick: () => setStep(s),
      className: `flex-1 py-2.5 text-center transition ${step === s ? "border-b-2 border-sage-800 text-sage-900 bg-sage-50/50" : "text-sage-400"}`
    },
    s === 1 ? "1. Box Vessel" : s === 2 ? `2. Gifts (${bItems.length}/6)` : s === 3 ? "3. Ribbon & Foil" : "4. Calligraphy Card"
  ))), /* @__PURE__ */ React.createElement("div", { className: "p-6 flex-1 overflow-y-auto space-y-4" }, step === 1 && /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, builderBoxes.map((box) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: box.id,
      onClick: () => setBBox(box),
      className: `p-4 rounded-2xl border cursor-pointer flex gap-4 items-center ${bBox.id === box.id ? "border-sage-800 bg-sage-50 ring-2 ring-sage-800/20" : "border-sage-200"}`
    },
    /* @__PURE__ */ React.createElement("img", { src: box.image, alt: box.name, className: "w-16 h-16 rounded-xl object-cover" }),
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-semibold text-xs text-sage-900" }, box.name), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-sage-800" }, formatPrice(box.price)))
  ))), step === 2 && /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" }, builderItems.map((item) => {
    const has = bItems.some((i) => i.id === item.id);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: item.id,
        onClick: () => toggleBItem(item),
        className: `p-3 rounded-2xl border cursor-pointer flex items-center justify-between ${has ? "border-sage-800 bg-sage-50" : "border-sage-200"}`
      },
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-sage-500 uppercase" }, item.cat), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-semibold text-sage-900" }, item.name), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-sage-700" }, formatPrice(item.price))),
      /* @__PURE__ */ React.createElement("span", { className: `w-6 h-6 rounded-full flex items-center justify-center text-xs ${has ? "bg-sage-800 text-white" : "border border-sage-300"}` }, has ? "\u2713" : "+")
    );
  })), step === 3 && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold text-sage-800 block mb-2" }, "Select Hand-Torn Silk Ribbon"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-2" }, ribbons.map((r) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: r.id,
      onClick: () => setBRibbon(r),
      className: `p-3 rounded-xl border flex flex-col items-center gap-1 text-xs ${bRibbon.id === r.id ? "border-sage-800 bg-sage-50 ring-1 ring-sage-800" : "border-sage-200"}`
    },
    /* @__PURE__ */ React.createElement("span", { className: "w-6 h-6 rounded-full border", style: { backgroundColor: r.hex } }),
    /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-medium" }, r.name.split(" ")[0])
  )))), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-sage-50 rounded-2xl border border-sage-200 space-y-2" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-bold text-sage-900 block" }, "Hot-Foil Monogram (+", formatPrice(12), ")"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      maxLength: "15",
      value: bMonogram,
      onChange: (e) => setBMonogram(e.target.value),
      placeholder: "Initials or Name, e.g. E & J",
      className: "w-full bg-white border border-sage-300 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none"
    }
  ))), step === 4 && /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-start" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: bRecipient,
      onChange: (e) => setBRecipient(e.target.value),
      placeholder: "Recipient Name",
      className: "w-full bg-sage-50 border border-sage-200 rounded-xl px-3 py-2 text-xs text-sage-900 focus:outline-none"
    }
  ), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      rows: "4",
      value: bNote,
      onChange: (e) => setBNote(e.target.value),
      className: "w-full bg-sage-50 border border-sage-200 rounded-xl p-3 text-xs text-sage-900 focus:outline-none"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "p-6 rounded-2xl bg-[#FCFBF8] border border-amber-900/10 shadow space-y-2 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase font-bold text-amber-800/60 pb-1 border-b border-amber-900/10" }, "Live Calligraphy Note Preview"), /* @__PURE__ */ React.createElement("div", { className: "text-xs uppercase tracking-widest text-sage-800 pt-2" }, "To Dearest ", bRecipient), /* @__PURE__ */ React.createElement("div", { className: "font-editorial text-lg italic text-sage-900 whitespace-pre-line py-2" }, '"', bNote, '"'), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-sage-500 pt-2 border-t border-amber-900/10" }, "\u2713 Wax-Sealed in Olive Green Wax")))), /* @__PURE__ */ React.createElement("div", { className: "p-4 border-t border-sage-100 bg-[#F8FAF9] flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "font-editorial text-lg font-bold text-sage-900" }, formatPrice(totalBuilderPrice)), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, step > 1 && /* @__PURE__ */ React.createElement("button", { onClick: () => setStep(step - 1), className: "px-4 py-2 rounded-xl border border-sage-300 text-xs font-semibold" }, "Back"), step < 4 ? /* @__PURE__ */ React.createElement("button", { onClick: () => setStep(step + 1), className: "px-6 py-2 rounded-xl bg-sage-800 text-white text-xs font-semibold" }, "Next Step \u2192") : /* @__PURE__ */ React.createElement(
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
      className: "px-6 py-2 rounded-xl bg-sage-900 text-white text-xs font-semibold shadow-luxury"
    },
    "Add Custom Box to Bag (",
    formatPrice(totalBuilderPrice),
    ")"
  )))));
};
