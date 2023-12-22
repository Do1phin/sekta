import React, { FC } from 'react';

import css from './Select.module.scss';

interface ISelectDescriptionProps {
  description: string;
  descriptionIcon?: string;
}

const SelectDescription: FC<ISelectDescriptionProps> = (props) => {
  const { descriptionIcon, description } = props;

  return (
    <div className={css.description}>
      {descriptionIcon && (
        <picture className={css.icon}>
          <img src={descriptionIcon} alt='description icon' />
        </picture>
      )}
      <span className={css.label}>{description}</span>
    </div>
  );
};

export { SelectDescription };
