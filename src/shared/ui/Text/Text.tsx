import cx from 'classnames';
import React, { FC } from 'react';

import css from './Text.module.scss';
import { ExtendStyleTypes } from '../../types/componentTypes';

interface ITextProps {
  children: string;
  fontSize?: string;
  style?: ExtendStyleTypes;
}

const Text: FC<ITextProps> = (props) => {
  const { children, fontSize = '14px', style = 'default' } = props;

  return (
    <span style={{ fontSize: fontSize }} className={cx(css.text, css[style])}>
      {children}
    </span>
  );
};

export { Text };
