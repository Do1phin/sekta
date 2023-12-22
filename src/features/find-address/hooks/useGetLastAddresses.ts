import type { ISelectItemContent } from '../../../shared/ui/Select/Select.types';

const useGetLastAddresses = () => {
  const lastAddresses: ISelectItemContent[] = [
    {
      description: 'Description 1',
      icon: 'alien',
      subtitle: 'просп. Мира',
      title: 'Донецк',
      value: 11111,
    },
    {
      description: 'Description 1',
      icon: 'alert-octagon',
      subtitle: 'ул. Прозрачная',
      title: 'Луганск',
      value: 22222,
    },
    {
      description: 'Description 2',
      icon: 'eye',
      subtitle: 'бульв. Челноки',
      title: 'Одесса',
      value: 33333,
    },
  ];

  return { lastAddresses };
};

export { useGetLastAddresses };
