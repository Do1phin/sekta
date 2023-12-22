import type { WaypointType } from '../../../find-address/api/types';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import css from './TypeSelector.module.scss';
import { getWaypointTypeName, waypointTypes } from '../../../create-waypoint/helpers/mapHelpers';
import { TypeButton } from '../../index';

interface ITypeSelectorProps {
  newWaypointType: string;
  setNewWaypointType: Dispatch<SetStateAction<WaypointType>>;
}

const TypeSelector: FC<ITypeSelectorProps> = (props) => {
  const { setNewWaypointType, newWaypointType } = props;

  const { t } = useTranslation();

  return (
    <div className={css['type-selector']}>
      {waypointTypes?.map((type, index) => (
        <TypeButton
          key={type}
          btnId={index}
          title={t(getWaypointTypeName(type))}
          type={type}
          newWaypointType={newWaypointType}
          // @ts-ignore
          setNewWaypointType={() => setNewWaypointType(type)}
        />
      ))}
    </div>
  );
};

export { TypeSelector };
