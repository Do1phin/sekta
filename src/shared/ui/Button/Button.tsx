import cx from 'classnames';
import React, { FC } from 'react';

import css from './Button.module.scss';
import { IButtonProps } from './Button.types';
import spinner from '../../icons/3dot-spinner.svg';
import icons from '../../icons/icons.svg';

const Button: FC<IButtonProps> = (props) => {
  const {
    disabled = false,
    icon,
    iconPosition = 'left',
    onClick,
    size = 'normal',
    style,
    text,
    type = 'primary',
    loader = false,
  } = props;

  return (
    <button
      className={cx(
        css.button,
        style && css[style],
        size && css[size],
        type && css[type],
        icon && css[iconPosition],
        text ? css.text : css['icon-only'],
      )}
      disabled={disabled}
      onClick={onClick}>
      {icon && !loader && (
        <svg className={css.icon}>
          <use xlinkHref={`${icons}#${icon}`} />
        </svg>
      )}
      {text && !loader && <span className={css.text}>{text}</span>}
      {loader && (
        <svg className={css.loading}>
          <use xlinkHref={`${spinner}`} />
        </svg>
      )}
    </button>
  );
};

export { Button };
