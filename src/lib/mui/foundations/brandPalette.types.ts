/**
 * Reference: https://mui.com/material-ui/customization/palette/#adding-new-colors
 */
import "@mui/material/styles";
import type colors from "../constants/colors";

declare module "@mui/material/styles" {
  interface Theme {
    brandPalette: typeof colors;
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    brandPalette: typeof colors;
  }
}
