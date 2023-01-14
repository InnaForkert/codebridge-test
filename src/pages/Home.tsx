import Container from "@mui/material/Container";
import Articles from "../components/Articles";
import FilterForm from "../components/FilterForm";

function Home() {
  return (
    <Container
      maxWidth={false}
      fixed
      disableGutters={true}
      sx={{ paddingBlock: 6.25, width: "1440px", paddingInline: "75px" }}
    >
      <FilterForm />
      <Articles />
    </Container>
  );
}

export default Home;
