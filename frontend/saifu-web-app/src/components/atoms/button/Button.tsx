import React from 'react';
import {Button as MuiButton} from '@material-ui/core';

export interface MaterialButtonProps {
  children: React.ReactNode;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  endIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
  onClick?: () => void;
}

const Button = (props: MaterialButtonProps): JSX.Element => {
  const {
    children,
    color = 'default',
    disabled,
    endIcon,
    size = 'medium',
    startIcon,
    variant = 'text',
    onClick,
  } = props;

  return (
    <MuiButton
      color={color}
      endIcon={endIcon}
      size={size}
      startIcon={startIcon}
      variant={variant}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </MuiButton>
  );
};

export default Button;
