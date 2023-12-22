import cx from 'classnames';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import css from './CargoSettings.module.scss';
import arrowIcon from '../../../../shared/icons/arrow-right.svg';
import financeIcon from '../../../../shared/images/money.png';
import cargoIcon from '../../../../shared/images/palette.png';
import truckIcon from '../../../../shared/images/truck.png';
import { ICargoSettingsData } from '../../types/types';
import { CargoStep } from '../CargoStep/CargoStep';
import { Contacts } from '../Contacts/Contacts';
import { FinalStep } from '../FinalStep/FinalStep';
import { FinanceStep } from '../FinanceStep/FinanceStep';
import { TruckStep } from '../TruckStep/TruckStep';

export const CargoSettings = () => {
  const initialFormData: ICargoSettingsData = {
    cargoType: {
      title: 'Трубы',
      value: 3,
    },
    dimensionsHeight: 3,
    dimensionsLength: 1,
    dimensionsWidth: 2,
    volumeMax: 5,
    volumeMin: 4,
  };

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<ICargoSettingsData>(initialFormData);

  const { t } = useTranslation();

  return (
    <section className={css['cargo-settings-wrapper']}>
      <div className={cx(css.header, { [css.hide]: step === 3 })}>
        <div className={cx(css.step, { [css.inactive]: step !== 0 })}>
          <label className={css.label}>{t('component.cargo-settings.cargo-parameters')}</label>
          <picture>
            <img src={cargoIcon} alt='Cargo settings icon' />
          </picture>
        </div>

        <picture>
          <img className={css.arrow} src={arrowIcon} alt='Arrow icon' />
        </picture>

        <div className={cx(css.step, { [css.inactive]: step !== 1 })}>
          <label className={css.label}>
            {t('component.cargo-settings.transport-requirements')}
          </label>
          <picture>
            <img src={truckIcon} alt='Truck settings icon' />
          </picture>
        </div>

        <picture>
          <img className={css.arrow} src={arrowIcon} alt='Arrow icon' />
        </picture>

        <div className={cx(css.step, { [css.inactive]: step !== 2 })}>
          <label className={css.label}>{t('component.cargo-settings.financial-part')}</label>
          <picture>
            <img src={financeIcon} alt='Finance settings icon' />
          </picture>
        </div>
      </div>

      <div className={css.content}>
        {step === 0 && (
          <CargoStep
            step={step}
            onChangeStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 1 && (
          <TruckStep
            step={step}
            onChangeStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 2 && (
          <FinanceStep
            step={step}
            onChangeStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 3 && <FinalStep formData={formData} onChangeStep={setStep} />}

        <Contacts />
      </div>
    </section>
  );
};
