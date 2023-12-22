import React, { FC } from 'react';

import css from './FinalStep.module.scss';
import { Button } from '../../../../shared/ui';
import { ICargoSettingsData } from '../../types/types';

interface IFinalStepProps {
  formData: ICargoSettingsData;
  onChangeStep: (step: number) => void;
}

const FinalStep: FC<IFinalStepProps> = (props) => {
  const { formData, onChangeStep } = props;

  return (
    <div className={css['final-step']}>
      <div className={css.content}>
        <div>
          <span>Тип автомобиля:</span>
          <p>{formData.cargoType.title}</p>
        </div>
      </div>
      <div className={css.buttons}>
        <Button onClick={() => onChangeStep(0)} text={'Edit'} style={'primary'} />
        <Button onClick={() => alert('#')} text={'Delete'} style={'danger'} type={'secondary'} />
      </div>
    </div>
  );
};

export { FinalStep };
