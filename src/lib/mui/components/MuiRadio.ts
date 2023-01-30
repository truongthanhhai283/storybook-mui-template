import { radioClasses } from "@mui/material/Radio";
import type { CSSInterpolation, ThemeOptions } from "@mui/material/styles";

/**
 * Default Button MUI style: https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/Radio/Radio.js
 */

const MuiRadio: NonNullable<ThemeOptions["components"]>["MuiRadio"] = {
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
        [`&.${radioClasses.disabled}`]: {
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

export default MuiRadio;
