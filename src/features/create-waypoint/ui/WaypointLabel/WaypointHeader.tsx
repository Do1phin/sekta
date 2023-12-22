import type { WaypointType } from '../../helpers/mapHelpers';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import css from './WaypointHeader.module.scss';
import { Button } from '../../../../shared/ui';

interface IWaypointLabelProps {
  isExtremeWaypoint: boolean;
  onChangeEditableWaypoint: (bool: boolean) => void;
  waypointType: WaypointType;
}

const WaypointHeader: FC<IWaypointLabelProps> = (props) => {
  const { onChangeEditableWaypoint, isExtremeWaypoint, waypointType } = props;
  const [isShow, setShow] = useState(false);

  const { t } = useTranslation();

  const changeEditingWaypointBtnHandler = () => {
    onChangeEditableWaypoint(true);
  };

  const mouseEnterHandler = () => {
    return !isExtremeWaypoint && setShow(true);
  };

  const mouseLeaveHandler = () => {
    return !isExtremeWaypoint && setShow(false);
  };

  return (
    <div className={css.header} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <label className={css.label}>{t(`component.waypoint-type.${waypointType}`)}</label>
      {isShow && (
        <div className={css['change-type-btn']}>
          <Button onClick={changeEditingWaypointBtnHandler} icon={'pencil'} type={'tertiary'} />
        </div>
      )}
    </div>
  );
};

export { WaypointHeader };
