import React, { FC } from 'react';

import css from './AuthPage.module.scss';
import { AuthLayout } from '../../features/auth/ui';

interface IAuthPageProps {
  action: 'login' | 'register';
}

const AuthPage: FC<IAuthPageProps> = ({ action }) => {
  return (
    <div className={css['auth-page']}>
      <div className={css['auth-form']}>
        <AuthLayout action={action} />
      </div>
    </div>
  );
};

export { AuthPage };
