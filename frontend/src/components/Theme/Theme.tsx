"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
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

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF5B6F",
      dark: "#FF8A98",
      light: "#E04860",
    },
    secondary: {
      main: "#FFFFFF",
      dark: "#CCCCCC",
      light: "#999999",
    },
    error: {
      main: "#FF7373",
      dark: "#FF4C4C",
      light: "#FF9999",
    },
    warning: {
      main: "#FFCCCC",
      dark: "#FF9999",
      light: "#FFDDDD",
    },
    info: {
      main: "#A9ACB1",
      dark: "#898D92",
      light: "#C2C5CA",
    },
    success: {
      main: "#BFBFBF",
      dark: "#E0E0E0",
      light: "#A6A6A6",
    },
  },
});
