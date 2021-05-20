import Head from 'next/head';

import {APP_TITLE, APP_SUB_TITLE} from '../../constants/common';
import {LOGIN} from '../../constants/path';
import {RegistrationPage} from '../../components//templates';

const UserRegistration: React.FC = () => {
  return (
    <>
      <Head>
        <title>SAIFU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegistrationPage
        title={APP_TITLE}
        subTitle={APP_SUB_TITLE}
        loginUrl={LOGIN}
      />
    </>
  );
};

export default UserRegistration;
