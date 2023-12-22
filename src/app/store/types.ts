import type {
  CountryCodeType,
  IInitialWaypoint,
  IRoute,
  IWaypoint,
  OSMAmenities,
  PlaceNameType,
} from '../../features/find-address/api/types';

import {
  PermittedAmenities,
  PermittedCountries,
  PermittedPlaces,
} from '../../features/find-address/api/types';

interface IInitialState {
  lastCoordinates: string;
  permittedAmenities: PermittedAmenities;
  permittedCountries: PermittedCountries;
  permittedPlaces: PermittedPlaces;
  replacingWaypointId: number | null;
  routes: IRoute[] | null;
  selectedRoute: IRoute | null;
  waypoints: IInitialWaypoint[] | IWaypoint[];
  //cargoSettings: ICargoSettingsData
}

interface IAddWaypointPayload {
  id: number;
}

interface IChangePermittedPlacePayload {
  placeName: PlaceNameType;
  placeValue: boolean;
}

interface IChangePermittedAmenityPayload {
  amenityName: OSMAmenities;
  amenityValue: boolean;
}

interface IChangePermittedCountryPayload {
  countryCode: CountryCodeType;
  countryValue: boolean;
}

interface IChangeWaypointPayload {
  id: number;
  waypoint: IWaypoint | IInitialWaypoint;
}

interface IClearWaypointPayload {
  id: number;
  waypoint: IWaypoint | IInitialWaypoint;
}

interface IDeleteWaypointPayload {
  id: number;
}

interface ISetRoutesPayload {
  routes: IRoute[] | null;
}

interface ISetSelectedRoutePayload {
  routeId: number | null;
}

interface ISetReplacingWaypointIdPayload {
  id: number;
}

interface ISetLastCoordinatesPayload {
  coordinates: string;
}

interface ISwapWaypointPositionPayload {
  replaceableWaypointId: number;
  replacingWaypointId: number;
}

export {
  IAddWaypointPayload,
  IClearWaypointPayload,
  IChangePermittedAmenityPayload,
  IChangePermittedCountryPayload,
  IChangePermittedPlacePayload,
  IChangeWaypointPayload,
  IDeleteWaypointPayload,
  ISetLastCoordinatesPayload,
  ISetReplacingWaypointIdPayload,
  ISetRoutesPayload,
  ISetSelectedRoutePayload,
  ISwapWaypointPositionPayload,
  IInitialState,
};
