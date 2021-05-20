import React from 'react';
import {Button as MuiButton} from '@material-ui/core';

export interface MuiButtonProps {
  className?: string;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  endIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
  onClick?: () => void;
}

const Button: React.FC<MuiButtonProps> = ({
  className,
  color = 'default',
  disabled,
  endIcon,
  size = 'medium',
  startIcon,
  variant = 'text',
  onClick,
  ...props
}) => {
  return (
    <MuiButton
      className={className}
      color={color}
      endIcon={endIcon}
      size={size}
      startIcon={startIcon}
      variant={variant}
      onClick={onClick}
      disabled={disabled}>
      {props.children}
    </MuiButton>
  );
};

export default Button;
