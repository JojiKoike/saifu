import Head from 'next/head';

import {APP_TITLE, APP_SUB_TITLE} from '../../constants/common';
import {REGISTER} from '../../constants/path';
import {LoginPage} from '../../components//templates';

const UserLogin: React.FC = () => {
  return (
    <>
      <Head>
        <title>SAIFU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginPage
        title={APP_TITLE}
        subTitle={APP_SUB_TITLE}
        registerUrl={REGISTER}
      />
    </>
  );
};

export default UserLogin;
