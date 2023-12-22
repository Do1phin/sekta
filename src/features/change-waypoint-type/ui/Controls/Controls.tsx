import type { IInitialWaypoint, IWaypoint } from '../../../find-address/api/types';
import React, { FC } from 'react';

import css from './Controls.module.scss';
import { useAppDispatch } from '../../../../app/store/hooks';
import { changeWaypoint } from '../../../../app/store/routeSlice';
import { Button } from '../../../../shared/ui';
import { WaypointType } from '../../../find-address/api/types';

interface IControlsProps {
  newWaypointType: WaypointType;
  setEditableWaypoint: (bool: boolean) => void;
  waypoint: IWaypoint | IInitialWaypoint;
}

const Controls: FC<IControlsProps> = (props) => {
  const { setEditableWaypoint, newWaypointType, waypoint } = props;

  const dispatch = useAppDispatch();

  const saveWaypointBtnHandler = () => {
    dispatch(
      // @ts-ignore
      changeWaypoint({
        waypoint: {
          ...waypoint,
          system_properties: {
            ...waypoint.system_properties,
            waypoint_type: newWaypointType,
          },
        },
      }),
    );
  };

  const cancelWaypointUpdateBtnHandler = () => {
    setEditableWaypoint(false);
  };

  return (
    <div className={css.controls}>
      <Button onClick={saveWaypointBtnHandler} type={'default'} icon={'check'} size={'large'} />
      <Button
        onClick={cancelWaypointUpdateBtnHandler}
        type={'default'}
        icon={'cancel'}
        size={'large'}
      />
    </div>
  );
};

export { Controls };
