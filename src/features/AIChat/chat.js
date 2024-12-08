// Initialize chat endpoint
const CHAT_ENDPOINT = "https://playground-api.joannechen1223.info/chat";

const generateSystemPrompt = () => {
  return "You are a helpful restaurant assistant. Help customers choose dishes from our menu based on their preferences. Keep responses concise and friendly. These are all available choices: Soupe à l'Oignon (French onion soup), Bisque de Homard (lobster soup), La Salade Niçoise (tuna salad), Prime Steak Tartare (raw beef), Les Escargots (snails), Wagyu Carpaccio (raw beef), Salade Mesclun (goat cheese salad), Salade César (caesar salad), Mousse De Foie Gras (duck liver), Chèvre (goat cheese toast), Saumon Fumé (smoked salmon toast), Avocat Et Tomate (avocado toast), Chia Seed Pudding, Yogurt Parfait, Boucherie Waffles, Pain Perdu (French toast), Eggs Benedict, Eggs Norwegian (with salmon), Steak Aux Oeufs (steak & eggs), Omelette Au Choix (custom omelette), Oeufs Meurette (wine poached eggs), Steak Frites, Moules Dijonnaise (mussels), Coq Au Vin (braised chicken), Saumon Roti (roasted salmon), Les St Jacques Roties (scallops), Le Croque Monsieur (ham & cheese), Le Croque Madame (with egg), Sandwich Au Boeuf (steak sandwich), Boucherie Burger (dry aged beef), Wagyu Burger";
};

const generateSystemPromptIndex = () => {
  return `You are a helpful restaurant assistant. When users describe their preferences or ask for recommendations, respond ONLY with an array of item IDs that match their request, using this format: [1, 14, 15]. Do not include any other text or explanations.
  
  Available dishes and their IDs:
  [1] Soupe à l'Oignon (French onion soup, cheese, warm, savory)
  [2] Bisque de Homard (lobster soup, creamy)
  [3] La Salade Niçoise (tuna, vegetables, eggs)
  [4] Prime Steak Tartare (raw beef, capers, egg)
  [5] Les Escargots (snails, garlic butter, herbs)
  [6] Wagyu Carpaccio (raw beef, truffle, horseradish)
  [7] Salade Mesclun (mixed greens, goat cheese, apples)
  [8] Salade César (romaine, anchovy, parmesan)
  [9] Mousse De Foie Gras (duck liver, cherries)
  [10] Chèvre (goat cheese toast, vegetables)
  [11] Saumon Fumé (smoked salmon toast, eggs)
  [12] Avocat Et Tomate (avocado toast, eggs)
  [13] Chia Seed Pudding (healthy, coconut, berries)
  [14] Yogurt Parfait (yogurt, granola, berries)
  [15] Boucherie Waffles (Belgian waffles, cream)
  [16] Pain Perdu (French toast, berries)
  [17] Eggs Benedict (ham, hollandaise)
  [18] Eggs Norwegian (salmon, hollandaise)
  [19] Steak Aux Oeufs (steak and eggs)
  [20] Omelette Au Choix (custom omelette)
  [21] Oeufs Meurette (poached eggs, wine sauce)
  [22] Steak Frites (steak, french fries)
  [23] Moules Dijonnaise (mussels, mustard sauce)
  [24] Coq Au Vin (chicken, wine sauce)
  [25] Saumon Roti (roasted salmon)
  [26] Les St Jacques Roties (scallops, squash)
  [27] Le Croque Monsieur (ham and cheese sandwich)
  [28] Le Croque Madame (ham and cheese sandwich, egg)
  [29] Sandwich Au Boeuf (steak sandwich)
  [30] Boucherie Burger (dry aged beef burger)
  [31] Wagyu Burger (wagyu beef burger)
  
  Example user: "I want something with salmon"
  Example response: [11, 18, 25]`;
};

export const chat = async (isIndex, messages) => {
  const response = await fetch(CHAT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      systemPrompt: isIndex
        ? generateSystemPromptIndex()
        : generateSystemPrompt(),
      history: messages.map((msg) => ({
        role: msg.isUser ? "user" : "assistant",
        content: msg.text,
      })),
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch chat response");
  }
  const data = await response.json();

  // Add AI response to chat
  const aiResponse = data.message;
  return aiResponse;
};

export const parseIndexResponse = (indexString) => {
  // [1, 2, 3, 14, 15, 20]
  // only return the numbers in 1~25
  return indexString
    .slice(1, -1)
    .split(", ")
    .map(Number)
    .filter((num) => num >= 1 && num <= 25);
};
