import React, { ChangeEvent, FC, FocusEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '../../../../shared/ui';

const Password: FC = (props) => {
  const { password } = props;

  const { t } = useTranslation();

  const createStyle = () => {
    if (!password.isDirty) return 'primary';
    return password.isDirty && password.isValid && password.value ? 'success' : 'danger';
  };

  return (
    <Input
      onBlur={(event: FocusEvent<HTMLInputElement>) => password.onBlur(event)}
      onChange={(event: ChangeEvent<HTMLInputElement>) => password.onChange(event)}
      password
      placeholder={t('page.auth.pass-placeholder') ?? 'Password'}
      helper={
        (password.isDirty &&
          password.isEmptyError &&
          t('validate.error.empty-input', { value: 'password' })) ||
        (password.isDirty &&
          password.minLengthError &&
          t('validate.error.min-length-input', { value: 8 })) ||
        (password.isDirty &&
          password.maxLengthError &&
          t('validate.error.max-length-input', { value: 40 }))
      }
      style={createStyle()}
      type={'password'}
    />
  );
};

export { Password };
