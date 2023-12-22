import type { IInitialWaypoint, IWaypoint } from '../../../find-address/api/types';
import cx from 'classnames';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import css from './ChangeWaypointType.module.scss';
import { getWaypointTypeName } from '../../../create-waypoint/helpers/mapHelpers';
import { Controls } from '../Controls/Controls';
import { TypeSelector } from '../TypeSelector/TypeSelector';

interface IChangeWaypointTypeProps {
  setEditableWaypoint: (flag: boolean) => void;
  waypoint: IWaypoint | IInitialWaypoint;
}

const ChangeWaypointType: FC<IChangeWaypointTypeProps> = (props) => {
  const { setEditableWaypoint, waypoint } = props;

  const [newWaypointType, setNewWaypointType] = useState(waypoint.system_properties.waypoint_type);

  const { t } = useTranslation();

  return (
    <>
      <TypeSelector newWaypointType={newWaypointType} setNewWaypointType={setNewWaypointType} />
      <Controls
        setEditableWaypoint={setEditableWaypoint}
        newWaypointType={newWaypointType}
        waypoint={waypoint}
      />
      <label
        className={cx(css.label, css[newWaypointType])}
        style={{ bottom: '-20px', position: 'absolute' }}>
        {t(getWaypointTypeName(newWaypointType))}
      </label>
    </>
  );
};

export { ChangeWaypointType };
