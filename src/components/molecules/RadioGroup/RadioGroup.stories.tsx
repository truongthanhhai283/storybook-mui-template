import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type { ChangeEventHandler } from "react";
import { useState } from "react";

import RadioGroup from ".";

export default {
  title: "molecules/RadioGroup",
  component: RadioGroup,
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof RadioGroup>;

const options = Array.from({ length: 5 }, (v, k) => ({
  value: k + 1,
  label: `label - ${k + 1}`,
}));

export const Controlled: ComponentStory<typeof RadioGroup> = (args) => {
  const [value, setValue] = useState(options[0].value);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(+event.target.value);
  };

  return (
    <RadioGroup
      {...args}
      name="demo-1"
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};

export const Column = Controlled.bind({});
Column.args = {
  row: false,
};
