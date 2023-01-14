import { Link } from "react-router-dom";
import { ArticleInterface } from "../interfaces/interfaces";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { format } from "date-fns";
import { CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

function Article({ data }: { data: ArticleInterface }) {
  const theme = useTheme();
  const formatedDate = format(new Date(data.publishedAt), "PPP");

  return (
    <Card
      variant="outlined"
      sx={{ width: 400, height: "530px", position: "relative" }}
    >
      <CardMedia
        component="img"
        image={data.imageUrl}
        alt={data.title}
        width="400"
        height="217"
        sx={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)" }}
      />
      <CardContent sx={{ padding: "16px 24px" }}>
        <Typography
          variant="body2"
          color={(theme) => theme.palette.secondary.main}
          mb={3}
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <CalendarTodayOutlinedIcon sx={{ width: 14, height: 14 }} />{" "}
          {formatedDate}
        </Typography>
        <Typography
          variant="body1"
          fontSize={24}
          mb={"20px"}
          sx={{ lineHeight: 1.2 }}
        >
          {data.title}
        </Typography>
        <Typography>{data.summary}</Typography>
        <Typography
          component={Link}
          to={`/article/${data.id}`}
          sx={{ position: "absolute", bottom: "25px", left: "25px" }}
        >
          Read more
        </Typography>
      </CardContent>
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
