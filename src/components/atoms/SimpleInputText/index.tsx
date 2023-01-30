import type { InputBaseProps as MuiInputBaseProps } from "@mui/material/InputBase";
import MuiInputBase, { inputBaseClasses } from "@mui/material/InputBase";
import type { CSSInterpolation } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

type SimpleInputTextProps = MuiInputBaseProps;

const Input = styled(MuiInputBase)(({ theme, size }) => {
  const withSizeStyles: CSSInterpolation = {
    ...(size === "small" && {
      height: 32,
      padding: "6px 12px",
      fontSize: theme.typography.pxToRem(14),
    }),
    ...(size === "medium" && {
      height: 40,
      padding: "8px 16px",
      fontSize: theme.typography.pxToRem(16),
    }),
  };

  const inputStyles: CSSInterpolation = {
    boxSizing: "border-box",
    borderRadius: 6,
    position: "relative",
    backgroundColor: theme.brandPalette.white,
    border: `1px solid ${theme.brandPalette.gray["200"]}`,
    transition: theme.transitions.create(["border-color"]),

    "&:hover": {
      borderColor: theme.brandPalette.gray["300"],
    },

    "&:focus": {
      borderColor: theme.brandPalette.blue["500"],
    },

    [`&.${inputBaseClasses.readOnly}`]: {
      borderColor: theme.brandPalette.gray["200"],
    },

    [`&.${inputBaseClasses.disabled}`]: {
      borderColor: theme.brandPalette.gray["200"],
      opacity: 0.5,
    },

    ...withSizeStyles,
  };

  return {
    color: theme.brandPalette.gray["700"],

    [`& .${inputBaseClasses.input}`]: inputStyles,
  };
});

function SimpleInputText(props: SimpleInputTextProps) {
  const { size = "small", ...rest } = props;
  return <Input size={size} {...rest} />;
}

export default SimpleInputText;
