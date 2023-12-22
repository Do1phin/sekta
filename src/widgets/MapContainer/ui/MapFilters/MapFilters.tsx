import type { CountryCodeType, PlaceNameType } from '../../../../features/find-address/api/types';
import cx from 'classnames';
import { DefaultTFuncReturn } from 'i18next';
import React, { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import css from './MapFilters.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import {
  changePermittedAmenity,
  changePermittedCountry,
  changePermittedPlace,
} from '../../../../app/store/routeSlice';
import {
  selectPermittedAmenities,
  selectPermittedCountries,
  selectPermittedPlaces,
} from '../../../../app/store/selectors/selectors';
import {
  selectCountryNameByCountryCode,
  selectFlagByCountryCode,
} from '../../../../features/find-address/helpers/converting.helper';
import icon from '../../../../shared/icons/settings.svg';
import { Accordion, Checkbox } from '../../../../shared/ui';
import { AccordionItem } from '../../../../shared/ui/Accordion/AccordionItem';

const MapFilters: FC = () => {
  const [isFiltersShow, setIsFiltersShow] = useState(false);
  const isScrollingFilters = false;

  const permittedAmenities = useAppSelector(selectPermittedAmenities);
  const permittedCountries = useAppSelector(selectPermittedCountries);
  const permittedPlaces = useAppSelector(selectPermittedPlaces);

  const filterRef = useRef(null);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onMouseEnterHandler = () => {
    setIsFiltersShow(true);
  };

  const onMouseLeaveHandler = () => {
    setIsFiltersShow(false);
  };

  const convertPlaceValueToText = (place: string): DefaultTFuncReturn | undefined => {
    return t(`page.map.places.${place}`);
  };

  const convertAmenityValueToText = (amenity: string): DefaultTFuncReturn | undefined => {
    return t(`page.map.amenities.${amenity}`);
  };

  const changeCheckedPlaceValue = (place: PlaceNameType, checkedValue: boolean) => {
    dispatch(changePermittedPlace({ placeName: place, placeValue: checkedValue }));
  };

  const changeCheckedAmenityValue = (amenity: any, checkedValue: boolean) => {
    dispatch(changePermittedAmenity({ amenityName: amenity, amenityValue: checkedValue }));
  };

  const changeCheckedCountryValue = (country_code: CountryCodeType, checkedValue: boolean) => {
    dispatch(
      changePermittedCountry({
        countryCode: country_code,
        countryValue: checkedValue,
      }),
    );
  };

  // const checkHeightFilterContent = (currentHeightOfContent: number) => {
  //   const MAX_FILTER_DIV_HEIGHT = 600;
  //   console.log('checkHeightFilterContent', currentHeightOfContent, MAX_FILTER_DIV_HEIGHT);
  //
  //   // @ts-ignore
  //   filterRef && [...filterRef.current.children].map(console.log);
  //
  //   return currentHeightOfContent > MAX_FILTER_DIV_HEIGHT;
  // };

  // useEffect(() => {
  //   let sum = 0;
  //
  //   isFiltersShow &&
  //     // @ts-ignore
  //     [...filterRef.current.children].map((el) => {
  //       sum += el.clientHeight;
  //     });
  // }, [isFiltersShow]);

  return (
    <div
      className={cx(css.filters, {
        [css.show]: isFiltersShow,
        [css.scroll]: isScrollingFilters,
      })}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      ref={filterRef}>
      {!isFiltersShow && <img src={icon} className={css.icon} alt='Settings icon' />}
      {isFiltersShow && (
        <div className={css['country-selectors']}>
          <Accordion isExpandAtOnce={true}>
            <AccordionItem
              isOpen={false}
              isPreview={true}
              label={t('page.map.text.countries')}
              appendLabel={t('page.map.text.all-countries')}>
              {Object.entries(permittedCountries)
                .sort()
                .map(([countryCode, isPermittedCountry]) => (
                  <Checkbox
                    checked={isPermittedCountry}
                    key={countryCode}
                    // @ts-ignore
                    icon={selectFlagByCountryCode(countryCode)}
                    // @ts-ignore
                    label={selectCountryNameByCountryCode(countryCode)}
                    // @ts-ignore
                    onChange={() => changeCheckedCountryValue(countryCode, !isPermittedCountry)}
                    value={countryCode}
                  />
                ))}
            </AccordionItem>

            <AccordionItem
              isOpen={false}
              isPreview={false}
              label={t('page.map.text.places')}
              appendLabel={t('page.map.text.all-places')}>
              {Object.entries(permittedPlaces)
                .sort()
                .map(([placeName, isPermittedPlace]) => (
                  <Checkbox
                    checked={isPermittedPlace}
                    key={placeName}
                    label={convertPlaceValueToText(placeName)}
                    // @ts-ignore
                    onChange={() => changeCheckedPlaceValue(placeName, !isPermittedPlace)}
                    value={placeName}
                  />
                ))}
            </AccordionItem>

            <AccordionItem
              isOpen={false}
              isPreview={false}
              label={t('page.map.text.amenities')}
              appendLabel={t('page.map.text.all-amenities')}>
              {Object.entries(permittedAmenities)
                .sort()
                .map(([amenityName, isPermittedAmenity]) => (
                  <Checkbox
                    checked={isPermittedAmenity}
                    key={amenityName}
                    label={convertAmenityValueToText(amenityName)}
                    onChange={() => changeCheckedAmenityValue(amenityName, !isPermittedAmenity)}
                    value={amenityName}
                  />
                ))}
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export { MapFilters };
