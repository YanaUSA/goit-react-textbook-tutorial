import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
