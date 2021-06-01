import React from 'react';
import {Story, Meta} from '@storybook/react';

import {SideBySideBar, SideBySideBarProps} from '../../../src/components/atoms';
import {TargetData} from '@devexpress/dx-react-chart';

export default {
  title: 'Saifu/Atoms/Chart/SideBySideBar',
  component: SideBySideBar,
} as Meta;

const Template: Story<SideBySideBarProps> = args => <SideBySideBar {...args} />;

export const IncomeVsExpense = Template.bind({});
IncomeVsExpense.args = {
  title: '収入支出',
  legendPosition: 'bottom',
  argumentField: 'yearMonth',
  leftBarSeriesName: 'income',
  leftBarSeriesColor: 'blue',
  leftValueField: 'income',
  rightBarSeriesName: 'expense',
  rightBarSeriesColor: 'red',
  rightValueField: 'expense',
  onClick: (target: TargetData) => {
    alert(target.targets[0].series);
  },
  data: [
    {
      yearMonth: '2020/12',
      income: 2000000,
      expense: 100000,
    },
    {
      yearMonth: '2021/1',
      income: 3000000,
      expense: 150000,
    },
    {
      yearMonth: '2021/2',
      income: 4000000,
      expense: 200000,
    },
  ],
};
