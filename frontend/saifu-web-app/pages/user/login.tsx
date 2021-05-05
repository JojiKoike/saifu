import Link from 'next/link';

const User = (): React.ReactNode => {
  return (
    <div>
      <Link href="/home">
        <a>ログイン:ここにログインフォームを実装</a>
      </Link>
    </div>
  );
};

export default User;
