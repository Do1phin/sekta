import React, { FC } from 'react';

import css from './DeleteWaypointBtn.module.scss';
import { useAppDispatch } from '../../../../app/store/hooks';
import { deleteWaypoint } from '../../../../app/store/routeSlice';
import { Button } from '../../../../shared/ui';

interface IClearWaypoint {
  disabled?: boolean;
  waypointId: number;
}

const DeleteWaypointBtn: FC<IClearWaypoint> = (props) => {
  const { disabled = false, waypointId } = props;

  const dispatch = useAppDispatch();

  const btnClickHandler = () => {
    console.log('DeleteWaypointBtn osm_id', waypointId);
    dispatch(deleteWaypoint({ id: waypointId }));
  };

  // TODO: Remove Waypoint by osm_id or place_id

  return (
    <div className={css.button}>
      <Button
        disabled={disabled}
        onClick={btnClickHandler}
        icon={'trash-full'}
        style={'danger'}
        size={'large'}
        type={'secondary'}
        // title={t('component.waypoint.delete-waypoint-title')}
      />
    </div>
  );
};

export { DeleteWaypointBtn };
