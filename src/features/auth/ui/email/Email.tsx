import React, { ChangeEvent, FC, FocusEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '../../../../shared/ui';

interface IEmailProps {
  email: any;
}

const Email: FC<IEmailProps> = (props) => {
  const { email } = props;

  const { t } = useTranslation();

  const createStyle = () => {
    if (!email.isDirty) return 'primary';
    return email.isDirty && email.isValid && email.value ? 'success' : 'danger';
  };

  return (
    <Input
      onBlur={(event: FocusEvent<HTMLInputElement>) => email.onBlur(event)}
      onChange={(event: ChangeEvent<HTMLInputElement>) => email.onChange(event)}
      placeholder={t('page.auth.email-placeholder') ?? 'Email'}
      helper={
        (email.isDirty &&
          email.isEmptyError &&
          t('validate.error.empty-input', { value: 'email' })) ||
        (email.isDirty &&
          email.isEmailError &&
          t('validate.error.email-input', { value: 'email' })) ||
        (email.isDirty &&
          email.minLengthError &&
          t('validate.error.min-length-input', { value: 8 })) ||
        (email.isDirty &&
          email.maxLengthError &&
          t('validate.error.max-length-input', { value: 40 }))
      }
      // @ts-ignore
      style={createStyle()}
    />
  );
};

export { Email };
