import type { Breakpoint } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { ComponentMeta } from "@storybook/react";
import { useState } from "react";

import Button from "@/components/atoms/Button";
import useDisclosure from "@/hooks/shared/useDisclosure";

import Select from "../Select";

import Dialog from "./Dialog";
import DialogActions from "./DialogActions";
import DialogContent from "./DialogContent";
import DialogTitle from "./DialogTitle";

export default {
  title: "molecules/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

export const Default = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Show loading</Button>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle onClose={onClose}>Dialog title</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Save changes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const options = ["xs", "sm", "md", "lg", "xl"].map((i) => ({
  value: i,
  label: i,
}));

export const Sizes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState<Breakpoint>("sm");

  return (
    <>
      <Button onClick={onOpen}>Show loading</Button>
      <Select
        value={size}
        options={options}
        onChange={(event) => setSize(event.target.value as Breakpoint)}
      />
      <Dialog open={isOpen} maxWidth={size} onClose={onClose}>
        <DialogTitle onClose={onClose}>Dialog {size}</DialogTitle>
      </Dialog>
    </>
  );
};
