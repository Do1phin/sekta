import cx from 'classnames';
import React, { FC } from 'react';

import css from './Notification.module.scss';
import { INotificationProps } from './Notification.types';
import { Icon } from '../index';

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
          <span className={css.label}>{label}</span>
          <div className={css['close-btn']}>
            <Icon icon='x' onClick={onCloseClick} />
          </div>
        </div>
        <span className={css.message}>{message}</span>
      </div>
    </div>
  );
};

export { Notification };
