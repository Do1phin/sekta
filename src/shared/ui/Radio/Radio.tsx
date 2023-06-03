import cx from 'classnames';
import React, { FC } from 'react';

import css from './Radio.module.scss';
import { IRadioProps } from './Radio.types';

const Radio: FC<IRadioProps> = (props) => {
  const { checked = false, disabled = false, onChange, label, value } = props;

  return (
    <label className={cx(css.radio, disabled && css.disabled, { checked: checked })}>
      <input
        className={css.field}
        type='radio'
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
      <span className={css.label}>{label}</span>
    </label>
  );
};

export { Radio };
