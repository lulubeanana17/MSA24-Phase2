'use client'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5B6F",
      dark: "#E04860",
      light: "#FF8A98",
    },
    secondary: {
      main: "#000000",
      dark: "#333333",
      light: "#666666",
    },
    error: {
      main: "#D05050",
      dark: "#B03C3C",
      light: "#E57373",
    },
    warning: {
      main: "#FFA3A3",
      dark: "#E08888",
      light: "#FFB7B7",
    },
    info: {
      main: "#494D50",
      dark: "#606468",
      light: "#787C80",
    },
    success: {
      main: "#827A7A",
      dark: "#6E6666",
      light: "#B1B1B1",
    },
  },
});

export default theme;
