import type { ComponentMeta, ComponentStory } from "@storybook/react";

import SimpleInputText from ".";

export default {
  title: "atoms/SimpleInputText",
  component: SimpleInputText,
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
} as ComponentMeta<typeof SimpleInputText>;

const Template: ComponentStory<typeof SimpleInputText> = (args) => (
  <SimpleInputText {...args} />
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
