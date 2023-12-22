import React, { FC, useEffect, useState } from 'react';

import css from './Route.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { setLastCoordinates, setRoutes, setSelectedRoute } from '../../../../app/store/routeSlice';
import {
  selectCurrentRoute,
  selectLastCoordinates,
  selectRoutes,
  selectWaypoints,
} from '../../../../app/store/selectors/selectors';
import { RouteSelector } from '../../../../features/change-route';
import { useGetRouteFromCoordinates } from '../../../../features/find-address/hooks';
import { storageHelper } from '../../../../shared/helpers';
import { Layer } from '../../../../shared/ui/Layer/Layer';
import { MapContainer, MapFilters, MapLayers, MapSpinner } from '../../../MapContainer/';
import {
  allRoutesLayerGroup,
  baseLayerGroup,
  createAllRoutesLayerGroup,
  createBaseLayerGroup,
  createCustomsServicesLayerGroup,
  createSelectedRouteLayerGroup,
  createWaypointsLayerGroup,
  customsServicesLayerGroup,
  selectedRouteLayerGroup,
  waypointsLayerGroup,
} from '../../../MapContainer/layers';
import {
  countWaypointsWithFilledData,
  getCoordinatesFromWaypoints,
  isMultipleCoordinates,
} from '../../helpers/routeHelpers';
import { CargoSettings } from '../CargoSettings/CargoSettings';
import { Waypoints } from '../Waypoints/Waypoints';

export const Route: FC = () => {
  const waypoints = useAppSelector(selectWaypoints);
  const routes = useAppSelector(selectRoutes);
  const selectedRoute = useAppSelector(selectCurrentRoute);
  const lastCoordinates = useAppSelector(selectLastCoordinates);

  const [currentCountFilledDataWaypoints, setCurrentCountFilledDataWaypoints] = useState(0);
  const [coordinates, setCoordinates] = useState<string>('');
  const [baseLayerName, setBaseLayerName] = useState('');

  const dispatch = useAppDispatch();

  const {
    data,
    isSuccess: isRoutesSuccess,
    isFetching: isRoutesFetching,
    refetch: fetchRoutes,
  } = useGetRouteFromCoordinates(coordinates);

  useEffect(() => {
    const savedBaseLayerName = storageHelper('local').get('baseLayer');
    savedBaseLayerName && setBaseLayerName(() => savedBaseLayerName);

    createCustomsServicesLayerGroup();
  }, []);

  useEffect(() => {
    if (baseLayerName) {
      createBaseLayerGroup(baseLayerName);
    }
  }, [baseLayerName]);

  useEffect(() => {
    if (isRoutesSuccess && data.routes.length) {
      dispatch(setRoutes({ routes: data.routes }));
    }
  }, [isRoutesSuccess, dispatch]);

  useEffect(() => {
    if (waypoints) {
      if (lastCoordinates !== getCoordinatesFromWaypoints(waypoints)) {
        console.log('++++++++++++++++++++++++++++++ 1 ');
        dispatch(setRoutes({ routes: null }));
        dispatch(setSelectedRoute({ routeId: null }));

        setCoordinates(() => getCoordinatesFromWaypoints(waypoints));
      }
      // @ts-ignore
      setLastCoordinates(getCoordinatesFromWaypoints(waypoints));

      createWaypointsLayerGroup(waypoints);

      if (countWaypointsWithFilledData(waypoints) < 2) {
        dispatch(setRoutes({ routes: null }));
        dispatch(setSelectedRoute({ routeId: null }));
      }

      if (currentCountFilledDataWaypoints < countWaypointsWithFilledData(waypoints)) {
        dispatch(setSelectedRoute({ routeId: null }));
      }
    }
  }, [waypoints]);

  useEffect(() => {
    if (isMultipleCoordinates(coordinates)) {
      fetchRoutes();
    }
  }, [coordinates, fetchRoutes]);

  useEffect(() => {
    // @ts-ignore
    createAllRoutesLayerGroup(routes, selectedRoute);
    createSelectedRouteLayerGroup(selectedRoute);
  }, [routes, selectedRoute]);

  useEffect(() => {
    if (selectedRoute) {
      createSelectedRouteLayerGroup(selectedRoute);
    }
  }, [selectedRoute]);

  return (
    <div className={css.route}>
      <Layer classes={'waypoints-layer'} label={'Waypoints'} description={'some description'}>
        <Waypoints />
      </Layer>

      <div className={css.content}>
        <Layer classes={'cargo-settings-layer'}>
          <CargoSettings />
        </Layer>

        <Layer classes={'map-layer'}>
          <div className={css.map}>
            <MapFilters />
            <MapLayers baseLayerName={baseLayerName} setBaseLayerName={setBaseLayerName} />

            {isRoutesFetching && <MapSpinner />}

            {/*<WaypointPopup waypoint={waypoints[0]} />*/}

            <MapContainer
              baseLayerName={baseLayerName}
              coordinates={coordinates}
              waypoints={waypoints}
              baseLayerGroup={baseLayerGroup}
              allRoutesLayerGroup={allRoutesLayerGroup}
              customsServicesLayerGroup={customsServicesLayerGroup}
              selectedRouteLayerGroup={selectedRouteLayerGroup}
              waypointsLayerGroup={waypointsLayerGroup}
            />
            {routes?.length ? (
              <RouteSelector
                setCurrentCountFilledDataWaypoints={setCurrentCountFilledDataWaypoints}
              />
            ) : null}
          </div>
        </Layer>
      </div>
    </div>
  );
};
