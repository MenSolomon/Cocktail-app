import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drinkStore: [],
};

const sendDrinkSlice = createSlice({
  name: "storeOfDrinks",
  initialState,
  reducers: {
    deliverDrink: (state, action) => {
      state.drinkStore = action.payload;
    },
  },
});

export const selectDrinksToDeliver = (state) => state.storeOfDrinks.drinkStore;

export default sendDrinkSlice.reducer;

export const { deliverDrink } = sendDrinkSlice.actions;
