import Link from 'next/link';

const IncomeTransaction = (): React.ReactNode => {
  return (
    <div>
      <h1>収入記録</h1>
      <Link href="/income">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default IncomeTransaction;
