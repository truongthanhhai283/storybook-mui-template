import Stack from "@mui/material/Stack";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { RefreshIcon } from "@/components/icons";

import Button from "./";

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "brand-outlined"],
    },
    color: {
      control: "select",
      options: ["primary", "red", "gray"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default button",
};

export const DisabledDefault = Template.bind({});
DisabledDefault.args = {
  children: "Disabled default button",
  disabled: true,
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Primary button",
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  color: "primary",
  children: "Disabled primary button",
  disabled: true,
};

export const Red = Template.bind({});
Red.args = {
  color: "red",
  children: "Red button",
};

export const DisabledRed = Template.bind({});
DisabledRed.args = {
  color: "red",
  children: "Disabled red button",
  disabled: true,
};

export const Gray = Template.bind({});
Gray.args = {
  color: "gray",
  children: "Gray button",
};

export const DisabledGray = Template.bind({});
DisabledGray.args = {
  color: "gray",
  children: "Disabled gray button",
  disabled: true,
};

export const BrandOutlined = Template.bind({});
BrandOutlined.args = {
  variant: "brand-outlined",
  children: "BrandOutlined button",
};

export const DisabledBrandOutlined = Template.bind({});
DisabledBrandOutlined.args = {
  variant: "brand-outlined",
  children: "Disabled BrandOutlined button",
  disabled: true,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  startIcon: <RefreshIcon />,
  children: "With StartIcon button",
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  endIcon: <RefreshIcon />,
  children: "With EndIcon button",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  children: "FullWidth button",
};

export const Sizes: ComponentStory<typeof Button> = (args) => {
  return (
    <Stack alignItems={"flex-start"} direction={"column"} spacing={2}>
      <Template {...args}>Default button (medium)</Template>
      <Template {...args} size="small">
        Button - small
      </Template>
      <Template {...args} size="medium">
        Button - medium
      </Template>
      <Template {...args} size="large">
        Button - large
      </Template>
    </Stack>
  );
};
Sizes.argTypes = {
  size: {
    options: [],
  },
};
