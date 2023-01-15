import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArticleInterface } from "../../interfaces/interfaces";

export const fetchArticles = createAsyncThunk(
  "articles/fetch",
  async (params: { filter: string; page: number }, thunkAPI) => {
    const { filter, page } = params;
    const perPage = 12;
    if (filter) {
      try {
        const response = await axios.get(
          `https://api.spaceflightnewsapi.net/v3/articles?title_contains=${filter}&_limit=${perPage}&_start=${
            page * perPage
          }`
        );
        console.log(response);
        const matchedDescription = await axios.get(
          `https://api.spaceflightnewsapi.net/v3/articles?summary_contains=${filter}&_limit=${perPage}&_start=${
            page * perPage
          }`
        );

        const filteredResult = [
          ...response.data,
          ...matchedDescription.data,
        ].filter((el, i, arr) => arr.indexOf(el) === i);

        return filteredResult;
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
