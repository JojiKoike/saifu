import React from 'react';
import {FormControlLabel, Checkbox} from '@material-ui/core';

export interface MuiCheckboxProps {
  name: string;
  label: string;
  color?: 'default' | 'primary' | 'secondary';
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MuiCheckbox = (props: MuiCheckboxProps): JSX.Element => {
  const {name, label, color = 'default', checked, onChange} = props;
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          name={name}
          color={color}
        />
      }
      label={label}
    />
  );
};

export default MuiCheckbox;
