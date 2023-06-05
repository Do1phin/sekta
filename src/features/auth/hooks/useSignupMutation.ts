import type { IRegisterUser } from '../../../shared/types/authTypes';
import { useMutation } from '@tanstack/react-query';

import { signUpUser } from '../api/authApi';

const useSignupMutation = (props: IRegisterUser) => {
  const { email, password } = props;

  const prettyEmail = email.includes('gmail.com') ? email.replace('.', '') : email;

  return useMutation({
    mutationFn: () =>
      signUpUser({ email: prettyEmail.toLowerCase(), password: password.toLowerCase() }),
  });
};

export { useSignupMutation };
