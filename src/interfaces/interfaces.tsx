// export interface Store {
//   filter: string;
//   articles: [];
// }

import { AxiosResponse } from "axios";

export interface ArticlesStateInterface {
  articles: AxiosResponse<any, any> | undefined | ArticlesInterface;
  isLoading: boolean;
  error: unknown;
}

export interface ArticleInterface {
  id: string;
  imageUrl: string;
  summary: string;
  title: string;
  publishedAt: string;
}

export interface ArticlesInterface {
  data: ArticleInterface[];
}

// export interface SingleArticleInterface {
//   imageUrl: string;
//   summary: string;
//   title: string;
// }
