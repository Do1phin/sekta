import type { StyleTypes } from '../../types/componentTypes';
import cx from 'classnames';
import { DefaultTFuncReturn } from 'i18next';
import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  HTMLInputTypeAttribute,
  ReactNode,
  useRef,
} from 'react';

import css from './Input.module.scss';
import icons from '../../icons/icons.svg';

interface IInputProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  helper?: string | DefaultTFuncReturn;
  icon?: string;
  label?: string | DefaultTFuncReturn;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string | DefaultTFuncReturn;
  style?: StyleTypes;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

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

  const ref = useRef(null);

  const setFocus = () => {
    if (ref.current) {
      // @ts-ignore
      ref.current.focus();
    }
  };

  return (
    <div
      className={cx(
        css.input,
        style && css[style],
        icon && css['with-icon'],
        disabled && css.disabled,
        className,
      )}>
      {label && (
        <label className={css.label} onClick={setFocus}>
          {label}
        </label>
      )}
      <div className={css.field}>
        {children}
        <input
          disabled={disabled}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder ?? ''}
          ref={ref}
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
