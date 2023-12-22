import React, { Dispatch, FC, SetStateAction } from 'react';

import css from './FinanceStep.module.scss';
import { Select } from '../../../../shared/ui';
import { cargoTypes } from '../../lib/cargoTypes';
import { ICargoSettingsData } from '../../types/types';
import { StepButtons } from '../CargoSettings/StepButtons';

interface IFinanceStepProps {
  formData: ICargoSettingsData;
  onChangeStep: (step: number) => void;
  setFormData: Dispatch<SetStateAction<ICargoSettingsData>>;
  step: number;
}

const FinanceStep: FC<IFinanceStepProps> = (props) => {
  const { formData, step, onChangeStep } = props;

  const saveCargo = () => {
    console.log('FORM_DATE:', formData);
    onChangeStep(step + 1);
  };

  return (
    <div className={css['finance-step']}>
      <div className={css.form}>
        <Select
          list={cargoTypes}
          onSearchValue={() => alert('#')}
          onSetSelectedValue={() => alert('#')}
          label={'Вид груза'}
        />

        <StepButtons step={step} onChangeStep={onChangeStep} saveCargo={saveCargo} />
      </div>
    </div>
  );
};

export { FinanceStep };
