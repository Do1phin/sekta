import cx from 'classnames';
import React, { FC } from 'react';

import css from './Icon.module.scss';
import icons from '../../icons/icons.svg';

type StateType = 'default' | 'primary' | 'success' | 'info' | 'danger' | 'warning';
type IconSize = 'small' | 'normal' | 'large' | 'extra-large' | 'mega';

interface IIconProps {
  icon: string;
  size?: IconSize;
  state?: StateType;
}

const Icon: FC<IIconProps> = (props) => {
  const { state = '', icon = '', size = 'normal' } = props;

  return (
    <span className={cx(css.icon, css[state], css[size])}>
      <svg>
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    </span>
  );
};

export { Icon };
