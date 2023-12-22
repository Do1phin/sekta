import React, { FC, ReactNode } from 'react';

import css from './Accordion.module.scss';

interface IAccordionProps {
  children: ReactNode;
  isExpandAtOnce: boolean;
}

const Accordion: FC<IAccordionProps> = (props) => {
  const { children } = props;

  return <div className={css['accordion-wrapper']}>{children}</div>;
};

export { Accordion };
export type { IAccordionProps };
