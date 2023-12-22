import type {
  IInitialWaypoint,
  IRoute,
  IWaypoint,
} from '../../../../features/find-address/api/types';
import L, { CRS, LayerGroup, MapOptions } from 'leaflet';
import React, { createRef, FC, useEffect, useState } from 'react';

import css from './Map.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { setRoutes } from '../../../../app/store/routeSlice';
import { selectWaypoints } from '../../../../app/store/selectors/selectors';
import { countWaypointsWithFilledData } from '../../../Route/helpers/routeHelpers';

import 'leaflet/dist/leaflet.css';

// interface IInitialMapOptions {
//   attribution: string;
//   attributionControl?: boolean;
//   bounceAtZoomLimits?: boolean;
//   boxZoom?: boolean;
//   center?: LatLngExpression;
//   closePopupOnClick?: boolean;
//   crs?: CRS;
//   doubleClickZoom?: boolean;
//   dragging?: boolean;
//   easeLinearity?: number;
//   fadeAnimation?: boolean;
//   inertiaDeceleration?: number;
//   inertiaMaxSpeed?: number;
//   keyboard?: boolean;
//   keyboardPanDelta?: number;
//   markerZoomAnimation?: boolean;
//   maxBounds?: LatLngBounds;
//   maxBoundsViscosity?: number;
//   maxZoom?: number;
//   minZoom?: number;
//   preferCanvas?: boolean;
//   scrollWheelZoom?: boolean;
//   tapHold?: boolean;
//   tapTolerance?: number;
//   trackResize?: boolean;
//   transform3DLimit?: number;
//   wheelDebounceTime?: number;
//   wheelPxPerZoomLevel?: number;
//   worldCopyJump?: boolean;
//   zoom?: number;
//   zoomAnimation?: boolean;
//   zoomAnimationThreshold?: number;
//   zoomControl?: boolean;
//   zoomDelta?: number;
//   zoomSnap?: number;
// }

const initialMapOptions: MapOptions = {
  attributionControl: false,
  bounceAtZoomLimits: true,
  boxZoom: true,
  center: [50.447844, 30.524545],
  closePopupOnClick: true,
  crs: CRS.EPSG3857,
  doubleClickZoom: false,
  dragging: true,
  easeLinearity: 0.2,
  fadeAnimation: true,
  inertiaDeceleration: 3000,
  inertiaMaxSpeed: Infinity,
  keyboard: true,
  keyboardPanDelta: 80,
  markerZoomAnimation: true,
  // maxBounds: L.latLngBounds([56.88, 80], [24.605, 80]),
  maxBoundsViscosity: 0.0,
  maxZoom: 18,
  minZoom: 2,
  preferCanvas: false,
  scrollWheelZoom: true,
  tapTolerance: 15,
  trackResize: true,
  transform3DLimit: 2 ^ 23,
  wheelDebounceTime: 40,
  wheelPxPerZoomLevel: 60,
  worldCopyJump: false,
  zoom: 7,
  zoomAnimation: true,
  zoomAnimationThreshold: 4,
  zoomControl: true,
  zoomDelta: 1,
  zoomSnap: 1,
};

interface IMap {
  allRoutesLayerGroup?: LayerGroup;
  baseLayerGroup?: LayerGroup;
  baseLayerName?: string;
  coordinates: string;
  customsServicesLayerGroup?: LayerGroup | undefined;
  isError?: boolean;
  isLoading?: boolean;
  routes?: IRoute[];
  selectedRouteLayerGroup?: LayerGroup;
  waypoints: IWaypoint[] | IInitialWaypoint[];
  waypointsLayerGroup?: LayerGroup;
}

const MapContainer: FC<IMap> = (props) => {
  const {
    allRoutesLayerGroup,
    baseLayerGroup,
    selectedRouteLayerGroup,
    customsServicesLayerGroup,
    waypointsLayerGroup,
  } = props;

  const mapContainer = createRef<HTMLDivElement>();
  const waypoints = useAppSelector(selectWaypoints);

  const [map, setMap] = useState<L.Map | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (countWaypointsWithFilledData(waypoints) === 1) {
      dispatch(setRoutes({ routes: null }));
    }
  }, [waypoints, dispatch]);

  useEffect(() => {
    const map = L.map('map', { ...initialMapOptions });
    setMap(map);

    return () => {
      map?.remove();
    };
  }, []);

  useEffect(() => {
    map && baseLayerGroup?.addTo(map);

    return () => {
      baseLayerGroup && map?.removeLayer(baseLayerGroup);
    };
  }, [map, baseLayerGroup]);

  useEffect(() => {
    map && customsServicesLayerGroup?.addTo(map);

    return () => {
      customsServicesLayerGroup && map?.removeLayer(customsServicesLayerGroup);
    };
  }, [map, customsServicesLayerGroup]);

  useEffect(() => {
    map && customsServicesLayerGroup?.addTo(map);

    return () => {
      customsServicesLayerGroup && map?.removeLayer(customsServicesLayerGroup);
    };
  }, [map, customsServicesLayerGroup]);

  useEffect(() => {
    map && waypointsLayerGroup?.addTo(map);

    return () => {
      waypointsLayerGroup && map?.removeLayer(waypointsLayerGroup);
    };
  }, [map, waypointsLayerGroup]);

  useEffect(() => {
    map && allRoutesLayerGroup?.addTo(map);

    return () => {
      allRoutesLayerGroup && map?.removeLayer(allRoutesLayerGroup);
    };
  }, [map, allRoutesLayerGroup]);

  useEffect(() => {
    map && selectedRouteLayerGroup?.addTo(map);

    return () => {
      selectedRouteLayerGroup && map?.removeLayer(selectedRouteLayerGroup);
    };
  }, [map, selectedRouteLayerGroup]);

  return (
    <section className={css.wrapper}>
      <div id='map' ref={mapContainer} className={css.map}></div>
    </section>
  );
};

export { MapContainer };
