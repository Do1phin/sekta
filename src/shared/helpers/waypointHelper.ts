import type { IInitialWaypoint, IWaypoint } from '../../features/find-address/api/types';

const updateWaypointsIndex = <T extends IWaypoint | IInitialWaypoint>(waypoints: T[]): T[] => {
  return waypoints.map((waypoint, index) => {
    return {
      ...waypoint,
      system_properties: {
        ...waypoint.system_properties,
        waypoint_id: index,
      },
    };
  });
};

export { updateWaypointsIndex };
