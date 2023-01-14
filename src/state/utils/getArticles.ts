import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "articles/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles`
      );
      return response;
    } catch (e) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
      console.log("unknown error");
    }
  }
);
