import React from 'react';
import {Story, Meta} from '@storybook/react';

import Button, {
  MaterialButtonProps as ButtonProps,
} from '../components/atoms/button/Button';

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
