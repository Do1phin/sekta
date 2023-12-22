import { ISelectItemContent } from '../../../shared/ui/Select/Select.types';

interface ICargoSettingsData {
  cargoType: ISelectItemContent;
  dimensionsHeight: number;
  dimensionsLength: number;
  dimensionsWidth: number;
  volumeMax: number;
  volumeMin: number;
}

export { ICargoSettingsData };
