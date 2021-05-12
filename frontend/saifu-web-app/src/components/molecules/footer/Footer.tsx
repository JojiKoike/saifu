import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import {Text} from '../../atoms';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderTop: '1px solid',
      display: 'flex',
      justifyContent: 'center',
    },
    content: {
      padding: theme.spacing(1),
    },
  }),
);

export interface FooterProps {
  year?: number;
  author?: string;
}

const Footer = (props: FooterProps): JSX.Element => {
  const classes = useStyles();
  const {year = 2021, author = 'saifu-mlm.com'} = props;
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Text variant="body2">
          Copyright &copy; {year} {author} All Rights Reserved.
        </Text>
      </div>
    </div>
  );
};

export default Footer;
