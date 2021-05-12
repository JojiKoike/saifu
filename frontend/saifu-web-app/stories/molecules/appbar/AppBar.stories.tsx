import React from 'react';
import {Story, Meta} from '@storybook/react';

import {AppBar, AppBarProps} from '../../../src/components/molecules';

export default {
  title: 'Saifu/Molecules/AppBar/AppBar',
  component: AppBar,
} as Meta;

const Template: Story<AppBarProps> = args => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'SAIFU',
  subTitle: '-Personal Money Literacy Mentor-',
  loginUrl: '/user/login',
  registerUrl: '/user/register',
};
