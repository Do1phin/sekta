import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import css from './MainPage.module.scss';

const MainPage: FC = () => {
  return (
    <div className={css['main-page']}>
      <Link to={'/login'}>SignIn</Link>
      <Link to={'/register'}>SignUp</Link>
    </div>
  );
};

export { MainPage };
