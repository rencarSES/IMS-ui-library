import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./index";

export default {
  title: 'RencarInput',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: '내용을 입력해주세요.'
};

