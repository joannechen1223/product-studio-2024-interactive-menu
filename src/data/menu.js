const menuData = [
  {
    groupId: 1,
    groupName: "Hors d'oeuvres",
    items: [
      {
        itemId: 1,
        itemName: "Soup A L'oignon",
        translationName: "French Onion Soup",
        ingredients: ["onion", "croutons", "cheese", "gruyere"],
        imageUrls: [
          "https://www.simplyrecipes.com/thmb/cmCIHeOeuV153LujEdY6tZK_Mb8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-French-Onion-Soup-LEAD-06-00d3b5bcdf4a4261b89e1be4aedf90f3.jpg",
        ],
        allergens: ["dairy", "gluten", "nuts"],
      },
      {
        itemId: 2,
        itemName: "Escargots",
        translationName: "French snails",
        ingredients: ["escargots", "lemon garlic", "parsley", "butter"],
        imageUrls: [
          "https://www.cuisineryfoodmarket.com/cdn/shop/files/dishfeb24-10.jpg",
        ],
        allergens: ["dairy", "gluten", "nuts"],
      },
      {
        itemId: 3,
        itemName: "Mousse de foie",
        translationName: "poultry liver paste",
        ingredients: ["duck liver", "foie gras mousse", "cherry confiture"],
        imageUrls: [
          "https://www.cuisineryfoodmarket.com/cdn/shop/files/dishfeb24-10.jpg",
        ],
        allergens: ["dairy", "gluten", "nuts"],
      },
    ],
  },
  {
    groupId: 2,
    groupName: "Brunch",
    items: [
      {
        itemId: 3,
        itemName: "Breakfast",
        translationName: "Breakfast",
        ingredients: ["eggs", "bacon", "sausage", "hashbrowns", "toast"],
      },
      {
        itemId: 4,
        itemName: "Lunch",
        translationName: "Lunch",
        ingredients: ["salad", "sandwich", "soup", "salad"],
      },
    ],
  },
];

export default menuData;
