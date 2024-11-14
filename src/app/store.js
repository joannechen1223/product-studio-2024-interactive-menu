// store.js
import { configureStore } from "@reduxjs/toolkit";

import flavorProfileReducer from "../features/FlavorProfile/flavorProfileSlice";
import menuReducer from "../features/Menu/menuSlice";
const store = configureStore({
  reducer: {
    flavorProfile: flavorProfileReducer,
    menu: menuReducer,
  },
});

export default store;
