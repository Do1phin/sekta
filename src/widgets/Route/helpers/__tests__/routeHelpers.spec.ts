import { WaypointType } from '../../../../features/find-address/api/types';
import {
  changeRouteStyle,
  countWaypointsWithFilledData,
  getCoordinatesFromWaypoints,
  isMultipleCoordinates,
  isWaypointWithFilledData,
  routeStyles,
} from '../routeHelpers';

const initialWaypoints = [
  {
    system_properties: {
      active: true,
      waypoint_id: 0,
      waypoint_type: WaypointType.Loading,
    },
  },
  {
    system_properties: {
      active: true,
      waypoint_id: 0,
      waypoint_type: WaypointType.Unloading,
    },
  },
];

// const a = {
//   system_properties: {
//     active: true,
//     waypoint_id: 0,
//     waypoint_type: 'loading',
//   },
//   type: 'Feature',
//   properties: {
//     place_id: 205436729,
//     osm_type: 'relation',
//     osm_id: 421866,
//     place_rank: 8,
//     category: 'boundary',
//     type: 'administrative',
//     importance: 0.7258572961698041,
//     addresstype: 'city',
//     name: 'Київ',
//     display_name: 'Київ, Україна',
//     address: {
//       city: 'Київ',
//       'ISO3166-2-lvl4': 'UA-30',
//       country: 'Україна',
//       country_code: 'ua',
//     },
//     extratags: {
//       ele: '179',
//       flag: 'http://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Kyiv_Kurovskyi.svg',
//       place: 'city',
//       koatuu: '8000000000',
//       capital: 'yes',
//       katotth: 'UA80000000000093317',
//       timezone: 'Europe/Kiev',
//       wikidata: 'Q1899',
//       wikipedia: 'uk:Київ',
//       population: '2908249',
//       'name:prefix': 'місто',
//       linked_place: 'city',
//       'source:name:br': 'ofis publik ar brezhoneg',
//       'population:date': '2022-01-01',
//       'source:population': 'https://uk.wikipedia.org/wiki/Київ',
//     },
//     namedetails: {
//       name: 'Київ',
//     },
//   },
//   bbox: [30.2361453, 50.2132422, 30.8263593, 50.5908142],
//   geometry: {
//     type: 'Point',
//     coordinates: [30.5241361, 50.4500336],
//   },
// };

const waypoints = [
  {
    geometry: {
      coordinates: [30.5241361, 50.4500336],
      type: 'Point',
    },
    properties: {
      address: {
        'ISO3166-2-lvl4': 'UA-30',
        city: 'Київ',
        country: 'Україна',
        country_code: 'ua',
      },
      addresstype: 'city',
      category: 'boundary',
      display_name: 'Київ, Україна',
      importance: 0.7258572961698041,
      name: 'Київ',
      osm_id: 421866,
      osm_type: 'relation',
      place_id: 205436729,
      place_rank: 8,
      type: 'administrative',
    },
    system_properties: {
      active: true,
      waypoint_id: 0,
      waypoint_type: 'loading',
    },
    type: 'Feature',
  },
  {
    geometry: {
      coordinates: [20.5241361, 40.4500336],
      type: 'Point',
    },
    properties: {
      address: {
        'ISO3166-2-lvl4': 'UA-30',
        city: 'Київ',
        country: 'Україна',
        country_code: 'ua',
      },
      addresstype: 'city',
      category: 'boundary',
      display_name: 'Київ, Україна',
      importance: 0.7258572961698041,
      name: 'Київ',
      osm_id: 421866,
      osm_type: 'relation',
      place_id: 205436729,
      place_rank: 8,
      type: 'administrative',
    },
    system_properties: {
      active: true,
      waypoint_id: 0,
      waypoint_type: 'unloading',
    },
    type: 'Feature',
  },
];

describe('isWaypointWithFilledData', () => {
  it('should return True', () => {
    expect(isWaypointWithFilledData(waypoints[0])).toBe(true);
  });

  it('should return False', () => {
    expect(isWaypointWithFilledData(initialWaypoints[0])).toBe(false);
  });
});

describe('getCoordinatesFromWaypoints', () => {
  it('should return lat + lng coordinates from filled waypoints', () => {
    // @ts-ignore
    expect(getCoordinatesFromWaypoints(waypoints)).toBe(
      '30.5241361,50.4500336;20.5241361,40.4500336',
    );
  });

  it('should return empty array [] from not filled waypoints', () => {
    expect(getCoordinatesFromWaypoints(initialWaypoints)).toBe('');
  });
});

describe('isMultipleCoordinates', () => {
  it('should be greater than 21 symbol length', () => {
    expect(isMultipleCoordinates('30.5241361,50.4500336;20.5241361,40.4500336')).toBe(true);
    expect(isMultipleCoordinates('30.5241361,50.4500336')).toBe(false);
  });
});

describe('changeRouteStyle', () => {
  it('should return afterUnload style', () => {
    expect(changeRouteStyle('afterUnloading')).toBe(routeStyles.afterUnloading);
  });

  it('should return undefined type', () => {
    expect(changeRouteStyle('undefinedRouteType')).toBeUndefined();
  });
});

describe('countWaypointsWithFilledData', () => {
  it('should return count waypoints with properties', () => {
    // @ts-ignore
    expect(countWaypointsWithFilledData(waypoints)).toBe(2);
    expect(countWaypointsWithFilledData(initialWaypoints)).toBe(0);
  });
});

describe('getDistanceFromRouteWaypoint', () => {
  it.skip('', () => alert('#'));
});
