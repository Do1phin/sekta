import cx from 'classnames';
import React, { FC } from 'react';

import css from './Text.module.scss';
import { StateTypes } from '../../types/componentTypes';

interface ITextProps {
  children: string;
  fontSize: string;
  state: StateTypes;
}

const Text: FC<ITextProps> = (props) => {
  const { children, fontSize = '14px', state = 'default' } = props;

  return (
    <span style={{ fontSize: fontSize }} className={cx(css.text, css[state])}>
      {children}
    </span>
  );
};

export { Text };
