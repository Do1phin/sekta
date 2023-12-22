import React, { FC } from 'react';

import css from './CreateRoute.module.scss';
import { Route } from '../../widgets/Route/ui/Route/Route';

const CreateRoutePage: FC = () => {
  return (
    <div className={css['create-route-page']}>
      <Route />
    </div>
  );
};

export { CreateRoutePage };
