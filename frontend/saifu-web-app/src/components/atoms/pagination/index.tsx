import React from 'react';
import {Pagination} from '@material-ui/lab';

export interface PaginationProps {
  count: number;
  color: 'primary' | 'secondary' | 'standard';
  variant?: 'outlined' | 'text';
  shape?: 'rounded' | 'round';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  showFirstButton?: boolean;
  showLastButton?: boolean;
}

const MuiPagination: React.FC<PaginationProps> = ({
  count,
  color = 'standard',
  variant = 'text',
  shape = 'rounded',
  size = 'large',
  disabled,
  showFirstButton,
  showLastButton,
}) => {
  return (
    <Pagination
      count={count}
      color={color}
      variant={variant}
      shape={shape}
      size={size}
      disabled={disabled}
      showLastButton={showLastButton}
      showFirstButton={showFirstButton}
    />
  );
};

export default MuiPagination;
