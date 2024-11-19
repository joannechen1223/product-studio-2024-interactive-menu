import { createSlice } from "@reduxjs/toolkit";

import { recommendList } from "../../data/recommendList";

const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    recType: null,
    recommendList: recommendList,
  },
  reducers: {
    setRecType: (state, action) => {
      state.recType = action.payload;
    },
  },
});

export const { setRecType } = recommendationSlice.actions;
export default recommendationSlice.reducer;
