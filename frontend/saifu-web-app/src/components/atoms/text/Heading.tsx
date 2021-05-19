import React from 'react';
import Typography from '@material-ui/core/Typography';

export interface HeadingProps {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  color?:
    | 'initial'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  display?: 'block' | 'inline';
  gutterBottom?: boolean;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2';
}

const Heading: React.FC<HeadingProps> = ({
  align = 'inherit',
  color = 'initial',
  display,
  gutterBottom,
  variant = 'h1',
  ...props
}) => {
  return (
    <Typography
      align={align}
      color={color}
      display={display}
      variant={variant}
      gutterBottom={gutterBottom}>
      {props.children}
    </Typography>
  );
};

export default Heading;
