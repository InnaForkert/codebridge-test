import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./features/filter";
import { articlesReducer } from "./features/articles";

const rootReducer = combineReducers({
  filter: filterReducer,
  articles: articlesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
