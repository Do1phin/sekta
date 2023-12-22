import { IRoute } from '../../../features/find-address/api/types';
import { selectRoutes } from 'src/app/store/selectors/selectors';

const routes: IRoute[] = [
  {
    distance: 1000,
    duration: 100,
    geometry: {
      coordinates: [1, 2],
      type: 'Point',
    },
    legs: [],
    voiceLocale: 'ru',
    waypoints: [],
    weight: 200,
    weight_name: 'text',
  },
  {
    distance: 1000,
    duration: 100,
    geometry: {
      coordinates: [1, 2],
      type: 'Point',
    },
    legs: [],
    voiceLocale: 'ru',
    waypoints: [],
    weight: 200,
    weight_name: 'text',
  },
];

describe('selectors', () => {
  it('should select initial routes from state', () => {
    expect(selectRoutes).toBeNull();
  });

  it('should select routes from state object', () => {
    const mockRoutes = [...routes];

    // @ts-ignore
    const result = selectRoutes({ mockRoutes });
    expect(result).toEqual(mockRoutes);
  });
});
