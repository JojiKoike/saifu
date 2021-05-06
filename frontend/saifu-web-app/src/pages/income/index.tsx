import Link from 'next/link';

const Income = (): React.ReactNode => {
  return (
    <div>
      <h1>収入</h1>
      <ul>
        <li>
          <Link href="/income/transaction">
            <a>収入記録</a>
          </Link>
        </li>
        <li>
          <Link href="/income/category">
            <a>収入費目</a>
          </Link>
        </li>
        <li>
          <Link href="/home">戻る</Link>
        </li>
      </ul>
    </div>
  );
};

export default Income;
