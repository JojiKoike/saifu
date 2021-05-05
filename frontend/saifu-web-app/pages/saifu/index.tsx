import Link from 'next/link';

const Saifu = (): React.ReactNode => {
  return (
    <div>
      <h1>財布</h1>
      <ul>
        <li>
          <Link href="/saifu/transaction">
            <a>財布間移動</a>
          </Link>
        </li>
        <li>
          <Link href="/saifu/item">
            <a>財布アイテム</a>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <a>戻る</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Saifu;
