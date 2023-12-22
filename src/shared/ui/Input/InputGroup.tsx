import { DefaultTFuncReturn } from 'i18next';
import React, { FC, ReactNode } from 'react';

import css from './Input.module.scss';

interface IInputGroupProps {
  children: ReactNode;
  label?: string | DefaultTFuncReturn;
}

const InputGroup: FC<IInputGroupProps> = (props) => {
  const { children, label } = props;

  return (
    <div className={css['input-group']}>
      {label && <label className={css.label}>{label}</label>}
      <div className={css['inputs']}>{children}</div>
    </div>
  );
};

export { InputGroup };
