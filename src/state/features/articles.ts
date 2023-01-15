import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "../utils/getArticles";
import { ArticlesStateInterface } from "../../interfaces/interfaces";

const initialState: ArticlesStateInterface = {
  articles: [],
  isLoading: false,
  error: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.articles = action.payload;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export const {} = articlesSlice.actions;

export const articlesReducer = articlesSlice.reducer;
