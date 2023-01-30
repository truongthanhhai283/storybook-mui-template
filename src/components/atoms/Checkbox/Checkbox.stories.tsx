import Stack from "@mui/material/Stack";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type { ChangeEventHandler } from "react";
import { useState } from "react";

import Checkbox from "./";

export default {
  title: "atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  defaultChecked: true,
};

export const Sizes: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <Stack alignItems={"flex-start"} direction={"column"} spacing={2}>
      <Template {...args} />
      Default (medium)
      <Template {...args} size="small" />
      Small
      <Template {...args} size="medium" />
      Medium
    </Stack>
  );
};
Sizes.argTypes = {
  size: {
    options: [],
  },
};

export const Controlled: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setChecked(event.target.checked);
    args?.onChange?.(event, event.target.checked);
  };

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
