import MuiDialog from "@mui/material/Dialog";
import type { DialogProps as MuiDialogProps } from "@mui/material/Dialog";
import Fade from "@mui/material/Fade";
import type { TransitionProps } from "@mui/material/transitions";
import type { ReactElement, Ref } from "react";
import { forwardRef } from "react";

export type DialogProps = MuiDialogProps;

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} timeout={{ enter: 300, exit: 400 }} />;
});

function Dialog({ scroll = "paper", maxWidth = "sm", ...rest }: DialogProps) {
  return (
    <MuiDialog
      fullWidth
      scroll={scroll}
      maxWidth={maxWidth}
      TransitionComponent={Transition}
      {...rest}
    />
  );
}

export default Dialog;
