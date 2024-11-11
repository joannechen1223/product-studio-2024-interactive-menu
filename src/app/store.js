// store.js
import { configureStore } from "@reduxjs/toolkit";

import flavorProfileReducer from "../features/FlavorProfile/flavorProfileSlice";

const store = configureStore({
  reducer: {
    flavorProfile: flavorProfileReducer,
  },
});

export default store;
