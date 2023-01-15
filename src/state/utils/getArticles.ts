import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArticleInterface } from "../../interfaces/interfaces";

export const fetchArticles = createAsyncThunk(
  "articles/fetch",
  async (params: { filter: string; page: number }, thunkAPI) => {
    const { filter, page } = params;
    const perPage = 6;
    if (filter) {
      try {
        const response = await axios.get(
          `https://api.spaceflightnewsapi.net/v3/articles?title_contains=${filter.replaceAll(
            " ",
            "+"
          )}&_limit=${perPage}&_start=${page * perPage}`
        );
        const matchedDescription = await axios.get(
          `https://api.spaceflightnewsapi.net/v3/articles?summary_contains=${filter.replaceAll(
            " ",
            "+"
          )}&_limit=${perPage}&_start=${page * perPage}`
        );
        const filteredResult = matchedDescription.data.filter(
          (el: ArticleInterface) => {
            return !response.data.find(
              (article: ArticleInterface) => article.id === el.id
            );
          }
        );
        return [...response.data, ...filteredResult];
      } catch (e) {
        if (e instanceof Error) {
          return thunkAPI.rejectWithValue(e.message);
        }
        console.log("unknown error");
      }
    }
    try {
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${perPage}&_start=${
          page * perPage
        }`
      );
      const data: ArticleInterface[] = response.data;
      return data;
    } catch (e) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
      console.log("unknown error");
    }
  }
);
