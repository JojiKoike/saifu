import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Heading, HeadingProps} from '../../../src/components/atoms';

export default {
  title: 'Saifu/Atoms/Text/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = args => (
  <Heading {...args}>今日のニュース</Heading>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'h1',
  color: 'textPrimary',
  gutterBottom: false,
};
