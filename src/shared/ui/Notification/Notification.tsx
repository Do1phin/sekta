import cx from 'classnames';
import React, { FC } from 'react';

import css from './Notification.module.scss';
import { StateTypes } from '../../types/componentTypes';
import { Icon, Text } from '../index';

interface INotificationProps {
  header: string;
  icon?: string;
  isOpen?: boolean;
  message: string;
  onClose: (boolean) => void;
  state: StateTypes;
}

const Notification: FC<INotificationProps> = (props) => {
  const { header, icon, isOpen = true, onClose, message, state } = props;

  return (
    <div className={cx(css.notification, css[state], { [css.close]: !isOpen })}>
      {icon && (
        <div className={css.notification__icon}>
          <Icon icon={icon} state={state} />
        </div>
      )}
      <div className={css.notification__content}>
        <div className={css.notification__header}>
          <Text className={css.notification__label} fontSize={'20px'} state={'default'}>
            {header}
          </Text>
          <div className={css['notification__close-btn']}>
            <Icon icon='x' onClick={() => onClose(!isOpen)} />
          </div>
        </div>
        <Text className={css.notification__message} fontSize={'16px'} state={'default'}>
          {message}
        </Text>
      </div>
    </div>
  );
};

export { Notification };
