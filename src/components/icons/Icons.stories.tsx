import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import type SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import Center from "../atoms/Center";

import {
  RefreshIcon,
  CloseIcon,
  ModalCloseIcon,
  SearchIcon,
  TriangleUpIcon,
  TriangleDownIcon,
} from ".";

export default {
  title: "icons/Icons",
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof SvgIcon>;

const icons = [
  RefreshIcon,
  CloseIcon,
  ModalCloseIcon,
  SearchIcon,
  TriangleUpIcon,
  TriangleDownIcon,
];

export const AllIcons: ComponentStory<typeof SvgIcon> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  function handleCopyToClipboard(name: string) {
    const syntax = `<${name} />`;
    navigator.clipboard.writeText(syntax);

    setIsOpen(true);
    setMessage(`Copied to clipboard ${syntax}`);
  }

  return (
    <div>
      <Typography component="h2">Dark style</Typography>
      <Stack mt={1} direction={"row"} spacing={1}>
        {icons.map((Icon) => (
          <Center
            key={Icon.name}
            width={"40px"}
            height={"40px"}
            bgcolor={"black"}
            border={"1px solid lightgray"}
            onClick={() => handleCopyToClipboard(Icon.name)}
          >
            <Box sx={{ color: "white" }}>
              <Icon {...args} />
            </Box>
          </Center>
        ))}
      </Stack>

      <Divider />
      <Typography component="h2">Light style</Typography>
      <Stack mt={1} direction={"row"} spacing={1}>
        {icons.map((Icon) => (
          <Center
            key={Icon.name}
            width={"40px"}
            height={"40px"}
            bgcolor={"white"}
            border={"1px solid lightgray"}
            onClick={() => handleCopyToClipboard(Icon.name)}
          >
            <Box sx={{ color: "black" }}>
              <Icon {...args} />
            </Box>
          </Center>
        ))}
      </Stack>
      <Snackbar
        open={isOpen}
        message={message}
        autoHideDuration={2000}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
