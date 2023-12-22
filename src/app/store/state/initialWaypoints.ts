import { WaypointType } from '../../../features/find-address/api/types';

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
      waypoint_id: 1,
      waypoint_type: WaypointType.CustomsRegistration,
    },
  },
  {
    system_properties: {
      active: true,
      waypoint_id: 2,
      waypoint_type: WaypointType.CustomsInspection,
    },
  },
  {
    system_properties: {
      active: true,
      waypoint_id: 3,
      waypoint_type: WaypointType.CustomsClearance,
    },
  },
  {
    system_properties: {
      active: true,
      waypoint_id: 4,
      waypoint_type: WaypointType.Unloading,
    },
  },
];

export { initialWaypoints };
