import Link from 'next/link';

const Asset = (): React.ReactNode => {
  return (
    <div>
      <h1>資産</h1>
      <ul>
        <li>
          <Link href="/asset/transaction">
            <a>投資・売却記録</a>
          </Link>
        </li>
        <li>
          <Link href="/asset/item">
            <a>資産アイテム</a>
          </Link>
        </li>
        <li>
          <Link href="/asset/category">
            <a>資産カテゴリー</a>
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

export default Asset;
