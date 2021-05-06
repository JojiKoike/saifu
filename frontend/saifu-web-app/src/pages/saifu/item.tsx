import Link from 'next/link';

const SaifuItem = (): React.ReactNode => {
  return (
    <div>
      <h1>財布アイテム</h1>
      <Link href="/saifu">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default SaifuItem;
