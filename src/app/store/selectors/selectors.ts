import { RootState } from '../index';

export const selectRoutes = (state: RootState) => state.route.routes;
export const selectWaypoints = (state: RootState) => state.route.waypoints;
export const selectCurrentRoute = (state: RootState) => state.route.selectedRoute;
export const selectLastCoordinates = (state: RootState) => state.route.lastCoordinates;
export const selectPermittedAmenities = (state: RootState) => state.route.permittedAmenities;
export const selectPermittedCountries = (state: RootState) => state.route.permittedCountries;
export const selectPermittedPlaces = (state: RootState) => state.route.permittedPlaces;
export const selectReplacingWaypointId = (state: RootState) => state.route.replacingWaypointId;
