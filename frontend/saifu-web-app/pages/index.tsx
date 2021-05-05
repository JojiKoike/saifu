import Head from 'next/head';
import Link from 'next/link';

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>SAIFU</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="title">
        <h1>SAIFU</h1>
      </div>
      <Link href="/user/login">
        <a>ログイン</a>
      </Link>

      <Link href="/user/register">
        <a> 新規登録</a>
      </Link>
    </main>

    <footer>&copy; Saifu-mlm.com 2021</footer>
  </div>
);

export default Home;
