import type {
  IAddWaypointPayload,
  IChangePermittedAmenityPayload,
  IChangePermittedCountryPayload,
  IChangePermittedPlacePayload,
  IChangeWaypointPayload,
  IClearWaypointPayload,
  IDeleteWaypointPayload,
  ISetLastCoordinatesPayload,
  ISetReplacingWaypointIdPayload,
  ISetRoutesPayload,
  ISwapWaypointPositionPayload,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state/initialState';
import { ISetSelectedRoutePayload } from './types';
import { WaypointType } from '../../features/find-address/api/types';
import { updateWaypointsIndex } from '../../shared/helpers/waypointHelper';

const routeSlice = createSlice({
  initialState,
  name: 'route',
  reducers: {
    addWaypoint: (state, { payload }: PayloadAction<IAddWaypointPayload>) => {
      const { id } = payload;
      const updatedWaypoints = [
        ...state.waypoints.slice(0, id + 1),
        {
          system_properties: {
            active: true,
            waypoint_type: WaypointType.Waypoint,
          },
        },
        ...state.waypoints.slice(id + 1),
      ];

      // @ts-ignore
      state.waypoints = updateWaypointsIndex(updatedWaypoints);
    },
    changeActiveWaypoint: () => {
      console.log('changeActiveWaypoint');
    },
    changePermittedAmenity: (state, { payload }: PayloadAction<IChangePermittedAmenityPayload>) => {
      const { amenityName, amenityValue } = payload;

      state.permittedAmenities[amenityName] = amenityValue;
    },
    changePermittedCountry: (state, { payload }: PayloadAction<IChangePermittedCountryPayload>) => {
      const { countryCode, countryValue } = payload;

      state.permittedCountries[countryCode] = countryValue;
    },
    changePermittedPlace: (state, { payload }: PayloadAction<IChangePermittedPlacePayload>) => {
      const { placeName, placeValue } = payload;

      state.permittedPlaces[placeName] = placeValue;
    },
    changeWaypoint: (state, { payload }: PayloadAction<IChangeWaypointPayload>) => {
      const { waypoint } = payload;

      state.waypoints[waypoint.system_properties.waypoint_id] = waypoint;
      // console.log('changeWaypoint state, action after', state);
    },
    changeWaypointComment: () => {
      //state.waypoints[id] = 1
    },
    clearWaypoint: (state, { payload }: PayloadAction<IClearWaypointPayload>) => {
      const { waypoint, id } = payload;

      console.log('clearWaypoint state, action before', state, waypoint);
      state.waypoints[id] = {
        system_properties: state.waypoints[id].system_properties,
      };
    },
    deleteWaypoint: (state, { payload }: PayloadAction<IDeleteWaypointPayload>) => {
      const { id } = payload;

      const updatedWaypoints = state.waypoints.filter((waypoint) => {
        return id !== waypoint.system_properties.waypoint_id;
      });

      state.waypoints = updateWaypointsIndex(updatedWaypoints);
    },
    setLastCoordinates: (state, { payload }: PayloadAction<ISetLastCoordinatesPayload>) => {
      const { coordinates } = payload;

      state.lastCoordinates = coordinates;
    },
    setReplacingWaypointId: (state, { payload }: PayloadAction<ISetReplacingWaypointIdPayload>) => {
      const { id } = payload;

      state.replacingWaypointId = id;
    },
    setRoutes: (state, { payload }: PayloadAction<ISetRoutesPayload>) => {
      const { routes } = payload;

      state.routes = routes ?? null;
    },
    setSelectedRoute: (state, { payload }: PayloadAction<ISetSelectedRoutePayload>) => {
      const { routeId } = payload;

      state.selectedRoute =
        routeId !== null && state.routes !== null ? state.routes[routeId] : null;
    },
    swapWaypointsPosition: (state, { payload }: PayloadAction<ISwapWaypointPositionPayload>) => {
      const { replaceableWaypointId, replacingWaypointId } = payload;
      const temp = state.waypoints[replaceableWaypointId];

      const updatedWaypoints = [...state.waypoints];
      updatedWaypoints[replaceableWaypointId] = updatedWaypoints[replacingWaypointId];
      updatedWaypoints[replacingWaypointId] = temp;

      state.waypoints = updateWaypointsIndex(updatedWaypoints);
    },
  },
});

export const {
  addWaypoint,
  clearWaypoint,
  changeActiveWaypoint,
  changePermittedAmenity,
  changePermittedCountry,
  changePermittedPlace,
  changeWaypoint,
  changeWaypointComment,
  deleteWaypoint,
  setRoutes,
  setLastCoordinates,
  setSelectedRoute,
  swapWaypointsPosition,
  setReplacingWaypointId,
} = routeSlice.actions;
export default routeSlice.reducer;
