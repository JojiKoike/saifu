import React from 'react';
import {Story, Meta} from '@storybook/react';

import {HeaderBar, HeaderBarProps} from '../../../src/components/organisms';

export default {
  title: 'Saifu/Organisms/HeaderBar/HeaderBar',
  component: HeaderBar,
} as Meta;

const Template: Story<HeaderBarProps> = args => <HeaderBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'TEST',
  subTitle: 'test',
  loginUrl: '/user/login',
  registerUrl: '/usr/register',
};
