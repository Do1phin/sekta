import { StyleTypes } from '../../types/componentTypes';

export interface INotificationProps {
  icon?: string;
  isOpen?: boolean;
  label: string;
  message: string;
  onCloseClick: () => void;
  style: StyleTypes;
}
