import type { ButtonStateTypes, IconPositionTypes, SizeTypes } from '../../types/componentTypes';
import cx from 'classnames';
import React, { FC } from 'react';

import css from './Button.module.scss';
import { Icon } from '../index';

interface IButtonProps {
  disabled?: boolean;
  icon?: string;
  iconPosition?: IconPositionTypes;
  onClick: () => void;
  size?: SizeTypes;
  state: ButtonStateTypes;
  text?: string;
}

const Button: FC<IButtonProps> = (props) => {
  const { disabled, icon, iconPosition, onClick, size, state, text } = props;

  return (
    <button
      className={cx(
        css.button,
        css[state],
        icon && css[iconPosition],
        text ? css['text'] : css['icon'],
        css[size],
      )}
      disabled={disabled}
      onClick={onClick}>
      {icon && <Icon icon={icon} />}
      {text}
    </button>
  );
};

export { Button };
