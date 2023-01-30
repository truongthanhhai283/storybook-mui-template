import type { ComponentMeta, ComponentStory } from "@storybook/react";

import FieldRadio from ".";

export default {
  title: "molecules/FieldRadio",
  component: FieldRadio,
  argTypes: {
    onChange: { action: "changed" },
  },
  args: {
    label: "This is a label",
  },
} as ComponentMeta<typeof FieldRadio>;

const Template: ComponentStory<typeof FieldRadio> = (args) => (
  <FieldRadio {...args} />
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
