import { createTheme } from "@mui/material/styles";

const colorPalette = {
  50: "#f2f2ff",
  100: "#e8e7ff",
  200: "#d2d1ff",
  300: "#b0adff",
  400: "#897eff",
  500: "#634bff",
  600: "#4f26ff",
  700: "#4114ed",
  800: "#3610c7",
  900: "#2e0fa3",
  950: "#130557",
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colorPalette[500],
      light: colorPalette[200],
      dark: colorPalette[900],
    },
    secondary: {
      main: colorPalette[400],
      light: colorPalette[100],
      dark: colorPalette[800],
    },
    background: {
      default: colorPalette[950],
      paper: colorPalette[900],
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default darkTheme;
