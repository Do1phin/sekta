import cx from 'classnames';
import React, { FC, MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

import css from './Select.module.scss';
import { ISelectItemContent } from './Select.types';
import icons from '../../icons/icons.svg';

interface ISelectHeaderProps {
  isIcon: boolean;
  isSelectOpen: boolean;
  onSetSelectedValue: any;
  placeholder: string | null;
  selectedValue: ISelectItemContent | null;
  setIsSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectHeader: FC<ISelectHeaderProps> = (props) => {
  const { isIcon, isSelectOpen, selectedValue, setIsSelectOpen, onSetSelectedValue, placeholder } =
    props;

  const { t } = useTranslation();

  const clearPointClickHandler: MouseEventHandler<HTMLPictureElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onSetSelectedValue(null);
  };

  const headerClickHandler: MouseEventHandler<HTMLDivElement> = () => {
    setIsSelectOpen(() => !isSelectOpen);
  };

  const createHeaderTitle = () => {
    const name: any = [];
    if (selectedValue?.description) {
      name.push(selectedValue?.description);
    }
    if (selectedValue?.title) {
      name.push(selectedValue?.title);
    }

    return name.join(', ');
  };

  const createHeaderText = () => {
    const name: any = [];
    if (selectedValue?.description) {
      name.push(selectedValue?.description);
    }
    if (selectedValue?.title) {
      name.push(selectedValue?.title);
    }
    if (selectedValue?.subtitle) {
      name.push(selectedValue?.subtitle);
    }

    return name.join(', ');
  };

  return (
    <div className={css.header} onClick={headerClickHandler} tabIndex={0}>
      {isIcon && selectedValue && 'icon' in selectedValue && (
        <picture
          className={cx(css['header-icon'])}
          title={t(`page.map.places.${selectedValue.icon}`) || 'Icon'}>
          <svg>
            <use xlinkHref={`${icons}#${selectedValue?.icon ? selectedValue?.icon : 'alien'}`} />
          </svg>
        </picture>
      )}
      <div className={css['header-text']} title={createHeaderText()}>
        <span className={css['header-title']}>
          {selectedValue && 'title' in selectedValue
            ? createHeaderTitle()
            : placeholder || t('component.select.placeholder')}
        </span>
        {selectedValue && 'subtitle' in selectedValue && (
          <span className={css['header-subtitle']}>{selectedValue.subtitle}</span>
        )}
      </div>

      {selectedValue && 'value' in selectedValue && (
        <picture
          className={cx(css['header-clear'])}
          title={t('component.select.clear-btn-title') || 'Clear'}
          onClick={clearPointClickHandler}>
          <svg>
            <use xlinkHref={`${icons}#delete`} />
          </svg>
        </picture>
      )}

      <picture className={css['header-chevron']}>
        <svg>
          <use xlinkHref={`${icons}#${isSelectOpen ? 'arrow-up' : 'arrow-down'}`} />
        </svg>
      </picture>
    </div>
  );
};

export { SelectHeader };
