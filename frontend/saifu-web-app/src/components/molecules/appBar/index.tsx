import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';

import {Heading} from '../../atoms';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      display: 'flex',
      flexGrow: 1,
    },
    subTitle: {
      marginLeft: theme.spacing(2),
    },
  }),
);

export interface AppBarProps {
  title: string;
  subTitle: string;
}

const ButtonAppBar: React.FC<AppBarProps> = ({title, subTitle, ...props}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <Heading variant="h5">{title}</Heading>
            <div className={classes.subTitle}>
              <Heading variant="h6">{subTitle}</Heading>
            </div>
          </div>
          {props.children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
