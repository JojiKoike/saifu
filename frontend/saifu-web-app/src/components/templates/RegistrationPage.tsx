import React from 'react';
import {Container} from '@material-ui/core';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import {LinkButton} from '../atoms';
import {AppBar, Footer} from '../molecules';
import {RegistrationForm} from '../organisms';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerBarButton: {
      marginLeft: theme.spacing(1),
    },
  }),
);

export interface RegistrationPageProps {
  title: string;
  subTitle: string;
  loginUrl: string;
}

const LoginPage: React.FC<RegistrationPageProps> = ({
  title,
  subTitle,
  loginUrl,
}) => {
  const classes = useStyles();
  return (
    <>
      <AppBar title={title} subTitle={subTitle}>
        <LinkButton
          className={classes.headerBarButton}
          href={loginUrl}
          size="large"
          color="default"
          variant="contained">
          ログイン
        </LinkButton>
      </AppBar>
      <Container>
        <RegistrationForm />
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;
