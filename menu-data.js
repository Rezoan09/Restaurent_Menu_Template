const MENU_DATA = [
  {
    category: "Appetizer",
    description: "Snacks, starters, and quick bites.",
    items: [
      { id: "singara", name: "Singara", pricingType: "single", price: 2, unitLabel: "per piece", minQty: 6 },
      { id: "piyaju", name: "Piyaju", pricingType: "single", price: 1.5, unitLabel: "per piece", minQty: 6 },
      { id: "veg-pakora", name: "Vegetable Pakora", pricingType: "single", price: 1.5, unitLabel: "per piece", minQty: 6 },
      { id: "potato-chop", name: "Potato Chop", pricingType: "single", price: 1.5, unitLabel: "per piece", minQty: 6 },
      { id: "egg-potato-chop", name: "Egg-Potato Chop", pricingType: "single", price: 2.5, unitLabel: "per piece", minQty: 6 },
      { id: "jhal-puli", name: "Jhal Puli", pricingType: "single", price: 2, unitLabel: "per piece", minQty: 6 },
      { id: "chicken-puff", name: "Chicken Puff Pastry", pricingType: "single", price: 3, unitLabel: "per piece", minQty: 6 },
      { id: "chicken-cutlet", name: "Chicken Cutlet", pricingType: "single", price: 3, unitLabel: "per piece", minQty: 6 },
      { id: "bbq-wings", name: "Chicken Wings Barbeque", pricingType: "single", price: 2, unitLabel: "per piece", minQty: 6 },
      { id: "chatpati-box", name: "Chatpati", pricingType: "single", price: 12, unitLabel: "24 oz box", minQty: 1 },
      { id: "fuchka", name: "Fuchka", pricingType: "single", price: 30, unitLabel: "20 pieces", minQty: 1 }
    ]
  },

  {
    category: "Rice & Biriyani",
    description: "Rice, polao, khichuri, and biriyani trays.",
    items: [
      {
        id: "plain-polao",
        name: "Plain Polao / Pilaf",
        pricingType: "size",
        sizes: { small: 18, medium: 35, large: 70 },
        sizeLabels: { small: "Small (4 person)", medium: "Medium / Half Tray (8 person)", large: "Large / Full Tray (16 person)" }
      },
      {
        id: "morog-polao",
        name: "Morog Polao",
        pricingType: "size",
        sizes: { small: 40, medium: 70, large: 135 },
        sizeLabels: { small: "Small", medium: "Medium / Half Tray", large: "Large / Full Tray" }
      },
      {
        id: "bhuna-khichuri",
        name: "Bhuna Khichuri",
        pricingType: "size",
        sizes: { small: 20, medium: 40, large: 75 },
        sizeLabels: { small: "Small", medium: "Medium / Half Tray", large: "Large / Full Tray" }
      },
      {
        id: "chicken-khichuri",
        name: "Chicken Khichuri",
        pricingType: "size",
        sizes: { small: 35, medium: 65, large: 130 },
        sizeLabels: { small: "Small", medium: "Medium / Half Tray", large: "Large / Full Tray" }
      },
      {
        id: "veg-khichuri",
        name: "Vegetable Khichuri",
        pricingType: "size",
        sizes: { small: 30, medium: 60, large: 120 },
        sizeLabels: { small: "Small", medium: "Medium / Half Tray", large: "Large / Full Tray" }
      },
      {
        id: "chicken-biriyani",
        name: "Chicken Biriyani",
        pricingType: "size",
        sizes: { small: 35, medium: 65, large: 130 },
        sizeLabels: { small: "Small (4 person)", medium: "Medium / Half Tray (8 person)", large: "Large / Full Tray (16 person)" }
      },
      {
        id: "mutton-biriyani",
        name: "Mutton Biriyani",
        pricingType: "size",
        sizes: { small: 60, medium: 110, large: 220 },
        sizeLabels: { small: "Small", medium: "Medium / Half Tray", large: "Large / Full Tray" }
      },
      {
        id: "hyderabadi-chicken-biriyani",
        name: "Hyderabadi Chicken Biriyani",
        pricingType: "size",
        sizes: { small: 40, medium: 75, large: 150 },
        sizeLabels: { small: "Small", medium: "Medium / Half Tray", large: "Large / Full Tray" }
      },
      {
        id: "hyderabadi-mutton-biriyani",
        name: "Hyderabadi Mutton Biriyani",
        pricingType: "size",
        sizes: { small: 65, medium: 125, large: 250 },
        sizeLabels: { small: "Small", medium: "Medium / Half Tray", large: "Large / Full Tray" }
      }
    ]
  },

  {
    category: "Chicken",
    description: "Classic chicken curries and tray items.",
    items: [
      {
        id: "chicken-roast",
        name: "Chicken Roast",
        pricingType: "size",
        sizes: { small: 22, medium: 55, large: 110 },
        sizeLabels: { small: "Small (4 person or 38 oz box)", medium: "Medium (10 person or half tray)", large: "Large (20 person or full tray)" }
      },
      {
        id: "chicken-korma",
        name: "Chicken Korma",
        pricingType: "size",
        sizes: { small: 25, medium: 60, large: 120 },
        sizeLabels: { small: "Small", medium: "Medium", large: "Large" }
      },
      {
        id: "chicken-kofta-curry",
        name: "Chicken Kofta Curry",
        pricingType: "size",
        sizes: { small: 30, medium: 70, large: 140 },
        sizeLabels: { small: "Small", medium: "Medium", large: "Large" }
      },
      {
        id: "butter-chicken",
        name: "Butter Chicken",
        pricingType: "size",
        sizes: { small: 30, medium: 70, large: 140 },
        sizeLabels: { small: "Small", medium: "Medium", large: "Large" }
      },
      {
        id: "chicken-bhuna-curry",
        name: "Chicken Bhuna / Curry",
        pricingType: "size",
        sizes: { small: 18, medium: 45, large: 90 },
        sizeLabels: { small: "Small", medium: "Medium", large: "Large" }
      }
    ]
  },

  {
    category: "Fish",
    description: "Fish and shrimp specialties.",
    items: [
      {
        id: "rui-fish-bhuna",
        name: "Rui Fish Bhuna",
        pricingType: "size",
        sizes: { small: 20, large: 45 },
        sizeLabels: { small: "Small order (4 pcs)", large: "Large order (10 pcs)" }
      },
      {
        id: "rui-fish-curry",
        name: "Rui Fish Curry",
        pricingType: "size",
        sizes: { small: 28, large: 65 },
        sizeLabels: { small: "Small order", large: "Large order" }
      },
      {
        id: "swai-fish-curry",
        name: "Swai Fish Curry",
        pricingType: "size",
        sizes: { small: 28, large: 65 },
        sizeLabels: { small: "Small order", large: "Large order" }
      },
      {
        id: "pomfret-dopiyaja",
        name: "Pomfret Dopiyaja",
        pricingType: "size",
        sizes: { small: 32, large: 75 },
        sizeLabels: { small: "Small order", large: "Large order" }
      },
      {
        id: "shrimp-malaikari",
        name: "Shrimp Malaikari",
        pricingType: "single",
        price: 16,
        unitLabel: "24 oz medium box",
        minQty: 1
      },
      {
        id: "lau-chingri",
        name: "Lau Chingri",
        pricingType: "single",
        price: 15,
        unitLabel: "24 oz medium box",
        minQty: 1
      }
    ]
  },

  {
    category: "Mutton & Egg",
    description: "Mutton and egg-based dishes.",
    items: [
      {
        id: "mutton-rezala",
        name: "Mutton Rezala / Kosha",
        pricingType: "single",
        price: 100,
        unitLabel: "Half tray (10 person)",
        minQty: 1
      },
      {
        id: "classic-mutton-curry",
        name: "Classic Mutton Curry with Potato",
        pricingType: "single",
        price: 105,
        unitLabel: "Half tray (10 person)",
        minQty: 1
      },
      {
        id: "mutton-kurma",
        name: "Mutton Kurma",
        pricingType: "single",
        price: 115,
        unitLabel: "Half tray (10 person)",
        minQty: 1
      },
      {
        id: "egg-bhuna",
        name: "Egg Bhuna",
        pricingType: "size",
        sizes: { small: 10, large: 22 },
        sizeLabels: { small: "Small order (4 pcs)", large: "Large order (10 pcs)" }
      },
      {
        id: "egg-kurma",
        name: "Egg Kurma",
        pricingType: "size",
        sizes: { small: 15, large: 35 },
        sizeLabels: { small: "Small order", large: "Large order" }
      },
      {
        id: "egg-curry-potato",
        name: "Egg Curry with Potato",
        pricingType: "size",
        sizes: { small: 12, large: 28 },
        sizeLabels: { small: "Small order", large: "Large order" }
      }
    ]
  },

  {
    category: "Kebab, Fry & Bhorta",
    description: "Kebabs, fries, and bhorta items.",
    items: [
      { id: "chicken-sami-kebab", name: "Chicken Sami Kebab", pricingType: "single", price: 3, unitLabel: "per piece", minQty: 6 },
      { id: "chicken-jali-kebab", name: "Chicken Jali Kebab", pricingType: "single", price: 2.5, unitLabel: "per piece", minQty: 6 },
      { id: "tuna-fish-kebab", name: "Tuna Fish Kebab", pricingType: "single", price: 2, unitLabel: "per piece", minQty: 6 },
      { id: "fish-fry-ilish", name: "Fish Fry (Hilsha)", pricingType: "single", price: 7, unitLabel: "per piece", minQty: 6 },
      { id: "fish-fry-rui", name: "Fish Fry (Rui)", pricingType: "single", price: 4, unitLabel: "per piece", minQty: 6 },
      { id: "eggplant-fry", name: "Egg Plant Fry", pricingType: "single", price: 1.5, unitLabel: "per piece", minQty: 6 },
      { id: "cauliflower-fry", name: "Cauliflower Fry", pricingType: "single", price: 1.5, unitLabel: "per piece", minQty: 6 },
      { id: "eggplant-bhorta", name: "Eggplant Bhorta", pricingType: "single", price: 12, unitLabel: "24 oz box", minQty: 1 },
      { id: "potato-bhorta", name: "Potato Bhorta", pricingType: "single", price: 8, unitLabel: "24 oz box", minQty: 1 },
      { id: "dal-bhorta", name: "Dal Bhorta", pricingType: "single", price: 10, unitLabel: "24 oz box", minQty: 1 }
    ]
  },

  {
    category: "Vegetable & Dal",
    description: "Vegetables, bhaji, and dal items.",
    items: [
      { id: "okra-bhaji", name: "Dharosh / Vendi / Okra Bhaji", pricingType: "single", price: 12, unitLabel: "24 oz box", minQty: 1 },
      { id: "korola-bhaji", name: "Korola with Potato / Carrot Bhaji", pricingType: "single", price: 12, unitLabel: "24 oz box", minQty: 1 },
      { id: "mixed-veg", name: "Mixed Vegetable", pricingType: "single", price: 15, unitLabel: "24 oz box", minQty: 1 },
      { id: "aloo-dom", name: "Aloo-r Dom", pricingType: "single", price: 12, unitLabel: "24 oz box", minQty: 1 },
      { id: "spinach-eggplant", name: "Spinach with Eggplant", pricingType: "single", price: 10, unitLabel: "24 oz box", minQty: 1 },
      { id: "mushur-dal", name: "Mushur Dal / Plain Dal", pricingType: "single", price: 10, unitLabel: "24 oz box", minQty: 1 },
      { id: "moong-dal-bhuna", name: "Mug (Moong) Dal Bhuna", pricingType: "single", price: 12, unitLabel: "24 oz box", minQty: 1 },
      { id: "boot-er-daal", name: "Boot-er Daal", pricingType: "single", price: 12, unitLabel: "24 oz box", minQty: 1 },
      { id: "sobji-dal", name: "Sobji Dal", pricingType: "single", price: 15, unitLabel: "24 oz box", minQty: 1 }
    ]
  },

  {
    category: "Chinese",
    description: "Chinese-style items and fusion catering dishes.",
    items: [
      {
        id: "mixed-fried-rice",
        name: "Mixed Fried Rice",
        pricingType: "size",
        sizes: { small: 18, medium: 50, large: 100 },
        sizeLabels: { small: "Small order (38 oz box)", medium: "Medium order (Half tray)", large: "Large order (Full tray)" }
      },
      {
        id: "mixed-sizzling",
        name: "Mixed Sizzling",
        pricingType: "size",
        sizes: { small: 25, medium: 75, large: 150 },
        sizeLabels: { small: "Small", medium: "Medium", large: "Large" }
      },
      {
        id: "chinese-veg",
        name: "Chinese Vegetable",
        pricingType: "size",
        sizes: { small: 20, medium: 50, large: 100 },
        sizeLabels: { small: "Small", medium: "Medium", large: "Large" }
      },
      {
        id: "hakka-chicken",
        name: "Chinese Hakka Chicken",
        pricingType: "size",
        sizes: { small: 22, medium: 65, large: 130 },
        sizeLabels: { small: "Small", medium: "Medium", large: "Large" }
      },
      {
        id: "chili-chicken",
        name: "Chili-Chicken",
        pricingType: "size",
        sizes: { small: 22, medium: 65, large: 130 },
        sizeLabels: { small: "Small", medium: "Medium", large: "Large" }
      },
      {
        id: "sweet-spicy-chicken-ball",
        name: "Sweet & Spicy Chicken Ball",
        pricingType: "size",
        sizes: { small: 25, medium: 70, large: 140 },
        sizeLabels: { small: "Small", medium: "Medium", large: "Large" }
      },
      {
        id: "chinese-spicy-prawn",
        name: "Chinese Spicy Prawn",
        pricingType: "size",
        sizes: { small: 25, medium: 70, large: 140 },
        sizeLabels: { small: "Small", medium: "Medium", large: "Large" }
      },
      { id: "chicken-fry-piece", name: "Chicken Fry", pricingType: "single", price: 3, unitLabel: "per piece (leg or thigh)", minQty: 6 }
    ]
  },

  {
    category: "Dessert",
    description: "Desserts, pitha, and extras.",
    items: [
      { id: "payesh", name: "Payesh / Khir / Rice Pudding", pricingType: "single", price: 3, unitLabel: "5.5 oz cup", minQty: 10 },
      { id: "gajor-payesh", name: "Gajor-er Payesh", pricingType: "single", price: 3, unitLabel: "5.5 oz cup", minQty: 10 },
      { id: "fruit-cocktail", name: "Creamy Fruit-Cocktail", pricingType: "single", price: 2.5, unitLabel: "5.5 oz cup", minQty: 10 },
      { id: "khir-patishapta", name: "Khir Patishapta", pricingType: "single", price: 3, unitLabel: "per piece", minQty: 10 },
      { id: "teler-pitha", name: "Teler Pitha", pricingType: "single", price: 1.5, unitLabel: "per piece", minQty: 10 },
      { id: "dudh-puli", name: "Dudh Puli", pricingType: "single", price: 2, unitLabel: "per piece", minQty: 10 },
      { id: "bhapa-puli", name: "Bhapa Puli", pricingType: "single", price: 1.5, unitLabel: "per piece", minQty: 10 },
      { id: "narikel-bhaja-puli", name: "Narkeler Bhaja Puli Pitha", pricingType: "single", price: 2, unitLabel: "per piece", minQty: 10 },
      { id: "dudh-er-naru", name: "Dudh-er Naru / Sondesh", pricingType: "single", price: 3, unitLabel: "per piece", minQty: 10 },
      { id: "narikel-tokti", name: "Narkel-er Tokti / Borfi", pricingType: "single", price: 2.5, unitLabel: "per piece", minQty: 10 },
      { id: "luchi", name: "Luchi", pricingType: "single", price: 1.5, unitLabel: "per piece", minQty: 6 },
      { id: "palong-luchi", name: "Palong Luchi", pricingType: "single", price: 2, unitLabel: "per piece", minQty: 6 }
    ]
  }
];
