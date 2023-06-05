import cx from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import css from './SuccessAuth.module.scss';
import successImg from '../../../../shared/images/success.png';
import { Text } from '../../../../shared/ui';

const SuccessAuth: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={css.registered}>
      <h2 className={css.title}>{t('page.auth.register-success')}</h2>
      <picture className={css['success-image']}>
        <img src={successImg} alt='success' />
      </picture>

      <Link className={css['register-link']} to='/login'>
        <Text className={cx(css.link)} fontSize={'16px'} style={'primary'}>
          {t('page.auth.go-login')}
        </Text>
      </Link>
    </div>
  );
};

export { SuccessAuth };
