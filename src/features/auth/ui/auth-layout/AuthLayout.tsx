import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate } from 'react-router-dom';

import css from './AuthLayout.module.scss';
import { useInput } from '../../../../shared/hooks';
import { Button, Text } from '../../../../shared/ui';
import { useSigninMutation, useSignupMutation } from '../../hooks';
import { Email, Password, SocialAuth, SuccessAuth, WrongAuth } from '../index';

interface IAuthProps {
  action: 'login' | 'register';
}

const AuthLayout: FC<IAuthProps> = (props) => {
  const { action } = props;

  const { t } = useTranslation();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isUserExists, setIsUserExists] = useState(false);
  const [isWrongAuth, setIsWrongAuth] = useState(false);

  const email = useInput('', { isEmail: true, isEmpty: true, maxLength: 40, minLength: 6 });
  const password = useInput('', { isEmpty: true });

  const {
    mutate: signUpMutate,
    isSuccess: signUpIsSuccess,
    isLoading: signUpIsLoading,
    isError: signUpIsError,
    error: signUpError,
  } = useSignupMutation({
    email: email.value,
    password: password.value,
  });

  const {
    mutate: signInMutate,
    isSuccess: signInIsSuccess,
    isLoading: signInIsLoading,
    isError: signInIsError,
    error: signInError,
  } = useSigninMutation({
    email: email.value,
    password: password.value,
  });

  useEffect(() => {
    signUpIsError && setIsWrongAuth(() => true);
  }, [signUpIsError]);

  useEffect(() => {
    action === 'register' && signUpIsSuccess && setIsRegistered(true);
  }, [action, signUpIsSuccess]);

  useEffect(() => {
    signInIsSuccess && setIsLogged(true);
  }, [signInIsSuccess]);

  useEffect(() => {
    signInIsError && setIsWrongAuth(() => true);
  }, [signInIsError]);

  useEffect(() => {
    setTimeout(() => {
      isWrongAuth && setIsWrongAuth(() => false);
    }, 5000);
  }, [isWrongAuth]);

  useEffect(() => {
    setTimeout(() => {
      isUserExists && setIsUserExists(() => false);
    }, 5000);
  }, [isUserExists]);

  const registration = (event: Event) => {
    event.preventDefault();
    signUpMutate();
  };

  const login = (event: Event) => {
    event.preventDefault();
    signInMutate();
  };

  if (isLogged) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div className={css.auth}>
      {isWrongAuth && (
        <WrongAuth
          action={action}
          errorMessage={signUpError?.response?.data.message ?? signInError?.response?.data.message}
        />
      )}

      {action === 'register' && isRegistered && <SuccessAuth />}

      {
        <div className={css.unauth}>
          <div className={css['base-register']}>
            <h2 className={css.title}>
              {action === 'login' ? t('page.auth.login-title') : t('page.auth.register-title')}
            </h2>
            <form className={css.form}>
              <Email email={email} />
              <Password password={password} />

              <Button
                className={css['auth-btn']}
                text={action === 'login' ? t('page.auth.go-login') : t('page.auth.go-register')}
                onClick={action === 'login' ? login : registration}
                loader={signUpIsLoading || signInIsLoading}
              />
            </form>

            <p className={css.footer}>
              {action === 'login'
                ? t('page.auth.doesnt-have-account')
                : t('page.auth.have-account')}
              <Link className={css['login-link']} to={action === 'login' ? '/register' : '/login'}>
                <Text className={css.link} fontSize={'16px'} style={'primary'}>
                  {action === 'login' ? t('page.auth.go-register') : t('page.auth.go-login')}
                </Text>
              </Link>
            </p>
          </div>

          <SocialAuth />
        </div>
      }
    </div>
  );
};

export { AuthLayout };
