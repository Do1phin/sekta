import { Dispatch, SetStateAction, useState } from 'react';

export interface IUseRespError {
  error: string;
  isUserExists: boolean;
  isWrongAuth: boolean;
  message: string;
  setIsUserExists: Dispatch<SetStateAction<boolean>>;
  setIsWrongAuth: Dispatch<SetStateAction<boolean>>;
  statusCode: number;
}

// enum StatusCode {
//   400 = 400,
//   401 = 401,
//   404 = 404,
//
// }
// @ts-ignore
export const useRespError = (errorObj: any): IUseRespError => {
  const [isUserExists, setIsUserExists] = useState(false);
  const [isWrongAuth, setIsWrongAuth] = useState(false);

  const errorData = errorObj?.response?.data || null;
  const error = errorData?.error;
  const message = errorData?.message;
  const statusCode = errorData?.statusCode;

  return {
    error,
    isUserExists,
    isWrongAuth,
    message,
    setIsUserExists,
    setIsWrongAuth,
    statusCode,
  };
};
