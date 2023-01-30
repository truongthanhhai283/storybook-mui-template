import type { ThemeOptions } from "@mui/material/styles";

/**
 * Default typography: https://mui.com/material-ui/customization/default-theme/?expand-path=$.typography
 */

const typography: ThemeOptions["typography"] = {
  fontFamily: ['"Noto Sans JP"', "sans-serif"].join(","),
  fontSize: 14, // default

  /**
   * Adding variant - heading - start
   */
  heading18: {
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "26px",
  },
  heading16: {
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "23px",
  },
  heading14: {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "20px",
  },
  heading12: {
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "17px",
  },
  /**
   * Adding variant - heading - end
   */

  /**
   * Adding variant - text - start
   */
  text16: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "23px",
  },
  text14: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
  },
  text12: {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "17px",
  },
  text8: {
    fontWeight: 400,
    fontSize: "8px",
    lineHeight: "12px",
  },
  /**
   * Adding variant - text - end
   */
};

export default typography;
