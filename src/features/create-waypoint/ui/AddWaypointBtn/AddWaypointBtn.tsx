import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../../../../app/store/hooks';
import { addWaypoint } from '../../../../app/store/routeSlice';
import { Button } from '../../../../shared/ui';

interface IAddWaypointBtn {
  waypointId: number;
}

const AddWaypointBtn: FC<IAddWaypointBtn> = (props) => {
  const { waypointId } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const addWaypointClickHandler = () => {
    return dispatch(addWaypoint({ id: waypointId }));
  };

  return (
    <Button
      onClick={addWaypointClickHandler}
      type={'tertiary'}
      text={t('component.waypoint.add-waypoint-title')}
    />
  );
};

export { AddWaypointBtn };
