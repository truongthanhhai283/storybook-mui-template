import type { ComponentMeta, ComponentStory } from "@storybook/react";

import FieldCheckbox from ".";

export default {
  title: "molecules/FieldCheckbox",
  component: FieldCheckbox,
  argTypes: {
    onChange: { action: "changed" },
  },
  args: {
    label: "This is a label",
  },
} as ComponentMeta<typeof FieldCheckbox>;

const Template: ComponentStory<typeof FieldCheckbox> = (args) => (
  <FieldCheckbox {...args} />
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
