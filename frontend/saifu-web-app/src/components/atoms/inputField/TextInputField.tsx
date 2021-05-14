import React from 'react';
import {TextField as MuiTextField} from '@material-ui/core';

export interface TextInputFieldProps {
  name: string;
  label: string;
  variant?: 'filled' | 'outlined' | 'standard';
  type?: 'email' | 'password' | 'text';
  size?: 'medium' | 'small';
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  onChange?: () => void;
}

const TextInputField = (props: TextInputFieldProps): JSX.Element => {
  const {
    variant = 'standard',
    type = 'text',
    size = 'medium',
    color = 'primary',
    required = false,
    autoFocus = false,
  } = props;

  return (
    <MuiTextField
      variant={variant}
      type={type}
      size={size}
      color={color}
      required={required}
      autoFocus={autoFocus}
      {...props}
    />
  );
};

export default TextInputField;
