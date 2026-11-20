(function() {
  const { useState, useEffect, useMemo } = React;
  function App() {
    const [currentRoute, setCurrentRoute] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currency, setCurrency] = useState("USD");
    const [selectedCategory, setSelectedCategory] = useState("all");
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
      const key = `${product.id}-${opts.monogram || "none"}-${opts.ribbon || "ruby"}`;
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
    const filteredProducts = useMemo(() => {
      return products.filter((p) => {
        if (selectedCategory !== "all" && p.categoryId !== selectedCategory) return false;
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          const m1 = p.name.toLowerCase().includes(q);
          const m2 = p.categoryName.toLowerCase().includes(q);
          const m3 = p.shortDesc.toLowerCase().includes(q);
          if (!m1 && !m2 && !m3) return false;
        }
        return true;
      });
    }, [selectedCategory, searchQuery, products]);
    const handleSelectCategoryPage = (catId) => {
      if (catId === "home") {
        setCurrentRoute("home");
      } else {
        setCurrentRoute(catId);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const currentCategoryObject = categories.find((c) => c.id === currentRoute);
    const {
      Navbar,
      Hero,
      Categories,
      ProductCatalog,
      EmergencyBanner,
      CorporateSection,
      ContactSection,
      Footer,
      CustomBuilder,
      Modals,
      CategoriesMenu,
      CategoryPage
    } = window.AniveComponents;
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex flex-col bg-surface-100 text-[#241A1B]" }, toast && /* @__PURE__ */ React.createElement("div", { className: "fixed bottom-6 right-6 z-50 bg-mred-900 text-white px-5 py-3 rounded-2xl shadow-luxury border border-mred-700/60 flex items-center gap-3 text-xs font-medium" }, /* @__PURE__ */ React.createElement("span", { className: "w-5 h-5 rounded-full bg-mred-600 flex items-center justify-center text-white text-[10px]" }, "\u2713"), /* @__PURE__ */ React.createElement("span", null, toast)), /* @__PURE__ */ React.createElement(
      Navbar,
      {
        currency,
        setCurrency,
        cartCount: cart.reduce((a, c) => a + c.quantity, 0),
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
    ), /* @__PURE__ */ React.createElement(
      CategoriesMenu,
      {
        isOpen: isMenuOpen,
        onToggle: () => setIsMenuOpen(!isMenuOpen),
        categories,
        activeCategoryId: currentRoute,
        onSelectCategoryPage: handleSelectCategoryPage
      }
    ), /* @__PURE__ */ React.createElement("main", { className: "flex-1" }, currentRoute === "home" ? (
      /* HOME VIEW */
      /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        Hero,
        {
          onOpenBuilder: () => setIsBuilderOpen(true),
          onToggleMenu: () => setIsMenuOpen(true)
        }
      ), /* @__PURE__ */ React.createElement(
        Categories,
        {
          categories,
          onSelectCategoryPage: handleSelectCategoryPage,
          onOpenBuilder: () => setIsBuilderOpen(true),
          onOpenSourcing: () => setIsSourcingOpen(true)
        }
      ), /* @__PURE__ */ React.createElement(
        ProductCatalog,
        {
          products: filteredProducts,
          categories,
          selectedCategory,
          onSelectCategory: setSelectedCategory,
          onSelectCategoryPage: handleSelectCategoryPage,
          wishlist,
          onToggleWishlist: toggleWishlist,
          onSelectProduct: setSelectedProduct,
          onAddToCart: addToCart,
          formatPrice
        }
      ), /* @__PURE__ */ React.createElement(
        EmergencyBanner,
        {
          onFilterEmergency: () => handleSelectCategoryPage("emergency"),
          onShowToast: showToast
        }
      ), /* @__PURE__ */ React.createElement(
        CorporateSection,
        {
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
          onShowToast: showToast
        }
      ), /* @__PURE__ */ React.createElement(ContactSection, { onShowToast: showToast }))
    ) : (
      /* DEDICATED INDIVIDUAL CATEGORY PAGE VIEW */
      /* @__PURE__ */ React.createElement(
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
          formatPrice
        }
      )
    )), /* @__PURE__ */ React.createElement(
      Footer,
      {
        categories,
        onSelectCategoryPage: handleSelectCategoryPage,
        onShowToast: showToast
      }
    ), /* @__PURE__ */ React.createElement(
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
