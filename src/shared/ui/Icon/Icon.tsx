import type { ExtendSizeTypes, ExtendStyleTypes } from '../../types/componentTypes';
import cx from 'classnames';
import React, { FC } from 'react';

import css from './Icon.module.scss';
import icons from '../../icons/icons.svg';

interface IIconProps {
  icon: string;
  size?: ExtendSizeTypes;
  style?: ExtendStyleTypes;
}

const Icon: FC<IIconProps> = (props) => {
  const { style = 'basic', icon = '' } = props;

  return (
    <div className={cx(css.icon, { [css[style]]: style })}>
      <svg>
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    </div>
  );
};

export { Icon };
