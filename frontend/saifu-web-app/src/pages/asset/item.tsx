import Link from 'next/link';

const AssetItem = (): React.ReactNode => {
  return (
    <div>
      <h1>資産アイテム</h1>
      <ul>
        <li>
          <Link href="/asset">
            <a>戻る</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AssetItem;
