import type { ISelectItemProps } from './Select.types';
import cx from 'classnames';
import React, { FC } from 'react';

import css from './Select.module.scss';
import { Icon } from '../';

const SelectItem: FC<ISelectItemProps> = (props) => {
  const { classes, item, index, onClick, selectedValue } = props;

  const itemTitle = [item.description, item.title, item.subtitle].join(', ');

  return (
    <div
      className={cx({
        [css.item]: true,
        [css.selected]: selectedValue?.value === item.value,
        classes,
      })}
      onClick={onClick}
      role='button'
      tabIndex={index}
      // key={item.value}
      data-value={item.value}>
      {item.icon && (
        <div className={css['item-icon']}>
          <Icon icon={item.icon} size={'normal'} />
        </div>
      )}
      <div className={css['item-text']} title={itemTitle}>
        {item.title && <span className={css['item-title']}>{item.title}</span>}
        {item.subtitle && <span className={css['item-subtitle']}>{item.subtitle}</span>}
      </div>
    </div>
  );
};

export { SelectItem };
