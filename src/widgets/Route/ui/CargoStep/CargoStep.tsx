import type { ICargoSettingsData } from '../../types/types';
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import css from './CargoStep.module.scss';
import { Input, Select } from '../../../../shared/ui';
import { InputGroup } from '../../../../shared/ui/Input/InputGroup';
import { cargoTypes } from '../../lib/cargoTypes';
import { StepButtons } from '../CargoSettings/StepButtons';

interface ICargoStepProps {
  formData: ICargoSettingsData;
  onChangeStep: (step: number) => void;
  setFormData: Dispatch<SetStateAction<ICargoSettingsData>>;
  step: number;
}

const CargoStep: FC<ICargoStepProps> = (props) => {
  const { formData, setFormData, step, onChangeStep } = props;

  const { t } = useTranslation();

  const changeFormData = (key: keyof ICargoSettingsData, eventValue: string | number) => {
    console.log('__', eventValue);

    setFormData({
      ...formData,
      [key]: eventValue,
    });
  };

  useEffect(() => {
    console.log('formData', formData);
  }, [formData]);

  return (
    <div className={css['cargo-step']}>
      <div className={css.form}>
        <Select
          list={cargoTypes}
          onSearchValue={() => alert('#')}
          selectedValue={formData.cargoType}
          onSetSelectedValue={() => changeFormData('cargoType', 1)}
          label={t('component.cargo-settings.cargo-type-select.title')}
        />
        <Select
          list={cargoTypes}
          onSearchValue={() => alert('#')}
          onSetSelectedValue={() => alert('#')}
          label={'Вид груза'}
        />
        <InputGroup label={t('component.cargo-settings.dimensions-group.title')}>
          <Input
            type={'number'}
            onBlur={() => alert('#')}
            onChange={(event) => changeFormData('dimensionsLength', event.currentTarget.value)}
            placeholder={t('component.cargo-settings.dimensions-group.length-placeholder')}
          />
          <Input
            type={'number'}
            onBlur={() => alert('#')}
            onChange={(event) => changeFormData('dimensionsWidth', event.currentTarget.value)}
            placeholder={t('component.cargo-settings.dimensions-group.width-placeholder')}
          />
          <Input
            type={'number'}
            onBlur={() => alert('#')}
            onChange={(event) => changeFormData('dimensionsHeight', event.currentTarget.value)}
            placeholder={t('component.cargo-settings.dimensions-group.height-placeholder')}
          />
        </InputGroup>
        <InputGroup label={t('component.cargo-settings.volume-group.title')}>
          <Input
            type={'number'}
            onBlur={() => alert('#')}
            onChange={(event) => changeFormData('volumeMin', event.currentTarget.value)}
            placeholder={t('component.cargo-settings.volume-group.from-placeholder')}
          />
          <Input
            type={'number'}
            onBlur={() => alert('#')}
            onChange={(event) => changeFormData('volumeMax', event.currentTarget.value)}
            placeholder={t('component.cargo-settings.volume-group.to-placeholder')}
          />
        </InputGroup>

        <StepButtons step={step} onChangeStep={onChangeStep} />
      </div>
    </div>
  );
};

export { CargoStep };
