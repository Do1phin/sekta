import { IInitialWaypoint, IWaypoint } from '../api/types';

const isWaypoint = (waypoint: any): waypoint is IWaypoint => {
  return typeof waypoint === 'object' && waypoint !== null && 'properties' in waypoint;
};

const isInitialWaypoint = (waypoint: any): waypoint is IInitialWaypoint => {
  return typeof waypoint === 'object' && waypoint !== null && 'system_properties' in waypoint;
};

const isAnyWaypoint = (waypoint: any): waypoint is IInitialWaypoint | IWaypoint => {
  return (
    typeof waypoint === 'object' &&
    waypoint !== null &&
    ('properties' in waypoint || 'system_properties' in waypoint)
  );
};
export { isAnyWaypoint, isInitialWaypoint, isWaypoint };
