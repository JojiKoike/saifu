import Link from 'next/link';

const DebtTransaction = (): React.ReactNode => {
  return (
    <div>
      <h1>借入・返済記録</h1>
      <Link href="/debt">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default DebtTransaction;
