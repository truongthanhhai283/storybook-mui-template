import type { OutlinedInputProps as MuiOutlinedInputProps } from "@mui/material/OutlinedInput";
import MuiOutlinedInput, {
  outlinedInputClasses as baseClasses,
} from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";

type OutlinedInputTextProps = MuiOutlinedInputProps;

/**
 * Override Mui styles https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/OutlinedInput/OutlinedInput.js
 */
const Input = styled(MuiOutlinedInput)(({ theme, size }) => {
  return {
    color: theme.brandPalette.gray["700"],

    [`& .${baseClasses.input}`]: {
      boxSizing: "border-box",
      borderRadius: 6,
      position: "relative",
      backgroundColor: theme.brandPalette.white,

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
    },

    [`&.${baseClasses.disabled}`]: {
      opacity: 0.5,
    },

    [`& .${baseClasses.notchedOutline}`]: {
      border: `1px solid ${theme.brandPalette.gray["200"]}`,
      transition: theme.transitions.create(["border-color"]),
    },

    [`&:hover .${baseClasses.notchedOutline}`]: {
      borderColor: theme.brandPalette.gray["300"],
    },

    [`&.${baseClasses.focused} .${baseClasses.notchedOutline}`]: {
      borderColor: theme.brandPalette.blue["500"],
    },

    [`&.${baseClasses.error} .${baseClasses.notchedOutline}`]: {
      borderColor: theme.brandPalette.red["500"],
      borderWidth: 2,
    },

    [`&.${baseClasses.error} .${baseClasses.input}`]: {
      color: theme.brandPalette.red["500"],
      backgroundColor: theme.brandPalette.red["50"],
    },

    [`&.${baseClasses.disabled} .${baseClasses.notchedOutline}`]: {
      borderColor: theme.brandPalette.gray["200"],
    },
  };
});

const OutlinedInputText = forwardRef<HTMLInputElement, OutlinedInputTextProps>(
  function OutlinedInputText(props, ref) {
    const { size = "small", ...rest } = props;
    return <Input size={size} inputRef={ref} {...rest} />;
  }
);

export default OutlinedInputText;
