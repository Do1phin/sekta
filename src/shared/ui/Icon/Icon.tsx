import cx from 'classnames';
import React, { FC } from 'react';

import css from './Icon.module.scss';
import icons from '../../icons/icons.svg';
import { ExtendSizeTypes, ExtendStyleTypes } from '../../types/componentTypes';

interface IIconProps {
  icon: string;
  size?: ExtendSizeTypes;
  style?: ExtendStyleTypes;
}

const Icon: FC<IIconProps> = (props) => {
  const { style = '', icon = '', size = 'normal' } = props;

  return (
    <picture className={cx(css.icon, css[style], css[size])}>
      <svg>
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    </picture>
  );
};

export { Icon };
