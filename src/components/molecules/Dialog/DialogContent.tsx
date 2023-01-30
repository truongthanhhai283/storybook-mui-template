import type { DialogContentProps as MuiDialogContentProps } from "@mui/material/DialogContent";
import MuiDialogContent from "@mui/material/DialogContent";

export type DialogContentProps = MuiDialogContentProps;

function DialogContent(props: DialogContentProps) {
  return <MuiDialogContent sx={{ p: 2 }} dividers {...props} />;
}

export default DialogContent;
