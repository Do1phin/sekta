import L, { Icon } from 'leaflet';

import customsServiceIcon from '../../../shared/icons/barrier7.svg';
import defaultIcon from '../../../shared/icons/dot.svg';
import customsClearanceIcon from '../../../shared/icons/route_customs_clearance.svg';
import customsInspectionIcon from '../../../shared/icons/route_customs_inspection.svg';
import customsRegistrationIcon from '../../../shared/icons/route_customs_registration.svg';
import loadingIcon from '../../../shared/icons/route_loading.svg';
import unloadingIcon from '../../../shared/icons/route_unloading.svg';
import waypointIcon from '../../../shared/icons/route_waypoint.svg';

const changeWaypointIcon = (type: WaypointType): Icon => {
  const waypoints = {
    customs_clearance: L.icon({
      className: 'waypoint-icon',
      iconAnchor: [22, 94],
      iconSize: [38, 95],
      iconUrl: customsClearanceIcon,
      popupAnchor: [-3, -76],
    }),
    customs_inspection: L.icon({
      className: 'waypoint-icon',
      iconAnchor: [22, 94],
      iconSize: [38, 95],
      iconUrl: customsInspectionIcon,
      popupAnchor: [-3, -76],
    }),
    customs_registration: L.icon({
      className: 'waypoint-icon',
      iconAnchor: [22, 94],
      iconSize: [38, 95],
      iconUrl: customsRegistrationIcon,
      popupAnchor: [-3, -76],
    }),
    customs_service: L.icon({
      className: 'customs-service-icon',
      iconAnchor: [22, 94],
      iconSize: [38, 95],
      iconUrl: customsServiceIcon,
      popupAnchor: [-3, -76],
    }),
    default: L.icon({
      className: 'waypoint-icon',
      iconAnchor: [22, 94],
      iconSize: [38, 95],
      iconUrl: defaultIcon,
      popupAnchor: [-3, -76],
    }),
    loading: L.icon({
      className: 'waypoint-icon',
      iconAnchor: [22, 94],
      iconSize: [38, 95],
      iconUrl: loadingIcon,
      popupAnchor: [-3, -76],
    }),
    unloading: L.icon({
      className: 'waypoint-icon',
      iconAnchor: [22, 94],
      iconSize: [38, 95],
      iconUrl: unloadingIcon,
      popupAnchor: [-3, -76],
    }),
    waypoint: L.icon({
      className: 'waypoint-icon',
      iconAnchor: [22, 94],
      iconSize: [38, 95],
      iconUrl: waypointIcon,
      popupAnchor: [100, 50],
    }),
  };

  return waypoints[type] || waypoints.default;
};

type WaypointType =
  | 'customs_clearance'
  | 'customs_inspection'
  | 'customs_registration'
  | 'customs_service'
  | 'loading'
  | 'unloading'
  | 'waypoint';

const waypointTypes: WaypointType[] = [
  'customs_clearance',
  'customs_inspection',
  'customs_registration',
  'loading',
  'unloading',
  'waypoint',
];

const getWaypointTypeName = (type: WaypointType): string => {
  const waypointTypeNames = {
    customs_clearance: 'component.waypoint-type.customs_clearance',
    customs_inspection: 'component.waypoint-type.customs_inspection',
    customs_registration: 'component.waypoint-type.customs_registration',
    customs_service: 'component.waypoint-type.customs_service',
    loading: 'component.waypoint-type.loading',
    unloading: 'component.waypoint-type.unloading',
    waypoint: 'component.waypoint-type.waypoint',
  };

  return waypointTypeNames[type] || '';
};

const getWaypointTypeIcon = (type: WaypointType) => {
  const waypointTypeIcons = {
    customs_clearance: customsClearanceIcon,
    customs_inspection: customsInspectionIcon,
    customs_registration: customsRegistrationIcon,
    customs_service: customsServiceIcon,
    loading: unloadingIcon,
    unloading: unloadingIcon,
    waypoint: waypointIcon,
  };

  return waypointTypeIcons[type] || defaultIcon;
};

export {
  changeWaypointIcon,
  getWaypointTypeName,
  getWaypointTypeIcon,
  WaypointType,
  waypointTypes,
};
