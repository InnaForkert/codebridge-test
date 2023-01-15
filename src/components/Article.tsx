import { Link } from "react-router-dom";
import { ArticleInterface } from "../interfaces/interfaces";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { format } from "date-fns";
import { CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import EastIcon from "@mui/icons-material/East";
import Highlighter from "react-highlight-words";
import { useAppSelector } from "../state/utils/hooks";

function Article({
  data: { publishedAt, title, summary, imageUrl, id },
}: {
  data: ArticleInterface;
}) {
  const themeType = useTheme();
  const filter = useAppSelector((state) => state.filter);
  const formatedDate = format(new Date(publishedAt), "PPP");
  const formattedSummary = formatSummary();

  function formatSummary() {
    const breakPoint = title.length > 80 ? 75 : 100;
    if (summary.length < breakPoint) {
      return summary;
    }
    const lastSpace = summary.slice(0, breakPoint).split("").lastIndexOf(" ");
    return summary.slice(0, lastSpace) + "...";
  }

  return (
    <Card
      variant="outlined"
      sx={{
        width: 400,
        height: "530px",
        position: "relative",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        width="400"
        height="217"
      />
      <CardContent sx={{ padding: "16px 24px" }}>
        <Typography
          variant="body2"
          color={(theme: typeof themeType) => theme.palette.secondary.main}
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
          <Highlighter
            searchWords={filter.split(" ")}
            autoEscape={true}
            textToHighlight={title}
          />
        </Typography>
        <Typography>
          <Highlighter
            searchWords={filter.split(" ")}
            autoEscape={true}
            textToHighlight={formattedSummary}
          />
        </Typography>
        <Typography
          component={Link}
          to={`/article/${id}`}
          fontWeight={700}
          sx={{
            position: "absolute",
            bottom: "25px",
            left: "25px",
            textDecoration: "none",
            color: (theme) => theme.palette.primary.main,
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          Read more <EastIcon />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Article;
