import cx from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import css from './WrongAuth.module.scss';
import failedImg from '../../../../shared/images/failed.jpg';
import { Text } from '../../../../shared/ui';

interface IWrongAuthProps {
  action: 'login' | 'register';
  errorMessage: string;
}

const WrongAuth: FC<IWrongAuthProps> = (props) => {
  const { action, errorMessage } = props;

  const { t } = useTranslation();

  return (
    <div className={css.wrong}>
      <h2 className={css.title}>
        {action === 'login' ? t('page.auth.login-failed') : t('page.auth.register-failed')}
      </h2>
      <picture className={css['failed-image']}>
        <img src={failedImg} alt='failed' />
      </picture>

      <Text className={cx(css.link)} fontSize={'20px'} style={'danger'}>
        {errorMessage}
      </Text>
    </div>
  );
};

export { WrongAuth };
