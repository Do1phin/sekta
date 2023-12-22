import L, { LayerGroup } from 'leaflet';

import { IRoute } from '../../../features/find-address/api/types';
import { changeRouteStyle } from '../../Route/helpers/routeHelpers';

const selectedRouteLayerGroup = L.layerGroup();

const createSelectedRouteLayerGroup = (currentRoute: IRoute | null): LayerGroup => {
  selectedRouteLayerGroup.clearLayers();

  currentRoute &&
    L.geoJSON(currentRoute.geometry, {
      style: changeRouteStyle('driving'),
    }).addTo(selectedRouteLayerGroup);

  return selectedRouteLayerGroup;
};

export { createSelectedRouteLayerGroup, selectedRouteLayerGroup };
