const sortList = {
  byOption: <T>(list: T[], option: string): T[] => {
    return list.sort((a, b) => {
      // @ts-ignore
      const firstValue = a[option]?.toLowerCase();
      // @ts-ignore
      const secondValue = b[option]?.toLowerCase();

      if (firstValue < secondValue) return -1;
      if (firstValue > secondValue) return 1;

      return 0;
    });
  },
};

export { sortList };
