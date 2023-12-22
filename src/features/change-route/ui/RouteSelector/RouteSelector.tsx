import type { IRoute } from '../../../find-address/api/types';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import css from './RouteSelector.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { setSelectedRoute } from '../../../../app/store/routeSlice';
import {
  selectCurrentRoute,
  selectRoutes,
  selectWaypoints,
} from '../../../../app/store/selectors/selectors';
import { Button } from '../../../../shared/ui';
import { countWaypointsWithFilledData } from '../../../../widgets/Route/helpers/routeHelpers';
import { unitsCalc } from '../../helpers/changeRouteHelper';

interface IRouteSelectorProps {
  setCurrentCountFilledDataWaypoints: (count: number) => void;
}

const RouteSelector: FC<IRouteSelectorProps> = (props) => {
  const { setCurrentCountFilledDataWaypoints } = props;

  const routes = useAppSelector(selectRoutes);
  const selectedRoute = useAppSelector(selectCurrentRoute);
  const waypoints = useAppSelector(selectWaypoints);

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const selectRoute = (routeIndex: number) => {
    setCurrentCountFilledDataWaypoints(countWaypointsWithFilledData(waypoints));
    return dispatch(setSelectedRoute({ routeId: routeIndex }));
  };

  const createButtonText = (distance: number) => {
    return (
      Math.ceil(unitsCalc.metresToKilometres(distance)) +
      ' ' +
      t('component.route-selector.units-short.km')
    );
  };

  const shouldSelectedRoute = (route: IRoute) => {
    if (selectedRoute) {
      return route?.distance === selectedRoute?.distance;
    }
  };

  return (
    <div className={css['route-selector']}>
      {routes?.map((route, index) => (
        <Button
          onClick={() => selectRoute(index)}
          key={route.distance}
          text={createButtonText(route?.distance)}
          icon={shouldSelectedRoute(route) ? 'crosshair' : ''}
          iconPosition={'right'}
          type={shouldSelectedRoute(route) ? 'primary' : 'tertiary'}
        />
      ))}
    </div>
  );
};

export { RouteSelector };
