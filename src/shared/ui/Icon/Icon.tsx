import cx from 'classnames';
import React, { FC } from 'react';

import css from './Icon.module.scss';
import { IIconProps } from './Icon.types';
import icons from '../../icons/icons.svg';

const Icon: FC<IIconProps> = (props) => {
  const { style = '', icon = '', onClick, size = 'normal' } = props;

  return (
    <button
      className={cx(css.icon, css[style], css[size], onClick && css.cursor)}
      onClick={onClick}>
      <svg>
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    </button>
  );
};

export { Icon };
