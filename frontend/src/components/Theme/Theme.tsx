'use client'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5B6F",
      dark: "#E04860",
    },
    secondary: {
      main: "#000000",
      dark: "#333333",
    },
    error: {
      main: "#D05050",
      dark: "#B03C3C",
    },
    warning: {
      main: "#FFA3A3",
      dark: "#E08888",
    },
    info: {
      main: "#494D50",
      dark: "#606468",
    },
    success: {
      main: "#827A7A",
      dark: "#6E6666",
    },
  },
});

export default theme;
