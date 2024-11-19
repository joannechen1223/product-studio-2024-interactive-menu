// store.js
import { configureStore } from "@reduxjs/toolkit";

import flavorProfileReducer from "../features/FlavorProfile/flavorProfileSlice";
import menuReducer from "../features/Menu/menuSlice";
import recommendationReducer from "../features/Recommendation/recommendationSlice";

const store = configureStore({
  reducer: {
    flavorProfile: flavorProfileReducer,
    menu: menuReducer,
    recommendation: recommendationReducer,
  },
});

export default store;
