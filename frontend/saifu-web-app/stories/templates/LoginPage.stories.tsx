import React from 'react';
import {Story, Meta} from '@storybook/react';

import {LoginPage, LoginPageProps} from '../../src/components/templates';

export default {
  title: 'Saifu/Templates/LoginPage',
  component: LoginPage,
} as Meta;

const Template: Story<LoginPageProps> = args => <LoginPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'SAIFU',
  subTitle: '-Money Literacy Mentor-',
  registerUrl: '/user/register',
};
