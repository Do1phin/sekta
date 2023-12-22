import type {
  ExtendSizeTypes,
  ExtendStyleTypes,
  IconPositionTypes,
  TypeTypes,
} from '../../types/componentTypes';
import cx from 'classnames';
import { DefaultTFuncReturn } from 'i18next';
import React, { FC } from 'react';

import css from './Button.module.scss';
import spinner from '../../icons/3dot-spinner.svg';
import icons from '../../icons/icons.svg';

interface IButtonProps {
  classes?: string;
  disabled?: boolean;
  icon?: string;
  iconPosition?: IconPositionTypes;
  loader?: boolean;
  onClick: () => void;
  size?: ExtendSizeTypes;
  style?: ExtendStyleTypes;
  text?: DefaultTFuncReturn | string | undefined;
  title?: string | DefaultTFuncReturn | undefined;
  type?: TypeTypes | 'default';
}

const Button: FC<IButtonProps> = (props) => {
  const {
    classes = '',
    disabled = false,
    icon,
    iconPosition = 'left',
    onClick,
    size = 'normal',
    style = 'basic',
    text,
    type = 'primary',
    loader = false,
    title,
  } = props;

  return (
    <button
      aria-label={'Delete waypoint'}
      className={cx(
        css.button,
        style && css[style],
        size && css[size],
        type && css[type],
        icon && css[iconPosition],
        text ? css.text : css['icon-only'],
        ...classes,
      )}
      disabled={disabled}
      onClick={onClick}
      // @ts-ignore
      title={icon && !text && title}>
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
