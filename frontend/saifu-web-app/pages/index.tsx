import Head from 'next/head';
import Link from 'next/link';

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>SAIFU</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header>
      <div className="title">
        <h1>SAIFU</h1>
      </div>
      <Link href="/user/login">
        <a>ログイン</a>
      </Link>

      <Link href="/user/register">
        <a> 新規登録</a>
      </Link>
    </header>

    <main>
      <h2>Information</h2>
      <ul>
        <li>Info1</li>
        <li>Info2</li>
        <li>Info3</li>
        <li>Info4</li>
        <li>Info5</li>
      </ul>
      <div>pagination</div>
    </main>

    <footer>&copy; Saifu-mlm.com 2021</footer>
  </div>
);

export default Home;
