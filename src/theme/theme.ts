import { PaletteColor, PaletteColorOptions, createTheme } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

//PalatteとPaletteOptionsの型を拡張
declare module "@mui/material/styles" {
  interface Palette {
    incomeColor: PaletteColor;
    expenseColor: PaletteColor;
    balanceColor: PaletteColor;
  }
  interface PaletteOptions {
    incomeColor?: PaletteColorOptions;
    expenseColor?: PaletteColorOptions;
    balanceColor?: PaletteColorOptions;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP, Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeightRegular: 400, // フォントウェイト400
    fontWeightMedium: 500, // フォントウェイト500
    fontWeightBold: 700, // フォントウェイト700
  },

  palette: {
    incomeColor: {
      main: blue[500],
      light: blue[100],
      dark: blue[700],
    },

    expenseColor: {
      main: red[500],
      light: red[100],
      dark: red[700],
    },

    balanceColor: {
      main: green[500],
      light: green[100],
      dark: green[700],
    },
  },
});
