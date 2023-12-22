import type { ILoginUser } from '../../../shared/types/authTypes';
import { useMutation } from '@tanstack/react-query';

import { changeAuthorized, setCurrentUser } from '../../../app/store/authSlice';
import { useAppDispatch } from '../../../app/store/hooks';
import { signInUser } from '../api/authApi';

const useSigninMutation = (props: ILoginUser) => {
  const { email, password } = props;
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: () => signInUser({ email, password }),
    onSuccess: (data) => {
      dispatch(setCurrentUser({ user: data.user }));
      dispatch(changeAuthorized({ value: true }));
    },
  });
};

export { useSigninMutation };
