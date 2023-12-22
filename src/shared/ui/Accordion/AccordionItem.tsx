import cx from 'classnames';
import React, { FC, useState } from 'react';

import css from './Accordion.module.scss';
import icons from '../../icons/icons.svg';

interface AccordionItemProps {
  appendLabel: string;
  children: any;
  isOpen: boolean;
  isPreview?: boolean;
  label: string;
}
const AccordionItem: FC<AccordionItemProps> = (props) => {
  const { appendLabel, isOpen, isPreview, label, children } = props;
  const [isItemOpen, setItemOpen] = useState(isOpen);

  const labelClickHandler = () => {
    setItemOpen(!isItemOpen);
  };

  return (
    <div
      className={cx(css['accordion-item'], { [css.open]: isItemOpen, [css.preview]: isPreview })}>
      <label
        className={cx(css['item-label'], { [css.open]: isItemOpen })}
        onClick={labelClickHandler}>
        {label}
      </label>
      <div
        className={cx(css['item-content'], { [css.open]: isItemOpen, [css.preview]: isPreview })}>
        {children}
      </div>
      {isPreview && (
        <div className={cx(css['item-collapse-btn'])} onClick={() => setItemOpen(!isItemOpen)}>
          {appendLabel}
          <picture className={css['item-collapse-btn-icon']}>
            <svg>
              <use
                xlinkHref={`${icons}#${
                  isPreview && isItemOpen ? 'collapse-arrow-up' : 'collapse-arrow-down'
                }`}
              />
            </svg>
          </picture>
        </div>
      )}
    </div>
  );
};

export { AccordionItem };
