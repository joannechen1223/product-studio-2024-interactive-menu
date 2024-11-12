import { createSlice } from "@reduxjs/toolkit";

const flavorProfileSlice = createSlice({
  name: "flavorProfile", // changed from "counter" to "flavorProfile"
  initialState: {
    selectedFlavors: [], // array to store multiple selected flavors
    spiceTolerance: null,
    dietStyle: null,
    nationality: null,
    language: null,
  },
  reducers: {
    setSelectedFlavors: (state, action) => {
      state.selectedFlavors = action.payload;
    },
    clearFlavors: (state) => {
      state.selectedFlavors = [];
    },
    setSpiceTolerance: (state, action) => {
      state.spiceTolerance = action.payload;
    },
    setDietStyle: (state, action) => {
      state.dietStyle = action.payload;
    },
    setNationality: (state, action) => {
      state.nationality = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {
  setSelectedFlavors,
  clearFlavors,
  setSpiceTolerance,
  setDietStyle,
  setNationality,
  setLanguage,
} = flavorProfileSlice.actions;
export default flavorProfileSlice.reducer;
