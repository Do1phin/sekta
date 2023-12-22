import { PayloadAction } from '@reduxjs/toolkit';

import { WaypointType } from '../../../features/find-address/api/types';
import routeReducer, {
  addWaypoint,
  changeWaypoint,
  deleteWaypoint,
  setReplacingWaypointId,
  swapWaypointsPosition,
} from '../routeSlice';
import { initialWaypoints } from '../state/initialWaypoints';
import { permittedAmenities } from '../state/permittedAmenities';
import { permittedCountries } from '../state/permittedCountries';
import { permittedPlaces } from '../state/permittedPlaces';
import { IAddWaypointPayload, IInitialState } from '../types';

const initialState: IInitialState = {
  lastCoordinates: '',
  permittedAmenities,
  permittedCountries,
  permittedPlaces,
  replacingWaypointId: null,
  routes: null,
  selectedRoute: null,
  waypoints: initialWaypoints,
};

describe('routeSlice', () => {
  it('should return state when passed an empty action', () => {
    const action = {
      type: '',
    };

    const result = routeReducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('should add new waypoint with "addWaypoint" action', () => {
    const action: PayloadAction<IAddWaypointPayload> = {
      payload: { id: 1 },
      type: addWaypoint.type,
    };

    const result = routeReducer(initialState, action);

    expect(result.waypoints[0].system_properties.waypoint_id).toBe(0);
    expect(result.waypoints[1].system_properties.waypoint_id).toBe(1);
    expect(result.waypoints[2].system_properties.waypoint_id).toBe(2);
    expect(result.waypoints).toHaveLength(6);
  });

  it('should change waypoint with "changeWaypoint" action', () => {
    const newWaypoint = {
      system_properties: {
        active: true,
        waypoint_id: 1,
        waypoint_type: WaypointType.Waypoint,
      },
    };

    const action: PayloadAction = {
      // @ts-ignore
      payload: { id: 1, waypoint: newWaypoint },
      // @ts-ignore
      type: changeWaypoint.type,
    };

    const result = routeReducer(initialState, action);

    expect(result.waypoints[1].system_properties.waypoint_type).toBe('waypoint');
  });

  it('should delete current waypoint with "deleteWaypoint" action', () => {
    const action = {
      payload: { id: 1 },
      type: deleteWaypoint.type,
    };

    const result = routeReducer(initialState, action);
    expect(result.waypoints[1].system_properties.waypoint_type).not.toBe('customs_registration');
    expect(result.waypoints[1].system_properties.waypoint_id).toBe(1);
  });

  it('should change waypoint id for replacing with "setReplacingWaypointId" action', () => {
    const action = {
      payload: { id: 7 },
      type: setReplacingWaypointId.type,
    };

    const result = routeReducer(initialState, action);

    expect(result.replacingWaypointId).toBe(7);
  });

  // it('should set routes with "setRoutes" action', () => {
  //
  // })

  // it('should change coordinates with "setLastCoordinates" action', () => {
  //   const action: PayloadAction = {
  //     type: setLastCoordinates.type,
  //     payload: { ...initialState, lastCoordinates: '100500' },
  //   };
  //
  //   const result = routeReducer(initialState, action);
  //
  //   expect(result.lastCoordinates).toBe('100500');
  // });

  // it('should change selected route with "setSelectedRoute" action', () => {
  //
  // })

  it('should swap waypoints position with "swapWaypointsPosition" action', () => {
    const action = {
      payload: {
        replaceableWaypointId: 3,
        replacingWaypointId: 1,
      },
      type: swapWaypointsPosition.type,
    };

    const result = routeReducer(initialState, action);

    expect(result.waypoints[1].system_properties.waypoint_type).toBe('customs_clearance');
    expect(result.waypoints[3].system_properties.waypoint_type).toBe('customs_registration');
  });
});
