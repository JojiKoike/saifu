import React from 'react';
import Button from '@material-ui/core/Button';

export interface MaterialButtonProps {
  label: string;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}

const MaterialButton = (props: MaterialButtonProps): JSX.Element => {
  const {label, variant, color, size, onClick, disabled} = props;

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </Button>
  );
};

export default MaterialButton;
