import React from 'react';
import {Radio, FormControlLabel} from '@material-ui/core';

export interface MuiRadioProps {
  value: string;
  label: string;
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
  color?: 'primary' | 'secondary' | 'default';
}

const MuiRadio = (props: MuiRadioProps): JSX.Element => {
  const {value, label, labelPlacement = 'end', color = 'default'} = props;
  return (
    <FormControlLabel
      value={value}
      control={<Radio color={color} />}
      labelPlacement={labelPlacement}
      label={label}
    />
  );
};

export default MuiRadio;
