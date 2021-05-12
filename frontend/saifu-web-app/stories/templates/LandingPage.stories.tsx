import React from 'react';
import {Story, Meta} from '@storybook/react';

import {LandingPage, LandingPageProps} from '../../src/components/templates';

export default {
  title: 'Saifu/Templates/LandingPage',
  component: LandingPage,
} as Meta;

const Template: Story<LandingPageProps> = args => <LandingPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'SAIFU',
  subTitle: 'Sub Title',
  loginUrl: '/user/login',
  registerUrl: '/user/register',
  articleListTitle: 'Information',
  articles: [
    {
      image: 'profile.jpeg',
      title: 'タイトル',
      date: '2021/05/11',
      content: 'タイトルどおりのコンテンツ',
    },
    {
      image: 'profile.jpeg',
      title: 'タイトル',
      date: '2021/05/11',
      content: 'タイトルどおりのコンテンツ',
    },
    {
      image: 'profile.jpeg',
      title: 'タイトル',
      date: '2021/05/11',
      content: 'タイトルどおりのコンテンツ',
    },
    {
      image: 'profile.jpeg',
      title: 'タイトル',
      date: '2021/05/11',
      content: 'タイトルどおりのコンテンツ',
    },
    {
      image: 'profile.jpeg',
      title: 'タイトル',
      date: '2021/05/11',
      content: 'タイトルどおりのコンテンツ',
    },
  ],
};
