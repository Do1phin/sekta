import { DefaultTFuncReturn } from 'i18next';

type ISelectItemContent = {
  description?: string | DefaultTFuncReturn;
  description_icon?: string;
  icon?: string;
  subtitle?: string | DefaultTFuncReturn;
  title: string | DefaultTFuncReturn;
  value: number;
};

interface ISelectItemProps {
  classes?: string;
  icon?: string;
  index: number;
  item: ISelectItemContent;
  onClick: () => void;
  selectedValue: ISelectItemContent | null;
}

interface ISelectProps {
  helper?: string | DefaultTFuncReturn;
  high?: boolean;
  isFetching?: boolean;
  isIcon?: boolean;
  isOpen?: boolean;
  isSearch?: boolean;
  label?: string | DefaultTFuncReturn;
  list?: ISelectItemContent[];
  onSearchValue: () => void;
  onSetSelectedValue: (data: ISelectItemContent | null) => void;
  placeholder?: string | DefaultTFuncReturn;
  selectedValue?: ISelectItemContent;
  value?: string;
}

export { ISelectProps, ISelectItemProps, ISelectItemContent };
