import Typography from '@material-ui/core/Typography';

export interface HeadingProps {
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
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2';
}

const Heading = (props: HeadingProps): JSX.Element => {
  const {
    children,
    align = 'inherit',
    color = 'initial',
    display,
    gutterBottom,
    variant = 'h1',
  } = props;

  return (
    <Typography
      align={align}
      color={color}
      display={display}
      variant={variant}
      gutterBottom={gutterBottom}>
      {children}
    </Typography>
  );
};

export default Heading;
