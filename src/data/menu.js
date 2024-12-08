// Hors d'oeuvres
import item_12 from "../assets/food/hors_doeuvres/avocat_tomate.webp";
import item_2 from "../assets/food/hors_doeuvres/bisque_de_homard.webp";
import item_15 from "../assets/food/hors_doeuvres/boucherie_waffles.webp";
import item_10 from "../assets/food/hors_doeuvres/chevre.webp";
import item_13 from "../assets/food/hors_doeuvres/chia_pudding.webp";
import item_5 from "../assets/food/hors_doeuvres/les_escargots.webp";
import item_9 from "../assets/food/hors_doeuvres/mousse_foie_gras.webp";
import item_16 from "../assets/food/hors_doeuvres/pain_perdu.webp";
import item_8 from "../assets/food/hors_doeuvres/salade_cesar.webp";
import item_7 from "../assets/food/hors_doeuvres/salade_mesclun.webp";
import item_3 from "../assets/food/hors_doeuvres/salade_nicoise.webp";
import item_11 from "../assets/food/hors_doeuvres/saumon_fume.webp";
import item_1 from "../assets/food/hors_doeuvres/soupe_a_loignon.webp";
import item_4 from "../assets/food/hors_doeuvres/steak_tartare.webp";
import item_6 from "../assets/food/hors_doeuvres/wagyu_carpaccio.webp";
import item_14 from "../assets/food/hors_doeuvres/yogurt_parfait.webp";

// Les Oeufs
import item_17 from "../assets/food/les_oeufs/eggs_benedict.webp";
import item_18 from "../assets/food/les_oeufs/eggs_norwegian.webp";
import item_21 from "../assets/food/les_oeufs/oeufs_meurette.webp";
import item_20 from "../assets/food/les_oeufs/omelette_au_choix.webp";
import item_19 from "../assets/food/les_oeufs/steak_aux_oeufs.webp";

// Plats Principaux
import item_30 from "../assets/food/plats_principaux/boucherie_burger.webp";
import item_24 from "../assets/food/plats_principaux/coq_au_vin.webp";
import item_28 from "../assets/food/plats_principaux/croque_madame.webp";
import item_27 from "../assets/food/plats_principaux/croque_monsieur.webp";
import item_23 from "../assets/food/plats_principaux/moules_dijonnaise.webp";
import item_29 from "../assets/food/plats_principaux/sandwich_boeuf.webp";
import item_25 from "../assets/food/plats_principaux/saumon_roti.webp";
import item_26 from "../assets/food/plats_principaux/st_jacques_roties.webp";
import item_22 from "../assets/food/plats_principaux/steak_frites.webp";
import item_31 from "../assets/food/plats_principaux/wagyu_burger.webp";

const menuData = [
  {
    groupId: 0,
    groupName: "Hors d'oeuvres",
    items: [
      {
        itemId: 1,
        itemName: "Soupe à l'Oignon",
        translationName: "French Onion Soup",
        description:
          "Traditional French onion soup topped with crusty bread and melted cheese",
        mapping:
          "Sweet Cooked Onions + Rich Soup + Melted Cheese + Toasted Bread",
        ingredients: ["Onions", "Croutons", "Gruyère"],
        allergens: ["Gluten", "Dairy"],
        personalizationScore: 85,
        imageUrls: [item_1],
        history:
          "A humble Parisian market worker's dish that became a French cuisine classic.",
        reviews: [
          {
            source: "Yelp",
            username: "Michel P.",
            review:
              "Perfect cheese crust and rich broth. The onions are caramelized beautifully.",
          },
          {
            source: "Local Guide",
            username: "Sarah L.",
            review:
              "Classic French comfort food done right. The broth is deep and flavorful.",
          },
        ],
        aiReview:
          "Reviews consistently praise the rich broth and well-executed cheese crust, with special mention of properly caramelized onions.",
      },
      {
        itemId: 2,
        itemName: "Bisque de Homard",
        translationName: "Lobster Bisque",
        description: "Creamy lobster soup with sherry and fresh herbs",
        mapping:
          "Creamy Soup + Lobster Pieces + Sweet Wine + Fresh Green Herbs",
        ingredients: ["Lobster meat", "Sherry cream", "Chives"],
        allergens: ["Shellfish", "Dairy", "Alcohol"],
        personalizationScore: 88,
        imageUrls: [item_2],
        history:
          "A refined soup that evolved from humble fishermen's fare to haute cuisine.",
        reviews: [
          {
            source: "Yelp",
            username: "Claire D.",
            review:
              "Silky smooth with generous chunks of lobster. The sherry adds elegant depth.",
          },
          {
            source: "Local Guide",
            username: "Robert M.",
            review: "Rich without being heavy. Perfect balance of flavors.",
          },
        ],
        aiReview:
          "Reviews highlight the soup's silky texture and generous lobster portions, with appreciation for the balanced use of sherry.",
      },
      {
        itemId: 3,
        itemName: "La Salade Niçoise",
        translationName: "Niçoise Salad",
        description:
          "Traditional salad with tuna, vegetables, and eggs in vinaigrette",
        mapping:
          "Fresh Tuna + Green Beans + Potatoes + Black Olives + Boiled Egg + Tangy Dressing",
        ingredients: [
          "Ahi tuna",
          "Baby oak greens",
          "Haricot verts",
          "Potatoes",
          "Olives",
          "Anchovies",
          "Egg",
          "Red wine vinaigrette",
        ],
        allergens: ["Fish", "Eggs"],
        personalizationScore: 86,
        imageUrls: [item_3],
        history:
          "Originated in Nice, France, this salad represents the fresh flavors of the Mediterranean coast.",
        reviews: [
          {
            source: "Yelp",
            username: "Lisa R.",
            review:
              "Perfect balance of fresh ingredients. The tuna is excellent quality.",
          },
          {
            source: "Local Guide",
            username: "Jean-Paul M.",
            review:
              "Authentic preparation with high-quality ingredients. The vinaigrette is spot-on.",
          },
        ],
        aiReview:
          "Reviews emphasize the quality and freshness of ingredients, particularly the tuna, with praise for the authentic preparation.",
      },
      {
        itemId: 4,
        itemName: "Prime Steak Tartare",
        translationName: "Raw Beef Tartare",
        description: "Hand-cut raw beef with traditional garnishes",
        mapping:
          "Raw Beef + Tiny Pickles + Small Onions + Raw Egg + Crispy Bread",
        ingredients: [
          "Beef tenderloin",
          "Capers",
          "Cornichons",
          "Shallots",
          "Quail egg",
          "Crostini",
        ],
        allergens: ["Eggs", "Gluten", "Raw meat"],
        personalizationScore: 84,
        imageUrls: [item_4],
        history:
          "A dish that evolved from Mongol warriors to French fine dining, becoming a bistro classic.",
        reviews: [
          {
            source: "Yelp",
            username: "Frank D.",
            review:
              "Perfectly seasoned and hand-chopped. The quail egg adds luxurious richness.",
          },
          {
            source: "Local Guide",
            username: "Marie S.",
            review:
              "Fresh, high-quality beef and excellent balance of flavors. Traditional preparation at its best.",
          },
        ],
        aiReview:
          "Reviews highlight the quality of the beef and traditional preparation, with particular praise for the seasoning and textural elements.",
      },
      {
        itemId: 5,
        itemName: "Les Escargots",
        translationName: "Burgundy Snails",
        description: "Classic preparation of snails in herb-garlic butter",
        mapping: "Snails + Garlic Butter + Fresh Herbs + Lemon",
        ingredients: [
          "Snails",
          "Shallots",
          "Lemon",
          "Parsley",
          "Garlic butter",
        ],
        allergens: ["Dairy", "Mollusks"],
        personalizationScore: 82,
        imageUrls: [item_5],
        history:
          "A Burgundian specialty that became a symbol of French gastronomy in the 20th century.",
        reviews: [
          {
            source: "Yelp",
            username: "Philippe R.",
            review:
              "Perfect garlic-herb butter sauce. The snails are tender and flavorful.",
          },
          {
            source: "Local Guide",
            username: "Anna L.",
            review:
              "Classic French preparation done right. The garlic butter is worth soaking up with bread.",
          },
        ],
        aiReview:
          "Reviews emphasize the quality of the garlic-herb butter and proper preparation of the snails, noting the dish's traditional execution.",
      },
      {
        itemId: 6,
        itemName: "Wagyu Carpaccio",
        translationName: "Thinly Sliced Raw Wagyu Beef",
        description: "Premium raw beef with truffle mayonnaise",
        mapping: "Thin Raw Beef + Creamy Sauce + Spicy Root + Tiny Pickles",
        ingredients: ["Wagyu beef", "Truffle mayo", "Horseradish", "Capers"],
        allergens: ["Eggs", "Raw meat"],
        personalizationScore: 88,
        imageUrls: [item_6],
        history:
          "A modern twist on the Venetian classic, elevated with premium Wagyu beef.",
        reviews: [
          {
            source: "Yelp",
            username: "David K.",
            review:
              "Melt-in-your-mouth beef and the truffle mayo adds amazing depth.",
          },
          {
            source: "Local Guide",
            username: "Sophie M.",
            review:
              "The quality of the Wagyu shines through. Perfect balance with the horseradish and capers.",
          },
        ],
        aiReview:
          "Reviews consistently praise the quality of the Wagyu beef and its pairing with truffle mayonnaise, noting the textural excellence.",
      },
      {
        itemId: 7,
        itemName: "Salade Mesclun Au Croquette de Chèvre",
        translationName: "Mixed Green Salad with Goat Cheese Croquettes",
        description: "Fresh greens with crispy goat cheese and fruit",
        mapping:
          "Fresh Leaves + Fried Cheese Balls + Sweet Apples + Red Tomatoes + Sweet Nuts + Dark Sauce",
        ingredients: [
          "Mixed greens",
          "Goat cheese croquettes",
          "Apples",
          "Tomatoes",
          "Candied walnuts",
          "Balsamic",
        ],
        allergens: ["Dairy", "Nuts", "Gluten"],
        personalizationScore: 86,
        imageUrls: [item_7],
        history:
          "A modern French bistro creation combining traditional croquettes with fresh market ingredients.",
        reviews: [
          {
            source: "Yelp",
            username: "Rachel B.",
            review:
              "The warm goat cheese croquettes contrast beautifully with the crisp greens and sweet apples.",
          },
          {
            source: "Local Guide",
            username: "Marc T.",
            review:
              "Perfect balance of flavors and textures. The candied walnuts add a lovely crunch.",
          },
        ],
        aiReview:
          "Reviews highlight the textural contrast between crispy croquettes and fresh ingredients, with praise for the overall balance of flavors.",
      },
      {
        itemId: 8,
        itemName: "Salade César",
        translationName: "Caesar Salad",
        description: "Classic preparation with anchovy and Parmesan",
        mapping: "Crunchy Lettuce + Salty Fish + Hard Cheese + Fresh Lemon",
        ingredients: ["Romaine", "Anchovy", "Parmesan", "Lemon"],
        allergens: ["Fish", "Dairy", "Eggs"],
        personalizationScore: 83,
        imageUrls: [item_8],
        history:
          "Though created in Mexico, this salad has become a French bistro standard with subtle modifications.",
        reviews: [
          {
            source: "Yelp",
            username: "Laura H.",
            review:
              "Perfect anchovy flavor in the dressing. Crisp romaine and generous Parmesan.",
          },
          {
            source: "Local Guide",
            username: "Pierre D.",
            review:
              "Classic preparation with quality ingredients. The balance of flavors is spot-on.",
          },
        ],
        aiReview:
          "Reviews praise the traditional preparation and balance of flavors, particularly noting the proper use of anchovy and quality of ingredients.",
      },
      {
        itemId: 9,
        itemName: "Mousse De Foie Gras",
        translationName: "Duck Liver Mousse",
        description: "Homemade duck liver mousse with accompaniments",
        mapping: "Smooth Liver Spread + Sweet Cherries + Crispy Bread",
        ingredients: ["Duck liver", "Cherries", "Crostini"],
        allergens: ["Gluten"],
        personalizationScore: 87,
        imageUrls: [item_9],
        history:
          "A refined preparation of traditional French charcuterie, paired with sweet accompaniments.",
        reviews: [
          {
            source: "Yelp",
            username: "Michel L.",
            review:
              "Silky smooth mousse with perfect seasoning. The cherry accompaniment is inspired.",
          },
          {
            source: "Local Guide",
            username: "Emma S.",
            review:
              "Luxuriously creamy and rich. The sweet-savory balance is perfect.",
          },
        ],
        aiReview:
          "Reviews emphasize the smooth texture and proper seasoning of the mousse, with particular praise for its pairing with cherries.",
      },
      {
        itemId: 10,
        itemName: "Chèvre",
        translationName: "Goat Cheese Toast",
        description: "Warm goat cheese on toasted bread with vegetables",
        mapping:
          "Toasted Bread + Soft Cheese + Fresh Vegetables + Green Sauce + Leafy Greens",
        ingredients: [
          "Toasted bread",
          "Goat cheese",
          "Seasonal vegetables",
          "Pesto",
          "Arugula",
        ],
        allergens: ["Dairy", "Gluten", "Nuts"],
        personalizationScore: 84,
        imageUrls: [item_10],
        history:
          "A bistro favorite that showcases the French appreciation for fresh chèvre and simple preparation.",
        reviews: [
          {
            source: "Yelp",
            username: "Alice B.",
            review:
              "The goat cheese is perfectly warmed and creamy. Fresh vegetables add great contrast.",
          },
          {
            source: "Local Guide",
            username: "Thomas R.",
            review:
              "Simple but perfect. The pesto adds a wonderful freshness to the rich cheese.",
          },
        ],
        aiReview:
          "Reviews highlight the quality of the goat cheese and its successful pairing with fresh vegetables and pesto.",
      },
      {
        itemId: 11,
        itemName: "Saumon Fumé",
        translationName: "Smoked Salmon Toast",
        description:
          "Open-faced sandwich with smoked salmon and traditional garnishes",
        mapping:
          "Toasted Bread + Pink Fish + Soft Cheese + Boiled Egg + Fresh Leaves + Purple Onions + Little Pickles",
        ingredients: [
          "Toasted bread",
          "Cream cheese",
          "Smoked salmon",
          "Hard boiled egg",
          "Lettuce",
          "Red onions",
          "Capers",
        ],
        allergens: ["Fish", "Dairy", "Gluten", "Eggs"],
        personalizationScore: 89,
        imageUrls: [item_11],
        history:
          "A classic of French café culture, combining Nordic smoking traditions with French presentation.",
        reviews: [
          {
            source: "Yelp",
            username: "Sarah M.",
            review:
              "High-quality salmon and perfect proportions of all toppings. The capers add just the right salt.",
          },
          {
            source: "Local Guide",
            username: "Jacques P.",
            review:
              "Fresh, well-balanced, and generous with the salmon. Everything you want in a salmon tartine.",
          },
        ],
        aiReview:
          "Reviews emphasize the quality of the salmon and balanced proportions of accompaniments, particularly noting the proper use of capers and onions.",
      },
      {
        itemId: 12,
        itemName: "Avocat Et Tomate",
        translationName: "Avocado and Tomato Toast",
        description: "Modern breakfast toast with fresh ingredients",
        mapping: "Toasted Bread + Mashed Avocado + Fresh Lemon + Soft Eggs",
        ingredients: ["Avocado toast", "Lemon", "Eggs"],
        allergens: ["Eggs", "Gluten"],
        personalizationScore: 85,
        imageUrls: [item_12],
        history:
          "A contemporary addition to the French breakfast menu, embracing global breakfast trends with French refinement.",
        reviews: [
          {
            source: "Yelp",
            username: "Marie C.",
            review:
              "Perfectly ripe avocado and the eggs are done just right. Simple but excellent.",
          },
          {
            source: "Local Guide",
            username: "Paul S.",
            review:
              "Fresh and satisfying. The lemon adds a bright note that makes it special.",
          },
        ],
        aiReview:
          "Reviews highlight the quality of the avocado and proper preparation of eggs, with appreciation for the simple but effective seasoning.",
      },
      {
        itemId: 13,
        itemName: "Chia Seed Pudding",
        translationName: "Coconut Chia Pudding",
        description: "Healthy breakfast pudding with fresh toppings",
        mapping:
          "White Creamy Pudding + Black Seeds + Sweet Syrup + Fresh Berries",
        ingredients: [
          "Coconut milk",
          "Black chia seeds",
          "Maple syrup",
          "Fresh berries",
        ],
        allergens: [],
        personalizationScore: 82,
        imageUrls: [item_13],
        history:
          "A modern health-conscious addition to the traditional French breakfast menu.",
        reviews: [
          {
            source: "Yelp",
            username: "Lisa K.",
            review:
              "Creamy and not too sweet. The fresh berries make it special.",
          },
          {
            source: "Local Guide",
            username: "Antoine R.",
            review:
              "Perfect texture and the maple syrup adds just the right sweetness.",
          },
        ],
        aiReview:
          "Reviews praise the balanced sweetness and creamy texture, with particular mention of the fresh fruit toppings.",
      },
      {
        itemId: 14,
        itemName: "Yogurt Parfait",
        translationName: "Fresh Yogurt Parfait",
        description: "Layered breakfast with house-made granola",
        mapping: "Creamy Yogurt + Crunchy Oats + Sweet Berries",
        ingredients: ["Yogurt", "Homemade granola", "Fresh berries"],
        allergens: ["Dairy", "Nuts"],
        personalizationScore: 83,
        imageUrls: [item_14],
        history:
          "A lighter breakfast option incorporating French dairy traditions with modern health consciousness.",
        reviews: [
          {
            source: "Yelp",
            username: "Claire T.",
            review:
              "The homemade granola is exceptional and the yogurt is so creamy. Perfect breakfast.",
          },
          {
            source: "Local Guide",
            username: "Robert M.",
            review:
              "Fresh berries and crunchy granola make this simple dish special.",
          },
        ],
        aiReview:
          "Reviews consistently praise the quality of the homemade granola and the freshness of berries, noting the perfect textural contrast.",
      },
      {
        itemId: 15,
        itemName: "Boucherie Waffles",
        translationName: "House Special Belgian Waffles",
        description: "Fresh Belgian waffles with luxurious toppings",
        mapping: "Crispy Waffles + Sweet Cream + Fresh Fruit + Sweet Sauce",
        ingredients: [
          "Belgian waffles",
          "Mascarpone vanilla cream",
          "Fresh fruits",
          "Caramel",
        ],
        allergens: ["Gluten", "Dairy", "Eggs"],
        personalizationScore: 90,
        imageUrls: [item_15],
        history:
          "A French interpretation of Belgian waffles, elevated with Italian mascarpone cream and French caramel.",
        reviews: [
          {
            source: "Yelp",
            username: "Emma D.",
            review:
              "Perfectly crisp waffles and the mascarpone cream is heavenly. The caramel takes it over the top.",
          },
          {
            source: "Local Guide",
            username: "Jean L.",
            review:
              "Light, crispy, and the vanilla mascarpone is perfectly balanced. Best waffles in town.",
          },
        ],
        aiReview:
          "Reviews emphasize the waffles' texture and the quality of the mascarpone cream, with special praise for the caramel addition.",
      },
      {
        itemId: 16,
        itemName: "Pain Perdu",
        translationName: "French Toast",
        description: "Classic French toast with seasonal toppings",
        mapping: "Sweet Bread + Mixed Berries + Sweet Syrup",
        ingredients: ["Mixed berries", "Maple syrup", "Brioche bread"],
        allergens: ["Gluten", "Dairy", "Eggs"],
        personalizationScore: 87,
        imageUrls: [item_16],
        history:
          "Traditional French way of using day-old bread, elevated to a beloved breakfast dish.",
        reviews: [
          {
            source: "Yelp",
            username: "Sophie R.",
            review:
              "The bread is perfectly soaked and crispy outside. Berries are fresh and abundant.",
          },
          {
            source: "Local Guide",
            username: "Mark B.",
            review:
              "Rich and custardy inside, crisp outside. The maple syrup is high quality.",
          },
        ],
        aiReview:
          "Reviews highlight the contrasting textures and quality of ingredients, particularly noting the proper preparation of the bread.",
      },
    ],
  },
  {
    groupId: 1,
    groupName: "Les Oeufs",
    items: [
      {
        itemId: 17,
        itemName: "Eggs Benedict",
        translationName: "Classic Eggs Benedict",
        description: "Poached eggs with ham and hollandaise",
        mapping: "Round Bread + Ham + Soft Eggs + Yellow Sauce",
        ingredients: ["English muffin", "Jambon", "Eggs", "Hollandaise sauce"],
        allergens: ["Eggs", "Gluten", "Dairy"],
        personalizationScore: 91,
        imageUrls: [item_17],
        history:
          "A New York creation that became a global brunch classic, perfected with French technique.",
        reviews: [
          {
            source: "Yelp",
            username: "Pierre M.",
            review:
              "The hollandaise is perfectly emulsified and the eggs are poached beautifully.",
          },
          {
            source: "Local Guide",
            username: "Anna K.",
            review:
              "Excellent quality ham and the sauce has just the right amount of lemon.",
          },
        ],
        aiReview:
          "Reviews consistently praise the technical execution of both the hollandaise and poached eggs, with appreciation for the quality ham.",
      },
      {
        itemId: 18,
        itemName: "Eggs Norwegian",
        translationName: "Smoked Salmon Eggs Benedict",
        description: "Poached eggs with smoked salmon and hollandaise",
        mapping: "Round Bread + Pink Fish + Soft Eggs + Yellow Sauce",
        ingredients: [
          "English muffin",
          "Smoked salmon",
          "Eggs",
          "Hollandaise sauce",
        ],
        allergens: ["Eggs", "Fish", "Gluten", "Dairy"],
        personalizationScore: 89,
        imageUrls: [item_18],
        history:
          "A luxurious variation of Eggs Benedict featuring Norwegian salmon, popularized in high-end brunches.",
        reviews: [
          {
            source: "Yelp",
            username: "Claire H.",
            review:
              "The salmon is top quality and pairs perfectly with the rich hollandaise.",
          },
          {
            source: "Local Guide",
            username: "David R.",
            review:
              "Perfect balance of flavors. The eggs are consistently poached to perfection.",
          },
        ],
        aiReview:
          "Reviews emphasize the quality of the salmon and its harmony with the hollandaise, along with praise for egg preparation.",
      },
      {
        itemId: 19,
        itemName: "Steak Aux Oeufs",
        translationName: "Steak and Eggs",
        description: "Grass-fed bavette steak with farm eggs",
        mapping: "Tender Meat + Fresh Eggs + Small Salad",
        ingredients: ["Bavette steak", "Farm eggs", "Mixed greens"],
        allergens: ["Eggs"],
        personalizationScore: 88,
        imageUrls: [item_19],
        history:
          "A French refinement of the American classic, using traditional bavette cut and farm-fresh eggs.",
        reviews: [
          {
            source: "Yelp",
            username: "Louis B.",
            review:
              "Perfect medium-rare steak and the eggs are so fresh. Simple but excellent.",
          },
          {
            source: "Local Guide",
            username: "Sarah M.",
            review:
              "The quality of the meat really shines. Eggs cooked exactly as requested.",
          },
        ],
        aiReview:
          "Reviews highlight the quality of both the steak and eggs, with emphasis on proper cooking temperatures and freshness.",
      },
      {
        itemId: 20,
        itemName: "Omelette Au Choix",
        translationName: "Custom Omelette",
        description: "French-style omelette with choice of fillings",
        mapping: "Soft Eggs + Ham + Cheese or Mushrooms + Cheese",
        ingredients: ["Eggs", "Jambon", "Gruyère", "Champignon"],
        allergens: ["Eggs", "Dairy"],
        personalizationScore: 86,
        imageUrls: [item_20],
        history:
          "Traditional French omelette technique showcasing classic flavor combinations.",
        reviews: [
          {
            source: "Yelp",
            username: "Marie F.",
            review:
              "Perfectly folded and creamy inside. The Gruyère adds wonderful flavor.",
          },
          {
            source: "Local Guide",
            username: "Paul T.",
            review:
              "Classic French technique at its best. Light and fluffy with great fillings.",
          },
        ],
        aiReview:
          "Reviews emphasize the traditional French preparation technique and quality of ingredients, particularly noting the texture.",
      },
      {
        itemId: 21,
        itemName: "Oeufs Meurette",
        translationName: "Poached Eggs in Red Wine Sauce",
        description: "Traditional Burgundian egg dish",
        mapping: "Soft Eggs + Red Wine Sauce + Small Onions + Crispy Bacon",
        ingredients: [
          "Red wine poached eggs",
          "Pearl onions",
          "Bacon",
          "Lardons",
        ],
        allergens: ["Eggs", "Alcohol"],
        personalizationScore: 85,
        imageUrls: [item_21],
        history:
          "A beloved specialty from Burgundy, combining poached eggs with red wine sauce.",
        reviews: [
          {
            source: "Yelp",
            username: "Jean-Claude P.",
            review:
              "Rich wine sauce and perfectly poached eggs. A true taste of Burgundy.",
          },
          {
            source: "Local Guide",
            username: "Alice R.",
            review:
              "The sauce is incredibly flavorful and the bacon adds great texture.",
          },
        ],
        aiReview:
          "Reviews praise the rich wine sauce and proper egg poaching, with appreciation for the traditional preparation.",
      },
    ],
  },
  {
    groupId: 2,
    groupName: "Plats Principaux",
    items: [
      {
        itemId: 22,
        itemName: "Steak Frites",
        translationName: "Steak and French Fries",
        description: "Classic bistro steak with crispy fries",
        mapping: "Grilled Meat + Herb Butter + Crispy Potatoes",
        ingredients: ["NY strip steak", "Herb butter", "Pommes frites"],
        allergens: ["Dairy"],
        personalizationScore: 93,
        imageUrls: [item_22],
        history:
          "The quintessential French bistro dish, perfected through generations of tradition.",
        reviews: [
          {
            source: "Yelp",
            username: "Michel D.",
            review:
              "Perfectly cooked steak and the fries are crispy and hot. Herb butter is delicious.",
          },
          {
            source: "Local Guide",
            username: "Sophie L.",
            review:
              "Classic done right. The quality of the meat is excellent and the fries are perfect.",
          },
        ],
        aiReview:
          "Reviews consistently highlight the quality of the meat and proper preparation of the fries, with special mention of the herb butter.",
      },
      {
        itemId: 23,
        itemName: "Moules Dijonnaise",
        translationName: "Mussels in Mustard Sauce",
        description: "Fresh mussels in light mustard cream sauce",
        mapping:
          "Fresh Mussels + Creamy Sauce + Small Onions + Fresh Herbs + Light Mustard",
        ingredients: [
          "Garlic",
          "Shallots",
          "Thyme",
          "Lemon",
          "Light mustard cream",
        ],
        allergens: ["Shellfish", "Dairy", "Mustard"],
        personalizationScore: 87,
        imageUrls: [item_23],
        history:
          "A regional specialty combining the coastal mussels with Dijon's famous mustard.",
        reviews: [
          {
            source: "Yelp",
            username: "Andre L.",
            review:
              "The mustard cream sauce is perfectly balanced and the mussels are very fresh.",
          },
          {
            source: "Local Guide",
            username: "Claire M.",
            review:
              "Delicate sauce that doesn't overpower the mussels. Great with crusty bread.",
          },
        ],
        aiReview:
          "Reviews emphasize the balance of the mustard cream sauce and the freshness of the mussels, noting the dish's delicate flavors.",
      },
      {
        itemId: 24,
        itemName: "Coq Au Vin",
        translationName: "Chicken in Red Wine",
        description: "Traditional braised chicken in wine sauce",
        mapping:
          "Tender Chicken + Red Wine Sauce + Smoky Bacon + Orange Carrots + Brown Mushrooms",
        ingredients: [
          "Braised chicken",
          "Red wine reduction",
          "Bacon",
          "Carrots",
          "Mushrooms",
        ],
        allergens: ["Alcohol"],
        personalizationScore: 92,
        imageUrls: [item_24],
        history:
          "A rustic French dish elevated to restaurant status by Julia Child's popularization.",
        reviews: [
          {
            source: "Yelp",
            username: "Pierre R.",
            review:
              "Fall-off-the-bone tender chicken and the wine sauce is incredibly rich.",
          },
          {
            source: "Local Guide",
            username: "Marie B.",
            review:
              "Perfect comfort food. The sauce has amazing depth and the vegetables are cooked just right.",
          },
        ],
        aiReview:
          "Reviews highlight the tenderness of the chicken and richness of the wine sauce, with praise for the vegetable preparation.",
      },
      {
        itemId: 25,
        itemName: "Saumon Rôti",
        translationName: "Roasted Salmon",
        description: "Premium salmon with seasonal vegetables",
        mapping: "Pink Fish + Tangy Sauce + Mixed Vegetables",
        ingredients: [
          "Faroe Island salmon",
          "Escovitch sauce",
          "Seasonal vegetables",
        ],
        allergens: ["Fish"],
        personalizationScore: 88,
        imageUrls: [item_25],
        history:
          "A modern preparation combining French technique with international flavors.",
        reviews: [
          {
            source: "Yelp",
            username: "Sophie T.",
            review:
              "The salmon is cooked perfectly and the sauce adds wonderful flavor.",
          },
          {
            source: "Local Guide",
            username: "Marc L.",
            review:
              "Crispy skin, moist fish, and the vegetables are seasoned beautifully.",
          },
        ],
        aiReview:
          "Reviews consistently praise the cooking technique of the salmon and the complementary sauce, noting the quality of the vegetables.",
      },
      {
        itemId: 26,
        itemName: "Les St Jacques Rôties",
        translationName: "Roasted Scallops",
        description: "Seared scallops with vegetable purée",
        mapping: "Sea Scallops + Orange Squash Sauce + Small Lentils",
        ingredients: ["Scallops", "Squash purée", "Lentils"],
        allergens: ["Shellfish"],
        personalizationScore: 90,
        imageUrls: [item_26],
        history:
          "A refined dish showcasing the French mastery of seafood preparation.",
        reviews: [
          {
            source: "Yelp",
            username: "Jean P.",
            review:
              "Perfectly seared scallops and the squash purée is silky smooth.",
          },
          {
            source: "Local Guide",
            username: "Alice D.",
            review:
              "The scallops have a beautiful crust and the lentils add nice texture.",
          },
        ],
        aiReview:
          "Reviews emphasize the proper searing of the scallops and the smooth texture of the purée, with appreciation for the textural contrast.",
      },
      {
        itemId: 27,
        itemName: "Le Croque Monsieur",
        translationName: "Classic French Ham and Cheese Sandwich",
        description: "Hot sandwich with ham and cheese",
        mapping: "Toast + Ham + Melted Cheese + Small Salad",
        ingredients: ["Jambon", "Gruyère", "Sourdough bread", "Petite salad"],
        allergens: ["Gluten", "Dairy"],
        personalizationScore: 85,
        imageUrls: [item_27],
        history:
          "A Parisian café classic that became a global symbol of French casual dining.",
        reviews: [
          {
            source: "Yelp",
            username: "Thomas B.",
            review:
              "Perfect ratio of ham to cheese and beautifully toasted bread.",
          },
          {
            source: "Local Guide",
            username: "Marie N.",
            review:
              "The cheese is perfectly melted and crusty. A classic done right.",
          },
        ],
        aiReview:
          "Reviews praise the balance of ingredients and proper execution, particularly noting the cheese's melting quality.",
      },
      {
        itemId: 28,
        itemName: "Le Croque Madame",
        translationName: "Ham and Cheese Sandwich with Egg",
        description: "Classic hot sandwich topped with fried egg",
        mapping: "Toast + Ham + Melted Cheese + Fried Egg + Small Salad",
        ingredients: [
          "Jambon",
          "Gruyère",
          "Egg",
          "Sourdough bread",
          "Petite salad",
        ],
        allergens: ["Gluten", "Dairy", "Eggs"],
        personalizationScore: 87,
        imageUrls: [item_28],
        history:
          "A variation of the Croque Monsieur, created in French cafés by adding a fried egg on top.",
        reviews: [
          {
            source: "Yelp",
            username: "Laurent P.",
            review:
              "The egg adds perfect richness to an already great sandwich. Yolk runs beautifully.",
          },
          {
            source: "Local Guide",
            username: "Anna S.",
            review:
              "Everything you want in a Croque Madame - crispy, cheesy, with a perfect runny egg.",
          },
        ],
        aiReview:
          "Reviews highlight the addition of the perfectly cooked egg to the classic sandwich, noting the overall execution and richness.",
      },
      {
        itemId: 29,
        itemName: "Sandwich Au Boeuf",
        translationName: "Steak Sandwich",
        description: "Hand-cut steak sandwich with accompaniments",
        mapping:
          "Crusty Bread + Sliced Steak + Sweet Onions + Spicy Sauce + Crispy Potatoes",
        ingredients: [
          "Hand cut steak",
          "Caramelized onions",
          "Horseradish aioli",
          "Toasted baguette",
          "Pommes frites",
        ],
        allergens: ["Gluten", "Eggs"],
        personalizationScore: 91,
        imageUrls: [item_29],
        history:
          "A bistro interpretation of the classic steak sandwich, elevated with French techniques and ingredients.",
        reviews: [
          {
            source: "Yelp",
            username: "Michel H.",
            review:
              "Tender steak and those onions are incredible. The horseradish aioli adds perfect kick.",
          },
          {
            source: "Local Guide",
            username: "Sarah B.",
            review:
              "High-quality meat and the baguette is fresh and crusty. Fries are perfectly crispy.",
          },
        ],
        aiReview:
          "Reviews emphasize the quality of the steak and caramelized onions, with particular praise for the horseradish aioli and bread quality.",
      },
      {
        itemId: 30,
        itemName: "Boucherie Burger",
        translationName: "House Special Burger",
        description: "Signature dry-aged beef burger with toppings",
        mapping:
          "Special Meat Patty + Red Wine Butter + Sweet Onions + Soft Cheese + Crispy Chips",
        ingredients: [
          "Dry aged beef blend",
          "Red wine butter",
          "Red onion marmalade",
          "Brie cheese",
          "Smashed potato chips",
        ],
        allergens: ["Gluten", "Dairy"],
        personalizationScore: 94,
        imageUrls: [item_30],
        history:
          "A French bistro interpretation of the American burger, featuring traditional French ingredients.",
        reviews: [
          {
            source: "Yelp",
            username: "David R.",
            review:
              "The dry-aged beef has incredible flavor and the red wine butter is genius.",
          },
          {
            source: "Local Guide",
            username: "Emma L.",
            review:
              "Such a unique burger. The Brie and onion marmalade are perfect together.",
          },
        ],
        aiReview:
          "Reviews highlight the unique combination of dry-aged beef and French ingredients, particularly praising the red wine butter and Brie cheese.",
      },
      {
        itemId: 31,
        itemName: "Wagyu Burger",
        translationName: "Premium Wagyu Beef Burger",
        description: "Luxury beef burger with French accompaniments",
        mapping:
          "Special Soft Beef + Fancy Mustard + Melted Cheese + Sweet Onions + Crispy Potatoes",
        ingredients: [
          "Wagyu blend",
          "Truffle dijonnaise",
          "Gruyère",
          "Caramelized onions",
          "Pommes frites",
        ],
        allergens: ["Gluten", "Dairy", "Mustard"],
        personalizationScore: 96,
        imageUrls: [item_31],
        history:
          "A luxurious combination of Japanese wagyu beef preparation with French culinary traditions.",
        reviews: [
          {
            source: "Yelp",
            username: "Pierre S.",
            review:
              "The wagyu is incredibly tender and flavorful. Truffle dijonnaise takes it to another level.",
          },
          {
            source: "Local Guide",
            username: "Julie M.",
            review:
              "Worth every penny. The meat quality is outstanding and the toppings are perfectly chosen.",
          },
        ],
        aiReview:
          "Reviews consistently praise the exceptional quality of the wagyu beef and the luxury of the truffle dijonnaise, noting the overall harmony of ingredients.",
      },
    ],
  },
];

export default menuData;
