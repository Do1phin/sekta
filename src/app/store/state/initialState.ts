import { initialWaypoints } from './initialWaypoints';
import { permittedAmenities } from './permittedAmenities';
import { permittedCountries } from './permittedCountries';
import { permittedPlaces } from './permittedPlaces';
import { IInitialState } from '../types';

export const initialState: IInitialState = {
  lastCoordinates: '',
  permittedAmenities,
  permittedCountries,
  permittedPlaces,
  replacingWaypointId: null,
  routes: null,
  selectedRoute: null,
  waypoints: initialWaypoints,
};
