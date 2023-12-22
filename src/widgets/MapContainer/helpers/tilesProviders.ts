import L, { tileLayer } from 'leaflet';

import CartoDbVoyagerImage from '../../../shared/images/CartoDbVoyager.png';
import EsriWorldImageryImage from '../../../shared/images/EsriWorldImagery.png';
import OpenStreetMapBaseImage from '../../../shared/images/OpenStreetMapBase.png';
import OpenStreetMapFranceImage from '../../../shared/images/OpenStreetMapFrance.png';
import OpenStreetMapHotImage from '../../../shared/images/OpenStreetMapHot.png';
import StadiaAlidadeSmoothImage from '../../../shared/images/StadiaAlidadeSmooth.png';
import StadiaAlidadeSmoothDarkImage from '../../../shared/images/StadiaAlidadeSmoothDark.png';
import StadiaOsmBrightImage from '../../../shared/images/StadiaOsmBright.png';
import StadiaOutdoorsImage from '../../../shared/images/StadiaOutdoors.png';

const OpenStreetMapProvider = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  id: 'OpenStreetMap.Base',
  maxZoom: 18,
  minZoom: 2,
});

const OpenStreetMapHOTProvider = L.tileLayer(
  'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
    id: 'OpenStreetMap.HOT',
    maxZoom: 19,
  },
);

const OpenStreetMapFranceProvider = L.tileLayer(
  'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
  {
    attribution:
      '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    id: 'OpenStreetMap.France',
    maxZoom: 20,
  },
);

const StadiaAlidadeSmoothProvider = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
  {
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    id: 'Stadia.AlidadeSmooth',
    maxZoom: 20,
    minZoom: 0,
  },
);

const StadiaAlidadeSmoothDarkProvider = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  {
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    id: 'Stadia.AlidadeSmoothDark',
    maxZoom: 20,
    minZoom: 0,
  },
);

const StadiaOSMBrightProvider = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
  {
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    id: 'Stadia.OSMBright',
    maxZoom: 20,
    minZoom: 0,
  },
);

const StadiaOutdoorsProviders = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png',
  {
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    id: 'Stadia.Outdoors',
    maxZoom: 20,
    minZoom: 0,
  },
);

const EsriWorldImageryProvider = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    id: 'Esri.WorldImagery',
  },
);

const CartoDBVoyagerProvider = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    id: 'CartoDB.Voyager',
    maxZoom: 20,
    subdomains: 'abcd',
  },
);

const getMapLayerDataByOption = (layerName: string, option: string) => {
  const data = mapLayersData.filter((layer) => layerName === layer.name);
  // @ts-ignore
  return option && data[0][option];
};

interface IMapLayer {
  name: string;
  previewImage: string;
  provider: any;
}

const mapLayersData: IMapLayer[] = [
  { name: 'CartoDB.Voyager', previewImage: CartoDbVoyagerImage, provider: CartoDBVoyagerProvider },
  {
    name: 'Esri.WorldImagery',
    previewImage: EsriWorldImageryImage,
    provider: EsriWorldImageryProvider,
  },
  {
    name: 'OpenStreetMap.Base',
    previewImage: OpenStreetMapBaseImage,
    provider: OpenStreetMapProvider,
  },
  {
    name: 'OpenStreetMap.France',
    previewImage: OpenStreetMapFranceImage,
    provider: OpenStreetMapFranceProvider,
  },
  {
    name: 'OpenStreetMap.HOT',
    previewImage: OpenStreetMapHotImage,
    provider: OpenStreetMapHOTProvider,
  },
  {
    name: 'Stadia.AlidadeSmooth',
    previewImage: StadiaAlidadeSmoothImage,
    provider: StadiaAlidadeSmoothProvider,
  },
  {
    name: 'Stadia.AlidadeSmoothDark',
    previewImage: StadiaAlidadeSmoothDarkImage,
    provider: StadiaAlidadeSmoothDarkProvider,
  },
  {
    name: 'Stadia.OSMBright',
    previewImage: StadiaOsmBrightImage,
    provider: StadiaOSMBrightProvider,
  },
  { name: 'Stadia.Outdoors', previewImage: StadiaOutdoorsImage, provider: StadiaOutdoorsProviders },
];

type BaseMapProviderTypes = keyof typeof mapLayersData;

export { mapLayersData, OpenStreetMapProvider, getMapLayerDataByOption };
export type { BaseMapProviderTypes };
