(function() {
  const { useState, useMemo } = React;
  function App() {
    const [currentRoute, setCurrentRoute] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currency, setCurrency] = useState("USD");
    const [searchQuery, setSearchQuery] = useState("");
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isBuilderOpen, setIsBuilderOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isSourcingOpen, setIsSourcingOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [toast, setToast] = useState(null);
    const [appliedPromo, setAppliedPromo] = useState(null);
    const showToast = (msg) => {
      setToast(msg);
      setTimeout(() => setToast(null), 3500);
    };
    const formatPrice = (usd) => {
      const c = window.AniveConfig && window.AniveConfig.currencies[currency] || { symbol: "$", rate: 1 };
      const amt = usd * c.rate;
      if (currency === "NGN") return `${c.symbol}${amt.toLocaleString(void 0, { maximumFractionDigits: 0 })}`;
      return `${c.symbol}${amt.toFixed(0)}`;
    };
    const addToCart = (product, opts = {}) => {
      const key = `${product.id}-${opts.monogram || "none"}-${opts.ribbon || "burgundy"}`;
      const unitPrice = product.price + (opts.monogram ? 10 : 0);
      setCart((prev) => {
        const idx = prev.findIndex((item) => item.key === key);
        if (idx > -1) {
          const next = [...prev];
          next[idx].quantity += opts.quantity || 1;
          return next;
        }
        return [...prev, {
          key,
          product,
          price: unitPrice,
          quantity: opts.quantity || 1,
          options: opts
        }];
      });
      showToast(`Added "${product.name}" to your gifting bag`);
      setIsCartOpen(true);
    };
    const updateQty = (key, delta) => {
      setCart((prev) => prev.map((item) => {
        if (item.key === key) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean));
    };
    const toggleWishlist = (id) => {
      setWishlist((prev) => {
        if (prev.includes(id)) {
          showToast("Removed from saved wishlist");
          return prev.filter((x) => x !== id);
        }
        showToast("Saved to your wishlist");
        return [...prev, id];
      });
    };
    const rawSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = appliedPromo === "WELCOME10" ? rawSubtotal * 0.1 : appliedPromo === "VIP15" ? rawSubtotal * 0.15 : 0;
    const shipping = rawSubtotal > 150 || cart.length === 0 ? 0 : 12;
    const totalUSD = Math.max(0, rawSubtotal - discount + shipping);
    const [corpQty, setCorpQty] = useState(25);
    const [corpTier, setCorpTier] = useState("partner");
    const [corpDeboss, setCorpDeboss] = useState(true);
    const [corpRibbon, setCorpRibbon] = useState(true);
    const corpTierPrices = { associate: 85, partner: 130, executive: 185 };
    const corpDiscountRate = corpQty >= 100 ? 0.2 : corpQty >= 50 ? 0.15 : corpQty >= 20 ? 0.1 : 0.05;
    const corpUnitRaw = corpTierPrices[corpTier] + (corpDeboss ? 6 : 0) + (corpRibbon ? 4 : 0);
    const corpUnitDiscounted = corpUnitRaw * (1 - corpDiscountRate);
    const corpTotal = corpUnitDiscounted * corpQty;
    const products = window.AniveData.PRODUCTS || [];
    const categories = window.AniveData.CATEGORIES || [];
    const searchFilteredCategory = useMemo(() => {
      if (!searchQuery) return null;
      const q = searchQuery.toLowerCase();
      return categories.find((c) => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q));
    }, [searchQuery, categories]);
    const handleSelectCategoryPage = (catId) => {
      if (catId === "home") {
        setCurrentRoute("home");
      } else {
        setCurrentRoute(catId);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleSearchSubmit = (catId) => {
      handleSelectCategoryPage(catId);
      setSearchQuery("");
    };
    const currentCategoryObject = categories.find((c) => c.id === currentRoute);
    const {
      Navbar,
      Hero,
      AtelierStory,
      CustomStudioHighlight,
      ConciergeInfo,
      Categories,
      CategoriesMenu,
      CategoryPage,
      Footer,
      CustomBuilder,
      Modals
    } = window.AniveComponents;
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex flex-col bg-[#FFF9F5] text-[#210507] font-sans selection:bg-[#FED7B8] selection:text-[#59171B]" }, toast && /* @__PURE__ */ React.createElement("div", { className: "fixed bottom-6 right-6 z-50 bg-[#210507] text-[#FED7B8] px-5 py-3 rounded-2xl shadow-luxury flex items-center gap-3 text-xs border border-[#FED7B8]/40 animate-bounce" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-[#FED7B8]" }), /* @__PURE__ */ React.createElement("span", null, toast)), /* @__PURE__ */ React.createElement(
      Navbar,
      {
        currency,
        setCurrency,
        cartCount: cart.reduce((a, b) => a + b.quantity, 0),
        wishlistCount: wishlist.length,
        searchQuery,
        setSearchQuery,
        onOpenCart: () => setIsCartOpen(true),
        onOpenBuilder: () => setIsBuilderOpen(true),
        onOpenSourcing: () => setIsSourcingOpen(true),
        onToggleMenu: () => setIsMenuOpen(!isMenuOpen),
        onNavigateHome: () => handleSelectCategoryPage("home"),
        onNavigateCategory: handleSelectCategoryPage
      }
    ), searchQuery && /* @__PURE__ */ React.createElement("div", { className: "bg-[#FED7B8]/30 border-b border-[#FED7B8] py-2 px-4 text-xs flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto w-full flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Searching for ", /* @__PURE__ */ React.createElement("strong", null, '"', searchQuery, '"'), searchFilteredCategory && /* @__PURE__ */ React.createElement("span", { className: "ml-2 text-[#59171B]" }, "Found department: ", /* @__PURE__ */ React.createElement("strong", null, searchFilteredCategory.name))), searchFilteredCategory ? /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => handleSearchSubmit(searchFilteredCategory.id),
        className: "bg-[#59171B] text-[#FED7B8] px-3 py-1 rounded-full font-bold hover:bg-[#471015] active:scale-95 transition"
      },
      "View Department Page \u2192"
    ) : /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setSearchQuery(""),
        className: "text-mred-600 underline"
      },
      "Clear"
    ))), /* @__PURE__ */ React.createElement(
      CategoriesMenu,
      {
        isOpen: isMenuOpen,
        onToggle: () => setIsMenuOpen(!isMenuOpen),
        categories,
        activeCategoryId: currentRoute,
        onSelectCategoryPage: handleSelectCategoryPage,
        onOpenBuilder: () => setIsBuilderOpen(true),
        onOpenSourcing: () => setIsSourcingOpen(true)
      }
    ), /* @__PURE__ */ React.createElement("main", { className: "flex-1" }, currentRoute === "home" ? (
      /* HOME VIEW - Concise, pure home information, NO endless product catalog clutter */
      /* @__PURE__ */ React.createElement("div", { className: "page-transition" }, /* @__PURE__ */ React.createElement(
        Hero,
        {
          onOpenBuilder: () => setIsBuilderOpen(true),
          onToggleMenu: () => setIsMenuOpen(true)
        }
      ), /* @__PURE__ */ React.createElement(AtelierStory, null), /* @__PURE__ */ React.createElement(
        Categories,
        {
          categories,
          onSelectCategoryPage: handleSelectCategoryPage
        }
      ), /* @__PURE__ */ React.createElement(
        CustomStudioHighlight,
        {
          onOpenBuilder: () => setIsBuilderOpen(true)
        }
      ), /* @__PURE__ */ React.createElement(
        ConciergeInfo,
        {
          onOpenSourcing: () => setIsSourcingOpen(true),
          onShowToast: showToast
        }
      ))
    ) : (
      /* DEDICATED STANDALONE CATEGORY PAGE - Carries all category products and specific tools */
      /* @__PURE__ */ React.createElement("div", { className: "page-transition", key: currentRoute }, /* @__PURE__ */ React.createElement(
        CategoryPage,
        {
          category: currentCategoryObject,
          categories,
          products,
          onNavigateHome: () => handleSelectCategoryPage("home"),
          onNavigateCategory: handleSelectCategoryPage,
          onSelectProduct: setSelectedProduct,
          onAddToCart: addToCart,
          onOpenBuilder: () => setIsBuilderOpen(true),
          onOpenSourcing: () => setIsSourcingOpen(true),
          wishlist,
          onToggleWishlist: toggleWishlist,
          formatPrice,
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
          onShowToast: showToast
        }
      ))
    )), /* @__PURE__ */ React.createElement(Footer, { onShowToast: showToast }), /* @__PURE__ */ React.createElement(
      CustomBuilder,
      {
        isOpen: isBuilderOpen,
        onClose: () => setIsBuilderOpen(false),
        formatPrice,
        onAddToCart: addToCart,
        onShowToast: showToast
      }
    ), /* @__PURE__ */ React.createElement(
      Modals,
      {
        selectedProduct,
        onCloseProduct: () => setSelectedProduct(null),
        onAddToCart: addToCart,
        formatPrice,
        isSourcingOpen,
        onCloseSourcing: () => setIsSourcingOpen(false),
        isCartOpen,
        onCloseCart: () => setIsCartOpen(false),
        cart,
        onUpdateQty: updateQty,
        rawSubtotal,
        discount,
        shipping,
        totalUSD,
        appliedPromo,
        setAppliedPromo,
        onOpenCheckout: () => setIsCheckoutOpen(true),
        isCheckoutOpen,
        onCloseCheckout: () => setIsCheckoutOpen(false),
        onClearCart: () => setCart([]),
        onShowToast: showToast
      }
    ));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
