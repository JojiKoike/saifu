import React from 'react';
import {Story, Meta} from '@storybook/react';

import {LoginForm, LoginFormProps} from '../../../src/components/organisms';

export default {
  title: 'Saifu/Organisms/InputForm/LoginForm',
  component: LoginForm,
} as Meta;

const Template: Story<LoginFormProps> = args => <LoginForm {...args} />;

export const Primary = Template.bind({});
