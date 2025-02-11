import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./expensesSlice";
import { getDefaultNormalizer } from "@testing-library/react";
import ToastMiddleWare from "../middlewares/ToastMiddleware";

export const store = configureStore({
  reducer: {
    expensesSlice: expensesSlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(ToastMiddleWare),
});
