import Link from 'next/link';

const Expense = (): React.ReactNode => {
  return (
    <div>
      <h1>支出</h1>
      <ul>
        <li>
          <Link href="/expense/transaction">
            <a>支出記録</a>
          </Link>
        </li>
        <li>
          <Link href="/expense/category">
            <a>支出費目</a>
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

export default Expense;
