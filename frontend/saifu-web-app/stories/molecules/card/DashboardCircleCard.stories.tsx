import React from 'react';
import {Story, Meta} from '@storybook/react';

import {
  DashboardCircleCard,
  DashboardCircleCardProps,
} from '../../../src/components/molecules';

export default {
  title: 'Saifu/Molecules/Card/DashboardCircleCard',
  component: DashboardCircleCard,
} as Meta;

const Template: Story<DashboardCircleCardProps> = args => (
  <DashboardCircleCard {...args} />
);

export const IncomeExpense = Template.bind({});
IncomeExpense.args = {
  mainTitle: '財布残高',
  mainContent: '¥40,000',
  previousContent: '¥20,000',
  topImg: 'profile.jpeg',
  topImgTitle: 'profile',
  bottomImg: 'profile.jpeg',
  bottomImgTitle: 'profile',
};
