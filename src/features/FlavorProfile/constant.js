export const SpiceTolerance = {
  NONE: "NONE",
  MILD: "MILD",
  MEDIUM: "MEDIUM",
  HOT: "HOT",
};

export const DietStyle = {
  NO_RESTRICTION: "NO_RESTRICTION",
  KETO: "KETO",
  VEGAN: "VEGAN",
  PESCATARIAN: "PESCATARIAN",
};

// Display labels for the enum values
export const SpiceToleranceLabels = {
  [SpiceTolerance.NONE]: "None 🚫",
  [SpiceTolerance.MILD]: "Mild",
  [SpiceTolerance.MEDIUM]: "Medium",
  [SpiceTolerance.HOT]: "Hot 🔥",
};

export const DietStyleLabels = {
  [DietStyle.NO_RESTRICTION]: "No restriction",
  [DietStyle.KETO]: "Keto",
  [DietStyle.VEGAN]: "Vegan",
  [DietStyle.PESCATARIAN]: "Pescatarian",
};

export const Country = {
  UnitedStates: "United States",
  Canada: "Canada",
  Mexico: "Mexico",
};

export const CountryList = [
  Country.UnitedStates,
  Country.Canada,
  Country.Mexico,
];

export const LanguageList = ["English", "Spanish", "Mandarin"];
