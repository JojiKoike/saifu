import Link from 'next/link';

const Member = (): React.ReactNode => {
  return (
    <div>
      <Link href="/home">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default Member;
