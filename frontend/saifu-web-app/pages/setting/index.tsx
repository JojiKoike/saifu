import Link from 'next/link';

const Setting = (): React.ReactNode => {
  return (
    <div>
      <h1>Setting</h1>
      <Link href="/home">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default Setting;
