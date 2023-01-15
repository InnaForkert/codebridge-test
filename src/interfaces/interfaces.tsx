export interface ArticlesStateInterface {
  articles?: ArticleInterface[];
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
