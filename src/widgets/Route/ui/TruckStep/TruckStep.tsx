import React, { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '../../../../shared/ui';
import { documentTypes } from '../../lib/documentTypes';
import { ICargoSettingsData } from '../../types/types';
import { StepButtons } from '../CargoSettings/StepButtons';
import css from '../TruckStep/TruckStep.module.scss';

interface ITruckStepProps {
  formData: ICargoSettingsData;
  onChangeStep: (step: number) => void;
  setFormData: Dispatch<SetStateAction<ICargoSettingsData>>;
  step: number;
}

const TruckStep: FC<ITruckStepProps> = (props) => {
  const { step, onChangeStep } = props;

  const { t } = useTranslation();

  return (
    <div className={css['truck-step']}>
      <div className={css.form}>
        <Select
          list={documentTypes}
          onSearchValue={() => alert('#')}
          onSetSelectedValue={() => alert('#')}
          label={t('component.cargo-settings.truck-select.title')}
        />
        <Select
          list={documentTypes}
          onSearchValue={() => alert('#')}
          onSetSelectedValue={() => alert('#')}
          label={'Дополнительные требования'}
        />
        <Select
          list={documentTypes}
          onSearchValue={() => alert('#')}
          onSetSelectedValue={() => alert('#')}
          label={'Тип загрузки'}
        />
        <Select
          list={documentTypes}
          onSearchValue={() => alert('#')}
          onSetSelectedValue={() => alert('#')}
          label={t('component.cargo-settings.documents-select.title')}
        />

        <StepButtons step={step} onChangeStep={onChangeStep} />
      </div>
    </div>
  );
};

export { TruckStep };
