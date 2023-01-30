import Stack from "@mui/material/Stack";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type { ChangeEventHandler } from "react";
import { useState } from "react";

import Radio from ".";

export default {
  title: "atoms/Radio",
  component: Radio,
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
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

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

export const Sizes: ComponentStory<typeof Radio> = (args) => {
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

export const Controlled: ComponentStory<typeof Radio> = (args) => {
  const [value, setValue] = useState<"radio-1" | "radio-2">("radio-1");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value as "radio-1" | "radio-2");
    args?.onChange?.(event, event.target.checked);
  };

  const controlProps = (item: "radio-1" | "radio-2") => ({
    checked: value === item,
    onChange: handleChange,
    value: item,
    name: "radio-controlled-demo",
    inputProps: { "aria-label": `${item}-demo` },
  });

  return (
    <Stack spacing={2} direction={"row"}>
      <Radio {...args} {...controlProps("radio-1")} />
      <Radio {...args} {...controlProps("radio-2")} />
    </Stack>
  );
};
