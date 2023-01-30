import { createTheme } from "@mui/material/styles";

import components from "./components";
import brandPalette from "./foundations/brandPalette";
import breakpoints from "./foundations/breakpoints";
import palette from "./foundations/palette";
import typography from "./foundations/typography";
import zIndex from "./foundations/zIndex";

const theme = createTheme({
  components,
  brandPalette,
  breakpoints,
  palette,
  typography,
  zIndex,
});

export default theme;
