import { ExtendStyleTypes, IconPositionTypes, SizeTypes } from '../../types/componentTypes';

export interface ITagProps {
  disabled?: boolean;
  icon?: string;
  iconPosition?: IconPositionTypes;
  size?: SizeTypes;
  style?: ExtendStyleTypes;
  text: string;
}
