import React from 'react';
import {Radio, FormControlLabel} from '@material-ui/core';

export interface MuiRadioProps {
  value: string;
  label: string;
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
  color?: 'primary' | 'secondary' | 'default';
}

const MuiRadio: React.FC<MuiRadioProps> = ({
  labelPlacement = 'end',
  color = 'default',
  ...props
}) => {
  return (
    <FormControlLabel
      control={<Radio color={color} />}
      labelPlacement={labelPlacement}
      {...props}
    />
  );
};

export default MuiRadio;
