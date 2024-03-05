"use client";

import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#5f4ddd",
      light: "#5f4ddd",
      contrastText: "#f6ead5",
    },
    secondary: {
      main: "#5f4ddd",
    },
    success: { main: "#4ee4a9" },
    grey: {
      50: "#994a2e",
      100: "#994a2e",
      200: "#994a2e",
      300: "#994a2e",
      400: "#994a2e",
      500: "#994a2e",
      600: "#994a2e",
      700: "#994a2e",
      A100: "#994a2e",
      A200: "#994a2e",
      A400: "#994a2e",
      A700: "#994a2e",
    },
    text: {
      primary: "#25343f",
      secondary: "#5f4ddd",
      disabled: "#5f4ddd",
    },
    divider: "#a3b8b8",
    background: {
      paper: "#c6c1f3",
      default: "##5f4ddd",
    },
  },
});
