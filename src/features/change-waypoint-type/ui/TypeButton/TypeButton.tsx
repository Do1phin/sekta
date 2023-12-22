import cx from 'classnames';
import React, { FC } from 'react';

import css from './TypeButton.module.scss';

interface ITypeButtonProps {
  btnId: number;
  newWaypointType: string;
  setNewWaypointType: () => void;
  title: string;
  type: string;
}

const TypeButton: FC<ITypeButtonProps> = (props) => {
  const { btnId, type, title, newWaypointType, setNewWaypointType } = props;

  const btnClasses = cx(css['type-button'], css[type], css['btn' + btnId], {
    [css['selected']]: newWaypointType === type,
  });

  return (
    <span title={title} className={btnClasses} onClick={setNewWaypointType} tabIndex={0}></span>
  );
};

export { TypeButton };
