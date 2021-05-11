import React from 'react';
import {Story, Meta} from '@storybook/react';

import {ArticleList, ArticleListProps} from '../../../src/components/organisms';

export default {
  title: 'Saifu/Organisms/ArticleList/ArticleList',
  component: ArticleList,
} as Meta;

const Template: Story<ArticleListProps> = args => <ArticleList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Information',
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
