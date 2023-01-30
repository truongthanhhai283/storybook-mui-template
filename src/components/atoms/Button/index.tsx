import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { forwardRef } from "react";

type BaseProps = Pick<
  MuiButtonProps,
  | "classes"
  | "size"
  | "children"
  | "disabled"
  | "sx"
  | "fullWidth"
  | "startIcon"
  | "endIcon"
  | "href"
  | "ref"
  | "id"
  | "onClick"
  | "type"
>;

export interface ButtonProps extends BaseProps {
  /**
   * The variant to use.
   */
  variant?: "contained" | "brand-outlined" | "text" | "outlined";
  /**
   * The color of the component. It supports both default and custom theme colors.
   */
  color?: "primary" | "red" | "gray" | "inherit";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  return <MuiButton ref={ref} {...props} />;
});

export default Button;
