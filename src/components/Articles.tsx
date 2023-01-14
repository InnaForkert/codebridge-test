import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../state/utils/hooks";
import { fetchArticles } from "../state/utils/getArticles";
import Article from "./Article";
import { nanoid } from "nanoid";
import { ArticlesInterface, ArticleInterface } from "../interfaces/interfaces";

function Articles() {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);
  const isError = useAppSelector((state) => state.articles.error);
  const isLoading = useAppSelector((state) => state.articles.isLoading);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  console.log(articles);

  return (
    <>
      <p>Results: 6</p>
      {isError && <p>Oops! Something went wrong! 🤔</p>}
      {isLoading && <p>Loading...</p>}
      {articles &&
        articles.data.map((el: ArticleInterface) => (
          <Article key={nanoid()} data={el} />
        ))}
    </>
  );
}

export default Articles;
