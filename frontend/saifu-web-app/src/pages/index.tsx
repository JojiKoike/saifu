import Head from 'next/head';

import {APP_TITLE, APP_SUB_TITLE, LP_ARTICLES_TITLE} from '../constants/common';
import {LOGIN, REGISTER} from '../constants/path';
import {LandingPage} from '../components/templates';
import {SimpleCardProps} from '../components/molecules';

export const Home = (): JSX.Element => {
  // Mockデータ
  const articles: SimpleCardProps[] = [
    {
      image: 'profile.jpeg',
      title: 'タイトル',
      date: '2021/05/11',
      content: 'タイトルどおりのコンテンツ',
    },
    {
      image: 'profile.jpeg',
      title: 'タイトル',
      date: '2021/05/11',
      content: 'タイトルどおりのコンテンツ',
    },
    {
      image: 'profile.jpeg',
      title: 'タイトル',
      date: '2021/05/11',
      content: 'タイトルどおりのコンテンツ',
    },
    {
      image: 'profile.jpeg',
      title: 'タイトル',
      date: '2021/05/11',
      content: 'タイトルどおりのコンテンツ',
    },
    {
      image: 'profile.jpeg',
      title: 'タイトル',
      date: '2021/05/11',
      content: 'タイトルどおりのコンテンツ',
    },
  ];

  return (
    <>
      <Head>
        <title>SAIFU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage
        title={APP_TITLE}
        subTitle={APP_SUB_TITLE}
        loginUrl={LOGIN}
        registerUrl={REGISTER}
        articleListTitle={LP_ARTICLES_TITLE}
        articles={articles}
      />
    </>
  );
};

export default Home;
