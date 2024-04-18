import { createSlice } from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS_LIST } from "./DefaultItemsList";

const itemsSlice = createSlice({
  name: "items",
  // initialState: DEFAULT_ITEMS_LIST,
  initialState: [],
  reducers: {
    initalAddItems: (state, actions) => {
      return actions.payload;
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;
