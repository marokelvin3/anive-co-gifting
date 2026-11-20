export const PRODUCTS = [
  {
    id: 'anive-01',
    name: 'The Ethereal Bridal Suite',
    categoryId: 'bridesmaids',
    categoryName: 'Bridesmaids Gift Boxes & Bags',
    price: 135,
    rating: 4.9,
    reviewsCount: 128,
    badge: 'Bridal Bestseller',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'A soothing eucalyptus linen keepsake box filled with Mulberry silk essentials for your maid of honour and bridesmaids.',
    fullDesc: 'Curated to envelope your closest circle in pure tranquility on the wedding morning. Encased in a rigid linen box with sage satin ribbon, each piece is thoughtfully chosen for pampering, memories, and wedding day photography.',
    contents: [
      '100% Pure Mulberry Silk Eyemask (Embroidered initials)',
      'Rose Quartz Facial Gua Sha Sculpting Tool',
      'Hand-Poured Lavender & Sea Salt Soy Votive (45hr burn)',
      'Sugarfina Champagne Gummy Bears',
      'Hand-lettered Gold Foil "Will You Stand by Me?" Card'
    ],
    inStock: true,
    dispatchTime: 'Dispatches in 24h',
    allowsMonogram: true,
    isEmergencyReady: false,
    tags: ['Bridesmaid', 'Bridal', 'Silk', 'Monogram', 'Wedding Morning']
  },
  {
    id: 'anive-02',
    name: 'The Monogrammed Sanctuary Box',
    categoryId: 'personalised',
    categoryName: 'Personalised Gift Boxes',
    price: 165,
    rating: 5.0,
    reviewsCount: 94,
    badge: 'Custom Hot-Foil',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'Handcrafted rigid oyster keepsake box stamped with personalized initials in bespoke matte champagne foil.',
    fullDesc: 'Designed to be retained and treasured forever on vanity tables or bookshelves. Inside lies a symphony of tactile luxury tailored specifically to the recipient.',
    contents: [
      'Personalised Hot-Foil Embossed Suede Notebook',
      'Solid Brass Hexagonal Rollerball Pen',
      'White Amber & Driftwood Botanical Diffuser',
      'Artisanal Single-Origin Dominican Republic Dark Chocolate',
      'Personalised Custom Name Vellum Envelope'
    ],
    inStock: true,
    dispatchTime: 'Custom 2-3 Days',
    allowsMonogram: true,
    isEmergencyReady: false,
    tags: ['Personalised', 'Monogram', 'Foil', 'Stationery', 'Keepsake']
  },
  {
    id: 'anive-03',
    name: 'The 2-Hour Express Respite Box',
    categoryId: 'emergency',
    categoryName: 'Emergency & Last-Minute Gifting',
    price: 120,
    rating: 4.9,
    reviewsCount: 210,
    badge: 'Same-Day Dispatch',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'Pre-assembled, perfectly balanced luxury emergency rescue gift. Order before 2 PM for immediate same-day priority dispatch.',
    fullDesc: 'Life moves fast. When a birthday, promotion, or apology requires immediate distinction, our Emergency Respite box is pre-assembled in our atelier, sealed with a fresh sage bow and expedited with priority tracking.',
    contents: [
      'Artisanal Sea Salt Caramel Truffle Box (Set of 9)',
      'Cedarwood & Bergamot Hand Therapy Balm (75ml)',
      'Handcrafted Ceramic Mug in Spearmint Glaze',
      'Loose Leaf Calming Chamomile Infusion (50g)',
      'Urgent Calligraphy Card with Your Custom Note'
    ],
    inStock: true,
    dispatchTime: 'Dispatches Today (Order by 2pm)',
    allowsMonogram: false,
    isEmergencyReady: true,
    tags: ['Emergency', 'Last-Minute', 'Same-Day', 'Fast Delivery', 'Saviour']
  },
  {
    id: 'anive-04',
    name: 'The Executive Prestige Suite',
    categoryId: 'corporate',
    categoryName: 'Corporate Gifting',
    price: 195,
    rating: 5.0,
    reviewsCount: 162,
    badge: 'B2B Top Rated',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'Understated corporate excellence with custom blind-debossed client logos and premium executive accoutrements.',
    fullDesc: 'Engineered for high-stakes investor appreciation, partner onboarding, and executive retreats. Delivers a sophisticated message of respect and partnership without gaudy corporate branding.',
    contents: [
      'Full Grain Italian Pebble Leather Padfolio (Debossed)',
      'Insulated Matte Slate Steel Tumbler (Bespoke Etch)',
      'Single-Estate Kona Reserve Coffee Beans (250g)',
      'Gourmet Smoked Almond & Maple Glaze Tin',
      'Branded Corporate Letterpress Welcome Stationery'
    ],
    inStock: true,
    dispatchTime: 'Volume Ready (3-5 Days)',
    allowsMonogram: true,
    isEmergencyReady: false,
    tags: ['Corporate', 'Executive', 'B2B', 'Client Gifting', 'Volume']
  },
  {
    id: 'anive-05',
    name: 'The Radiant Milestone Hamper',
    categoryId: 'birthday',
    categoryName: 'Birthday & Celebration Gifts',
    price: 145,
    rating: 4.8,
    reviewsCount: 88,
    badge: 'Celebration Delight',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'Pop the cork in style. A joyous unboxing featuring bubbly effervescence, gold sparkle matches, and celebration confections.',
    fullDesc: 'Every year is a victory worthy of celebration. This bright yet serene gift box combines party sparkle with calm restorative indulgence.',
    contents: [
      'Artisanal Non-Alcoholic French Sparkling Rosé (Or Brut Mini)',
      'Apothecary Gold Bottle Matchstick Jar with Strike Plate',
      'Wild Fig & Pink Pepper Celebration Candle',
      'Birthday Confetti Shortbread Biscuits',
      'Hand-foiled "Another Year of Wonder" Letterpress Card'
    ],
    inStock: true,
    dispatchTime: 'Dispatches in 24h',
    allowsMonogram: true,
    isEmergencyReady: true,
    tags: ['Birthday', 'Celebration', 'Sparkle', 'Party', 'Milestone']
  },
  {
    id: 'anive-06',
    name: 'The "Will You Be My Maid of Honour?" Keepsake',
    categoryId: 'proposal',
    categoryName: 'Proposal & “Will You Be My…” Gifts',
    price: 110,
    rating: 5.0,
    reviewsCount: 147,
    badge: 'Tear-Jerker Moment',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'The ultimate heartfelt invitation to stand by your side. Styled in seafoam green velvet and gold foil calligraphy.',
    fullDesc: 'Ask the most important bridal question with tenderness. Includes a hidden magnetic keepsake box that transforms into a jewelry organizer post-wedding.',
    contents: [
      'Personalised Frosted Glass Tumbler with Bamboo Straw',
      'Silk Velvet Scrunchie in Dusty Eucalyptus',
      'Sweet Almond & Vanilla Botanical Bath Salts',
      'Dainty 14k Gold Plated Heart Knot Ring Dish',
      '"I Couldn\'t Say I Do Without You" Reveal Envelope'
    ],
    inStock: true,
    dispatchTime: 'Dispatches in 24h',
    allowsMonogram: true,
    isEmergencyReady: false,
    tags: ['Proposal', 'Maid of Honour', 'Bridesmaid', 'Bridal', 'Velvet']
  },
  {
    id: 'anive-07',
    name: 'The Guest Hospitality & Welcome Bag Suite',
    categoryId: 'wedding',
    categoryName: 'Wedding & Event Gifting',
    price: 85,
    rating: 4.9,
    reviewsCount: 76,
    badge: 'Destination Favorite',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'Canvas botanical tote bag tailored for destination wedding guests with bespoke itinerary inserts and local delicacies.',
    fullDesc: 'Welcome loved ones from across the globe into their hotel suites with warm hospitality. Fully customisable with your wedding weekend timeline and monogram.',
    contents: [
      'Heavyweight 100% Organic Canvas Tote with Olive Green Trim',
      'Artisanal Rosemary & Sea Salt Flatbread Crisps',
      'Sparkling Botanical Elderflower & Mint Elixir',
      'Organic Lavender Pillow Sleep Mist (30ml)',
      'Custom Printed Wedding Weekend Map & Itinerary'
    ],
    inStock: true,
    dispatchTime: 'Bulk Orders (5-7 Days)',
    allowsMonogram: true,
    isEmergencyReady: false,
    tags: ['Wedding', 'Guest Favours', 'Welcome Bag', 'Destination', 'Hospitality']
  },
  {
    id: 'anive-08',
    name: 'The Endless Romance & Date Night Crate',
    categoryId: 'anniversary',
    categoryName: 'Anniversary & Romantic Gifting',
    price: 175,
    rating: 5.0,
    reviewsCount: 119,
    badge: 'Anniversary Icon',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'A poetic celebration of enduring love. Features hand-dipped beeswax tapers, couple conversation prompts, and dark chocolate.',
    fullDesc: 'Crafted for milestones from the first anniversary paper year to golden jubilees. Transforms an evening at home into an intimate, sensory candlelit rendezvous.',
    contents: [
      'Pair of Fluted Ceramic Candlestick Holders',
      'Hand-Dipped French Sage Beeswax Taper Candles',
      'Artisanal Hazelnut Praline Box (12 pieces)',
      '100 Meaningful Couple Connection Conversation Prompts',
      'Handmade Botanical Love Letter on Deckled Edge Cotton Paper'
    ],
    inStock: true,
    dispatchTime: 'Dispatches in 24h',
    allowsMonogram: true,
    isEmergencyReady: true,
    tags: ['Anniversary', 'Romance', 'Love', 'Candles', 'Date Night']
  },
  {
    id: 'anive-09',
    name: 'The Gratitude & Serenity Box',
    categoryId: 'thankyou',
    categoryName: 'Thank You & Appreciation Gifts',
    price: 98,
    rating: 4.8,
    reviewsCount: 153,
    badge: 'Deep Gratitude',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'The gentlest way to say "Thank you for everything". Soothing herbal botanical teas and nourishing shea body soufflé.',
    fullDesc: 'When words aren’t enough to convey heartfelt thankfulness to a physician, host, mentor or colleague, this serene box says it with profound grace.',
    contents: [
      'Hand-thrown Spearmint Ceramic Teacup',
      'Organic White Peony & Jasmine Loose Tea (40g)',
      'Gold Fine Mesh Heart Tea Infuser',
      'Whipped Shea & Frankincense Body Cream (100ml)',
      'Handwritten Deckled Thank You Card'
    ],
    inStock: true,
    dispatchTime: 'Dispatches in 24h',
    allowsMonogram: false,
    isEmergencyReady: true,
    tags: ['Thank You', 'Gratitude', 'Tea', 'Ceramics', 'Appreciation']
  },
  {
    id: 'anive-10',
    name: 'The Bespoke Custom Atelier Box',
    categoryId: 'custom',
    categoryName: 'Custom Gifting',
    price: 150,
    rating: 5.0,
    reviewsCount: 340,
    badge: 'Interactive Builder',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'Curated by you, assembled by our master atelier. Use our 4-step builder to select your packaging, gifts, and calligraphy.',
    fullDesc: 'The ultimate bespoke experience. Select from our library of 50+ hand-curated ethical artisanal products, luxury gift vessels, raw silk ribbons, and personalised lettering.',
    contents: [
      'Your choice of Luxury Keepsake Box (Sage, Oyster, or Slate)',
      '3 to 6 Artisanal Curated Gifts chosen by you',
      'Hand-torn Silk Ribbon in bespoke colorway',
      'Preserved Olive & Ruscus Greenery sprig',
      'Wax-Sealed Hand-Calligraphed Envelope'
    ],
    inStock: true,
    dispatchTime: 'Handmade 24-48h',
    allowsMonogram: true,
    isEmergencyReady: false,
    tags: ['Custom', 'Builder', 'DIY', 'Personalised', 'Unique']
  },
  {
    id: 'anive-11',
    name: 'Private VIP Sourcing & Curation Portfolio',
    categoryId: 'sourcing',
    categoryName: 'Gift Sourcing & Curation',
    price: 350,
    rating: 5.0,
    reviewsCount: 42,
    badge: 'White-Glove Sourcing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'A dedicated curation director will scour global ateliers to source rare, bespoke, or custom-manufactured gifting concepts.',
    fullDesc: 'Tailored for celebrity weddings, ultra-high-net-worth family gifting, and bespoke luxury product launches. Includes full mood-boarding, prototype samples, and international logistics.',
    contents: [
      'Dedicated Senior Gift Concierge Consultant',
      '3 Tailored Aesthetic Proposals with 3D Mockups',
      'Physical Sample Box delivered to your doorstep',
      'Custom Brand Packaging & Debossing Tooling',
      'Global White-Glove Multi-Drop Courier Logistics'
    ],
    inStock: true,
    dispatchTime: 'Inquiry & Consultation',
    allowsMonogram: true,
    isEmergencyReady: false,
    tags: ['Sourcing', 'Concierge', 'VIP', 'Luxury', 'Bespoke']
  },
  {
    id: 'anive-12',
    name: 'The Artisanal Botanical Favours (Set of 10)',
    categoryId: 'favours',
    categoryName: 'Event Favours & Guest Gifts',
    price: 75,
    rating: 4.9,
    reviewsCount: 89,
    badge: 'Party Favor Favorite',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'Charming mini gift boxes with hand-poured soy votives, botanical seed paper, and customized monogram wax seals.',
    fullDesc: 'Ensure your event guests leave with a fragrant reminder of your special evening. Ideal for bridal showers, dinner galas, and wedding receptions.',
    contents: [
      '10x Mini Textured Sage Gift Boxes (8x8cm)',
      '10x Hand-Poured Bergamot & Sea Breeze Soy Votives',
      '10x Wildflower Plantable Seed Gift Tags',
      '10x Silk Cord Ties with Olive Green Wax Seal',
      'Customised Couple or Event Host Name Printing'
    ],
    inStock: true,
    dispatchTime: 'Dispatches in 3-4 Days',
    allowsMonogram: true,
    isEmergencyReady: false,
    tags: ['Favours', 'Guest Gifts', 'Bulk', 'Candles', 'Wax Seal']
  },
  {
    id: 'anive-13',
    name: 'The Nurture & Cocoon Mum & Baby Suite',
    categoryId: 'baby',
    categoryName: 'Baby & New Mum Gifts',
    price: 160,
    rating: 5.0,
    reviewsCount: 112,
    badge: 'New Mum Essential',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'A tender tribute to the postpartum mother and precious newborn. Ultra-soft organic bamboo and restorative botanical balms.',
    fullDesc: 'Most baby gifts neglect the heroic mother. This curation balances tender organic items for the little one with restorative perineal and breast care herbal remedies for the new mum.',
    contents: [
      'GOTS-Certified Organic Muslin Swaddle Blanket (Sage Leaf)',
      'Handcrafted Beechwood & Silicone Teething Rattle',
      'Organic Calendula & Chamomile Nipple & Skin Salve',
      'Postpartum Nursing Herbal Tea Infusion',
      'Keepsake Embossed Baby Milestone Journal'
    ],
    inStock: true,
    dispatchTime: 'Dispatches in 24h',
    allowsMonogram: true,
    isEmergencyReady: true,
    tags: ['Baby', 'New Mum', 'Postpartum', 'Organic', 'Nursery']
  },
  {
    id: 'anive-14',
    name: 'The Cashmere & Crystal Grand Reserve',
    categoryId: 'luxury',
    categoryName: 'Luxury & Premium Gifting',
    price: 395,
    rating: 5.0,
    reviewsCount: 64,
    badge: 'Haute Prestige',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'The absolute zenith of refined gift-giving. Scottish cashmere throw, hand-cut crystal glasses, and heirloom presentation case.',
    fullDesc: 'Presented in an oversized handcrafted wooden keepsake trunk bound in slate bridle leather. Unmatched in poise, craftsmanship, and pure sensory indulgence.',
    contents: [
      '100% Pure Scottish Cashmere Fringe Throw (Muted Mist Grey)',
      'Pair of Hand-Blown Fluted Crystal Champagne Coupes',
      'Reserve Estate Raw Leather Coaster Set (Hand-stitched)',
      'Baobab & Cardamom Luxury Triple-Wick Scented Candle',
      'Hand-Carved Walnut Keepsake Chest with Brass Hinges'
    ],
    inStock: true,
    dispatchTime: 'Courier Express 24h',
    allowsMonogram: true,
    isEmergencyReady: false,
    tags: ['Luxury', 'Premium', 'Cashmere', 'Crystal', 'Heirloom']
  },
  {
    id: 'anive-15',
    name: 'The Winter Solstice & Seasonal Curation',
    categoryId: 'holiday',
    categoryName: 'Holiday & Seasonal Gifting',
    price: 155,
    rating: 4.9,
    reviewsCount: 178,
    badge: 'Seasonal Collection',
    image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'Festive cheer enveloped in cool frosted greens. Spiced orange pomander, mull wine spices, and gilded pinecone keepsakes.',
    fullDesc: 'Celebrate the warmth of the holidays with a serene, understated palette that departs from noisy commercial colours in favour of quiet winter luxury.',
    contents: [
      'Spiced Bitter Orange & Siberian Pine Needle Scented Candle',
      'Organic Artisanal Mulling Spices in Muslin Sachet',
      'Gilded Ceramic Pinecone Holiday Tree Keepsake',
      'Dark Chocolate Gingerbread Toffee Bark',
      'Seasonal Botanical Greeting Card with Wax Seal'
    ],
    inStock: true,
    dispatchTime: 'Dispatches in 24h',
    allowsMonogram: true,
    isEmergencyReady: true,
    tags: ['Holiday', 'Christmas', 'Seasonal', 'Winter', 'Festive']
  }
];
