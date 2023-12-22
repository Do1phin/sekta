import { useQuery } from '@tanstack/react-query';

import { getRoute } from '../../create-waypoint/api/routeApi';

const useGetRouteFromCoordinates = (coordinates: string) => {
  return useQuery({
    enabled: false,
    queryFn: () => getRoute(coordinates),
    queryKey: ['routes', coordinates],
  });
};

export { useGetRouteFromCoordinates };
