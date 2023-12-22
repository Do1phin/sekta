import React, { FC } from 'react';

import { useAppDispatch } from '../../../../app/store/hooks';
import { changeActiveWaypoint } from '../../../../app/store/routeSlice';
import { Button } from '../../../../shared/ui';

interface IChangeActiveWaypointProps {
  activeFlag: boolean;
  waypointId: number;
}

const ChangeActiveWaypointBtn: FC<IChangeActiveWaypointProps> = (props) => {
  const { waypointId, activeFlag } = props;

  const dispatch = useAppDispatch();

  const btnClickHandler = () => {
    dispatch(changeActiveWaypoint({ id: waypointId }));
  };

  return (
    // <div className={css.button}>
    <Button onClick={btnClickHandler} icon={activeFlag ? 'inactive' : 'active'} size={'large'} />
    // </div>
  );
};

export { ChangeActiveWaypointBtn };
