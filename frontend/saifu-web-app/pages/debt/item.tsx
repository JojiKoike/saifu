import Link from 'next/link';

const DebtItem = (): React.ReactNode => {
  return (
    <div>
      <h1>負債アイテム</h1>
      <ul>
        <li>
          <Link href="/debt">
            <a>戻る</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DebtItem;
