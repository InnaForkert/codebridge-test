import { Link } from "react-router-dom";
import { ArticleInterface } from "../interfaces/interfaces";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function Article({ data }: { data: ArticleInterface }) {
  return (
    <Card variant="outlined" sx={{ width: 400, height: "530px", flex: 1 }}>
      <CardMedia
        component="img"
        image={data.imageUrl}
        alt={data.title}
        width="400"
        height="217"
        sx={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)" }}
      />
      <p>{data.publishedAt}</p>
      <p>{data.title}</p>
      <p>{data.summary}</p>
      <Link to={`/article/${data.id}`}>Read more</Link>
    </Card>
  );
}

export default Article;

{
  /* <Card variant="outlined" sx={{ width: 320 }}>
  <CardOverflow>
    <AspectRatio ratio="2">
      <img
        src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
        srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
        loading="lazy"
        alt=""
      />
    </AspectRatio>
  </CardOverflow>
  <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
    Yosemite National Park
  </Typography>
  <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
    California
  </Typography>
  <Divider />
  <CardOverflow
    variant="soft"
    sx={{
      display: "flex",
      gap: 1.5,
      py: 1.5,
      px: "var(--Card-padding)",
      bgcolor: "background.level1",
    }}
  >
    <Typography
      level="body3"
      sx={{ fontWeight: "md", color: "text.secondary" }}
    >
      6.3k views
    </Typography>
    <Divider orientation="vertical" />
    <Typography
      level="body3"
      sx={{ fontWeight: "md", color: "text.secondary" }}
    >
      1 hour ago
    </Typography>
  </CardOverflow>
</Card>; */
}
