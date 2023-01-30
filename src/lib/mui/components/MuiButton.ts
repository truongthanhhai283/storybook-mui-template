import { buttonClasses } from "@mui/material/Button";
import type {
  ComponentsPropsList,
  CSSInterpolation,
  ThemeOptions,
} from "@mui/material/styles";

/**
 * Default Button MUI style: https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/Button/Button.js
 */

const commonIconStyles = ({ size }: ComponentsPropsList["MuiButton"]) => ({
  ...(size === "small" && {
    "& > *:nth-of-type(1)": {
      fontSize: 12,
    },
  }),
  ...(size === "medium" && {
    "& > *:nth-of-type(1)": {
      fontSize: 14,
    },
  }),
  ...(size === "large" && {
    "& > *:nth-of-type(1)": {
      fontSize: 16,
    },
  }),
});

const MuiButton: NonNullable<ThemeOptions["components"]>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
    variant: "contained",
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const { size, variant, color } = ownerState;

      const baseStyles: CSSInterpolation = {
        borderRadius: 6,
        minWidth: "initial",
        fontWeight: 700,
      };

      const withSizeStyles: CSSInterpolation = {
        ...(size === "small" && {
          padding: "0 8px",
          fontSize: theme.typography.pxToRem(12),
          height: 24,
        }),
        ...(size === "medium" && {
          padding: "0 12px",
          fontSize: theme.typography.pxToRem(14),
          height: 32,
        }),
        ...(size === "large" && {
          padding: "0 16px",
          fontSize: theme.typography.pxToRem(16),
          height: 40,
        }),
      };

      if (variant === "contained") {
        return {
          ...baseStyles,
          ...withSizeStyles,

          [`&.${buttonClasses.disabled}`]: {
            boxShadow: "none",
            opacity: 0.5,
            ...(color &&
              color !== "inherit" && {
                color: theme.palette[color].contrastText,
                backgroundColor: theme.palette[color].main,
              }),
          },
        };
      }

      return {
        ...baseStyles,
        ...withSizeStyles,
      };
    },
    startIcon: ({ ownerState }) => ({
      marginRight: 10,
      ...commonIconStyles(ownerState),
    }),
    endIcon: ({ ownerState }) => ({
      marginLeft: 10,
      ...commonIconStyles(ownerState),
    }),
  },
  variants: [
    {
      props: { variant: "brand-outlined" },
      style: ({ theme }) => ({
        backgroundColor: theme.brandPalette.white,
        color: theme.brandPalette.gray["700"],
        border: `1px solid ${theme.brandPalette.gray["200"]}`,
      }),
    },
  ],
};

export default MuiButton;
