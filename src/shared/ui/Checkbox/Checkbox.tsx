import cx from 'classnames';
import type { DefaultTFuncReturn } from 'i18next';
import React, { FC } from 'react';

import css from './Checkbox.module.scss';

interface ICheckboxProps {
  checked: boolean;
  disabled?: boolean;
  icon?: string;
  label: DefaultTFuncReturn | string | undefined;
  onChange: () => void;
  value: string;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
  const { checked = false, disabled = false, icon, label, onChange, value } = props;

  return (
    <label
      className={cx(css.checkbox, {
        checked: checked,
        [css.icon]: icon,
        [css.disabled]: disabled,
      })}>
      <input
        className={css.field}
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />

      <span className={css.label}>{label}</span>
      {icon && <img src={icon} alt={value} className={css.icon} />}
    </label>
  );
};

export { Checkbox };
export type { ICheckboxProps };
