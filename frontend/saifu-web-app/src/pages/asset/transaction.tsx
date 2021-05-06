import Link from 'next/link';

const AssetTransaction = (): React.ReactNode => {
  return (
    <div>
      <h1>投資・出金記録</h1>
      <Link href="/asset">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default AssetTransaction;
