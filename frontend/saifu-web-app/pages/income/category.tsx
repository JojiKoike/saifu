import Link from 'next/link';

const IncomeCategory = (): React.ReactNode => {
  return (
    <div>
      <h1>収入費目編集</h1>
      <Link href="/income/">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default IncomeCategory;
