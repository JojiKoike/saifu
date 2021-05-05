import Link from 'next/link';

const SaifuTransaction = (): React.ReactNode => {
  return (
    <div>
      <h1>財布間移動</h1>
      <Link href="/saifu">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default SaifuTransaction;
