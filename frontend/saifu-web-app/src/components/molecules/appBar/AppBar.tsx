import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';

import {Heading, LinkButton} from '../../atoms';

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
  loginUrl: string;
  registerUrl: string;
}

const ButtonAppBar = (props: AppBarProps): JSX.Element => {
  const classes = useStyles();
  const {title, subTitle, loginUrl, registerUrl} = props;

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
          <LinkButton href={loginUrl} size="large">
            ログイン
          </LinkButton>
          <LinkButton href={registerUrl} size="large">
            新規登録
          </LinkButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
