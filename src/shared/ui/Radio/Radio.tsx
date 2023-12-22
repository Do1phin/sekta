import cx from 'classnames';
import React, { FC } from 'react';

import css from './Radio.module.scss';

export interface IRadioProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  value: string;
}

const Radio: FC<IRadioProps> = (props) => {
  const {
    checked = false,
    disabled = false,
    onChange,
    onMouseEnter,
    onMouseLeave,
    label,
    value,
  } = props;

  return (
    <label
      className={cx(css.radio, { [css.disabled]: disabled, [css.checked]: checked })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <input
        className={css.field}
        type='radio'
        checked={checked}
        disabled={disabled}
        onChange={onChange && onChange}
        value={value}
      />
      <span className={css.label}>{label}</span>
    </label>
  );
};

export { Radio };
