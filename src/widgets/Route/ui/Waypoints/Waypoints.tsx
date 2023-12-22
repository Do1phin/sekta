import type { IInitialWaypoint, IWaypoint } from '../../../../features/find-address/api/types';
import React from 'react';

import { useAppSelector } from '../../../../app/store/hooks';
import { selectRoutes, selectWaypoints } from '../../../../app/store/selectors/selectors';
import { CreateWaypoint } from '../../../../features/create-waypoint';
import { getDistanceFromRouteWaypoint } from '../../helpers/routeHelpers';
import css from '../Waypoints/Waypoints.module.scss';

const Waypoints = () => {
  const waypoints = useAppSelector(selectWaypoints);
  const selectedRoute = useAppSelector(selectRoutes);

  const shouldExtremeWaypoint = (index: number, waypoints: IWaypoint[] | IInitialWaypoint[]) => {
    return (
      (index === 0 && waypoints[index + 1].system_properties.waypoint_type !== 'loading') ||
      (waypoints.length - 1 === index &&
        waypoints[waypoints.length - 2].system_properties.waypoint_type !== 'unloading')
    );
  };

  return (
    <div className={css.waypoints}>
      {waypoints?.map((waypoint, index) => (
        <CreateWaypoint
          distance={selectedRoute ? getDistanceFromRouteWaypoint(index, selectedRoute) : ''}
          key={
            waypoint.system_properties.waypoint_type +
            index +
            ('properties' in waypoint && waypoint.properties?.osm_id)
          }
          isExtremeWaypoint={shouldExtremeWaypoint(index, waypoints)}
          isLastWaypoint={waypoints.length - 1 === index}
          waypoint={waypoint}
        />
      ))}
    </div>
  );
};

export { Waypoints };
