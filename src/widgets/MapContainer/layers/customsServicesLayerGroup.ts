import { Feature, FeatureCollection } from 'geojson';
import L, { LatLng, Layer, LayerGroup } from 'leaflet';
import { createRoot } from 'react-dom/client';

import { changeWaypointIcon } from '../../../features/create-waypoint/helpers/mapHelpers';
import css from '../../../widgets/MapContainer/ui/CustomsService/CustomsService.module.scss';
import customsServices from '../helpers/customsServices.json';
import { wrappingCustomService } from '../ui/CustomsService/CustomsService';

const customsServicesLayerGroup = L.layerGroup();

const customsServicesData = customsServices as unknown as FeatureCollection;

const createCustomsServicesLayerGroup = (): LayerGroup => {
  customsServicesLayerGroup.clearLayers();

  const createCustomsPopupContent = (feature: Feature) => {
    const element = document.getElementById('waypoint');

    if (element) {
      const root = createRoot(element);
      root.render(wrappingCustomService({ waypoint: feature }));
    }
  };

  customsServicesData.features.length &&
    L.geoJSON(customsServicesData.features, {
      filter: (feature) => {
        return feature !== null;
      },
      pointToLayer: (feature: Feature, latlng: LatLng): Layer => {
        return L.marker(latlng, {
          icon: changeWaypointIcon('customs_service'),
          // @ts-ignore
        }).bindPopup(createCustomsPopupContent(feature), {
          className: css['customs-service-icon'],
          maxWidth: 466,
        });
      },
    }).addTo(customsServicesLayerGroup);
  return customsServicesLayerGroup;
};

export { createCustomsServicesLayerGroup, customsServicesLayerGroup };
