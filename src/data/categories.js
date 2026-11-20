export const CATEGORIES = [
  {
    id: 'bridesmaids',
    name: 'Bridesmaids Gift Boxes & Bags',
    shortName: 'Bridesmaids Gifts',
    tagline: 'Cherish your bridal party with soft sage & oyster keepsakes',
    description: 'Bespoke bridesmaid proposals, bridal morning hampers, personalised silk robes, and handcrafted aesthetic accessories tailored for your inner circle.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    badge: 'Bridal Favorite',
    itemCount: '18 Designs'
  },
  {
    id: 'personalised',
    name: 'Personalised Gift Boxes',
    shortName: 'Personalised Boxes',
    tagline: 'Custom hot-foil embossed monograms & tailored contents',
    description: 'Debossed gold or silver foil typography, laser-engraved keepsakes, and personalised items crafted uniquely for your recipient.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    badge: 'Custom Foil',
    itemCount: '24 Options'
  },
  {
    id: 'emergency',
    name: 'Emergency & Last-Minute Gifting',
    shortName: 'Emergency & Last-Minute',
    tagline: 'Same-day express dispatch & instant luxury digital reveals',
    description: 'Forgot an anniversary or milestone? Ready-to-ship curations dispatched within 2 hours or delivered with an animated digital gift concierge reveal.',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    badge: 'Same-Day Dispatch',
    itemCount: '12 In-Stock Now'
  },
  {
    id: 'corporate',
    name: 'Corporate Gifting',
    shortName: 'Corporate Gifting',
    tagline: 'Elevate client relations & employee milestones with executive poise',
    description: 'Volume branding, custom engraved corporate logo sleeves, bespoke branded ribbons, and white-glove multi-address recipient shipping.',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    badge: 'Volume Discounts',
    itemCount: 'B2B Concierge'
  },
  {
    id: 'birthday',
    name: 'Birthday & Celebration Gifts',
    shortName: 'Birthday & Celebration',
    tagline: 'Artisanal champagne, gourmet confections & botanical scents',
    description: 'Unboxings designed to make milestones unforgettable. From milestone 30th to jubilant birthdays, curated with joyous refinement.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    badge: 'Celebration',
    itemCount: '15 Curations'
  },
  {
    id: 'proposal',
    name: 'Proposal & “Will You Be My…” Gifts',
    shortName: 'Proposal & "Will You Be My..."',
    tagline: 'Meaningful, heart-stirring unboxings for lifetime questions',
    description: '“Will you be my Maid of Honour?”, “Will you be my Bridesmaid?”, “Will you marry me?” and Godparent keepsake boxes presented in velvet ribbons.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    badge: 'Heartfelt Keepsake',
    itemCount: '10 Curations'
  },
  {
    id: 'wedding',
    name: 'Wedding & Event Gifting',
    shortName: 'Wedding & Event Gifting',
    tagline: 'Welcome suites, newlywed congratulations & guest experiences',
    description: 'Delight out-of-town guests with hotel welcome hampers, newlywed honeymoon send-off suites, and lavish event hospitality curations.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    badge: 'Event Hospitality',
    itemCount: '14 Collections'
  },
  {
    id: 'anniversary',
    name: 'Anniversary & Romantic Gifting',
    shortName: 'Anniversary & Romance',
    tagline: 'Timeless declarations of love wrapped in silk and candlelight',
    description: 'Paper, leather, crystal or modern milestone anniversaries. Thoughtful romantic hampers designed for intimate date nights and unforgettable memories.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    badge: 'Romantic Suite',
    itemCount: '11 Curations'
  },
  {
    id: 'thankyou',
    name: 'Thank You & Appreciation Gifts',
    shortName: 'Thank You & Appreciation',
    tagline: 'Express genuine gratitude with understated, soothing elegance',
    description: 'Show heartfelt appreciation to mentors, medical heroes, clients, teachers, and gracious dinner hosts with restorative tea and spa moments.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    badge: 'Gratitude Box',
    itemCount: '16 Collections'
  },
  {
    id: 'custom',
    name: 'Custom Gifting',
    shortName: 'Custom Gifting (DIY Builder)',
    tagline: 'Hand-pick every luxury element inside our interactive studio',
    description: 'Select your box finish, hand-curate every artisanal product, pick your raw silk ribbon, and pen your bespoke calligraphy card note.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    badge: 'Interactive Studio',
    itemCount: 'Build Your Own'
  },
  {
    id: 'sourcing',
    name: 'Gift Sourcing & Curation',
    shortName: 'Gift Sourcing & Curation',
    tagline: 'Private concierge for rare, vintage & globally sourced treasures',
    description: 'Need 300 bottles of single-estate vintage olive oil, bespoke monogrammed marble boards, or hard-to-find international luxury items? We source it for you.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    badge: 'Private Concierge',
    itemCount: 'Bespoke Sourcing'
  },
  {
    id: 'favours',
    name: 'Event Favours & Guest Gifts',
    shortName: 'Event Favours & Guest Gifts',
    tagline: 'Miniature artisanal delights that leave lasting impressions',
    description: 'Artisanal soy wax votives, custom matchboxes, French macaron sets, botanical seed packets, and luxury travel fragrances for gala and wedding guests.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    badge: 'Bulk Favours',
    itemCount: '20+ Favours'
  },
  {
    id: 'baby',
    name: 'Baby & New Mum Gifts',
    shortName: 'Baby & New Mum Gifts',
    tagline: 'Gentle organic pampering for newborn arrivals and nurturing mothers',
    description: 'GOTS-certified organic cotton swaddles, natural wood teething rings, soothing botanical perineal mist, and calm postpartum relaxation hampers.',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    badge: 'Gentle Organic',
    itemCount: '12 Newborn Suites'
  },
  {
    id: 'luxury',
    name: 'Luxury & Premium Gifting',
    shortName: 'Luxury & Premium Gifting',
    tagline: 'The pinnacle of craftsmanship, heirloom goods & fine vintages',
    description: 'Handmade Italian leather journals, Baccarat crystal champagne flutes, Scottish cashmere throws, and curated rare reserve treats.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    badge: 'High Atelier',
    itemCount: 'Ultra Luxury'
  },
  {
    id: 'holiday',
    name: 'Holiday & Seasonal Gifting',
    shortName: 'Holiday & Seasonal',
    tagline: 'Festive solstice, Christmas, Eid, Spring & New Year curations',
    description: 'Rich spiced citrus pomander candles, spiced gingerbread truffles, gilded pine ornaments, and limited-edition festive keepsake wooden boxes.',
    image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    badge: 'Seasonal Edition',
    itemCount: 'Winter & Festive'
  }
];
