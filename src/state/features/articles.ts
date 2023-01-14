import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {},
});

export const {} = articlesSlice.actions;

export const articlesReducer = articlesSlice.reducer;

// export const getarticles = (state) => state.articles;
