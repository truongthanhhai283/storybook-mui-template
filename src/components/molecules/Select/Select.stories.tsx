import Stack from "@mui/material/Stack";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import isString from "@/utils/isString";

import type { SelectChangeEvent } from ".";
import Select from ".";

export default {
  title: "molecules/Select",
  component: Select,
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof Select>;

const options = Array.from({ length: 10 }, (v, k) => ({
  value: k + 1,
  label: `label - ${k + 1}`,
}));

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} value={options[0].value} options={options} />
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const Placeholder: ComponentStory<typeof Select> = () => {
  const [value, setValue] = useState<number>();

  const handleChange = (event: SelectChangeEvent<number>) => {
    setValue(+event.target.value);
  };

  return (
    <Select
      name="select-placeholder-demo"
      placeholder="Placeholder"
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};

export const Controlled: ComponentStory<typeof Select> = () => {
  const [value, setValue] = useState(options[0].value);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setValue(+event.target.value);
  };

  return (
    <Select
      name="select-demo-1"
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};

export const ControlledMultiple: ComponentStory<typeof Select> = () => {
  const [value, setValue] = useState<number[]>([1, 2]);

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const eventValue = event.target.value;
    setValue(isString(eventValue) ? [+eventValue] : eventValue);
  };

  return (
    <Select
      multiple
      name="select-demo-2"
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};

export const Sizes: ComponentStory<typeof Select> = (args) => {
  return (
    <Stack alignItems={"flex-start"} direction={"column"} spacing={2}>
      <Template {...args} />
      <Template {...args} size="small" />
      <Template {...args} size="medium" />
    </Stack>
  );
};
Sizes.argTypes = {
  size: {
    options: [],
  },
};
