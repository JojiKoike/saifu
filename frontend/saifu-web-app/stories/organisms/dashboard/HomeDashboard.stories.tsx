import React from 'react';
import {Story, Meta} from '@storybook/react';

import {
  HomeDashboard,
  HomeDashboardProps,
} from '../../../src/components/organisms';

export default {
  title: 'Saifu/Organisms/Dashboard/HomeDashboard',
  component: HomeDashboard,
} as Meta;

const Template: Story<HomeDashboardProps> = args => <HomeDashboard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '2021年度 財布家 家計概況',
  note: '(2021/06/01現在)',
  incomeDashboardCardProps: {
    mainTitle: '収入',
    mainContent: '¥20,000,000',
    mainPreviousContent: '前年度: ¥3,800,000',
    leftImg: 'profile.jpeg',
    leftImgTitle: 'profile',
    rightImg: 'profile.jpeg',
    rightImgTitle: 'profile',
  },
  expenseDashboardCardProps: {
    mainTitle: '支出',
    mainContent: '¥20,000,000',
    mainPreviousContent: '前年度: ¥3,800,000',
    leftImg: 'profile.jpeg',
    leftImgTitle: 'profile',
    rightImg: 'profile.jpeg',
    rightImgTitle: 'profile',
  },
  assetDashboardCardProps: {
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
        leftImg: 'profile.jpeg',
        leftImgTitle: 'profile',
        rightImg: 'profile.jpeg',
        rightImgTitle: 'profile',
      },
      {
        title: '投資',
        content: '¥3,300,000',
        leftImg: 'profile.jpeg',
        leftImgTitle: 'profile',
        rightImg: 'profile.jpeg',
        rightImgTitle: 'profile',
      },
    ],
  },
  debtDashboardCardProps: {
    mainTitle: '負債',
    mainContent: '¥200,000,000',
    mainPreviousContent: '前年度: ¥30,800,000',
    leftImg: 'profile.jpeg',
    leftImgTitle: 'profile',
    rightImg: 'profile.jpeg',
    rightImgTitle: 'profile',
    subContentProps: [
      {
        title: '返済',
        content: '¥300,000',
        leftImg: 'profile.jpeg',
        leftImgTitle: 'profile',
        rightImg: 'profile.jpeg',
        rightImgTitle: 'profile',
      },
      {
        title: '借入',
        content: '¥3,300,000',
        leftImg: 'profile.jpeg',
        leftImgTitle: 'profile',
        rightImg: 'profile.jpeg',
        rightImgTitle: 'profile',
      },
    ],
  },
  saifuDashboardCardProps: {
    mainTitle: '財布残高',
    mainContent: '¥40,000',
    previousContent: '¥20,000',
    topImg: 'profile.jpeg',
    topImgTitle: 'profile',
    bottomImg: 'profile.jpeg',
    bottomImgTitle: 'profile',
  },
};
