import cx from 'classnames';
import React, { FC } from 'react';

import css from './Checkbox.module.scss';
import { ICheckbox } from './Checkbox.types';

const Checkbox: FC<ICheckbox> = (props) => {
  const { checked = false, disabled = false, label, onChange, value } = props;

  return (
    <label className={cx(css.checkbox, disabled && css.disabled, { checked: checked })}>
      <input
        className={css.field}
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
      <span className={css.label}>{label}</span>
    </label>
  );
};

export { Checkbox };
