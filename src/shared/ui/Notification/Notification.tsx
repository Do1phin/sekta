import cx from 'classnames';
import React, { FC } from 'react';

import css from './Notification.module.scss';
import { StyleTypes } from '../../types/componentTypes';
import { Icon } from '../index';

interface INotificationProps {
  icon?: string;
  isOpen?: boolean;
  label: string;
  message: string;
  onCloseClick: () => void;
  style: StyleTypes;
}

const Notification: FC<INotificationProps> = (props) => {
  const { label, icon, isOpen = true, onCloseClick, message, style } = props;

  return (
    <div className={cx(css.notification, css[style], { [css.close]: !isOpen })}>
      {icon && (
        <div className={css.notification__icon}>
          <Icon icon={icon} style={style} />
        </div>
      )}
      <div className={css.notification__content}>
        <div className={css.notification__header}>
          <span className={css.notification__label}>{label}</span>
          <div className={css['notification__close-btn']}>
            <Icon icon='x' onClick={onCloseClick} />
          </div>
        </div>
        <span className={css.notification__message}>{message}</span>
      </div>
    </div>
  );
};

export { Notification };
