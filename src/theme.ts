import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    secondary: {
      main: "rgba(54,54,54, 0.6)",
    },
  },
});
