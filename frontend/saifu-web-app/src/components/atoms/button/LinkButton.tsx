import React from 'react';
import Link from 'next/link';
import Button from '.';

export interface LinkButtonProps {
  className?: string;
  href: string;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  endIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
}

const LinkButton: React.FC<LinkButtonProps> = ({
  color = 'inherit',
  variant = 'text',
  size = 'medium',
  ...props
}) => {
  return (
    <Link href={props.href} passHref>
      <Button
        className={props.className}
        color={color}
        variant={variant}
        size={size}
        endIcon={props.endIcon}
        startIcon={props.startIcon}
        disabled={props.disabled}>
        {props.children}
      </Button>
    </Link>
  );
};

export default LinkButton;
