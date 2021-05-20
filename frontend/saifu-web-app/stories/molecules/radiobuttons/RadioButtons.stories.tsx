import React from 'react';
import {Story, Meta} from '@storybook/react';

import {
  RadioButtons,
  RadioButtonsProps,
} from '../../../src/components/molecules';

export default {
  title: 'Saifu/Molecules/RadioButtons/RadioButtons',
  component: RadioButtons,
} as Meta;

const Template: Story<RadioButtonsProps> = args => <RadioButtons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Test',
  radioProps: [
    {
      value: 'Test1',
      label: 'Text1',
    },
    {
      value: 'Test2',
      label: 'Test2',
    },
  ],
};
