import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addItemToBag: (state, actions) => {
      state.push(actions.payload);
    },
    removeItemFromBag: (state, actions) => {
      return state.filter((itemId) => itemId !== actions.payload);
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
