// Initialize chat endpoint
const CHAT_ENDPOINT = "https://playground-api.joannechen1223.info/chat";

const generateSystemPrompt = () => {
  return "You are a helpful restaurant assistant. Help customers choose dishes from our menu based on their preferences. Keep responses concise and friendly. These are all available choices: Soupe à l'Oignon, Escargots à la Bourguignonne, Steak Tartare, Mousse de Foie, Pâté en Croûte, Granola, Salade de Fruits, Pain Perdu, Salade Niçoise, Saumon d'Écosse, Salade Lyonnaise, Croque Madame, Toast Avocat et Tomate, Eggs Benedict, Eggs Norwegian, Steak aux Œufs, Omelette au Choix, Brandade de Morue, Saumon à la Poêle, Cuisse de Canard Confite, Steak Sandwich Parisien, Boucherie Burger (Premium Beef Burger), Boucherie Beyond Burger (Premium Plant Based Burger), Wagyu Burger, Steak Frites";
};

const generateSystemPromptIndex = () => {
  return `You are a helpful restaurant assistant. When users describe their preferences or ask for recommendations, respond ONLY with an array of item IDs that match their request, using this format: [1, 14, 15]. Do not include any other text or explanations.
  
  Available dishes and their IDs:
  [1] Soupe à l'Oignon (onion soup, warm, savory)
  [2] Escargots (garlic, herbs)
  [3] Steak Tartare (raw beef)
  [4] Mousse de Foie (liver mousse)
  [5] Pâté en Croûte (meat terrine)
  [6] Granola (breakfast, healthy)
  [7] Salade de Fruits (fresh fruit)
  [8] Croque Madame (sandwich, egg)
  [9] Toast Avocat (avocado toast)
  [10] Eggs Benedict
  [11] Eggs Norwegian (salmon)
  [12] Steak aux Œufs (steak & eggs)
  [13] Omelette au Choix (custom omelette)
  [14] Saumon à la Poêle (pan-seared salmon)
  [15] Cuisse de Canard (duck leg)
  [16] Steak Sandwich
  [17] Boucherie Burger (beef burger)
  [18] Boucherie Beyond (vegetarian burger)
  [19] Wagyu Burger (premium beef)
  [20] Steak Frites
  [21] Pain Perdu (french toast)
  [22] Salade Niçoise (tuna salad)
  [23] Saumon d'Écosse (scottish salmon)
  [24] Salade Lyonnaise (bacon, egg salad)
  [25] Brandade de Morue (cod fish)
  
  Example user: "I want something with salmon"
  Example response: [11, 14, 23]`;
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
