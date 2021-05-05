import Link from 'next/link';

const ExpenseTransaction = (): React.ReactNode => {
  return (
    <div>
      <h1>支出記録</h1>
      <Link href="/expense">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default ExpenseTransaction;
