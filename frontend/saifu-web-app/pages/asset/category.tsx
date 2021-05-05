import Link from 'next/link';

const AssetCategory = (): React.ReactNode => {
  return (
    <div>
      <h1>資産カテゴリー</h1>
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

export default AssetCategory;
