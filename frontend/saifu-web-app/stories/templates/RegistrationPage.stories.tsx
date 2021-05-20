import React from 'react';
import {Story, Meta} from '@storybook/react';

import {
  RegistrationPage,
  RegistrationPageProps,
} from '../../src/components/templates';

export default {
  title: 'Saifu/Templates/RegistrationPage',
  component: RegistrationPage,
} as Meta;

const Template: Story<RegistrationPageProps> = args => (
  <RegistrationPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'SAIFU',
  subTitle: '-Money Literacy Mentor-',
  loginUrl: '/user/login',
};
