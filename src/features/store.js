import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movieApi";
import { mealApi } from "./mealApi";


export const store = configureStore({
  reducer: {

    [movieApi.reducerPath]: movieApi.reducer,
    [mealApi.reducerPath]: mealApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieApi.middleware,
      mealApi.middleware
    ]),
})