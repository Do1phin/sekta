import L, { LayerGroup, TileLayer } from 'leaflet';

import { storageHelper } from '../../../shared/helpers';
import { getMapLayerDataByOption, mapLayersData } from '../helpers/tilesProviders';

const baseLayerGroup = L.layerGroup();

const createBaseLayerGroup = (baseLayerName?: string): LayerGroup => {
  baseLayerGroup.clearLayers();
  const savedBaseLayerName = storageHelper('local').get('baseLayer');

  const layer = getMapLayerDataByOption(
    baseLayerName ?? savedBaseLayerName ?? mapLayersData[0].name,
    'provider',
  );

  if (layer instanceof TileLayer) {
    layer.addTo(baseLayerGroup);
  }
  return baseLayerGroup;
};

export { createBaseLayerGroup, baseLayerGroup };
