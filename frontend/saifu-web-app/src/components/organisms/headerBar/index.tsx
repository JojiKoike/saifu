import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import {LinkButton} from '../../atoms';
import {AppBar} from '../../molecules';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginLeft: theme.spacing(1),
    },
  }),
);

export interface HeaderBarProps {
  title: string;
  subTitle: string;
  loginUrl: string;
  registerUrl: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  title,
  subTitle,
  loginUrl,
  registerUrl,
}) => {
  const classes = useStyles();

  return (
    <AppBar title={title} subTitle={subTitle}>
      <LinkButton
        className={classes.button}
        href={loginUrl}
        size="large"
        color="default"
        variant="contained">
        ログイン
      </LinkButton>
      <LinkButton
        className={classes.button}
        href={registerUrl}
        size="large"
        color="secondary"
        variant="contained">
        新規登録
      </LinkButton>
    </AppBar>
  );
};

export default HeaderBar;
