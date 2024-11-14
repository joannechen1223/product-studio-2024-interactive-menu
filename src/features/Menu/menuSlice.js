import { createSlice } from "@reduxjs/toolkit";

import ingredientsDict from "../../data/ingredients";
import { likePercentage } from "../../data/likePercentage";
import menuData from "../../data/menu";

const getMenuGroups = (menuData) => {
  return menuData.map((item) => ({
    groupId: item.groupId,
    groupName: item.groupName,
    itemIds: item.items.map((item) => item.itemId),
  }));
};

const getMenuItems = (menuData) => {
  const items = {};
  menuData.forEach((group) => {
    group.items.forEach((item) => {
      items[item.itemId] = item;
    });
  });
  return items;
};

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    groups: getMenuGroups(menuData),
    items: getMenuItems(menuData),
    likePercentage: likePercentage,
    ingredientsDict: ingredientsDict,
  },
  reducers: {},
});

export default menuSlice.reducer;
