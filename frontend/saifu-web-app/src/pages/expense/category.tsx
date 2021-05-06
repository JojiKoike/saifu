import Link from 'next/link';

const ExpenseCategory = (): React.ReactNode => {
  return (
    <div>
      <h1>支出費目編集</h1>
      <Link href="/expense">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default ExpenseCategory;
