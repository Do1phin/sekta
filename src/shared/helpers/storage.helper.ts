export const storageHelper = (storage: 'session' | 'local') => {
  const get = (key: string): string | null | undefined => {
    if (storage === 'session') {
      return sessionStorage.getItem(key) ?? null;
    }
    if (storage === 'local') {
      return localStorage.getItem(key) ?? null;
    }
  };

  const set = (key: string, data: string) => {
    if (storage === 'session') {
      return sessionStorage.setItem(key, data);
    }
    if (storage === 'local') {
      return localStorage.setItem(key, data);
    }
  };

  const remove = (key: string) => {
    if (storage === 'session') {
      return sessionStorage.removeItem(key);
    }
    if (storage === 'local') {
      return localStorage.removeItem(key);
    }
  };

  return {
    get,
    remove,
    set,
  };
};
