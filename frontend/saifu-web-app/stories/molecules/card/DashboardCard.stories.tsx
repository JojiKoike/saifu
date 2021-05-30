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

export const IncomeExpense = Template.bind({});
IncomeExpense.args = {
  mainTitle: '収入',
  mainContent: '¥20,000,000',
  mainPreviousContent: '前年度: ¥3,800,000',
  leftImg: 'profile.jpeg',
  leftImgTitle: 'profile',
  rightImg: 'profile.jpeg',
  rightImgTitle: 'profile',
};

export const Asset = Template.bind({});
Asset.args = {
  mainTitle: '資産',
  mainContent: '¥200,000,000',
  mainPreviousContent: '前年度: ¥30,800,000',
  leftImg: 'profile.jpeg',
  leftImgTitle: 'profile',
  rightImg: 'profile.jpeg',
  rightImgTitle: 'profile',
  subContentProps: [
    {
      title: '減資',
      content: '¥300,000',
      rightImg: 'profile.jpeg',
      rightImgTitle: 'profile',
    },
    {
      title: '投資',
      content: '¥3,300,000',
      rightImg: 'profile.jpeg',
      rightImgTitle: 'profile',
    },
  ],
};

export const Debt = Template.bind({});
Debt.args = {
  mainTitle: '負債',
  mainContent: '¥200,000,000',
  mainPreviousContent: '前年度: ¥30,800,000',
  leftImg: 'profile.jpeg',
  leftImgTitle: 'profile',
  rightImg: 'profile.jpeg',
  rightImgTitle: 'profile',
  subContentProps: [
    {
      title: '減資',
      content: '¥300,000',
      leftImg: 'profile.jpeg',
      leftImgTitle: 'profile',
    },
    {
      title: '投資',
      content: '¥3,300,000',
      leftImg: 'profile.jpeg',
      leftImgTitle: 'profile',
    },
  ],
};
