import React from 'react';
import Link from 'next/link';
import Button from './Button';

export interface LinkButtonProps {
  href: string;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  endIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  color = 'inherit',
  variant = 'text',
  size = 'medium',
  disabled,
  endIcon,
  startIcon,
  ...props
}) => {
  return (
    <Link href={href} passHref>
      <Button
        color={color}
        variant={variant}
        size={size}
        endIcon={endIcon}
        startIcon={startIcon}
        disabled={disabled}>
        {props.children}
      </Button>
    </Link>
  );
};

export default LinkButton;
