import { Dispatch, SetStateAction } from 'react';

const useDebounce = (ms: number, callback: Dispatch<SetStateAction<string>>) => {
  let timeoutId;

  if (timeoutId) clearTimeout(timeoutId);

  return (args: any) => {
    timeoutId = setTimeout(() => {
      callback(args);
    }, ms);
  };
};

export { useDebounce };
