import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute, ReactNode } from 'react';

import { StyleTypes } from '../../types/componentTypes';

export interface IInputProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  helper?: string;
  icon?: string;
  label?: string;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: StyleTypes;
  type?: HTMLInputTypeAttribute;
  value?: string;
}
