import cx from 'classnames';
import React, { FC } from 'react';

import css from './Notification.module.scss';
import { ExtendStyleTypes } from '../../types/componentTypes';
import { Button, Icon } from '../index';

interface INotificationProps {
  icon?: string;
  isOpen?: boolean;
  label: string;
  message: string;
  onCloseClick: () => void;
  style: ExtendStyleTypes;
}

const Notification: FC<INotificationProps> = (props) => {
  const { label, icon, isOpen = true, onCloseClick, message, style } = props;

  return (
    <div className={cx(css.notification, css[style], { [css.close]: !isOpen })}>
      {icon && (
        <div className={css.icon}>
          <Icon icon={icon} style={style} />
        </div>
      )}
      <div className={css.content}>
        <div className={css.header}>
          <label className={css.label}>{label}</label>
          <div className={css['close-btn']}>
            <Button icon='x' onClick={onCloseClick} type={'default'} size={'mega'} />
          </div>
        </div>
        <span className={css.message}>{message}</span>
      </div>
    </div>
  );
};

export { Notification };
export type { INotificationProps };
