import React from 'react';
import {Container} from '@material-ui/core';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import {LinkButton} from '../atoms';
import {AppBar, Footer, SimpleCardProps} from '../molecules';
import {LoginForm} from '../organisms';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerBarButton: {
      marginLeft: theme.spacing(1),
    },
  }),
);

export interface LoginPageProps {
  title: string;
  subTitle: string;
  loginUrl: string;
  registerUrl: string;
  articleListTitle: string;
  articles?: SimpleCardProps[];
}

const LoginPage: React.FC<LoginPageProps> = ({
  title,
  subTitle,
  registerUrl,
}) => {
  const classes = useStyles();
  return (
    <>
      <AppBar title={title} subTitle={subTitle}>
        <LinkButton
          className={classes.headerBarButton}
          href={registerUrl}
          size="large"
          color="secondary"
          variant="contained">
          新規登録
        </LinkButton>
      </AppBar>
      <Container>
        <LoginForm />
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;
