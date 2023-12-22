import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import css from './CargoSettings.module.scss';
import { Button } from '../../../../shared/ui';

interface IStepButtons {
  onChangeStep: (step: number) => void;
  saveCargo?: () => void;
  step: number;
}

const StepButtons: FC<IStepButtons> = (props) => {
  const { step, onChangeStep, saveCargo } = props;

  const { t } = useTranslation();

  return (
    <div className={css['step-buttons']}>
      {step !== 0 ? (
        <Button
          type={'secondary'}
          onClick={() => onChangeStep(step - 1)}
          text={t('component.cargo-settings.buttons-group.prev')}
        />
      ) : null}
      {step === 2 && saveCargo ? (
        <Button
          style={'success'}
          onClick={saveCargo}
          text={t('component.cargo-settings.buttons-group.save')}
        />
      ) : (
        <Button
          onClick={() => onChangeStep(step + 1)}
          text={t('component.cargo-settings.buttons-group.next')}
        />
      )}
    </div>
  );
};

export { StepButtons };
