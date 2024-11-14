const menuData = [
  {
    groupId: 0,
    groupName: "Hors d'oeuvres",
    items: [
      {
        itemId: 0,
        itemName: "Soup A L'oignon",
        translationName: "French Onion Soup",
        ingredients: ["onion", "croutons", "cheese", "gruyere"],
        imageUrls: [
          "https://www.simplyrecipes.com/thmb/cmCIHeOeuV153LujEdY6tZK_Mb8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-French-Onion-Soup-LEAD-06-00d3b5bcdf4a4261b89e1be4aedf90f3.jpg",
          "https://www.onceuponachef.com/images/2019/02/french-onion-soup-1-760x970.jpg",
          "https://www.recipetineats.com/tachyon/2018/11/French-Onion-Soup_1.jpg",
        ],
        allergens: ["dairy", "gluten", "nuts"],
        description:
          "Soupe A L'oignon is a warm, tasty onion soup with a crunchy bread slice and melty cheese on top. It's cozy and packed with rich flavors.",
      },
      {
        itemId: 1,
        itemName: "Escargots",
        translationName: "French snails",
        ingredients: ["escargots", "lemon garlic", "parsley", "butter"],
        imageUrls: [
          "https://www.cuisineryfoodmarket.com/cdn/shop/files/dishfeb24-10.jpg",
        ],
        allergens: ["dairy", "gluten", "nuts"],
        description:
          "Escargots are a classic French dish made with snails cooked in a garlic and butter sauce. They're served with a generous amount of melted butter on top.",
      },
      {
        itemId: 2,
        itemName: "Mousse de foie",
        translationName: "poultry liver paste",
        ingredients: ["duck liver", "foie gras mousse", "cherry confiture"],
        imageUrls: [
          "https://www.cuisineryfoodmarket.com/cdn/shop/files/dishfeb24-10.jpg",
        ],
        allergens: ["dairy", "gluten", "nuts"],
        description:
          "Mousse de foie is a rich and creamy pate made from duck liver. It's served with a sweet cherry confiture on top.",
      },
    ],
  },
  {
    groupId: 1,
    groupName: "Brunch",
    items: [
      {
        itemId: 3,
        itemName: "Breakfast",
        translationName: "Breakfast",
        ingredients: ["eggs", "bacon", "sausage", "hashbrowns", "toast"],
        description:
          "Breakfast is a classic American breakfast with eggs, bacon, sausage, hashbrowns, and toast.",
      },
      {
        itemId: 4,
        itemName: "Lunch",
        translationName: "Lunch",
        ingredients: ["salad", "sandwich", "soup", "salad"],
        description:
          "Lunch is a classic American lunch with a salad, sandwich, soup, and salad.",
      },
    ],
  },
];

export default menuData;
