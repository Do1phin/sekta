import type { IInitialWaypoint, IWaypoint } from '../../../features/find-address/api/types';

import { ISelectItemContent } from '../../../shared/ui/Select/Select.types';

const isWaypointWithFilledData = (waypoint: any): waypoint is IWaypoint => {
  return (
    typeof waypoint === 'object' &&
    'geometry' in waypoint &&
    'coordinates' in waypoint.geometry &&
    typeof waypoint.geometry.coordinates === 'object'
  );
};

const getCoordinatesFromWaypoints = (waypoints: (IWaypoint | IInitialWaypoint)[]): string => {
  const coordinates: string[] = [];

  // const validWaypoints = waypoints
  //   .filter(isWaypointFilled)
  //   .filter((waypoint) => 'coordinates' in waypoint.geometry)
  //   .map((waypoint) => waypoint.geometry.coordinates.join(','))

  waypoints?.map((waypoint) => {
    if (isWaypointWithFilledData(waypoint) && 'coordinates' in waypoint.geometry) {
      coordinates.push(
        waypoint?.geometry?.coordinates[0] + ',' + waypoint.geometry.coordinates[1] + ';',
      );
    }
  });
  return coordinates.join('').slice(0, -1);
};

const getDistanceFromRouteWaypoint = (
  waypointId: number,
  selectedRoute: any,
  unit?: 'km' | 'mi',
) => {
  const METERS_PER_KILOMETER = 1000;
  const METERS_PER_MILES = 1609;

  const distance = selectedRoute ? selectedRoute.legs[waypointId]?.distance : '';

  const unitName = unit === 'mi' ? METERS_PER_MILES : METERS_PER_KILOMETER;

  return distance ? `~ ${Math.ceil(distance / unitName)} км.` : '';
};

const useFilledDataWaypoints = (waypoints: IWaypoint[] | IInitialWaypoint[]) => {
  let isFilledDataWaypointsCount = 0;

  waypoints.forEach((waypoint) => {
    if (Object.getOwnPropertyDescriptor(waypoint, 'properties')) isFilledDataWaypointsCount += 1;
  });

  return {
    isFilledDataWaypointsCount,
  };
};

const isMultipleCoordinates = (coordinates: string): boolean => {
  const SYMBOLS_PER_ONE_COORDINATE = 21;
  return coordinates?.length > SYMBOLS_PER_ONE_COORDINATE;
};

const countWaypointsWithFilledData = (waypoints: (IWaypoint | IInitialWaypoint)[]): number => {
  let count = 0;

  waypoints.forEach((waypoint) => {
    if (isWaypointWithFilledData(waypoint)) {
      count += 1;
    }
  });

  return count;
};

type RouteStyleType = {
  [key in string]: {
    color: string;
    opacity: number;
    weight: number;
  };
};

const routeStyles: RouteStyleType = {
  afterUnloading: {
    color: 'rgb(0, 105, 255)',
    opacity: 0.65,
    weight: 5,
  },
  beforeLoading: {
    color: 'rgb(0, 105, 255)',
    opacity: 0.65,
    weight: 5,
  },
  driving: {
    color: 'rgb(0, 105, 255)',
    opacity: 0.65,
    weight: 5,
  },
  unselectedRoute: {
    color: '#c0bdfb',
    opacity: 0.65,
    weight: 5,
  },
};

type RouteStyleKeys = keyof typeof routeStyles;

const changeRouteStyle = (routeType: RouteStyleKeys) => {
  return routeStyles[routeType];
};

// @ts-ignore
const convertTypeToSelectData = (types: ISelectItemContent[], currentType) => {
  const t = types.filter((type) => {
    return type.title === currentType;
  });
  return t;
};

export {
  changeRouteStyle,
  isMultipleCoordinates,
  convertTypeToSelectData,
  countWaypointsWithFilledData,
  getCoordinatesFromWaypoints,
  getDistanceFromRouteWaypoint,
  isWaypointWithFilledData,
  routeStyles,
  useFilledDataWaypoints,
};

export type { RouteStyleType, RouteStyleKeys };
