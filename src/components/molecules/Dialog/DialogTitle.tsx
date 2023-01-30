import MuiDialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import type { ReactNode } from "react";

import { ModalCloseIcon } from "@/components/icons";

type DialogTitleProps = {
  children: ReactNode;
  onClose: () => void;
};

function DialogTitle(props: DialogTitleProps) {
  const { children, onClose } = props;
  return (
    <MuiDialogTitle sx={{ p: 2 }}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <ModalCloseIcon sx={{ fontSize: 20 }} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
}

export default DialogTitle;
