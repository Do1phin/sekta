import cx from 'classnames';
import React, { FC, ReactNode } from 'react';

import css from './Layer.module.scss';

interface ILayerProps {
  children: ReactNode;
  classes?: string;
  description?: string;
  label?: string;
}

const Layer: FC<ILayerProps> = (props) => {
  const { children, classes = '', label, description } = props;

  return (
    <section className={cx(css.layer, css[classes])}>
      {label && (
        <div className={css.header}>
          {label && <label className={css.label}>{label}</label>}
          {description && <p className={css.description}>{description.toLowerCase()}</p>}
        </div>
      )}
      <div className={css.content}>{children}</div>
    </section>
  );
};

export { Layer };
