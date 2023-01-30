import type { ThemeOptions } from "@mui/material/styles";

import colors from "../constants/colors";

/**
 * Default palette: https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
 */

const palette: ThemeOptions["palette"] = {
  mode: "light",
  primary: {
    light: colors.teal["400"],
    main: colors.teal["500"],
    dark: colors.teal["600"],
    contrastText: colors.white,
  },
  red: {
    light: colors.red["400"],
    main: colors.red["500"],
    dark: colors.red["600"],
    contrastText: colors.white,
  },
  gray: {
    light: colors.gray["50"],
    main: colors.gray["100"],
    dark: colors.gray["200"],
    contrastText: colors.gray["700"],
  },
};

export default palette;
