import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Footer, FooterProps} from '../../../src/components/molecules';

export default {
  title: 'Saifu/Molecules/Footer/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = args => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
