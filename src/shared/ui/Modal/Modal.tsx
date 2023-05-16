import cx from 'classnames';
import React, { FC } from 'react';

import css from './Modal.module.scss';
import { Button, Icon } from '../';
import { StyleTypes } from '../../types/componentTypes';

interface IModalProps {
  icon?: string;
  isOpen?: boolean;
  label: string;
  message: string;
  onCancelClick: () => void;
  onCloseClick: () => void;
  onOkClick: () => void;
  style: StyleTypes;
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
    <div className={cx(css.modal, css[style], { [css.close]: !isOpen })}>
      {icon && (
        <div className={css.modal__icon}>
          <Icon icon={icon} style={style} />
        </div>
      )}
      <div className={css.modal__content}>
        <div className={css.modal__header}>
          <span className={css.modal__label}>{label}</span>
          <div className={css['modal__close-btn']}>
            <Icon icon='x' onClick={onCloseClick} />
          </div>
        </div>
        <span className={css.modal__message}>{message}</span>
        <div className={css.modal__controls}>
          <Button onClick={onOkClick} type={'primary'} style={style} text={'Okay'} />
          <Button onClick={onCancelClick} type={'secondary'} style={style} text={'Cancel'} />
        </div>
      </div>
    </div>
  );
};

export { Modal };
