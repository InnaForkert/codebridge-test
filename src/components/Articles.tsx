import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../state/utils/hooks";
import { fetchArticles } from "../state/utils/getArticles";
import Article from "./Article";
import { nanoid } from "nanoid";
import { ArticleInterface } from "../interfaces/interfaces";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

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
      <Typography fontWeight={600} mt={5}>
        Results: 6
      </Typography>
      <Divider />
      {isError && <p>Oops! Something went wrong! 🤔</p>}
      {isLoading && <p>Loading...</p>}
      <Grid
        container
        rowSpacing={"45px"}
        justifyContent="space-between"
        mt={6.25}
      >
        {articles &&
          articles.data.map((el: ArticleInterface) => (
            <Grid item key={nanoid()}>
              <Article data={el} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Articles;
