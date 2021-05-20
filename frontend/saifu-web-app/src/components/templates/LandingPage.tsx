import React from 'react';
import {Container} from '@material-ui/core';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import {LinkButton} from '../atoms';
import {AppBar, Footer, SimpleCardProps} from '../molecules';
import {ArticleList} from '../organisms';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerBarButton: {
      marginLeft: theme.spacing(1),
    },
  }),
);

export interface LandingPageProps {
  title: string;
  subTitle: string;
  loginUrl: string;
  registerUrl: string;
  articleListTitle: string;
  articles?: SimpleCardProps[];
}

const LandingPage: React.FC<LandingPageProps> = ({
  title,
  subTitle,
  loginUrl,
  registerUrl,
  articleListTitle,
  articles,
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
        <ArticleList title={articleListTitle} articles={articles} />
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
