import React from 'react';
import {Story, Meta} from '@storybook/react';

import {
  DashboardCard,
  DashboardCardProps,
} from '../../../src/components/molecules';

export default {
  title: 'Saifu/Molecules/Card/DashboardCard',
  component: DashboardCard,
} as Meta;

const Template: Story<DashboardCardProps> = args => <DashboardCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '収入',
  content: '¥17,000,000',
  leftImg: 'profile.jpeg',
  leftImgTitle: 'profile',
  rightImg: 'profile.jpeg',
  rightImgTitle: 'profile',
  subContent: '前年度: ¥5,800,000',
};
