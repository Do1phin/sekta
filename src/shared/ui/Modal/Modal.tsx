import type { ExtendStyleTypes } from '../../types/componentTypes';
import cx from 'classnames';
import React, { FC } from 'react';

import css from './Modal.module.scss';
import { Button, Icon } from '../';

interface IModalProps {
  icon?: string;
  isOpen?: boolean;
  label: string;
  message: string;
  onCancelClick: () => void;
  onCloseClick: () => void;
  onOkClick: () => void;
  style?: ExtendStyleTypes;
}

const Modal: FC<IModalProps> = (props) => {
  const {
    icon,
    isOpen = true,
    onCloseClick,
    onOkClick,
    onCancelClick,
    label,
    message,
    style,
  } = props;

  return (
    <div className={cx(css.modal, { [css.close]: !isOpen, [css.style]: style })}>
      {icon && (
        <div className={css.icon}>
          <Icon icon={icon} style={style} />
        </div>
      )}
      <div className={css.content}>
        <div className={css.header}>
          <label className={css.label}>{label}</label>
          <div className={css['close-btn']}>
            <Button
              icon='x'
              onClick={onCloseClick}
              style={'basic'}
              type={'default'}
              size={'mega'}
            />
          </div>
        </div>
        <span className={css.message}>{message}</span>
        <div className={css.controls}>
          <Button onClick={onOkClick} type={'primary'} style={style} text={'Okay'} />
          <Button onClick={onCancelClick} type={'secondary'} style={style} text={'Cancel'} />
        </div>
      </div>
    </div>
  );
};

export { Modal };
