import { Link } from "react-router-dom";
import { ArticleInterface } from "../interfaces/interfaces";

function Article({ data }: { data: ArticleInterface }) {
  return (
    <>
      <img src={data.imageUrl} alt={data.title} width="200" />
      <p>{data.publishedAt}</p>
      <p>{data.title}</p>
      <p>{data.summary}</p>
      <Link to={`/article/${data.id}`}>Read more</Link>
    </>
  );
}

export default Article;
