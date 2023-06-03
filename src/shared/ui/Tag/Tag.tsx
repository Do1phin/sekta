import cx from 'classnames';
import React, { FC } from 'react';

import css from './Tag.module.scss';
import { ITagProps } from './Tag.types';
import icons from '../../icons/icons.svg';

const Tag: FC<ITagProps> = (props) => {
  const {
    disabled = 'false',
    icon,
    iconPosition = 'left',
    style = 'basic',
    size = 'normal',
    text,
  } = props;

  return (
    <div className={cx(css.tag, css[style], css[iconPosition], disabled && css.disabled)}>
      {icon && (
        <picture className={cx(css.icon, css[size])}>
          <svg>
            <use xlinkHref={`${icons}#${icon}`} />
          </svg>
        </picture>
      )}
      {text && <span className={cx(css.text, css[size])}>{text}</span>}
    </div>
  );
};

export { Tag };
