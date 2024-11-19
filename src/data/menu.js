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
        mapping:
          "Caramelized Onions + Rich Broth + Melted Cheese + Crusty Bread + Herbs",
        ingredients: ["Onions", "Croutons", "Gruyère Cheese"],
        allergens: ["Gluten", "Dairy", "Alcohol"],
        personalizationScore: 85,
        imageUrls: [
          "https://art.whisk.com/image/upload/fl_progressive,h_560,w_527,c_fill,dpr_2.0/v1636853626/recipe/a60a5d284dbb2984cf6e18ec224a3121.jpg",
          "https://img-3.journaldesfemmes.fr/DPVAofXWKpNK-StT_-IEqffOOYY=/750x500/9156772aea654e56bd0fe1c71e47c362/ccmcms-jdf/39918439.jpg",
          onion_soup,
        ],
        history:
          'French onion soup has been warming hearts since Roman times, with a rich history spanning from peasant food in medieval France to a royal favorite in Versailles. Originally simple fare for the masses, it evolved into a beloved classic across Paris, especially in Les Halles, where cheese-topped, gratin-style servings became iconic. The dish gained international fame, eventually making its way to the U.S. in the 19th century and London\'s all-night "onion soup bars." What began as humble sustenance now charms as a gourmet staple worldwide.',
        aiReview:
          "The perfectly gratinéed cheese forms a golden canopy over the deep brown soup, creating that coveted moment when you break through the crust. The onions, caramelized to a deep mahogany, give the broth an incredible sweetness that balances its rich savory depth.",
      },
      {
        itemId: 2,
        itemName: "Escargots à la Bourguignonne",
        translationName: "Classic French Snails in Garlic-Herb Butter",
        description:
          "Richly buttery and herbaceous, with an earthy undertone — dominated by garlic and parsley",
        mapping:
          "Garlic Butter + Herbs + Tender Snails + White Wine + Mineral Notes",
        ingredients: [
          "Burgundy Snails",
          "Garlic",
          "Parsley",
          "Butter",
          "Shallots",
          "Garlic",
        ],
        allergens: ["Dairy", "Alcohol"],
        personalizationScore: 72,
        imageUrls: [snails],
        history:
          "Escargots à la Bourguignonne is a classic French dish that has been enjoyed for centuries. The dish is typically served with a generous amount of garlic-herb butter and a generous amount of parsley. The escargots are typically cooked in a pan with butter and garlic, and then served with a generous amount of parsley. The dish is typically served with a generous amount of bread to soak up the garlic-herb butter.",
        aiReview:
          "The escargots arrive perfectly presented in their traditional dimpled dish, each shell glistening with vibrant green-flecked butter. The aroma of garlic and herbs hits you immediately!",
      },
      {
        itemId: 3,
        itemName: "Steak Tartare",
        translationName: "Classic French Raw Beef Preparation",
        description: "Rich, complex and meaty with bright acidic notes",
        mapping:
          "Raw Beef + Sharp Aromatics + Vinegar + Egg + Rich & Savory Notes",
        ingredients: [
          "Prime Beef Tenderloin",
          "Shallots",
          "Capers",
          "Parsley",
          "Quail Egg",
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
        mapping: "Liver + Butter Rich + Aromatics + Wine Notes + Subtle Herbs",
        ingredients: ["Duck Livers", "Foie Gras Mousse", "Cherry Configure"],
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
        mapping:
          "Seasoned Meats + Buttery Pastry + Nuts + Gelatin + Warming Spices",
        ingredients: ["Cornichons", "Mustard", "Petite Salade"],
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
        mapping:
          "Toasted Oats + Natural Sweeteners + Nuts + Dried Fruit + Warm Spices",
        ingredients: [
          "Yogurt",
          "Mixed Berries",
          "Rolled Oats",
          "Bananas",
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
        mapping: "Fresh Fruits + Citrus Notes + Light Syrup + Bright Mint",
        ingredients: ["Mixed Fruits", "Fresh Mint"],
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
        mapping:
          "Custard-Soaked Bread + Vanilla + Warm Spices + Caramelized Exterior + Sweet Finish",
        ingredients: ["Day-Old Brioche", "Mixed Berries", "Maple Syrup"],
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
        mapping:
          "Tuna + Fresh Vegetables + Briny Elements + Eggs + Bright Dressing",
        ingredients: [
          "Oil-Packed Tuna",
          "Green Beans",
          "Hard-Boiled Eggs",
          "Niçoise Olives",
          "Tomatoes",
          "Anchovies",
          "Red Wine Vinegarette",
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
        mapping:
          "Fresh Salmon + Butter Sauce + Herbs + Citrus Notes + Wine Reduction",
        ingredients: ["Scottish Salmon", "Lemon", "Chives"],
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
        mapping:
          "Bitter Greens + Smoky Bacon + Runny Egg + Sharp Vinaigrette + Crunchy Bread",
        ingredients: ["Frisée Lettuce", "Lardons", "Poached Eggs"],
        allergens: ["Eggs", "Gluten", "Pork"],
        personalizationScore: 87,
        imageUrls: [lyonnaise],
        aiReview:
          "This Salade Lyonnaise is a masterful balancing act. The frisée lettuce maintains its pleasant bite even under the warm vinaigrette, while the crispy lardons add bursts of smoky saltiness throughout.",
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
        mapping:
          "Toasted Bread + Ham + Melted Cheese + Creamy Sauce + Runny Egg",
        ingredients: [
          "Jambon",
          "Gruyère Cheese",
          "Sourdough Bread",
          "Petit Salade",
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
        mapping:
          "Crusty Bread + Creamy Avocado + Fresh Tomatoes + Herbs + Sea Salt",
        ingredients: ["Avocado Toast", "Lemon", "Eggs"],
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
        mapping:
          "Poached Eggs + Buttery Sauce + Smoky Ham + Toasted Bread + Bright Citrus",
        ingredients: ["Poached Eggs", "Canadian Bacon", "Hollandaise sauce"],
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
        mapping:
          "Poached Eggs + Buttery Sauce + Smoked Fish + Toasted Bread + Fresh Herbs",
        ingredients: ["Poached Eggs", "Smoked Salmon", "Hollandaise sauce"],
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
        mapping:
          "Seared Steak + Runny Eggs + Herb Butter + Caramelized Notes + Sea Salt",
        ingredients: ["Steak and Egg", "Tomatoes", "Petite Salade"],
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
        mapping:
          "Soft Eggs + Butter Richness + Choice Filling + Fresh Herbs + Delicate Seasoning",
        ingredients: [
          "Farm Fresh Eggs",
          "Mushrooms",
          "Fine Herbs",
          "Goat Cheese",
          "Spinach",
        ],
        allergens: ["Eggs", "Dairy"],
        personalizationScore: 87,
        imageUrls: [choix],
        aiReview:
          "This omelette is a masterpiece of technique - rolled into an elegant oval with a surface like silk, pale golden without a hint of browning.",
      },
      {
        itemId: 25,
        itemName: "Brandade de Morue",
        translationName: "Classic Provençal Salt Cod and Potato Purée",
        description:
          "Creamy, garlicky and oceanic — whipped salt cod and potatoes create a luxurious spread",
        mapping:
          "Salt Cod + Creamy Potatoes + Garlic + Olive Oil + Warm Spices",
        ingredients: ["Salt Cod", "Potatoes", "Farm Eggs"],
        allergens: ["Fish", "Dairy"],
        personalizationScore: 83,
        imageUrls: [brandade],
        aiReview:
          "This brandade achieves that perfect silky texture that only comes from patient stirring and proper technique. The balance between cod and potato is spot-on.",
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
        mapping:
          "Crispy Fish + Brown Butter + Fresh Herbs + Citrus Notes + Wine",
        ingredients: [
          "Pan Seared Salmon",
          "Roasted Vegetables",
          "Eosemary Apple Puree",
          "Cider Jus",
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
        mapping:
          "Preserved Duck + Aromatic Herbs + Crispy Skin + Pure Duck Fat + Gentle Spicing",
        ingredients: ["Confit Duck Leg", "Swiss Chard", "Pomme Sarladaise"],
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
        mapping:
          "Grilled Steak + Crusty Bread + Herb Butter + Sharp Mustard + Peppery Greens",
        ingredients: [
          "Hanger Steak",
          "Frisee",
          "Caramelized Onions",
          "Horseradish",
          "Gruyère Cheese",
          "Pommes Frites",
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
        mapping:
          "Premium Beef + Buttery Bun + Aged Cheese + Sweet Onions + Sharp Pickles",
        ingredients: [
          "Dry-aged blend",
          "Caramelized Onions",
          "Gruyère Cheese",
          "Frities",
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
        mapping:
          "Plant Protein + Creamy Avocado + Spicy Mayo + Crispy Sprouts + Potato Side",
        ingredients: [
          "Beyond Meat Patty",
          "Vegan Cheddar",
          "Mushroom Duxelles",
          "Todu Chipotle Mayonnaise",
          "Avocado",
          "Frites",
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
        mapping:
          "Wagyu Beef + Sweet Onions + Alpine Cheese + Buttery Bun + Crispy Frites ",
        ingredients: [
          "Wagyu blend",
          "Truffle Dijonnaise",
          "Caramelized Onions",
          "Gruyère Cheese",
          "Frites",
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
        mapping:
          "Seared Steak + Herb Butter + Crispy Potatoes + Sea Salt + Fresh Herbs",
        ingredients: ["Strip Steak", "Herb Butter", "Pommes Frites"],
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
