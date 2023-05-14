import cx from 'classnames';
import React, { FC } from 'react';

import css from './Radio.module.scss';

interface IRadioProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: () => void;
  value: string;
}

const Radio: FC<IRadioProps> = (props) => {
  const { checked, disabled, onChange, label, value } = props;

  return (
    <label className={cx(css['custom-radio'], { checked: checked, disabled: disabled })}>
      <input type='radio' checked={checked} disabled={disabled} onChange={onChange} value={value} />
      <span>{label}</span>
    </label>
  );
};

export { Radio };
