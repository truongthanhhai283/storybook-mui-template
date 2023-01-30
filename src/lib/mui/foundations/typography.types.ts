/**
 * Reference: https://mui.com/material-ui/customization/typography/#adding-amp-disabling-variants
 */
import "@mui/material/styles";
import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading18: CSSProperties;
    heading16: CSSProperties;
    heading14: CSSProperties;
    heading12: CSSProperties;
    text16: CSSProperties;
    text14: CSSProperties;
    text12: CSSProperties;
    text8: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading18?: CSSProperties;
    heading16?: CSSProperties;
    heading14?: CSSProperties;
    heading12?: CSSProperties;
    text16?: CSSProperties;
    text14?: CSSProperties;
    text12?: CSSProperties;
    text8?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading18: true;
    heading16: true;
    heading14: true;
    heading12: true;
    text16: true;
    text14: true;
    text12: true;
    text8: true;
  }
}
