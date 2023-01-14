import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#363636",
    },
    secondary: {
      main: "rgba(54,54,54, 0.6)",
    },
  },
});

export const ThemeType = typeof theme;
