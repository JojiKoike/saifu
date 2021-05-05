import Link from 'next/link';

const Home = (): React.ReactNode => {
  return (
    <div>
      <h1>ホーム</h1>
      <ul>
        <li>
          <Link href="/income">
            <a>収入</a>
          </Link>
        </li>
        <li>
          <Link href="/expense">
            <a>支出</a>
          </Link>
        </li>
        <li>
          <Link href="/saifu">
            <a>財布</a>
          </Link>
        </li>
        <li>
          <Link href="/asset">
            <a>資産</a>
          </Link>
        </li>
        <li>
          <Link href="/debt">
            <a>負債</a>
          </Link>
        </li>
        <li>
          <Link href="/member">
            <a>メンバー</a>
          </Link>
        </li>
        <li>
          <Link href="/setting">
            <a>設定</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ログアウト</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
