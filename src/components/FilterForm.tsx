import {
  Box,
  Container,
  Grid,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { setFilter } from "../state/features/filter";
import { useAppDispatch, useAppSelector } from "../state/utils/hooks";
import SearchIcon from "@mui/icons-material/Search";

function FilterForm() {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector((state) => state.filter);

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    dispatch(setFilter(e.target.value));
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography fontWeight={600} mb={"10px"}>
          Filter by keywords
        </Typography>
      </Grid>
      <Grid item>
        <OutlinedInput
          onChange={(e) => handleInput(e)}
          value={filterValue}
          startAdornment={<SearchIcon />}
          placeholder="The most successful IT companies in 2020"
          sx={{
            width: "600px",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default FilterForm;
