import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type { ChangeEventHandler, MouseEventHandler } from "react";
import { useRef, useState } from "react";

import Button from "../Button";

import OutlinedInputText from "./";

export default {
  title: "atoms/OutlinedInputText",
  component: OutlinedInputText,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    disabled: {
      control: "boolean",
    },
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof OutlinedInputText>;

const Template: ComponentStory<typeof OutlinedInputText> = (args) => (
  <OutlinedInputText {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "This is a placeholder",
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: "Disabled",
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  defaultValue: "Read only",
  readOnly: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  defaultValue: "Full width",
  fullWidth: true,
};

export const Error = Template.bind({});
Error.args = {
  defaultValue: "Error",
  error: true,
};

export const Controlled: ComponentStory<typeof OutlinedInputText> = () => {
  const [value, setValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return <OutlinedInputText value={value} onChange={handleChange} />;
};

export const UnControlled: ComponentStory<typeof OutlinedInputText> = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.innerText =
      ref.current?.value || "You do not enter data!";
  };

  return (
    <Box sx={{ display: "flex" }}>
      <OutlinedInputText defaultValue={""} ref={ref} />
      <Button
        id="button-demo-uncontrolled"
        sx={{ marginLeft: 1 }}
        onClick={handleClick}
      >
        Click to show value
      </Button>
    </Box>
  );
};

export const Sizes: ComponentStory<typeof OutlinedInputText> = (args) => {
  return (
    <Stack alignItems={"flex-start"} direction={"column"} spacing={2}>
      <Template {...args} defaultValue={"default (size small)"} />
      <Template {...args} size="small" defaultValue={"size small"} />
      <Template {...args} size="medium" defaultValue={"size medium"} />
    </Stack>
  );
};
Sizes.argTypes = {
  size: {
    options: [],
  },
};
