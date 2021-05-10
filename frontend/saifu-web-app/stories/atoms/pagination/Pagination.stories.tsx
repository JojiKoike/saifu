import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Pagination, PaginationProps} from '../../../src/components/atoms';

export default {
  title: 'Saifu/Atoms/Pagination/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = args => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  count: 5,
  color: 'primary',
};
