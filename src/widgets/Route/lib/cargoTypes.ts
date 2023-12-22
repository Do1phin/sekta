import i18next from '../../../../i18n';
import { ISelectItemContent } from '../../../shared/ui/Select/Select.types';

const cargoTypes: ISelectItemContent[] = [
  {
    title: i18next.t('component.cargo-settings.cargo-type-select.polymers-item'),
    value: 0,
  },
  {
    title: i18next.t('component.cargo-settings.cargo-type-select.food-item'),
    value: 1,
  },
  {
    title: i18next.t('component.cargo-settings.cargo-type-select.cereals-item'),
    value: 2,
  },
  {
    title: i18next.t('component.cargo-settings.cargo-type-select.pipes-item'),
    value: 3,
  },
  {
    title: i18next.t('component.cargo-settings.cargo-type-select.appliances-item'),
    value: 4,
  },
  {
    title: i18next.t('component.cargo-settings.cargo-type-select.details-item'),
    value: 5,
  },
];

export { cargoTypes };
