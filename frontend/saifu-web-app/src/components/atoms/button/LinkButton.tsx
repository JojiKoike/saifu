import Link from 'next/link';
import Button from './Button';

export interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  endIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
}

const LinkButton = (props: LinkButtonProps): JSX.Element => {
  const {
    href,
    children,
    color = 'default',
    variant = 'text',
    size = 'medium',
    disabled,
    endIcon,
    startIcon,
  } = props;

  return (
    <Link href={href} passHref>
      <Button
        color={color}
        variant={variant}
        size={size}
        endIcon={endIcon}
        startIcon={startIcon}
        disabled={disabled}>
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
