import brandade from "../assets/food/Hors_doeuvres/brandade.webp";
import croute from "../assets/food/Hors_doeuvres/croute.webp";
import foie from "../assets/food/Hors_doeuvres/foie.webp";
import granola from "../assets/food/Hors_doeuvres/granola.webp";
import lyonnaise from "../assets/food/Hors_doeuvres/lyonnaise.webp";
import nicoise from "../assets/food/Hors_doeuvres/nicoise.webp";
import onion_soup from "../assets/food/Hors_doeuvres/onion_soup.webp";
import perdu from "../assets/food/Hors_doeuvres/perdu.webp";
import salade from "../assets/food/Hors_doeuvres/salade.webp";
import saumon from "../assets/food/Hors_doeuvres/saumon.webp";
import snails from "../assets/food/Hors_doeuvres/snails.webp";
import tartare from "../assets/food/Hors_doeuvres/tartare.webp";
import avocat from "../assets/food/oeufs/avocat.webp";
import benedict from "../assets/food/oeufs/benedict.webp";
import choix from "../assets/food/oeufs/choix.webp";
import madame from "../assets/food/oeufs/madame.webp";
import royale from "../assets/food/oeufs/royale.webp";
import steak from "../assets/food/oeufs/steak.webp";
import boucherie from "../assets/food/principaux/boucherie.webp";
import boucherie_beyond from "../assets/food/principaux/boucherie_beyond.webp";
import confit from "../assets/food/principaux/confit.webp";
import sandwich from "../assets/food/principaux/sandwich.webp";
import saumon_poele from "../assets/food/principaux/saumon_poele.webp";
import steak_fries from "../assets/food/principaux/steak_fries.webp";
import wagyu from "../assets/food/principaux/wagyu.webp";

const menuData = [
  {
    groupId: 0,
    groupName: "Hors d'oeuvres",
    items: [
      {
        itemId: 1,
        itemName: "Soupe à l'Oignon",
        translationName: "Classic French Onion Soup with Melted Cheese",
        description:
          "Rich, savory and deeply comforting — featuring sweet caramelized onions, hearty beef broth, and a decadent golden cheese crust",
        ingredients: [
          "Onions",
          "Beef Stock",
          "Crusty Bread",
          "Gruyère Cheese",
          "Butter",
          "Fresh Thyme",
          "White Wine",
          "Black Pepper",
        ],
        allergens: ["Gluten", "Dairy", "Alcohol"],
        personalizationScore: 85,
        imageUrls: [onion_soup],
        aiReview:
          "The perfectly gratinéed cheese forms a golden canopy over the deep brown soup, creating that coveted moment when you break through the crust. The onions, caramelized to a deep mahogany, give the broth an incredible sweetness that balances its rich savory depth.",
      },
      {
        itemId: 2,
        itemName: "Escargots à la Bourguignonne",
        translationName: "Classic French Snails in Garlic-Herb Butter",
        description:
          "Richly buttery and herbaceous, with an earthy undertone — dominated by garlic and parsley",
        ingredients: [
          "Burgundy Snails",
          "Garlic",
          "Parsley",
          "European Butter",
          "Shallots",
          "White Wine",
          "Black Pepper",
          "Nutmeg",
        ],
        allergens: ["Dairy", "Alcohol"],
        personalizationScore: 72,
        imageUrls: [snails],
        aiReview:
          "The escargots arrive perfectly presented in their traditional dimpled dish, each shell glistening with vibrant green-flecked butter. The aroma of garlic and herbs hits you immediately!",
      },
      {
        itemId: 3,
        itemName: "Steak Tartare",
        translationName: "Classic French Raw Beef Preparation",
        description: "Rich, complex and meaty with bright acidic notes",
        ingredients: [
          "Prime Beef Tenderloin",
          "Shallots",
          "Capers",
          "Cornichons",
          "Dijon Mustard",
          "Egg Yolk",
          "Worcestershire Sauce",
          "Fresh Herbs",
        ],
        allergens: ["Raw Egg", "Raw Meat", "Fish"],
        personalizationScore: 68,
        imageUrls: [tartare],
        aiReview:
          "The steak tartare is a testament to simplicity and quality ingredients. Hand-chopped to perfection, the beef maintains its integrity while being tender enough to melt on your tongue.",
      },
      {
        itemId: 4,
        itemName: "Mousse de Foie",
        translationName: "Classic French Liver Mousse Pâté",
        description: "Luxuriously smooth and buttery with deep umami richness",
        ingredients: [
          "Chicken Livers",
          "Butter",
          "Shallots",
          "Cognac",
          "Heavy Cream",
          "Fresh Thyme",
          "White Pepper",
          "Port Wine",
        ],
        allergens: ["Dairy", "Alcohol"],
        personalizationScore: 78,
        imageUrls: [foie],
        aiReview:
          "The mousse arrives looking like velvet on the plate, its pale pink hue hinting at its delicate nature. The texture is absolutely ethereal - lighter than air yet somehow rich and substantial.",
      },
      {
        itemId: 5,
        itemName: "Pâté en Croûte",
        translationName: "Classic French Encased Meat Terrine in Pastry",
        description:
          "Complex layering of rich meats and spices encased in buttery pastry",
        ingredients: [
          "Pork",
          "Veal",
          "Duck",
          "Pistachios",
          "Brandy",
          "Pastry Dough",
          "Fresh Herbs",
          "Pork Gelatin",
        ],
        allergens: ["Gluten", "Dairy", "Nuts", "Alcohol"],
        personalizationScore: 82,
        imageUrls: [croute],
        aiReview:
          "This pâté en croûte is a masterpiece of technical skill and flavor balance. The golden-brown pastry shatters perfectly to reveal beautifully arranged layers of meat studded with vibrant pistachios.",
      },
      {
        itemId: 6,
        itemName: "Granola",
        translationName: "Modern Breakfast Cereal of Toasted Oats and Nuts",
        description: "Crunchy and sweet with toasted nutty depth",
        ingredients: [
          "Rolled Oats",
          "Honey",
          "Almonds",
          "Pecans",
          "Pumpkin Seeds",
          "Sunflower Seeds",
          "Coconut Oil",
          "Maple Syrup",
        ],
        allergens: ["Tree Nuts", "Coconut"],
        personalizationScore: 86,
        imageUrls: [granola],
        aiReview:
          "This granola strikes the perfect balance between wholesome and indulgent. The clusters are substantial and satisfyingly crunchy, with a gorgeous golden hue that speaks to careful toasting.",
      },
      {
        itemId: 7,
        itemName: "Salade de Fruits",
        translationName: "Classic French Fresh Fruit Salad",
        description: "Light, refreshing and naturally sweet",
        ingredients: [
          "Seasonal Fresh Fruits",
          "Peaches",
          "Strawberries",
          "Pears",
          "Grapes",
          "Orange",
          "Lemon Zest",
          "Fresh Mint",
        ],
        allergens: ["Citrus"],
        personalizationScore: 92,
        imageUrls: [salade],
        aiReview:
          "This salade de fruits is summer in a bowl! Each fruit is perfectly ripe and cut with precision – no afterthought fruit salad here.",
      },
      {
        itemId: 21,
        itemName: "Pain Perdu",
        translationName: "Classic French Lost Bread - Traditional French Toast",
        description:
          "Rich, custardy and warmly spiced — crispy caramelized exterior giving way to a tender, vanilla-scented interior",
        ingredients: [
          "Day-Old Brioche",
          "Eggs",
          "Whole Milk",
          "Heavy Cream",
          "Vanilla Bean",
          "Cinnamon",
          "Butter",
          "Maple Syrup",
        ],
        allergens: ["Eggs", "Dairy", "Gluten"],
        personalizationScore: 88,
        imageUrls: [perdu],
        aiReview:
          "This pain perdu transforms humble bread into something magical. The exterior achieves that perfect golden-brown crispness while hiding an almost pudding-like interior.",
      },
      {
        itemId: 22,
        itemName: "Salade Niçoise",
        translationName: "Classic French Riviera Composed Salad with Tuna",
        description:
          "Fresh, briny and robust — harmonious combination of crisp vegetables, tender tuna, and salty olives",
        ingredients: [
          "Oil-Packed Tuna",
          "Green Beans",
          "Potatoes",
          "Hard-Boiled Eggs",
          "Niçoise Olives",
          "Tomatoes",
          "Anchovies",
          "Dijon Mustard",
        ],
        allergens: ["Fish", "Eggs"],
        personalizationScore: 89,
        imageUrls: [nicoise],
        aiReview:
          "This Niçoise arrives as a beautiful composition, each element thoughtfully arranged rather than tossed together. The quality of ingredients shines.",
      },
      {
        itemId: 23,
        itemName: "Saumon d'Écosse",
        translationName: "Premium Scottish Salmon with French Preparation",
        description:
          "Buttery, delicate and rich — perfectly tender salmon with a crispy skin",
        ingredients: [
          "Scottish Salmon Fillet",
          "Butter",
          "Shallots",
          "White Wine",
          "Fresh Dill",
          "Lemon",
          "Sea Salt",
          "Court Bouillon",
        ],
        allergens: ["Fish", "Dairy", "Alcohol"],
        personalizationScore: 91,
        imageUrls: [saumon],
        aiReview:
          "The salmon is cooked to absolute perfection - the flesh flakes gently with the mere touch of a fork while remaining lusciously moist.",
      },
      {
        itemId: 24,
        itemName: "Salade Lyonnaise",
        translationName: "Classic Bistro Salad with Warm Bacon and Poached Egg",
        description:
          "Warm, rich and tangy — crisp frisée lettuce coated in warm bacon vinaigrette",
        ingredients: [
          "Frisée Lettuce",
          "Lardons",
          "Fresh Farm Eggs",
          "Dijon Mustard",
          "Red Wine Vinegar",
          "Croutons",
          "Shallots",
          "Garlic",
        ],
        allergens: ["Eggs", "Gluten", "Pork"],
        personalizationScore: 87,
        imageUrls: [lyonnaise],
        aiReview:
          "This Salade Lyonnaise is a masterful balancing act. The frisée lettuce maintains its pleasant bite even under the warm vinaigrette, while the crispy lardons add bursts of smoky saltiness throughout.",
      },
      {
        itemId: 25,
        itemName: "Brandade de Morue",
        translationName: "Classic Provençal Salt Cod and Potato Purée",
        description:
          "Creamy, garlicky and oceanic — whipped salt cod and potatoes create a luxurious spread",
        ingredients: [
          "Salt Cod",
          "Yukon Gold Potatoes",
          "Garlic",
          "Extra Virgin Olive Oil",
          "Whole Milk",
          "Black Pepper",
          "Fresh Parsley",
          "Nutmeg",
        ],
        allergens: ["Fish", "Dairy"],
        personalizationScore: 83,
        imageUrls: [brandade],
        aiReview:
          "This brandade achieves that perfect silky texture that only comes from patient stirring and proper technique. The balance between cod and potato is spot-on.",
      },
    ],
  },
  {
    groupId: 2,
    groupName: "Les Oeufs",
    items: [
      {
        itemId: 8,
        itemName: "Croque Madame",
        translationName:
          "Classic French Grilled Ham and Cheese Sandwich Topped with Fried Egg",
        description:
          "Rich, creamy and satisfying — layers of salty ham and nutty cheese",
        ingredients: [
          "Pain de Mie",
          "Paris Ham",
          "Gruyère Cheese",
          "Béchamel Sauce",
          "Farm Fresh Eggs",
          "Butter",
          "Nutmeg",
          "Dijon Mustard",
        ],
        allergens: ["Eggs", "Dairy", "Gluten", "Pork"],
        personalizationScore: 94,
        imageUrls: [madame],
        aiReview:
          "The perfect Croque Madame is an architectural marvel, and this one delivers! The exterior is golden-brown and crispy, while beneath lies perfectly melted Gruyère that pulls into tempting strands.",
      },
      {
        itemId: 9,
        itemName: "Toast Avocat et Tomate",
        translationName: "Modern French-Style Avocado Toast with Tomatoes",
        description:
          "Fresh, creamy and bright — buttery avocado spread on crusty bread",
        ingredients: [
          "Levain Bread",
          "Ripe Avocados",
          "Heirloom Tomatoes",
          "Fleur de Sel",
          "Olive Oil",
          "Fresh Herbs",
          "Espelette Pepper",
        ],
        allergens: ["Gluten"],
        personalizationScore: 88,
        imageUrls: [avocat],
        aiReview:
          "This toast demonstrates that simplicity demands perfection. The bread is properly toasted to achieve that crucial crunch while maintaining a tender interior.",
      },
      {
        itemId: 10,
        itemName: "Eggs Benedict",
        translationName: "Poached Eggs and Hollandaise sauce",
        description:
          "Rich, buttery and luxurious — perfectly poached eggs nestled on smoky ham",
        ingredients: [
          "Fresh Eggs",
          "Canadian Bacon",
          "English Muffins",
          "Butter",
          "Egg Yolks",
          "Lemon Juice",
          "White Vinegar",
          "Fresh Chives",
        ],
        allergens: ["Eggs", "Dairy", "Gluten", "Pork"],
        personalizationScore: 92,
        imageUrls: [benedict],
        aiReview:
          "These eggs Benedict are the epitome of brunch perfection. The eggs are masterfully poached, their whites delicately set while the yolks remain luxuriously liquid.",
      },
      {
        itemId: 11,
        itemName: "Eggs Norwegian",
        translationName: "Poached Egg with Smoked Salmon (Eggs Royale)",
        description:
          "Elegant, buttery and delicate — perfectly poached eggs and silky smoked salmon",
        ingredients: [
          "Fresh Eggs",
          "Smoked Salmon",
          "English Muffins",
          "Butter",
          "Egg Yolks",
          "Lemon Juice",
          "Fresh Dill",
          "Capers",
        ],
        allergens: ["Eggs", "Dairy", "Gluten", "Fish"],
        personalizationScore: 93,
        imageUrls: [royale],
        aiReview:
          "This Eggs Norwegian achieves that perfect harmony of luxury ingredients. The smoked salmon is silky and delicately smoky, neither too salty nor too oily.",
      },
      {
        itemId: 12,
        itemName: "Steak aux Œufs",
        translationName: "Classic French Bistro Steak and Eggs",
        description:
          "Rich, savory and robust — tender steak with sunny-side-up eggs",
        ingredients: [
          "Entrecôte",
          "Farm Fresh Eggs",
          "Butter",
          "Shallots",
          "Fresh Thyme",
          "Sea Salt",
          "Black Pepper",
        ],
        allergens: ["Eggs", "Dairy"],
        personalizationScore: 90,
        imageUrls: [steak],
        aiReview:
          "This steak aux œufs exemplifies bistro cooking at its finest. The steak has that perfect caramelized crust while maintaining a rosy interior.",
      },
      {
        itemId: 13,
        itemName: "Omelette au Choix",
        translationName:
          "Classic French Rolled Omelette with Choice of Fillings",
        description:
          "Soft, creamy and delicate — perfectly rolled eggs with a tender, barely-set center",
        ingredients: [
          "Farm Fresh Eggs",
          "European Butter",
          "Fine Herbs",
          "Choice of Fillings",
          "Sea Salt",
          "White Pepper",
        ],
        allergens: ["Eggs", "Dairy"],
        personalizationScore: 87,
        imageUrls: [choix],
        aiReview:
          "This omelette is a masterpiece of technique - rolled into an elegant oval with a surface like silk, pale golden without a hint of browning.",
      },
    ],
  },
  {
    groupId: 3,
    groupName: "Plats Principaux",
    items: [
      {
        itemId: 14,
        itemName: "Saumon à la Poêle",
        translationName: "Pan-Seared Salmon with French Technique",
        description:
          "Crispy-skinned and tender — perfectly seared salmon with a golden crust",
        ingredients: [
          "Fresh Salmon Fillet",
          "Butter",
          "Shallots",
          "Fresh Herbs",
          "Lemon",
          "Sea Salt",
          "White Wine",
        ],
        allergens: ["Fish", "Dairy", "Alcohol"],
        personalizationScore: 89,
        imageUrls: [saumon_poele],
        aiReview:
          "This salmon exhibits textbook technique - the skin is crackling-crisp while the flesh remains succulent and tender.",
      },
      {
        itemId: 15,
        itemName: "Cuisse de Canard Confite",
        translationName: "Classic French Duck Leg Preserved in Fat",
        description:
          "Rich, tender and intensely savory — meltingly tender duck meat with crispy skin",
        ingredients: [
          "Duck Leg",
          "Duck Fat",
          "Garlic",
          "Fresh Thyme",
          "Bay Leaves",
          "Sea Salt",
          "Black Pepper",
          "Juniper Berries",
        ],
        allergens: ["Duck"],
        personalizationScore: 95,
        imageUrls: [confit],
        aiReview:
          "This duck confit is everything it should be - the meat falls effortlessly from the bone while maintaining its structure.",
      },
      {
        itemId: 16,
        itemName: "Steak Sandwich Parisien",
        translationName: "French-Style Grilled Steak on Baguette",
        description:
          "Hearty, robust and refined — perfectly cooked steak on crusty baguette",
        ingredients: [
          "Hanger Steak",
          "Fresh Baguette",
          "Caramelized Onion",
          "Herb Butter",
          "Dijon Mustard",
          "Watercress",
        ],
        allergens: ["Gluten", "Dairy", "Mustard"],
        personalizationScore: 86,
        imageUrls: [sandwich],
        aiReview:
          "This steak sandwich demonstrates French bistro cooking at its best. The meat is perfectly cooked and properly rested.",
      },
      {
        itemId: 17,
        itemName: "Boucherie Burger",
        translationName: "French Butcher-Style Premium Beef Burger",
        description:
          "Rich, beefy and refined — hand-chopped premium beef with a perfect sear",
        ingredients: [
          "Aged Prime Beef",
          "Brioche Bun",
          "Aged Cheese",
          "Caramelized Onions",
          "House Sauce",
          "Avocado",
          "Butter Lettuce",
        ],
        allergens: ["Gluten", "Dairy", "Eggs"],
        personalizationScore: 91,
        imageUrls: [boucherie],
        aiReview:
          "This burger showcases the marriage of French technique and American comfort food. The patty has that perfect outer crust while remaining juicy inside.",
      },
      {
        itemId: 18,
        itemName: "Boucherie Beyond Burger",
        translationName: "French Butcher-Style Plant-Based Burger",
        description:
          "Savory, hearty and plant-forward — expertly seasoned Beyond patty",
        ingredients: [
          "Beyond Meat Patty",
          "Brioche Bun",
          "Brussels Sprouts",
          "Tofu Chipotle Mayo",
          "Fresh Avocado",
          "Hand-Cut Frites",
        ],
        allergens: ["Gluten", "Soy"],
        personalizationScore: 84,
        imageUrls: [boucherie_beyond],
        aiReview:
          "This burger brilliantly bridges traditional French bistro fare and modern plant-based cuisine. The Beyond patty is perfectly seared.",
      },
      {
        itemId: 19,
        itemName: "Wagyu Burger",
        translationName: "Premium Japanese Beef Burger with French Preparation",
        description:
          "Decadently rich and buttery — ultra-marbled Wagyu beef creates an exceptionally juicy burger",
        ingredients: [
          "Ground Wagyu Beef",
          "Brioche Bun",
          "Caramelized Onions",
          "Aged Gruyère",
          "House Sauce",
          "Hand-Cut Frites",
        ],
        allergens: ["Gluten", "Dairy"],
        personalizationScore: 96,
        imageUrls: [wagyu],
        aiReview:
          "This Wagyu burger is the epitome of luxury comfort food. The intensely marbled beef creates an incredibly juicy patty with that characteristic rich, buttery Wagyu flavor. Caramelized onions complement the meat's natural sweetness, while aged Gruyère adds nutty depth. The brioche bun, substantial enough to hold up to the juicy patty, adds its own buttery notes. Accompanied by perfectly crisp frites, it's a masterclass in elevating the humble burger to new heights!",
      },
      {
        itemId: 20,
        itemName: "Steak Frites",
        translationName: "Classic French Bistro Steak with Hand-Cut Fries",
        description:
          "Robust, classical and satisfying — perfectly seared steak with herb butter",
        ingredients: [
          "Strip Steak",
          "European Butter",
          "Fresh Herbs",
          "Hand-Cut Pommes Frites",
          "Sea Salt",
          "Black Pepper",
          "Béarnaise",
        ],
        allergens: ["Dairy"],
        personalizationScore: 93,
        imageUrls: [steak_fries],
        aiReview:
          "This steak-frites delivers exactly what makes it a bistro classic. The steak bears a perfect crust while maintaining a rosy interior, enhanced by slowly melting herb butter.",
      },
    ],
  },
];

export default menuData;
