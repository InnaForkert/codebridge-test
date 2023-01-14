import { Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Image from "mui-image";
import { id } from "date-fns/locale";
import WestIcon from "@mui/icons-material/West";

function Article() {
  const { articleId } = useParams();
  const { data, isLoading, isError } = useFetch(
    "https://api.spaceflightnewsapi.net/v3/articles/" + articleId
  );

  console.log(data);

  return (
    <>
      {isError && <p>Oops! Something went wrong! 🤔</p>}
      {isLoading && <p>Loading...</p>}
      {data.imageUrl && (
        <>
          <Image
            src={data.imageUrl}
            alt={data.title}
            showLoading={true}
            duration={500}
            distance="100px"
            shiftDuration={900}
            width="100vw"
            height="245px"
          />
          <Card
            sx={{
              width: "1290px",
              margin: "0 auto",
              position: "relative",
              top: "-50px",
              padding: "35px 75px",
              overflow: "visible",
            }}
            raised={true}
          >
            <Typography
              textAlign="center"
              fontSize="24px"
              color={(theme) => theme.palette.primary.main}
              mb="50px"
            >
              {data.title}
            </Typography>
            <Typography fontSize="18px">{data.summary}</Typography>
            <Typography
              component={Link}
              to={`/`}
              fontWeight={700}
              sx={{
                position: "absolute",
                bottom: "-60px",
                left: "75px",
                textDecoration: "none",
                color: (theme) => theme.palette.primary.main,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <WestIcon sx={{ width: 12, height: 12 }} /> Back to homepage
            </Typography>
          </Card>
        </>
      )}
    </>
  );
}

export default Article;
