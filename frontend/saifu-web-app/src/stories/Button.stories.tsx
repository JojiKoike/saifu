import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Button, ButtonProps} from '../components/atoms';

export default {
  title: 'Saifu/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  label: 'Primary',
  color: 'primary',
  size: 'medium',
  onClick: () => alert('Primary'),
};
