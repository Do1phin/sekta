export interface ICheckbox {
  checked: boolean;
  disabled?: boolean;
  label: string;
  onChange: () => void;
  value: string;
}
