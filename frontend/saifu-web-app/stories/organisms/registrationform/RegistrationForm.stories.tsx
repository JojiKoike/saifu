import React from 'react';
import {Story, Meta} from '@storybook/react';

import {RegistrationForm} from '../../../src/components/organisms';

export default {
  title: 'Saifu/Organisms/InputForm/RegistrationForm',
  component: RegistrationForm,
} as Meta;

const Template: Story = args => <RegistrationForm {...args} />;

export const Primary = Template.bind({});
