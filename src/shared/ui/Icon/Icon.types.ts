import { ExtendSizeTypes, ExtendStyleTypes } from '../../types/componentTypes';

export interface IIconProps {
  icon: string;
  onClick?: () => void;
  size?: ExtendSizeTypes;
  style?: ExtendStyleTypes;
}
