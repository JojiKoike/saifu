import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Button, ButtonProps} from '../../../src/components/atoms';

export default {
  title: 'Saifu/Atoms/Button/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args}>ButtonTest</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  onClick: () => alert('Primary'),
};
