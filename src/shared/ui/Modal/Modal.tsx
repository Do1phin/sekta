import cx from 'classnames';
import React, { FC } from 'react';

import css from './Modal.module.scss';
import { IModalProps } from './Modal.types';
import { Button, Icon } from '../';

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
        <div className={css.controls}>
          <Button onClick={onOkClick} type={'primary'} style={style} text={'Okay'} />
          <Button onClick={onCancelClick} type={'secondary'} style={style} text={'Cancel'} />
        </div>
      </div>
    </div>
  );
};

export { Modal };
