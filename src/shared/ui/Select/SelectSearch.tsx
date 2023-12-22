import cx from 'classnames';
import React, { ChangeEventHandler, FC } from 'react';
import { useTranslation } from 'react-i18next';

import css from './Select.module.scss';
import { ISelectItemContent } from './Select.types';
import icons from '../../icons/icons.svg';

interface ISelectSearchProps {
  isFetching?: boolean;
  isIcon: boolean;
  list: ISelectItemContent[] | null;
  onSearchValue: any;
  ref?: any;
}

const SelectSearch: FC<ISelectSearchProps> = (props) => {
  const { isIcon, isFetching, onSearchValue, ref, list } = props;

  const { t } = useTranslation();

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onSearchValue(() => event.target.value);
  };

  return (
    <div className={css.search}>
      <div className={css['search-field']}>
        {isIcon && (
          <picture className={cx(css['search-icon'])}>
            <svg>
              <use xlinkHref={`${icons}#search`} />
            </svg>
          </picture>
        )}
        <input
          type='text'
          onChange={inputChangeHandler}
          placeholder={t('component.select.search') || 'Search'}
          ref={ref}
        />
      </div>

      {isFetching ? <span className={css.helper}>{t('component.select.loading')}</span> : null}
      {!isFetching && list?.length ? (
        <span className={css.helper}>{t('component.select.found', { count: list?.length })}</span>
      ) : null}
      {!list?.length && !isFetching ? (
        <span className={css.helper}>{t('component.select.empty')}</span>
      ) : null}
    </div>
  );
};

export { SelectSearch };
