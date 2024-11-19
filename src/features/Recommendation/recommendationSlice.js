import { createSlice } from "@reduxjs/toolkit";

import { recommendList } from "../../data/recommendList";

const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    recommendList: recommendList,
  },
  reducers: {},
});

export default recommendationSlice.reducer;
