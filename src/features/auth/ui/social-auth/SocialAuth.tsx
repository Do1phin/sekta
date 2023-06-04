import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import css from './SocialAuth.module.scss';
import { Button } from '../../../../shared/ui';

const SocialAuth: FC = (props) => {
  const { action } = props;
  const { t } = useTranslation();

  const mockAuth = () => null;

  return (
    <div className={css['social-register']}>
      <Button
        className={css.facebook}
        disabled={true}
        text={
          action === 'login'
            ? t('page.auth.login-social', { value: 'Facebook' })
            : t('page.auth.register-social', { value: 'Facebook' })
        }
        onClick={mockAuth}
      />
      <Button
        className={css.google}
        disabled={true}
        text={
          action === 'login'
            ? t('page.auth.login-social', { value: 'Google' })
            : t('page.auth.register-social', { value: 'Google' })
        }
        onClick={mockAuth}
      />
      <Button
        className={css.twitter}
        disabled={true}
        text={
          action === 'login'
            ? t('page.auth.login-social', { value: 'Twitter' })
            : t('page.auth.register-social', { value: 'Twitter' })
        }
        onClick={mockAuth}
      />
      <Button
        className={css.linkedin}
        disabled={true}
        text={
          action === 'login'
            ? t('page.auth.login-social', { value: 'Linkedin' })
            : t('page.auth.register-social', { value: 'Linkedin' })
        }
        onClick={mockAuth}
      />
    </div>
  );
};

export { SocialAuth };
