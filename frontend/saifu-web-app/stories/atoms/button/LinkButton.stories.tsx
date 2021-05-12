import React from 'react';
import {Story, Meta} from '@storybook/react';

import {LinkButton, LinkButtonProps} from '../../../src/components/atoms';

export default {
  title: 'Saifu/Atoms/Button/LinkButton',
  component: LinkButton,
} as Meta;

const Template: Story<LinkButtonProps> = args => (
  <LinkButton {...args}>LinkButtonTest</LinkButton>
);

export const Primary = Template.bind({});
Primary.args = {
  href: '',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
};
