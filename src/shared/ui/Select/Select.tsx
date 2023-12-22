import cx from 'classnames';
import { DefaultTFuncReturn } from 'i18next';
import React, { FC, useState } from 'react';

import { SelectDescription, SelectHeader, SelectItem, SelectSearch } from './index';
import css from './Select.module.scss';
import { ISelectItemContent, ISelectProps } from './Select.types';

const Select: FC<ISelectProps> = (props) => {
  const {
    label = null,
    list = null,
    isOpen = false,
    isSearch = false,
    isIcon = false,
    isFetching,
    onSetSelectedValue,
    onSearchValue,
    placeholder = null,
    high = false,
    selectedValue = null,
  } = props;

  const [isSelectOpen, setIsSelectOpen] = useState(isOpen);

  let isSameDescription = false;
  let prevDescription: DefaultTFuncReturn | undefined;

  const itemClickHandler = (item: ISelectItemContent) => {
    onSetSelectedValue(item);
    setIsSelectOpen(() => !isSelectOpen);
  };

  return (
    <div className={cx(css.select, { [css.open]: isSelectOpen, [css.high]: high })}>
      {label && <label className={css.label}>{label}</label>}

      <SelectHeader
        isIcon={isIcon}
        isSelectOpen={isSelectOpen}
        selectedValue={selectedValue}
        setIsSelectOpen={setIsSelectOpen}
        placeholder={placeholder}
        onSetSelectedValue={onSetSelectedValue}
      />

      {isSelectOpen && (
        <div className={css.content}>
          {isSearch && (
            <SelectSearch
              isIcon={isIcon}
              isFetching={isFetching}
              onSearchValue={onSearchValue}
              list={list}
              // ref={ref}
            />
          )}

          {list?.length ? (
            <div className={cx(css.list, list.length && css['list-visible'])}>
              {list?.map((item, index) => {
                console.log('list.map((item ', item);

                if (prevDescription) {
                  isSameDescription = prevDescription === item.description;
                  // @ts-ignore
                  prevDescription = item.description;
                }

                if (!prevDescription) {
                  console.log('setPrevDescription(item.description);', item.description);
                  // @ts-ignor
                  prevDescription = item.description;
                }

                return (
                  <>
                    {item.description && !isSameDescription && (
                      <SelectDescription
                        description={item.description}
                        descriptionIcon={item.description_icon}
                      />
                    )}
                    <SelectItem
                      classes={cx(css['select-item'])}
                      key={item.subtitle}
                      icon={isIcon && item.icon ? item.icon : ''}
                      index={index}
                      onClick={() => itemClickHandler(item)}
                      selectedValue={selectedValue}
                      item={item}
                    />
                  </>
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export { Select };
