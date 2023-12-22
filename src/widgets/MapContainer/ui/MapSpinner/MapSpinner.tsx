import React, { FC } from 'react';

import css from './MapSpinner.module.scss';

const MapSpinner: FC = () => {
  return (
    <div className={css.spinner}>
      <span className={css.loader}></span>
    </div>
  );
};

export { MapSpinner };
