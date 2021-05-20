import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Checkboxes, CheckboxesProps} from '../../../src/components/molecules';

export default {
  title: 'Saifu/Molecules/Checkboxes/Checkboxes',
  component: Checkboxes,
} as Meta;

const Template: Story<CheckboxesProps> = args => <Checkboxes {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  checkboxProps: [
    {
      name: 'A',
      color: 'primary',
      label: 'A',
    },
    {
      name: 'B',
      color: 'primary',
      label: 'B',
    },
  ],
};
