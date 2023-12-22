import type { IRoute } from '../../../features/find-address/api/types';
import L, { LayerGroup } from 'leaflet';

import { changeRouteStyle } from '../../Route/helpers/routeHelpers';

const allRoutesLayerGroup = L.layerGroup();

const createAllRoutesLayerGroup = (routes?: IRoute[], selectedRoute?: IRoute): LayerGroup => {
  allRoutesLayerGroup.clearLayers();

  routes?.forEach((route) => {
    route.distance !== selectedRoute?.distance &&
      L.geoJSON(route.geometry, {
        style: changeRouteStyle('unselectedRoute'),
      }).addTo(allRoutesLayerGroup);
  });
  return allRoutesLayerGroup;
};

export { createAllRoutesLayerGroup, allRoutesLayerGroup };
