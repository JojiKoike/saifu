import React from 'react';
import {Story, Meta} from '@storybook/react';

import {
  TextInputField,
  TextInputFieldProps,
} from '../../../src/components/atoms';

export default {
  title: 'Saifu/Atoms/TextInputField/TextInputField',
  component: TextInputField,
} as Meta;

const Template: Story<TextInputFieldProps> = args => (
  <TextInputField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'test',
  label: 'e-mail',
  type: 'email',
  variant: 'outlined',
  fullWidth: true,
  required: true,
  autoFocus: true,
  placeholder: 'aaa@bbb.com',
};
