import cx from 'classnames';
import React, { FC } from 'react';

import css from './Input.module.scss';
import { IInputProps } from './Input.types';
import icons from '../../icons/icons.svg';

const Input: FC<IInputProps> = (props) => {
  const {
    children,
    className = '',
    disabled = false,
    placeholder,
    helper,
    onBlur,
    onChange,
    style = 'basic',
    type = 'text',
    icon,
    label,
    value,
  } = props;

  return (
    <div className={cx(css.input, style && css[style], disabled && css.disabled, className)}>
      {label && <span className={css.label}>{label}</span>}
      <div className={css.field}>
        {children}
        <input
          disabled={disabled}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder ?? ''}
          value={value}
        />
        {icon && (
          <picture className={cx(css.icon)}>
            <svg>
              <use xlinkHref={`${icons}#${icon}`} />
            </svg>
          </picture>
        )}
      </div>
      {helper && <span className={cx(css.helper, disabled && css.disabled)}>{helper}</span>}
    </div>
  );
};

export { Input };
