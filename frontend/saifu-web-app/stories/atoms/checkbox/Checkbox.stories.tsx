import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Checkbox, CheckboxProps} from '../../../src/components/atoms';

export default {
  title: 'Saifu/Atoms/Checkbox/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Test',
  label: 'Remind e-mail address',
  color: 'primary',
};
