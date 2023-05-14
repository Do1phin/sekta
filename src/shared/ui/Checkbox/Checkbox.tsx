import cx from 'classnames';
import React, { FC } from 'react';

import css from './Checkbox.module.scss';

interface ICheckbox {
  checked: boolean;
  disabled?: boolean;
  label: string;
  onChange: () => void;
  value: string;
}

const Checkbox: FC<ICheckbox> = (props) => {
  const { checked, disabled, label, onChange, value } = props;

  return (
    <label className={cx(css['custom-checkbox'], { checked: checked, disabled: disabled })}>
      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
      <span>{label}</span>
    </label>
  );
};

export { Checkbox };
