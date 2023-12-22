import { Feature } from 'geojson';
import React, { FC } from 'react';

import css from './CustomsService.module.scss';

interface ICustomsServiceProps {
  waypoint: Feature;
}

const CustomsService: FC<ICustomsServiceProps> = () => {
  return <div className={css.customs}>customs info</div>;
};

const wrappingCustomService = (args: ICustomsServiceProps) => <CustomsService {...args} />;

export { CustomsService, wrappingCustomService };
