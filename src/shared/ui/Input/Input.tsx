import cx from 'classnames';
import React, { FC } from 'react';

import css from './Input.module.scss';
import icons from '../../icons/icons.svg';
import { StyleTypes } from '../../types/componentTypes';

interface IInputProps {
  children?: string;
  disabled?: boolean;
  helper?: string;
  icon?: string;
  label?: string;
  onChange: () => void;
  placeholder?: string;
  style?: StyleTypes;
}

const Input: FC<IInputProps> = (props) => {
  const {
    disabled = false,
    children,
    placeholder,
    helper,
    onChange,
    style = 'default',
    icon,
    label,
  } = props;

  return (
    <div className={cx(css.input, style && css[style])} disabled={disabled}>
      {label && <span className={css.input__label}>{label}</span>}
      <div className={css.input__input}>
        <input onChange={onChange} placeholder={placeholder ? placeholder : ''} value={children} />
        {icon && (
          <picture className={cx(css.input__icon)}>
            <svg>
              <use xlinkHref={`${icons}#${icon}`} />
            </svg>
          </picture>
        )}
      </div>
      {helper && (
        <span className={css.input__helper} disabled={disabled}>
          {helper}
        </span>
      )}
    </div>
  );
};

export { Input };
