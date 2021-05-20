import React from 'react';
import {RadioGroup} from '@material-ui/core';

import {Radio, RadioProps} from '../../atoms';

export interface RadioButtonsProps {
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  row?: boolean;
  radioProps: RadioProps[];
}

const RadioButtons = (props: RadioButtonsProps): JSX.Element => {
  const {name, value, onChange, row = true, radioProps} = props;

  return (
    <RadioGroup
      aria-label={name}
      name={name}
      value={value}
      onChange={onChange}
      row={row}>
      {radioProps.map((item, index) => {
        return <Radio key={index} {...item} />;
      })}
    </RadioGroup>
  );
};

export default RadioButtons;
