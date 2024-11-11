import { createSlice } from "@reduxjs/toolkit";

const flavorProfileSlice = createSlice({
  name: "flavorProfile", // changed from "counter" to "flavorProfile"
  initialState: {
    selectedFlavors: [], // array to store multiple selected flavors
  },
  reducers: {
    toggleFlavor: (state, action) => {
      const flavor = action.payload;
      const index = state.selectedFlavors.indexOf(flavor);

      if (index === -1) {
        // Add flavor if not already selected
        state.selectedFlavors.push(flavor);
      } else {
        // Remove flavor if already selected
        state.selectedFlavors.splice(index, 1);
      }
    },
    clearFlavors: (state) => {
      state.selectedFlavors = [];
    },
  },
});

export const { toggleFlavor, clearFlavors } = flavorProfileSlice.actions;
export default flavorProfileSlice.reducer;
