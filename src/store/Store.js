import { configureStore } from "@reduxjs/toolkit";
import drinkReducer from "../slice/sendDrinkSlice";

const store = configureStore({
  reducer: {
    storeOfDrinks: drinkReducer,
  },
});

export default store;
