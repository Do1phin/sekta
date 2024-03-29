import cx from 'classnames';
import React, { FC } from 'react';

import css from './Text.module.scss';
import { ExtendStyleTypes } from '../../types/componentTypes';

interface ITextProps {
  children: string;
  className?: string;
  fontSize?: string;
  style?: ExtendStyleTypes;
}

const Text: FC<ITextProps> = (props) => {
  const { children, className = '', fontSize = '14px', style = 'basic' } = props;

  return (
    <span className={cx(css.text, css[style], className)} style={{ fontSize: fontSize }}>
      {children}
    </span>
  );
};

export { Text };
