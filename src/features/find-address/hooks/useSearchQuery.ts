import { useQuery } from '@tanstack/react-query';

import { getAddress } from '../api/searchApi';

type useSearchQueryProps = {
  lang: string;
  searchQuery: string;
};

const useSearchQuery = (props: useSearchQueryProps) => {
  const { searchQuery, lang } = props;

  return useQuery({
    queryFn: () => getAddress(searchQuery),
    queryKey: ['addresses', lang, searchQuery],
  });
};

export { useSearchQuery };
