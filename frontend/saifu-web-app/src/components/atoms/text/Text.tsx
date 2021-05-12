import React from 'react';
import Typography from '@material-ui/core/Typography';

export interface TextProps {
  children: React.ReactNode;
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
  noWrap?: boolean;
  paragraph?: boolean;
  variant?: 'body1' | 'body2';
}

const Text = (props: TextProps): JSX.Element => {
  const {
    children,
    align = 'inherit',
    color = 'initial',
    display,
    gutterBottom,
    noWrap,
    paragraph,
    variant = 'body1',
  } = props;

  return (
    <Typography
      align={align}
      color={color}
      display={display}
      noWrap={noWrap}
      paragraph={paragraph}
      variant={variant}
      gutterBottom={gutterBottom}>
      {children}
    </Typography>
  );
};

export default Text;
