/**
 * Reference: https://mui.com/material-ui/customization/palette/#adding-new-colors
 */
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    red: Palette["primary"];
    gray: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    red?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    red: true;
    gray: true;
  }
}
