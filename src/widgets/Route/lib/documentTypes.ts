import i18next from '../../../../i18n';
import { ISelectItemContent } from '../../../shared/ui/Select/Select.types';

const documentTypes: ISelectItemContent[] = [
  {
    title: i18next.t('component.cargo-settings.documents-select.cmr-item'),
    value: 0,
  },
  {
    title: i18next.t('component.cargo-settings.documents-select.tir-item'),
    value: 1,
  },
  {
    title: i18next.t('component.cargo-settings.documents-select.t1-item'),
    value: 2,
  },
  {
    title: i18next.t('component.cargo-settings.documents-select.customs-control-item'),
    value: 3,
  },
];

export { documentTypes };
