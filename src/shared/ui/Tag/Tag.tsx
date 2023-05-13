import type { IconPositionTypes, StateTypes } from '../../types/componentTypes';
import cx from 'classnames';
import React, { FC } from 'react';

import css from './Tag.module.scss';
import { Icon, Text } from '../index';

interface ITagProps {
  fontSize: string;
  icon?: string;
  iconPosition?: IconPositionTypes;
  state?: StateTypes;
  text: string;
}

const Tag: FC<ITagProps> = (props) => {
  const { icon, iconPosition, state, fontSize, text } = props;

  return (
    <div className={cx(css.tag, css[state], css[iconPosition || 'left'])}>
      {icon && <Icon icon={icon} />}
      {text && (
        <Text fontSize={fontSize} state={props.state || 'default'}>
          {text}
        </Text>
      )}
    </div>
  );
};

export { Tag };
