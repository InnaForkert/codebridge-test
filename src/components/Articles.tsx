import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../state/utils/hooks";
import { fetchArticles } from "../state/utils/getArticles";
import Article from "./Article";
import { nanoid } from "nanoid";
import { ArticleInterface } from "../interfaces/interfaces";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { useFetchCount } from "../hooks/useFetchCount";
import InfiniteScroll from "react-infinite-scroll-component";

function Articles() {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);
  const isError = useAppSelector((state) => state.articles.error);
  const isLoading = useAppSelector((state) => state.articles.isLoading);
  const filter = useAppSelector((state) => state.filter);
  const { data: count } = useFetchCount(
    "https://api.spaceflightnewsapi.net/v3/articles/count"
  );
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchArticles({ filter: filter, page: page }));
  }, [dispatch, filter, page]);

  return (
    <>
      <Typography fontWeight={600} mt={5}>
        Results: {count}
      </Typography>
      <Divider />
      {isError && <p>Oops! Something went wrong! 🤔</p>}
      {isLoading && <p>Loading...</p>}
      <InfiniteScroll
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        dataLength={count}
      >
        <Grid
          container
          rowSpacing={"45px"}
          justifyContent="space-between"
          mt={6.25}
        >
          {articles &&
            articles.map((el: ArticleInterface) => (
              <Grid item key={nanoid()}>
                <Article data={el} />
              </Grid>
            ))}
        </Grid>
      </InfiniteScroll>
    </>
  );
}

export default Articles;

// <InfiniteScroll
//   dataLength={items.length} //This is important field to render the next data
//   next={fetchData}
//   hasMore={true}
//   loader={<h4>Loading...</h4>}
//   endMessage={
//     <p style={{ textAlign: "center" }}>
//       <b>Yay! You have seen it all</b>
//     </p>
//   }
//   // below props only if you need pull down functionality
//   refreshFunction={this.refresh}
//   pullDownToRefresh
//   pullDownToRefreshThreshold={50}
//   pullDownToRefreshContent={
//     <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
//   }
//   releaseToRefreshContent={
//     <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
//   }
// ></InfiniteScroll>;
