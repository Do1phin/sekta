import { IconPositionTypes, SizeTypes, StyleTypes, TypeTypes } from '../../types/componentTypes';

export interface IButtonProps {
  disabled?: boolean;
  icon?: string;
  iconPosition?: IconPositionTypes;
  loader?: boolean;
  onClick: () => void;
  size?: SizeTypes;
  style?: StyleTypes;
  text?: string;
  type?: TypeTypes;
}
