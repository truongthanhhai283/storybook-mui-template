import type { ThemeOptions } from "@mui/material/styles";

/**
 * Default Button MUI style: https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/FormControlLabel/FormControlLabel.js
 */

const MuiFormControlLabel: NonNullable<
  ThemeOptions["components"]
>["MuiFormControlLabel"] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      marginLeft: 0,
      marginRight: 0,
    },
    label: ({ theme }) => ({
      marginLeft: 8,
      color: theme.brandPalette.gray["700"],
      fontSize: theme.typography.pxToRem(14),
    }),
  },
};

export default MuiFormControlLabel;
