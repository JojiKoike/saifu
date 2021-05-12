import React from 'react';
import {Container} from '@material-ui/core';
//import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import {AppBar, Footer, SimpleCardProps} from '../molecules';
import {ArticleList} from '../organisms';

//const useStyles = makeStyles((theme: Theme) => createStyles({}));

export interface LandingPageProps {
  title: string;
  subTitle: string;
  loginUrl: string;
  registerUrl: string;
  articleListTitle: string;
  articles?: SimpleCardProps[];
}

const LandingPage = (props: LandingPageProps): JSX.Element => {
  const {
    title,
    subTitle,
    loginUrl,
    registerUrl,
    articleListTitle,
    articles,
  } = props;

  return (
    <>
      <AppBar
        title={title}
        subTitle={subTitle}
        loginUrl={loginUrl}
        registerUrl={registerUrl}
      />
      <Container maxWidth="xl">
        <ArticleList title={articleListTitle} articles={articles} />
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
