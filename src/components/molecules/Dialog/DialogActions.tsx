import MuiDialogActions from "@mui/material/DialogActions";
import type { DialogActionsProps as MuiDialogActionsProps } from "@mui/material/DialogActions";

export type DialogActionsProps = MuiDialogActionsProps;

function DialogActions(props: DialogActionsProps) {
  return <MuiDialogActions sx={{ p: 2 }} {...props} />;
}

export default DialogActions;
