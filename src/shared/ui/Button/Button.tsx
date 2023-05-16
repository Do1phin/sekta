import type {
  IconPositionTypes,
  SizeTypes,
  StyleTypes,
  TypeTypes,
} from '../../types/componentTypes';
import cx from 'classnames';
import React, { FC } from 'react';

import css from './Button.module.scss';
import icons from '../../icons/icons.svg';

interface IButtonProps {
  disabled?: boolean;
  icon?: string;
  iconPosition?: IconPositionTypes;
  onClick: () => void;
  size?: SizeTypes;
  style?: StyleTypes;
  text?: string;
  type?: TypeTypes;
}

const Button: FC<IButtonProps> = (props) => {
  const {
    disabled = false,
    icon,
    iconPosition,
    onClick,
    size = 'normal',
    style,
    text,
    type = 'primary',
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
      {icon && (
        <svg className={css.icon}>
          <use xlinkHref={`${icons}#${icon}`} />
        </svg>
      )}
      {text && <span className={css.text}>{text}</span>}
    </button>
  );
};

export { Button };
