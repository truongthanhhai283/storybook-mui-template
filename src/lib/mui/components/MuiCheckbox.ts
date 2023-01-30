import { checkboxClasses } from "@mui/material/Checkbox";
import type { CSSInterpolation, ThemeOptions } from "@mui/material/styles";

/**
 * Default Button MUI style: https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/Checkbox/Checkbox.js
 */

const MuiCheckbox: NonNullable<ThemeOptions["components"]>["MuiCheckbox"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const { size } = ownerState;

      const baseStyles: CSSInterpolation = {
        padding: 0,
      };

      const baseSvgIconStyles: CSSInterpolation = {
        fill: "none",
      };

      const svgIconWithSizeStyles: CSSInterpolation = {
        ...(size === "small" && {
          fontSize: theme.typography.pxToRem(16),
        }),
        ...(size === "medium" && {
          fontSize: theme.typography.pxToRem(20),
        }),
      };

      const withDisabledStyles: CSSInterpolation = {
        [`&.${checkboxClasses.disabled}`]: {
          color: theme.brandPalette.gray["200"],
        },
      };

      return {
        ...baseStyles,
        ...withDisabledStyles,

        "& .MuiSvgIcon-root": {
          ...baseSvgIconStyles,
          ...svgIconWithSizeStyles,
        },
      };
    },
  },
};

export default MuiCheckbox;
