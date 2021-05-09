import React from 'react';
import {Story, Meta} from '@storybook/react';

import {SimpleCard, SimpleCardProps} from '../../../src/components/molecules';

export default {
  title: 'Saifu/Molecules/Card/SimpleCard',
  component: SimpleCard,
} as Meta;

const Template: Story<SimpleCardProps> = args => <SimpleCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: 'profile.jpeg',
  title: 'トランプ前大統領関連ニュース',
  date: '2021/05/10',
  content:
    'トランプ前米大統領が、Ｆ３５や無人機、新型ミサイルなど総額２３０億ドルの武器をＵＡＥに売却する合意に署名したのは、バイデン大統領が就任するわずか９０分前だった。',
};
