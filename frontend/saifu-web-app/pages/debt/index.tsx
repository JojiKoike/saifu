import Link from 'next/link';

const Debt = (): React.ReactNode => {
  return (
    <div>
      <h1>資産</h1>
      <ul>
        <li>
          <Link href="/debt/transaction">
            <a>投資・売却記録</a>
          </Link>
        </li>
        <li>
          <Link href="/debt/item">
            <a>負債アイテム</a>
          </Link>
        </li>
        <li>
          <Link href="/debt/category">
            <a>負債カテゴリー</a>
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

export default Debt;
