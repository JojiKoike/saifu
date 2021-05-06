import Link from 'next/link';

const DebtCategory = (): React.ReactNode => {
  return (
    <div>
      <h1>負債カテゴリー</h1>
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

export default DebtCategory;
