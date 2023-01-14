import Container from "@mui/material/Container";
import Articles from "../components/Articles";
import FilterForm from "../components/FilterForm";

function Home() {
  return (
    <Container sx={{ padding: "50px 75px" }}>
      <FilterForm />
      <Articles />
    </Container>
  );
}

export default Home;
