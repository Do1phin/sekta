import type { IInitialWaypoint, IWaypoint } from '../../../features/find-address/api/types';
import L, { LatLng, Layer, LayerGroup } from 'leaflet';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { changeWaypointIcon } from '../../../features/create-waypoint/helpers/mapHelpers';
import css from '../../Route/ui/Route/Route.module.scss';
import { WaypointPopup } from '../ui/WaypointPopup/WaypointPopup';

const waypointsLayerGroup = L.layerGroup();

const createWaypointsLayerGroup = (waypoints: IWaypoint[] | IInitialWaypoint[]): LayerGroup => {
  waypointsLayerGroup.clearLayers();

  waypoints &&
    // @ts-ignore
    L.geoJSON(waypoints, {
      filter: (feature: IWaypoint | IInitialWaypoint) => {
        return feature.system_properties.waypoint_type;
      },
      pointToLayer(feature: IWaypoint, latlng: LatLng): Layer {
        const customComponentContainer = document.createElement('div'); // Создание контейнера для React компонента
        const root = createRoot(customComponentContainer);
        root.render(<WaypointPopup waypoint={feature} />);

        return L.marker(latlng, {
          icon: changeWaypointIcon(feature.system_properties.waypoint_type),
        })
          .bindPopup(customComponentContainer, {
            className: css['waypoint-icon'],
            maxWidth: 466,
          })
          .openPopup();
      },
    }).addTo(waypointsLayerGroup);
  return waypointsLayerGroup;
};

export { createWaypointsLayerGroup, waypointsLayerGroup };
