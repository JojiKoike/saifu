import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Text, TextProps} from '../../../src/components/atoms';

export default {
  title: 'Saifu/Atoms/Text/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = args => (
  <Text {...args}>
    トランプ前米大統領が、Ｆ３５や無人機、新型ミサイルなど総額２３０億ドルの武器をＵＡＥに売却する合意に署名したのは、バイデン大統領が就任するわずか９０分前だった。
  </Text>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'body1',
  color: 'textPrimary',
  gutterBottom: false,
};
