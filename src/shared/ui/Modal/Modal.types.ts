import { StyleTypes } from '../../types/componentTypes';

export interface IModalProps {
  icon?: string;
  isOpen?: boolean;
  label: string;
  message: string;
  onCancelClick: () => void;
  onCloseClick: () => void;
  onOkClick: () => void;
  style: StyleTypes;
}
